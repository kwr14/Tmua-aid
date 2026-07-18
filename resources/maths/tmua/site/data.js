window.tmuaSiteData = {
  site: {
    title: "TMUA Study Atlas",
    subtitle: "A calmer, more beautiful way to revise the full TMUA study pack.",
    root: "../",
  },
  home: {
    heroStats: [
      { label: "Study Notes", value: "6" },
      { label: "Past Papers", value: "18" },
      { label: "Topic Tracks", value: "8" },
      { label: "Revision Days", value: "28" },
    ],
    pathways: [
      {
        title: "Refresh",
        description: "Rebuild the big ideas with the conceptual note and the one-page cheat sheet.",
        href: "reader.html?note=conceptual-refresh",
      },
      {
        title: "Target",
        description: "Use the question map to jump straight to the most useful past-paper questions by topic.",
        href: "question-map.html",
      },
      {
        title: "Practice",
        description: "Move through the drill plan and the paper library in a deliberate sequence.",
        href: "library.html?filter=plan",
      },
      {
        title: "Simulate",
        description: "Follow the 4-week timetable and build toward full-paper confidence.",
        href: "reader.html?note=4-week-timetable",
      },
    ],
  },
  resources: [
    {
      id: "conceptual-refresh",
      title: "Conceptual Refresh",
      kind: "note",
      category: "learn",
      duration: "35 min read",
      description: "Big-picture revision of the ideas, habits, and standard moves that keep coming back in TMUA.",
      tags: ["algebra", "graphs", "trigonometry", "geometry", "calculus", "logic"],
      source: "../conceptual-refresh.md",
      readerHref: "reader.html?note=conceptual-refresh",
      body: `
        <p class="lede">This note rebuilds the big mathematical picture before you dive back into question practice. The aim is not to reteach everything from scratch, but to reconnect the methods that unlock a large share of TMUA questions.</p>
        <section id="core-mindset">
          <h2>The Core Mindset</h2>
          <p>Many TMUA questions look different on the surface but reduce to a small number of moves: rewrite the expression, sketch the graph, introduce a substitution, compare answer options intelligently, or exploit symmetry and structure instead of brute force.</p>
          <div class="callout">
            <p>Best question to ask:</p>
            <strong>What is the simplest mathematical object hiding inside this question?</strong>
          </div>
        </section>
        <section id="algebra">
          <h2>Algebra That TMUA Loves</h2>
          <h3>Factorisation and rearrangement</h3>
          <ul>
            <li>Look for difference of squares, common factors, and hidden quadratics.</li>
            <li>Before expanding, ask whether factor form tells you more about roots or signs.</li>
            <li>After rearranging, ask whether the whole thing is really a quadratic in a new variable.</li>
          </ul>
          <h3>Completing the square</h3>
          <ul>
            <li>Use it to locate turning points, rewrite circle equations, and understand minima and maxima.</li>
            <li>It turns algebra into geometry and often makes inequalities much easier to interpret.</li>
          </ul>
          <h3>Discriminant thinking</h3>
          <ul>
            <li>Use <code>b^2 - 4ac</code> whenever the question is really about how many times a line and a curve meet.</li>
            <li>Positive means two intersections, zero means tangency, and negative means no real intersection.</li>
          </ul>
        </section>
        <section id="graphs">
          <h2>Graphs And Functions</h2>
          <ul>
            <li>Translate equations into intersections whenever possible.</li>
            <li>Turning points often decide how many real roots are even possible.</li>
            <li>Become fluent with shifts, stretches, reflections, and monotonicity.</li>
          </ul>
          <p>Graph intuition is one of the fastest ways to answer “how many solutions?” without heavy calculation.</p>
        </section>
        <section id="trig-geometry">
          <h2>Trigonometry, Geometry, and Circles</h2>
          <ul>
            <li>Know the essential identities cold: <code>sin^2 x + cos^2 x = 1</code> and <code>tan x = sin x / cos x</code>.</li>
            <li>In geometry, sketch first and search early for similar triangles, right angles, and tangent-radius facts.</li>
            <li>For circles, move comfortably between equation, centre-radius form, and geometric interpretation.</li>
          </ul>
        </section>
        <section id="series-calculus-logic">
          <h2>Series, Calculus, and Logic</h2>
          <ul>
            <li>Check convergence before using an infinite geometric sum.</li>
            <li>Treat some definite integrals as areas before integrating symbolically.</li>
            <li>For logic or number questions, test claims structurally and hunt for counterexamples quickly.</li>
          </ul>
        </section>
        <section id="checklist">
          <h2>Practical Checklist</h2>
          <ol>
            <li>What topic is this really testing?</li>
            <li>Can I simplify or substitute first?</li>
            <li>Would a sketch help?</li>
            <li>Is there a theorem or repeated pattern here?</li>
            <li>Can the answer options save time?</li>
          </ol>
        </section>
      `,
    },
    {
      id: "cheat-sheet",
      title: "One-Page Cheat Sheet",
      kind: "note",
      category: "learn",
      duration: "10 min read",
      description: "Short last-minute review sheet with the fastest reminders for solving TMUA questions.",
      tags: ["quick review", "exam", "formula", "strategy"],
      source: "../cheat-sheet.md",
      readerHref: "reader.html?note=cheat-sheet",
      body: `
        <p class="lede">Use this when you want the shortest possible refresher before practice or before a timed paper.</p>
        <section id="first-questions">
          <h2>First Questions To Ask</h2>
          <ol>
            <li>Is this really a quadratic in disguise?</li>
            <li>Would a sketch make it obvious?</li>
            <li>Is this asking for the number of solutions rather than the exact solutions?</li>
            <li>Can structure or symmetry do the work?</li>
            <li>Do the answer options suggest the method?</li>
          </ol>
        </section>
        <section id="core-reminders">
          <h2>Core Reminders</h2>
          <div class="two-column-list">
            <div>
              <h3>Algebra</h3>
              <ul>
                <li>Factor before you expand.</li>
                <li>Complete the square for graphs, minima, maxima, and circles.</li>
                <li>Use the discriminant for tangency and root counting.</li>
              </ul>
            </div>
            <div>
              <h3>Graphs</h3>
              <ul>
                <li>Think in intersections.</li>
                <li>Turning points limit the number of roots.</li>
                <li>Use graph shape before committing to long algebra.</li>
              </ul>
            </div>
          </div>
          <div class="two-column-list">
            <div>
              <h3>Sequences</h3>
              <ul>
                <li>Arithmetic means constant difference.</li>
                <li>Geometric means constant ratio.</li>
                <li>Infinite geometric sums require <code>|r| &lt; 1</code>.</li>
              </ul>
            </div>
            <div>
              <h3>Trig and geometry</h3>
              <ul>
                <li>Reduce to <code>sin</code> and <code>cos</code> when helpful.</li>
                <li>Count interval solutions carefully.</li>
                <li>Similar triangles and tangent-radius facts appear constantly.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="fast-routes">
          <h2>Common Fast Routes</h2>
          <ul>
            <li>Line meets parabola → discriminant.</li>
            <li>Ugly algebra → substitution.</li>
            <li>Odd-looking integral → area.</li>
            <li>Circle equation not in standard form → complete the square.</li>
            <li>Always true? → search for a counterexample.</li>
          </ul>
        </section>
      `,
    },
    {
      id: "common-mistakes",
      title: "Common Mistakes",
      kind: "note",
      category: "review",
      duration: "18 min read",
      description: "A trap-focused guide to the predictable errors that cost marks in TMUA.",
      tags: ["mistakes", "logic", "carelessness", "exam technique"],
      source: "../common-mistakes.md",
      readerHref: "reader.html?note=common-mistakes",
      body: `
        <p class="lede">Most TMUA losses come less from missing all the maths and more from choosing the wrong method, missing structure, or slipping on a small logical detail under time pressure.</p>
        <section id="mistake-clusters">
          <h2>High-Value Mistake Clusters</h2>
          <article class="mistake-block">
            <h3>Expanding too early</h3>
            <p>Over-expansion hides structure and turns a short question into a long one.</p>
            <ul>
              <li>Look for factorisation first.</li>
              <li>Ask whether the expression is really quadratic in disguise.</li>
            </ul>
          </article>
          <article class="mistake-block">
            <h3>Ignoring the graph</h3>
            <p>Root-count questions are often really intersection questions.</p>
            <ul>
              <li>Ask what the graph looks like.</li>
              <li>Use turning points to limit the number of possible solutions.</li>
            </ul>
          </article>
          <article class="mistake-block">
            <h3>Forgetting domain restrictions</h3>
            <p>Correct algebra can still leave impossible answers if you ignore roots, logs, or denominators.</p>
            <ul>
              <li>Write restrictions before solving.</li>
              <li>Check every final candidate in the original statement.</li>
            </ul>
          </article>
          <article class="mistake-block">
            <h3>Bad interval counting in trig</h3>
            <p>General solutions are useless if the counting step is wrong.</p>
            <ul>
              <li>Mark the interval clearly.</li>
              <li>Convert back carefully if you solved for something like <code>3x</code>.</li>
            </ul>
          </article>
          <article class="mistake-block">
            <h3>Not using multiple choice properly</h3>
            <p>Sometimes elimination by sign, size, parity, or impossibility is the correct TMUA move.</p>
          </article>
        </section>
        <section id="warning-list">
          <h2>Short Pre-Paper Warning List</h2>
          <ul>
            <li>Do not expand blindly.</li>
            <li>Sketch when the shape matters.</li>
            <li>Count solutions carefully.</li>
            <li>Check domains.</li>
            <li>Exploit the answer options.</li>
          </ul>
        </section>
      `,
    },
    {
      id: "drill-plan",
      title: "Topic Drill Plan",
      kind: "plan",
      category: "practice",
      duration: "15 min read",
      description: "Structured progression from rebuilding technique to mixed sets and full-paper practice.",
      tags: ["practice", "topics", "revision routine", "weekly plan"],
      source: "../drill-plan.md",
      readerHref: "reader.html?note=drill-plan",
      body: `
        <p class="lede">This plan turns the paper set into a practical revision routine. Use it if you want structure instead of opening papers randomly.</p>
        <section id="phase-1">
          <h2>Phase 1: Rebuild Core Skills</h2>
          <ol>
            <li>Quadratics and algebra structure</li>
            <li>Functions and graphs</li>
            <li>Trigonometry</li>
            <li>Geometry and circles</li>
            <li>Sequences and series</li>
            <li>Calculus basics</li>
            <li>Number structure and logic</li>
          </ol>
        </section>
        <section id="phase-2">
          <h2>Phase 2: Mixed Topic Drills</h2>
          <ul>
            <li>Choose 8 to 12 mixed questions.</li>
            <li>Time the set lightly.</li>
            <li>Record the topic, the first method tried, and the clue you should have seen earlier.</li>
          </ul>
        </section>
        <section id="phase-3">
          <h2>Phase 3: Timed Paper Practice</h2>
          <p>Suggested order: practice and specimen papers first, then older papers, then more recent papers for the most realistic final practice.</p>
        </section>
        <section id="review-method">
          <h2>How To Review Properly</h2>
          <ul>
            <li>Log the topic, time taken, and fastest valid method.</li>
            <li>Tag mistakes as recognition, logic, algebra, interval counting, bad diagram, or careless reading.</li>
            <li>Return to targeted drills instead of repeating full papers blindly.</li>
          </ul>
        </section>
      `,
    },
    {
      id: "question-map-note",
      title: "Question Map",
      kind: "map",
      category: "practice",
      duration: "12 min read",
      description: "A route from weak topic to the best paper and the best starting questions.",
      tags: ["topics", "papers", "targeting", "practice"],
      source: "../question-map.md",
      readerHref: "question-map.html",
      body: `
        <p class="lede">The question map helps you jump from a topic weakness straight into the most useful past-paper questions and worked notes.</p>
        <section id="how-to-use">
          <h2>How To Use It</h2>
          <ul>
            <li>Start with the best starting set for your weak topic.</li>
            <li>Attempt the best paper next.</li>
            <li>Use stretch questions once the method feels familiar.</li>
          </ul>
          <p>Open the full interactive topic view on the dedicated question-map page.</p>
        </section>
      `,
    },
    {
      id: "4-week-timetable",
      title: "4-Week Revision Timetable",
      kind: "timetable",
      category: "simulate",
      duration: "20 min read",
      description: "A day-by-day 28-day route through the study pack, from rebuild to simulation.",
      tags: ["timetable", "28 days", "exam prep", "schedule"],
      source: "../4-week-timetable.md",
      readerHref: "reader.html?note=4-week-timetable",
      body: `
        <p class="lede">This timetable turns the study pack into a concrete plan: rebuild first, strengthen main themes, move into mixed sets, then finish with timed papers and final polishing.</p>
        <section id="week-1">
          <h2>Week 1: Rebuild The Core</h2>
          <ul>
            <li>Day 1: quadratics and structure</li>
            <li>Day 2: discriminant and tangency</li>
            <li>Day 3: functions and graphs</li>
            <li>Day 4: trigonometry basics</li>
            <li>Day 5: geometry and circles</li>
            <li>Day 6: sequences and series</li>
            <li>Day 7: review and reattempt</li>
          </ul>
        </section>
        <section id="week-2">
          <h2>Week 2: Strengthen The Main Exam Themes</h2>
          <p>Focus on calculus as area, derivative reasoning, geometry logic, circle methods, number structure, and trig casework.</p>
        </section>
        <section id="week-3">
          <h2>Week 3: Mixed Sets And First Timed Papers</h2>
          <p>Move into mixed sets and sit Practice Paper 1 and Practice Paper 2 under timed conditions.</p>
        </section>
        <section id="week-4">
          <h2>Week 4: Simulation And Final Polishing</h2>
          <p>Repair weak topics, sit at least two real papers, and finish with a light confidence day rather than a panic cram.</p>
        </section>
      `,
    },
  ],
  topicMap: [
    {
      id: "algebra",
      title: "Quadratics And Algebra Structure",
      accent: "algebra",
      description: "Spot structure before expanding, switch smoothly between factorisation, substitution, and discriminant thinking.",
      bestPaper: { title: "Practice Paper 1", href: "../worked/practice/paper-1.md" },
      bestStartingSet: [
        { title: "Practice P1 Q1", href: "../worked/practice/paper-1.md#q1", note: "coefficient comparison from an expansion" },
        { title: "Practice P1 Q2", href: "../worked/practice/paper-1.md#q2", note: "factor theorem, division, then factorisation" },
        { title: "2021 P2 Q15", href: "../worked/2021/paper-2.md#q15", note: "tangency turned into a discriminant condition" },
      ],
      stretch: [{ title: "Practice P1 Q13", href: "../worked/practice/paper-1.md#q13", note: "stationary points used to infer real roots" }],
    },
    {
      id: "graphs",
      title: "Functions And Graphs",
      accent: "graphs",
      description: "Use graph shape, turning points, and intersections to replace unnecessary algebra.",
      bestPaper: { title: "Practice Paper 2", href: "../worked/practice/paper-2.md" },
      bestStartingSet: [
        { title: "Practice P1 Q10", href: "../worked/practice/paper-1.md#q10", note: "intersection counting" },
        { title: "Practice P1 Q13", href: "../worked/practice/paper-1.md#q13", note: "turning points and root count" },
        { title: "Practice P2 Q12", href: "../worked/practice/paper-2.md#q12", note: "symmetry, graph transformation, and area versus integral" },
      ],
      stretch: [{ title: "2021 P2 Q2", href: "../worked/2021/paper-2.md#q2", note: "coordinate geometry plus shape reasoning" }],
    },
    {
      id: "trig",
      title: "Trigonometry",
      accent: "trig",
      description: "Rewrite to standard forms, count carefully, and avoid interval mistakes.",
      bestPaper: { title: "Practice Paper 1", href: "../worked/practice/paper-1.md" },
      bestStartingSet: [
        { title: "Practice P1 Q8", href: "../worked/practice/paper-1.md#q8", note: "equation reduced to a simpler form" },
        { title: "Practice P1 Q17", href: "../worked/practice/paper-1.md#q17", note: "sign analysis across intervals" },
        { title: "2021 P2 Q18", href: "../worked/2021/paper-2.md#q18", note: "acute and obtuse casework" },
      ],
      stretch: [{ title: "Practice P1 Q10", href: "../worked/practice/paper-1.md#q10", note: "tangent graph intersections" }],
    },
    {
      id: "geometry",
      title: "Geometry",
      accent: "geometry",
      description: "Sketch first, justify claims from facts rather than appearance, and look early for similar triangles.",
      bestPaper: { title: "2021 Paper 2", href: "../worked/2021/paper-2.md" },
      bestStartingSet: [
        { title: "2021 P2 Q2", href: "../worked/2021/paper-2.md#q2", note: "square geometry and perpendicular reasoning" },
        { title: "2021 P2 Q7", href: "../worked/2021/paper-2.md#q7", note: "equal-area bisector through centres" },
        { title: "Practice P2 Q9", href: "../worked/practice/paper-2.md#q9", note: "triangle congruence and area logic" },
      ],
      stretch: [{ title: "2022 P1 Q14", href: "../worked/2022/paper-1.md#q14", note: "maximising triangle area inside a circle" }],
    },
    {
      id: "circles",
      title: "Circles And Coordinate Geometry",
      accent: "circles",
      description: "Move between circle equations, geometry, and transformations with confidence.",
      bestPaper: { title: "2021 Paper 1", href: "../worked/2021/paper-1.md" },
      bestStartingSet: [
        { title: "2021 P1 Q1", href: "../worked/2021/paper-1.md#q1", note: "circle intersections solved algebraically and geometrically" },
        { title: "2017 P1 Q7", href: "../worked/2017/paper-1.md#q7", note: "tangency by discriminant or geometry" },
        { title: "Practice P1 Q9", href: "../worked/practice/paper-1.md#q9", note: "translation, reflection, and enlargement" },
      ],
      stretch: [{ title: "2023 P1 Q17", href: "../worked/2023/paper-1.md#q17", note: "circles blended with area and sequence reasoning" }],
    },
    {
      id: "series",
      title: "Sequences And Series",
      accent: "series",
      description: "Distinguish arithmetic from geometric behavior and check convergence before anything else.",
      bestPaper: { title: "Practice Paper 1", href: "../worked/practice/paper-1.md" },
      bestStartingSet: [
        { title: "Practice P1 Q4", href: "../worked/practice/paper-1.md#q4", note: "alternating pattern recognition" },
        { title: "Practice P1 Q14", href: "../worked/practice/paper-1.md#q14", note: "reconstructing geometric progressions" },
        { title: "2021 P1 Q3", href: "../worked/2021/paper-1.md#q3", note: "convergence and sum to infinity" },
      ],
      stretch: [
        { title: "2017 P1 Q11", href: "../worked/2017/paper-1.md#q11", note: "recurrence and periodicity" },
        { title: "2018 P2 Q16", href: "../worked/2018/paper-2.md#q16", note: "median logic in arithmetic progressions" },
      ],
    },
    {
      id: "calculus",
      title: "Calculus",
      accent: "calculus",
      description: "Think graphically about areas, derivatives, increasing intervals, and root counts.",
      bestPaper: { title: "Practice Paper 1", href: "../worked/practice/paper-1.md" },
      bestStartingSet: [
        { title: "Practice P1 Q5", href: "../worked/practice/paper-1.md#q5", note: "area by sketching and splitting a region" },
        { title: "Practice P1 Q18", href: "../worked/practice/paper-1.md#q18", note: "derivative, factorisation, and increasing intervals" },
        { title: "Practice P2 Q12", href: "../worked/practice/paper-2.md#q12", note: "area versus signed integral" },
      ],
      stretch: [{ title: "Practice P1 Q13", href: "../worked/practice/paper-1.md#q13", note: "stationary points used for root-count arguments" }],
    },
    {
      id: "logic",
      title: "Number Structure And Logic",
      accent: "logic",
      description: "Translate verbal claims into structure, test implications carefully, and use counterexamples fast.",
      bestPaper: { title: "2023 Paper 2", href: "../worked/2023/paper-2.md" },
      bestStartingSet: [
        { title: "2023 P2 Q4", href: "../worked/2023/paper-2.md#q4", note: "auditing a proof with a counterexample" },
        { title: "Practice P2 Q13", href: "../worked/practice/paper-2.md#q13", note: "divisibility and false-proof structure" },
        { title: "Specimen P2 Q8", href: "../worked/specimen/paper-2.md#q8", note: "divisibility for consecutive integers" },
      ],
      stretch: [{ title: "Specimen P2 Q4", href: "../worked/specimen/paper-2.md#q4", note: "classic conditional logic format" }],
    },
  ],
  timetable: [
    { week: 1, day: "Day 1", focus: "Quadratics And Structure", actions: ["Practice P1 Q1", "Practice P1 Q2", "Conceptual Refresh algebra section"] },
    { week: 1, day: "Day 2", focus: "Discriminant And Tangency", actions: ["2021 P2 Q15", "2017 P1 Q7", "Common Mistakes: fake solutions"] },
    { week: 1, day: "Day 3", focus: "Functions And Graphs", actions: ["Practice P1 Q10", "Practice P1 Q13", "Question Map graph set"] },
    { week: 1, day: "Day 4", focus: "Trigonometry Basics", actions: ["Practice P1 Q8", "Practice P1 Q17", "Cheat Sheet trig section"] },
    { week: 1, day: "Day 5", focus: "Geometry And Circles", actions: ["2021 P2 Q2", "2021 P1 Q1", "Conceptual Refresh geometry section"] },
    { week: 1, day: "Day 6", focus: "Sequences And Series", actions: ["Practice P1 Q4", "Practice P1 Q14", "2021 P1 Q3"] },
    { week: 1, day: "Day 7", focus: "Review And Reattempt", actions: ["Reattempt 3 to 5 misses", "Read Common Mistakes"] },
    { week: 2, day: "Day 8", focus: "Calculus As Area", actions: ["Practice P1 Q5", "Practice P2 Q12"] },
    { week: 2, day: "Day 9", focus: "Derivatives And Stationary Points", actions: ["Practice P1 Q18", "Practice P1 Q13"] },
    { week: 2, day: "Day 10", focus: "Geometry Reasoning", actions: ["2021 P2 Q7", "Practice P2 Q9"] },
    { week: 2, day: "Day 11", focus: "Circle Methods", actions: ["Practice P1 Q9", "2022 P1 Q14", "2023 P1 Q17 stretch"] },
    { week: 2, day: "Day 12", focus: "Number Structure And Logic", actions: ["2023 P2 Q4", "Practice P2 Q13", "Specimen P2 Q8"] },
    { week: 2, day: "Day 13", focus: "Trig Casework", actions: ["2021 P2 Q18", "Practice P1 Q10"] },
    { week: 2, day: "Day 14", focus: "Weekly Consolidation", actions: ["Reattempt weak-topic sets", "Review Question Map"] },
    { week: 3, day: "Day 15", focus: "Mixed Topic Set A", actions: ["Five-question mixed sprint", "Method-recognition review"] },
    { week: 3, day: "Day 16", focus: "Timed Paper 1", actions: ["Sit Practice Paper 1"] },
    { week: 3, day: "Day 17", focus: "Full Review Of Timed Paper 1", actions: ["Tag mistakes and slow questions"] },
    { week: 3, day: "Day 18", focus: "Weak-Topic Repair", actions: ["Choose one weak algebra/graph topic", "Choose one weak geometry/logic topic"] },
    { week: 3, day: "Day 19", focus: "Mixed Topic Set B", actions: ["Second mixed sprint with unfamiliar prompts"] },
    { week: 3, day: "Day 20", focus: "Timed Paper 2", actions: ["Sit Practice Paper 2"] },
    { week: 3, day: "Day 21", focus: "Full Review Of Timed Paper 2", actions: ["Compare with Paper 1 error pattern"] },
    { week: 4, day: "Day 22", focus: "Targeted Repair", actions: ["Best Starting Set from your weakest topic"] },
    { week: 4, day: "Day 23", focus: "Timed Paper 3", actions: ["Sit 2021 Paper 1 or 2021 Paper 2"] },
    { week: 4, day: "Day 24", focus: "Review And Reattempt", actions: ["Reattempt the hardest 4 to 6 questions"] },
    { week: 4, day: "Day 25", focus: "Final Mixed Topic Set", actions: ["Build a set from your mistake log"] },
    { week: 4, day: "Day 26", focus: "Timed Paper 4", actions: ["Sit 2023 Paper 1, 2023 Paper 2, or 2022 Paper 1"] },
    { week: 4, day: "Day 27", focus: "Final Review Day", actions: ["Read Cheat Sheet", "Read Common Mistakes", "Reattempt five weak questions"] },
    { week: 4, day: "Day 28", focus: "Light Confidence Day", actions: ["Short confidence set", "Skim Conceptual Refresh and Question Map"] },
  ],
  papers: [
    { label: "Practice", slug: "practice", paperNumber: 1, worked: "../worked/practice/paper-1.md", paper: "../sources/papers/practice/paper-1.pdf", workedPdf: "../sources/worked-solutions/practice/paper-1.pdf", answerKey: "../sources/answer-keys/practice/paper-1.pdf" },
    { label: "Practice", slug: "practice", paperNumber: 2, worked: "../worked/practice/paper-2.md", paper: "../sources/papers/practice/paper-2.pdf", workedPdf: "../sources/worked-solutions/practice/paper-2.pdf", answerKey: "../sources/answer-keys/practice/paper-2.pdf" },
    { label: "Specimen", slug: "specimen", paperNumber: 1, worked: "../worked/specimen/paper-1.md", paper: "../sources/papers/specimen/paper-1.pdf", workedPdf: "../sources/worked-solutions/specimen/paper-1.pdf", answerKey: "../sources/answer-keys/specimen/paper-1.pdf" },
    { label: "Specimen", slug: "specimen", paperNumber: 2, worked: "../worked/specimen/paper-2.md", paper: "../sources/papers/specimen/paper-2.pdf", workedPdf: "../sources/worked-solutions/specimen/paper-2.pdf", answerKey: "../sources/answer-keys/specimen/paper-2.pdf" },
    { label: "2023", slug: "2023", paperNumber: 1, worked: "../worked/2023/paper-1.md", paper: "../sources/papers/2023/paper-1.pdf", workedPdf: "../sources/worked-solutions/2023/paper-1.pdf", answerKey: "../sources/answer-keys/2023/paper-1.pdf" },
    { label: "2023", slug: "2023", paperNumber: 2, worked: "../worked/2023/paper-2.md", paper: "../sources/papers/2023/paper-2.pdf", workedPdf: "../sources/worked-solutions/2023/paper-2.pdf", answerKey: "../sources/answer-keys/2023/paper-2.pdf" },
    { label: "2022", slug: "2022", paperNumber: 1, worked: "../worked/2022/paper-1.md", paper: "../sources/papers/2022/paper-1.pdf", workedPdf: "../sources/worked-solutions/2022/paper-1.pdf", answerKey: "../sources/answer-keys/2022/paper-1.pdf" },
    { label: "2022", slug: "2022", paperNumber: 2, worked: "../worked/2022/paper-2.md", paper: "../sources/papers/2022/paper-2.pdf", workedPdf: "../sources/worked-solutions/2022/paper-2.pdf", answerKey: "../sources/answer-keys/2022/paper-2.pdf" },
    { label: "2021", slug: "2021", paperNumber: 1, worked: "../worked/2021/paper-1.md", paper: "../sources/papers/2021/paper-1.pdf", workedPdf: "../sources/worked-solutions/2021/paper-1.pdf", answerKey: "../sources/answer-keys/2021/paper-1.pdf" },
    { label: "2021", slug: "2021", paperNumber: 2, worked: "../worked/2021/paper-2.md", paper: "../sources/papers/2021/paper-2.pdf", workedPdf: "../sources/worked-solutions/2021/paper-2.pdf", answerKey: "../sources/answer-keys/2021/paper-2.pdf" },
    { label: "2020", slug: "2020", paperNumber: 1, worked: "../worked/2020/paper-1.md", paper: "../sources/papers/2020/paper-1.pdf", workedPdf: "../sources/worked-solutions/2020/paper-1.pdf", answerKey: "../sources/answer-keys/2020/paper-1.pdf" },
    { label: "2020", slug: "2020", paperNumber: 2, worked: "../worked/2020/paper-2.md", paper: "../sources/papers/2020/paper-2.pdf", workedPdf: "../sources/worked-solutions/2020/paper-2.pdf", answerKey: "../sources/answer-keys/2020/paper-2.pdf" },
    { label: "2019", slug: "2019", paperNumber: 1, worked: "../worked/2019/paper-1.md", paper: "../sources/papers/2019/paper-1.pdf", workedPdf: "../sources/worked-solutions/2019/paper-1.pdf", answerKey: "../sources/answer-keys/2019/paper-1.pdf" },
    { label: "2019", slug: "2019", paperNumber: 2, worked: "../worked/2019/paper-2.md", paper: "../sources/papers/2019/paper-2.pdf", workedPdf: "../sources/worked-solutions/2019/paper-2.pdf", answerKey: "../sources/answer-keys/2019/paper-2.pdf" },
    { label: "2018", slug: "2018", paperNumber: 1, worked: "../worked/2018/paper-1.md", paper: "../sources/papers/2018/paper-1.pdf", workedPdf: "../sources/worked-solutions/2018/paper-1.pdf", answerKey: "../sources/answer-keys/2018/paper-1.pdf" },
    { label: "2018", slug: "2018", paperNumber: 2, worked: "../worked/2018/paper-2.md", paper: "../sources/papers/2018/paper-2.pdf", workedPdf: "../sources/worked-solutions/2018/paper-2.pdf", answerKey: "../sources/answer-keys/2018/paper-2.pdf" },
    { label: "2017", slug: "2017", paperNumber: 1, worked: "../worked/2017/paper-1.md", paper: "../sources/papers/2017/paper-1.pdf", workedPdf: "../sources/worked-solutions/2017/paper-1.pdf", answerKey: "../sources/answer-keys/2017/paper-1.pdf" },
    { label: "2017", slug: "2017", paperNumber: 2, worked: "../worked/2017/paper-2.md", paper: "../sources/papers/2017/paper-2.pdf", workedPdf: "../sources/worked-solutions/2017/paper-2.pdf", answerKey: "../sources/answer-keys/2017/paper-2.pdf" },
  ],
};
