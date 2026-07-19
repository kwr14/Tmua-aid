const data = window.tmuaSiteData;
const PREVIEW_BASE = "https://html-preview.github.io/";
const SITE_RAW_BASE = "https://raw.githubusercontent.com/kwr14/Tmua-aid/main/resources/maths/tmua/site/";
const REPO_BLOB_BASE = "https://github.com/kwr14/Tmua-aid/blob/main/resources/maths/tmua/";
const REPO_RAW_BASE = "https://raw.githubusercontent.com/kwr14/Tmua-aid/main/resources/maths/tmua/";
const SITE_PAGE_PATTERN = /^(?:\.\/)?(?:index|library|reader|question-map|papers)\.html(?:[?#].*)?$/;

function $(selector, scope = document) {
  return scope.querySelector(selector);
}

function $all(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (html !== undefined) {
    node.innerHTML = html;
  }
  return node;
}

function parseRoute(route) {
  const [pathWithQuery, hash = ""] = route.split("#");
  const [path, query = ""] = pathWithQuery.split("?");
  return { path, query, hash };
}

function resolveSiteHref(route) {
  if (!route) {
    return route;
  }

  const { path, query, hash } = parseRoute(route);
  const routeParams = new URLSearchParams(query);
  const previewParams = new URLSearchParams();
  previewParams.set("url", `${SITE_RAW_BASE}${path}`);

  routeParams.forEach((value, key) => {
    previewParams.set(key, value);
  });

  const href = `${PREVIEW_BASE}?${previewParams.toString()}`;
  return hash ? `${href}#${hash}` : href;
}

function resolveRepoHref(path) {
  if (!path) {
    return path;
  }

  const cleanPath = path.replace(/^\.\.\//, "");
  if (cleanPath.endsWith(".md") || cleanPath.includes(".md#")) {
    return `${REPO_BLOB_BASE}${cleanPath}`;
  }

  return `${REPO_RAW_BASE}${cleanPath}`;
}

function getRouteParams() {
  const params = new URLSearchParams(window.location.search);
  params.delete("url");
  return params;
}

function getCurrentRoute() {
  const page = document.body.dataset.page;
  if (page === "home") {
    return "index.html";
  }
  if (page === "library") {
    const params = getRouteParams();
    const filter = params.get("filter");
    return filter ? `library.html?filter=${encodeURIComponent(filter)}` : "library.html";
  }
  if (page === "question-map") {
    return "question-map.html";
  }
  if (page === "papers") {
    return "papers.html";
  }
  if (page === "reader") {
    const params = getRouteParams();
    const note = params.get("note") || "conceptual-refresh";
    return `reader.html?note=${encodeURIComponent(note)}`;
  }
  return "index.html";
}

function resolveCurrentHashHref(hash) {
  const cleanHash = hash.startsWith("#") ? hash : `#${hash}`;
  return `${resolveSiteHref(getCurrentRoute())}${cleanHash}`;
}

function rewriteStaticSiteLinks() {
  $all("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
      return;
    }

    if (href.startsWith("#")) {
      link.href = resolveCurrentHashHref(href);
      return;
    }

    if (SITE_PAGE_PATTERN.test(href)) {
      link.href = resolveSiteHref(href);
      return;
    }

    if (href.startsWith("../")) {
      link.href = resolveRepoHref(href);
    }
  });
}

function setActiveNav() {
  const page = document.body.dataset.page === "reader" ? "library" : document.body.dataset.page;
  $all(".nav-links a").forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("is-active");
    }
  });
}

