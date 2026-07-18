from __future__ import annotations

import json
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib.parse import unquote
from urllib.request import urlopen


ROOT = Path("/Users/kwr14/play/Tmua-aid")
PAPERS_MD = ROOT / "resources" / "maths" / "papers.md"
MARKS_TXT = ROOT / "marks.txt"
OUT_ROOT = ROOT / "resources" / "maths" / "tmua"


@dataclass
class PaperRecord:
    label: str
    slug: str
    paper_number: int
    paper_url: str
    worked_url: str
    answer_key_url: str


def slugify(label: str) -> str:
    slug = label.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    return slug.strip("-")


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def parse_papers_md(text: str) -> list[tuple[str, str, str]]:
    rows: list[tuple[str, str, str]] = []
    for line in text.splitlines():
        if not line.startswith("|"):
            continue
        if "Paper 1" in line and "Paper 2" in line and "Year" in line:
            continue
        if "---" in line:
            continue
        parts = [part.strip() for part in line.strip("|").split("|")]
        if len(parts) != 3:
            continue
        label = parts[0]
        paper1_match = re.search(r"\((https://[^)]+)\)", parts[1])
        paper2_match = re.search(r"\((https://[^)]+)\)", parts[2])
        if not paper1_match or not paper2_match:
            continue
        rows.append((label, paper1_match.group(1), paper2_match.group(1)))
    return rows


def parse_marks_txt(text: str) -> dict[tuple[str, int], dict[str, str]]:
    records: dict[tuple[str, int], dict[str, str]] = {}
    current_key: tuple[str, int] | None = None
    header_re = re.compile(r"^TMUA (.+?) Paper ([12])$")
    worked_re = re.compile(r"^\s*Worked Solutions:\s*(https://\S+)\s*$")
    answer_re = re.compile(r"^\s*Answer Key:\s*(https://\S+)\s*$")
    for raw_line in text.splitlines():
        line = raw_line.strip()
        header_match = header_re.match(line)
        if header_match:
            label = header_match.group(1)
            paper_number = int(header_match.group(2))
            current_key = (label, paper_number)
            records[current_key] = {}
            continue
        if current_key is None:
            continue
        worked_match = worked_re.match(raw_line)
        if worked_match:
            records[current_key]["worked_url"] = worked_match.group(1)
            continue
        answer_match = answer_re.match(raw_line)
        if answer_match:
            records[current_key]["answer_key_url"] = answer_match.group(1)
    return records


def build_records() -> list[PaperRecord]:
    paper_rows = parse_papers_md(read_text(PAPERS_MD))
    marks = parse_marks_txt(read_text(MARKS_TXT))
    records: list[PaperRecord] = []
    for label, paper1_url, paper2_url in paper_rows:
        for paper_number, paper_url in ((1, paper1_url), (2, paper2_url)):
            key = (label, paper_number)
            meta = marks.get(key)
            if not meta:
                raise RuntimeError(f"Missing marks metadata for {label} Paper {paper_number}")
            records.append(
                PaperRecord(
                    label=label,
                    slug=slugify(label),
                    paper_number=paper_number,
                    paper_url=paper_url,
                    worked_url=meta["worked_url"],
                    answer_key_url=meta["answer_key_url"],
                )
            )
    return records


def url_filename(url: str) -> str:
    return Path(unquote(url.split("/")[-1])).name


def download(url: str, destination: Path) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists():
        return
    with urlopen(url) as response:
        destination.write_bytes(response.read())


def extract_pdf_text(pdf_path: Path, txt_path: Path) -> None:
    txt_path.parent.mkdir(parents=True, exist_ok=True)
    pdftotext = subprocess.run(
        ["pdftotext", "-layout", "-nopgbrk", str(pdf_path), str(txt_path)],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=False,
    )
    if pdftotext.returncode == 0 and txt_path.exists():
        return
    try:
        import fitz  # type: ignore
    except Exception as exc:  # pragma: no cover
        raise RuntimeError(f"Could not extract text from {pdf_path}") from exc
    doc = fitz.open(str(pdf_path))
    text = "\n".join(page.get_text() for page in doc)
    txt_path.write_text(text, encoding="utf-8")