function renderTopbar() {
  const header = $("#topbar");
  if (!header) {
    return;
  }

  header.innerHTML = `
    <div class="topbar-inner">
      <a class="brand" href="${resolveSiteHref("index.html")}">
        <span class="brand-mark">T</span>
        <span class="brand-copy">
          <strong>${data.site.title}</strong>
          <span>${data.site.subtitle}</span>
        </span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a data-page="home" href="${resolveSiteHref("index.html")}">Home</a>
        <a data-page="library" href="${resolveSiteHref("library.html")}">Library</a>
        <a data-page="question-map" href="${resolveSiteHref("question-map.html")}">Question Map</a>
        <a data-page="papers" href="${resolveSiteHref("papers.html")}">Papers</a>
      </nav>
    </div>
  `;
}

function renderFooter() {
  const footer = $("#footer-note");
  if (!footer) {
    return;
  }

  footer.innerHTML = `
    <span>Built from the TMUA study pack already in this repository.</span>
    <span>All HTML navigation routes through html-preview.github.io.</span>
  `;
}

function renderHome() {
  const stats = $("#hero-stats");
  const pathways = $("#pathway-grid");
  const featured = $("#featured-grid");
  const topicPreview = $("#topic-preview");
  const papersPreview = $("#paper-preview");
  if (!stats || !pathways || !featured || !topicPreview || !papersPreview) {
    return;
  }

  stats.innerHTML = data.home.heroStats
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");

  pathways.innerHTML = data.home.pathways
    .map(
      (item) => `
        <a class="mini-card" href="${resolveSiteHref(item.href)}">
          <span class="kicker">Study mode</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </a>
      `
    )
    .join("");

  featured.innerHTML = data.resources
    .slice(0, 6)
    .map(resourceCard)
    .join("");

  topicPreview.innerHTML = data.topicMap
    .slice(0, 4)
    .map(topicCard)
    .join("");

  papersPreview.innerHTML = data.papers
    .slice(0, 6)
    .map(paperCard)
    .join("");
}

function resourceCard(resource) {
  const href = resource.readerHref ? resolveSiteHref(resource.readerHref) : resolveRepoHref(resource.source);
  const primaryLabel = resource.kind === "map" ? "Open interactive view" : "Read in atlas";
  return `
    <article class="resource-card">
      <div class="card-topline">
        <div>
          <span class="kicker">${resource.kind}</span>
          <h3 class="card-title">${resource.title}</h3>
        </div>
        <span class="pill">${resource.duration}</span>
      </div>
      <p class="card-description">${resource.description}</p>
      <div class="tag-list" style="margin-top:16px;">
        ${resource.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
      <div class="card-actions">
        <a class="button button-primary" href="${href}">${primaryLabel}</a>
        <a class="button" href="${resolveRepoHref(resource.source)}" target="_blank" rel="noopener noreferrer">Open markdown source</a>
      </div>
    </article>
  `;
}

function topicCard(topic) {
  return `
    <article class="topic-card">
      <div class="topic-card-header">
        <div>
          <span class="kicker">${topic.accent}</span>
          <h3>${topic.title}</h3>
        </div>
        <span class="pill">Best paper</span>
      </div>
      <p>${topic.description}</p>
      <div class="topic-links" style="margin-top:16px;">
        <a class="button button-primary" href="${resolveRepoHref(topic.bestPaper.href)}" target="_blank" rel="noopener noreferrer">Open ${topic.bestPaper.title} worked note</a>
      </div>
    </article>
  `;
}

function paperCard(item) {
  return `
    <article class="paper-card">
      <div class="card-topline">
        <div>
          <span class="kicker">${item.label}</span>
          <h3>Paper ${item.paperNumber}</h3>
        </div>
        <span class="pill">${item.slug}</span>
      </div>
      <p>Open the worked note, original paper, official worked solution, or answer key.</p>
      <div class="paper-links" style="margin-top:16px;">
        <a class="button button-primary" href="${resolveRepoHref(item.worked)}" target="_blank" rel="noopener noreferrer">Open worked note</a>
        <a class="button" href="${resolveRepoHref(item.paper)}" target="_blank" rel="noopener noreferrer">Open paper PDF</a>
      </div>
    </article>
  `;
}

function renderLibrary() {
  const list = $("#resource-list");
  const search = $("#search");
  const category = $("#category");
  const type = $("#type");
  if (!list || !search || !category || !type) {
    return;
  }

  const params = getRouteParams();
  const initialFilter = params.get("filter");
  if (initialFilter) {
    category.value = initialFilter;
  }

  const draw = () => {
    const query = search.value.trim().toLowerCase();
    const categoryValue = category.value;
    const typeValue = type.value;

    const filtered = data.resources.filter((resource) => {
      const matchesQuery =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(query));
      const matchesCategory = !categoryValue || resource.category === categoryValue;
      const matchesType = !typeValue || resource.kind === typeValue;
      return matchesQuery && matchesCategory && matchesType;
    });

    list.innerHTML = filtered.length
      ? filtered.map(resourceCard).join("")
      : `<div class="empty-state">No resources match the current filters.</div>`;
  };

  [search, category, type].forEach((input) => {
    input.addEventListener("input", draw);
    input.addEventListener("change", draw);
  });

  draw();
}

function renderReader() {
  const article = $("#reader-article");
  const toc = $("#reader-toc");
  const title = $("#reader-title");
  const summary = $("#reader-summary");
  const actions = $("#reader-actions");
  if (!article || !toc || !title || !summary || !actions) {
    return;
  }

  const params = getRouteParams();
  const noteId = params.get("note") || "conceptual-refresh";
  const note = data.resources.find((item) => item.id === noteId);

  if (!note) {
    title.textContent = "Note not found";
    article.innerHTML = `<div class="empty-state">This note is not available yet.</div>`;
    return;
  }

  title.textContent = note.title;
  summary.textContent = note.description;
  actions.innerHTML = `
    <a class="button button-primary" href="${resolveRepoHref(note.source)}" target="_blank" rel="noopener noreferrer">Open markdown source</a>
    ${note.id === "question-map-note" ? `<a class="button" href="${resolveSiteHref("question-map.html")}">Open interactive map</a>` : ""}
  `;
  article.innerHTML = note.body;

  const sections = $all("section[id]", article);
  toc.innerHTML = sections
    .map((section) => {
      const label = $("h2", section)?.textContent || section.id;
      return `<a href="${resolveCurrentHashHref(section.id)}">${label}</a>`;
    })
    .join("");

  setupReaderProgress();
  setupReaderToc(sections);
}

function setupReaderProgress() {
  const fill = $("#progress-fill");
  const article = $("#reader-panel");
  if (!fill || !article) {
    return;
  }

  const update = () => {
    const rect = article.getBoundingClientRect();
    const viewport = window.innerHeight;
    const total = rect.height + viewport;
    const progress = Math.min(Math.max((viewport - rect.top) / total, 0), 1);
    fill.style.width = `${progress * 100}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupReaderToc(sections) {
  const links = $all("#reader-toc a");
  if (!links.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function renderQuestionMap() {
  const container = $("#topic-grid");
  const filter = $("#topic-filter");
  if (!container || !filter) {
    return;
  }

  const draw = () => {
    const query = filter.value.trim().toLowerCase();
    const filtered = data.topicMap.filter((topic) => {
      return (
        !query ||
        topic.title.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query) ||
        topic.bestStartingSet.some((item) => item.note.toLowerCase().includes(query))
      );
    });

    container.innerHTML = filtered.length
      ? filtered
          .map(
            (topic) => `
              <article class="topic-card">
                <div class="topic-card-header">
                  <div>
                    <span class="kicker">${topic.accent}</span>
                    <h3>${topic.title}</h3>
                  </div>
                  <span class="pill">Topic route</span>
                </div>
                <p>${topic.description}</p>
                <div class="callout" style="margin-top:18px;">
                  <p><strong>Best paper:</strong> <a href="${resolveRepoHref(topic.bestPaper.href)}" target="_blank" rel="noopener noreferrer">${topic.bestPaper.title}</a></p>
                  <p style="margin-bottom:0;">Question links below open the exact worked-note anchors in a new tab so you keep your place in the atlas.</p>
                </div>
                <h4 style="margin-bottom:10px;">Best Starting Set</h4>
                <ul>
                  ${topic.bestStartingSet.map((item) => `<li><a href="${resolveRepoHref(item.href)}" target="_blank" rel="noopener noreferrer">${item.title}</a> — ${item.note}</li>`).join("")}
                </ul>
                <h4 style="margin-bottom:10px;">Stretch</h4>
                <ul>
                  ${topic.stretch.map((item) => `<li><a href="${resolveRepoHref(item.href)}" target="_blank" rel="noopener noreferrer">${item.title}</a> — ${item.note}</li>`).join("")}
                </ul>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">No topic cards match this search.</div>`;
  };

  filter.addEventListener("input", draw);
  draw();
}