def normalize_text(text: str) -> str:
    replacements = {
        "\u000c": "\n",
        "\u2212": "-",
        "\u2013": "-",
        "\u2014": "-",
        "\u00a0": " ",
        "\u00b0": " degrees",
        "\u03c0": "pi",
        "\u221e": "infinity",
        "\u221a": "sqrt",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = text.replace("\r", "\n")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def clean_solution_body(text: str) -> str:
    text = normalize_text(text)
    text = re.sub(r"(?mi)^version .*?$", "", text)
    text = re.sub(r"(?mi)^page \d+\s*$", "", text)
    text = re.sub(r"(?mi)^\d+\s*$", "", text)
    text = re.sub(r"(?mi)^©.*?$", "", text)
    text = re.sub(r"(?mi)^test of mathematics for university admission.*?$", "", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def split_solution_sections(solution_text: str) -> list[tuple[int, str]]:
    matches = list(re.finditer(r"(?m)^(?:\f)?Question (\d+)\s*(?:\.|$)", solution_text))
    if len(matches) >= 20:
        matches = matches[-20:]
    sections: list[tuple[int, str]] = []
    for index, match in enumerate(matches):
        number = int(match.group(1))
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(solution_text)
        body = clean_solution_body(solution_text[start:end])
        sections.append((number, body))
    return sections


def extract_answer_summary(text: str) -> str:
    pairs: list[str] = []
    for number, body in split_solution_sections(text):
        answer_match = re.search(r"(?:option|answer is)\s+([A-H])\b", body, re.IGNORECASE)
        if answer_match:
            pairs.append(f"{number}{answer_match.group(1)}")
    return " ".join(pairs)


def to_markdown_paragraphs(text: str) -> str:
    paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
    cleaned: list[str] = []
    for paragraph in paragraphs:
        lines = [line.strip() for line in paragraph.splitlines() if line.strip()]
        lines = [
            line
            for line in lines
            if not re.fullmatch(r"\d+", line)
            and not re.fullmatch(r"©.*", line)
            and not re.fullmatch(r"Version .*", line)
            and not re.fullmatch(r"[.\s]+", line)
            and line not in {"•", "-", "sqrt"}
        ]
        if not lines:
            continue
        combined = " ".join(lines)
        combined = re.sub(r"^\s*•\s*", "", combined)
        combined = re.sub(r"(\w)-\s+(\w)", r"\1\2", combined)
        combined = re.sub(r"\s{2,}", " ", combined).strip()
        if re.fullmatch(r"[.\s]+", combined):
            continue
        if re.fullmatch(r"\d+", combined):
            continue
        cleaned.append(f"- {combined}")
    return "\n".join(cleaned) or "- Official worked-solution text extracted successfully."


def build_worked_markdown(record: PaperRecord, solution_text: str) -> str:
    sections = split_solution_sections(solution_text)
    summary = extract_answer_summary(solution_text)
    title = f"TMUA {record.label} Paper {record.paper_number} Worked Notes"
    lines = [
        f"# {title}",
        "",
        "Sources:",
        f"- Paper PDF: <{record.paper_url}>",
        f"- Official worked solutions PDF: <{record.worked_url}>",
        f"- Answer key PDF: <{record.answer_key_url}>",
        "",
        "## Notes",
        "- These notes are generated from the official worked solutions and cleaned into markdown.",
        "- Each section keeps the official answer option and a cleaned version of the official reasoning.",
        "",
    ]
    for number, body in sections:
        option_match = re.search(r"(?:option|answer is)\s+([A-H])\b", body, re.IGNORECASE)
        lines.append(f"## Q{number}")
        if option_match:
            lines.append(f"Answer: `{option_match.group(1).upper()}`")
            lines.append("")
        lines.append("Work:")
        lines.append(to_markdown_paragraphs(body))
        lines.append("")
    lines.extend(["## Answer Summary", "", f"`{summary}`", ""])
    return "\n".join(lines)


def write_json(path: Path, data: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")


def build_index(records: Iterable[PaperRecord]) -> str:
    groups: dict[str, list[PaperRecord]] = {}
    for record in records:
        groups.setdefault(record.label, []).append(record)
    ordered_labels = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "Specimen", "Practice"]
    lines = [
        "# TMUA Library",
        "",
        "## Structure",
        "- `sources/papers/`: original paper PDFs",
        "- `sources/worked-solutions/`: official worked-solution PDFs",
        "- `sources/answer-keys/`: official answer-key PDFs",
        "- `text/papers/`: extracted paper text",
        "- `text/worked-solutions/`: extracted worked-solution text",
        "- `worked/`: cleaned markdown notes for each paper",
        "- `manifest.json`: machine-readable metadata for the full set",
        "",
        "## Papers",
        "",
    ]
    for label in ordered_labels:
        items = groups.get(label, [])
        if not items:
            continue
        lines.append(f"### {label}")
        for record in sorted(items, key=lambda item: item.paper_number):
            worked_path = f"worked/{record.slug}/paper-{record.paper_number}.md"
            lines.append(f"- [Paper {record.paper_number}]({worked_path})")
        lines.append("")
    return "\n".join(lines)


def main() -> int:
    records = build_records()
    manifest: list[dict[str, str | int]] = []
    for record in records:
        paper_pdf = OUT_ROOT / "sources" / "papers" / record.slug / f"paper-{record.paper_number}.pdf"
        worked_pdf = OUT_ROOT / "sources" / "worked-solutions" / record.slug / f"paper-{record.paper_number}.pdf"
        answer_pdf = OUT_ROOT / "sources" / "answer-keys" / record.slug / f"paper-{record.paper_number}.pdf"
        paper_txt = OUT_ROOT / "text" / "papers" / record.slug / f"paper-{record.paper_number}.txt"
        worked_txt = OUT_ROOT / "text" / "worked-solutions" / record.slug / f"paper-{record.paper_number}.txt"
        worked_md = OUT_ROOT / "worked" / record.slug / f"paper-{record.paper_number}.md"

        download(record.paper_url, paper_pdf)
        download(record.worked_url, worked_pdf)
        download(record.answer_key_url, answer_pdf)

        extract_pdf_text(paper_pdf, paper_txt)
        extract_pdf_text(worked_pdf, worked_txt)

        solution_text = read_text(worked_txt)
        worked_md.parent.mkdir(parents=True, exist_ok=True)
        worked_md.write_text(build_worked_markdown(record, solution_text), encoding="utf-8")

        manifest.append(
            {
                "label": record.label,
                "slug": record.slug,
                "paper_number": record.paper_number,
                "paper_pdf": str(paper_pdf.relative_to(OUT_ROOT)),
                "worked_pdf": str(worked_pdf.relative_to(OUT_ROOT)),
                "answer_key_pdf": str(answer_pdf.relative_to(OUT_ROOT)),
                "paper_text": str(paper_txt.relative_to(OUT_ROOT)),
                "worked_text": str(worked_txt.relative_to(OUT_ROOT)),
                "worked_markdown": str(worked_md.relative_to(OUT_ROOT)),
                "paper_url": record.paper_url,
                "worked_url": record.worked_url,
                "answer_key_url": record.answer_key_url,
            }
        )

    write_json(OUT_ROOT / "manifest.json", manifest)
    (OUT_ROOT / "README.md").write_text(build_index(records), encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main())