function renderPapers() {
  const container = $("#papers-grid");
  const year = $("#paper-year");
  const query = $("#paper-search");
  if (!container || !year || !query) {
    return;
  }

  const draw = () => {
    const yearValue = year.value;
    const queryValue = query.value.trim().toLowerCase();

    const filtered = data.papers.filter((paper) => {
      const matchesYear = !yearValue || paper.slug === yearValue;
      const matchesQuery =
        !queryValue ||
        paper.label.toLowerCase().includes(queryValue) ||
        String(paper.paperNumber).includes(queryValue);
      return matchesYear && matchesQuery;
    });

    container.innerHTML = filtered.length
      ? filtered
          .map(
            (paper) => `
              <article class="timeline-card">
                <div class="timeline-heading">
                  <div>
                    <span class="kicker">${paper.label}</span>
                    <h3>Paper ${paper.paperNumber}</h3>
                  </div>
                  <span class="pill">${paper.slug}</span>
                </div>
                <p class="card-description">Direct access to the worked note, original paper, official worked solution, and answer key.</p>
                <div class="paper-links" style="margin-top:16px;">
                  <a class="button button-primary" href="${resolveRepoHref(paper.worked)}" target="_blank" rel="noopener noreferrer">Open worked note</a>
                  <a class="button" href="${resolveRepoHref(paper.paper)}" target="_blank" rel="noopener noreferrer">Paper PDF</a>
                  <a class="button" href="${resolveRepoHref(paper.workedPdf)}" target="_blank" rel="noopener noreferrer">Worked-solution PDF</a>
                  <a class="button" href="${resolveRepoHref(paper.answerKey)}" target="_blank" rel="noopener noreferrer">Answer key PDF</a>
                </div>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">No papers match the current filters.</div>`;
  };

  [year, query].forEach((input) => {
    input.addEventListener("input", draw);
    input.addEventListener("change", draw);
  });

  draw();
}

function renderTimetablePreview() {
  const container = $("#timeline-preview");
  if (!container) {
    return;
  }

  const weeks = Array.from(new Set(data.timetable.map((item) => item.week)));
  container.innerHTML = weeks
    .map((week) => {
      const items = data.timetable.filter((item) => item.week === week).slice(0, 4);
      return `
        <section class="timeline-week">
          <h2>Week ${week}</h2>
          <div class="timeline-list">
            ${items
              .map(
                (item) => `
                  <article class="timeline-card">
                    <div class="timeline-heading">
                      <h3>${item.day}</h3>
                      <span class="pill">${item.focus}</span>
                    </div>
                    <div class="timeline-meta">${item.actions.join(" · ")}</div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function init() {
  renderTopbar();
  renderFooter();
  renderHome();
  renderLibrary();
  renderReader();
  renderQuestionMap();
  renderPapers();
  renderTimetablePreview();
  rewriteStaticSiteLinks();
  setActiveNav();
}

document.addEventListener("DOMContentLoaded", init);
