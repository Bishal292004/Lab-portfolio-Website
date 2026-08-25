/* =========================================================
   PORTFOLIO DASHBOARD — SCRIPT
   Sections: Data → Render helpers → Feature modules → Init
   All demo content below is safe to edit — the HTML never
   needs to change when you add/remove projects, skills, etc.
   ========================================================= */

(() => {
  "use strict";

  /* ---------------------------------------------------------
     1. DATA
     Edit these arrays to update the site. Nothing else in the
     HTML needs to change — everything renders from here.
  --------------------------------------------------------- */

  // Add a project by pushing a new object here. `folder` maps to
  // projects/<folder>/index.html, which is what "Open Project" opens.
  const projects = [
    // {
    //   title: "Weather App",
    //   description:
    //     "Live weather lookup by city using a public weather API, with a clean minimal UI.",
    //   folder: "weather-app",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   category: "mini",
    //   stack: "web",
    // },
    // {
    //   title: "Student Management System",
    //   description:
    //     "CRUD app to manage student records with search, edit, and delete — backed by a relational database.",
    //   folder: "student-management-system",
    //   tech: ["Java", "MySQL", "JDBC"],
    //   category: "major",
    //   stack: "java",
    // },
    {
      title: "To-Do App",
      description:
        "Task manager with add, complete, and delete actions, persisted locally in the browser.",
      folder: "todo-app",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "mini",
      stack: "web",
    },
    {
      title: "Resume",
      description: "My resume build with the help of HTML and CSS only.",
      folder: "resume",
      tech: ["HTML", "CSS"],
      category: "mini",
      stack: "web",
    },
    {
     title: "Quiz App",
      description: "A simple quiz app which displays the score after answering all the questions.",
      folder: "quiz",
      tech: ["HTML", "CSS", "Javascript"],
      category: "mini",
      stack: "web",
    },
    {
      title: "Shopping",
      description: "A simple shooping webpage with some listed items and with cart and checkout features.",
      folder: "shopping",
      tech: ["HTML", "CSS", "Javascript"],
      category: "mini",
      stack: "web",
    },
    {
      title: "Calculator",
      description:
        "A responsive scientific calculator supporting keyboard input and standard operations.",
      folder: "calculator",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "mini",
      stack: "js",
    },
    {
      title: "Employee registration & login form.",
      description:
        "The Employee can register usinf basic details, those details are stored in an online MongoDB Atlas database, and the backend express server runs on the vercel. Combine all this and a complete full stack employe registration and login webpage is done.",
      folder: "employee-registration-login",
      tech: ["HTML5","CSS","JavaScript","Nodejs","Expressjs","MongoDB Atlas","Vercel"],
      category: "mini",
      stack: "full-stack",
    },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "This dashboard itself — a fully responsive personal portfolio built from scratch.",
    //   folder: "portfolio-website",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   category: "major",
    //   stack: "web",
    // },
    // {
    //   title: "Library Management",
    //   description:
    //     "Tracks books, members, and issue/return records with fine calculation logic.",
    //   folder: "library-management",
    //   tech: ["Java", "MySQL"],
    //   category: "major",
    //   stack: "database",
    // },
    // {
    //   title: "Hotel Booking System",
    //   description:
    //     "Room booking workflow with availability checks, pricing, and booking history.",
    //   folder: "hotel-booking-system",
    //   tech: ["Python", "SQL"],
    //   category: "major",
    //   stack: "python",
    // },
    // {
    //   title: "Expense Tracker",
    //   description:
    //     "Logs daily expenses by category and visualizes monthly spending trends.",
    //   folder: "expense-tracker",
    //   tech: ["JavaScript", "Chart.js"],
    //   category: "mini",
    //   stack: "js",
    // },
    // {
    //   title: "Notes App",
    //   description:
    //     "Distraction-free note-taking app with tagging, search, and auto-save.",
    //   folder: "notes-app",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   category: "mini",
    //   stack: "web",
    // },
    // {
    //   title: "Quiz App",
    //   description:
    //     "Timed multiple-choice quiz engine with score tracking and instant feedback.",
    //   folder: "quiz-app",
    //   tech: ["JavaScript"],
    //   category: "mini",
    //   stack: "js",
    // },
    // {
    //   title: "Attendance System",
    //   description:
    //     "Marks and reports student attendance by class, date, and subject.",
    //   folder: "attendance-system",
    //   tech: ["Java", "MySQL", "JDBC"],
    //   category: "major",
    //   stack: "database",
    // },
  ];

  // Category filter definitions: key must match a project's `stack`
  // or `category`, except 'all' which is special-cased.
  const filters = [
    { key: "all", label: "All" },
    { key: "web", label: "Web Development" },
    { key: "java", label: "Java" },
    { key: "python", label: "Python" },
    { key: "js", label: "JavaScript" },
    { key: "database", label: "Database" },
    { key: "mini", label: "Mini Projects" },
    { key: "major", label: "Major Projects" },
  ];

  const skills = [
    { name: "HTML", tag: "<html>" },
    { name: "CSS", tag: "<css>" },
    { name: "JavaScript", tag: "JS" },
    { name: "Java", tag: "JV" },
    { name: "Python", tag: "PY" },
    { name: "C++", tag: "C++" },
    { name: "SQL", tag: "SQL" },
    { name: "MySQL", tag: "DB" },
    { name: "Git", tag: "GIT" },
    { name: "GitHub", tag: "GH" },
    { name: "Node.js", tag: "JS" },
    { name: "Express", tag: "JS" },
  ];

  const stats = [
    { num: projects.length, label: "Projects" },
    {
      num: projects.filter((p) => p.category === "mini").length,
      label: "Mini Projects",
    },
    {
      num: projects.filter((p) => p.category === "major").length,
      label: "Major Projects",
    },
    { num: 8, label: "Technologies" },
    { num: 15, label: "Repositories" },
  ];

  const timelineEvents = [
    { year: "2024", title: "Started Programming" },
    { year: "2025", title: "Built First Website" },
    { year: "2025", title: "Learned JavaScript" },
    { year: "2026", title: "Started Full Stack Development" },
    { year: "2026", title: "Built Portfolio" },
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "bishalnath438@gmail.com",
      href: "mailto:bishalnath438@gmail.com",
      icon: "mail",
    },
    {
      label: "Phone",
      value: "+91 96125 57013",
      href: "tel:+919612557013",
      icon: "phone",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/bishal-nath/",
      href: "https://www.linkedin.com/in/bishal-nath/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "github.com/Bishal292004",
      href: "https://github.com/Bishal292004",
      icon: "github",
    },
    {
      label: "Location",
      value: "pondicherry, Puducherry, India",
      href: null,
      icon: "pin",
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Bishal292004",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/bishal-nath/",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:bishalnath438@gmail.com", icon: "mail" },
  ];

  /* ---------------------------------------------------------
     2. SMALL SVG ICON SET (kept inline to avoid extra requests)
  --------------------------------------------------------- */
  const icons = {
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="2"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="2"/></svg>',
    phone:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    linkedin:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 13v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    github:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 015 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0012 2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2"/></svg>',
  };

  /* ---------------------------------------------------------
     3. RENDER: STATUS BAR / STATS
  --------------------------------------------------------- */
  function renderStats() {
    const el = document.getElementById("statsStrip");
    el.innerHTML = stats
      .map(
        (s) => `
      <div class="statusbar__item">
        <div class="statusbar__num mono" data-count="${s.num}">0</div>
        <div class="statusbar__label">${s.label}</div>
      </div>
    `,
      )
      .join("");
  }

  // Small count-up animation for the stat numbers, triggered once in view.
  function animateStats() {
    document.querySelectorAll(".statusbar__num").forEach((el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 30));
      const tick = () => {
        current = Math.min(target, current + step);
        el.textContent = current;
        if (current < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  /* ---------------------------------------------------------
     4. RENDER: SKILLS
  --------------------------------------------------------- */
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = skills
      .map(
        (s) => `
      <div class="skill-card card">
        <span class="skill-card__icon">${s.tag}</span>
        <div class="skill-card__name">${s.name}</div>
      </div>
    `,
      )
      .join("");
  }

  /* ---------------------------------------------------------
     5. RENDER: PROJECTS + SEARCH + FILTER
  --------------------------------------------------------- */
  const state = { query: "", filter: "all" };

  function renderFilters() {
    const wrap = document.getElementById("filterButtons");
    wrap.innerHTML = filters
      .map(
        (f) => `
      <button class="filter-btn${f.key === "all" ? " active" : ""}" data-key="${f.key}">
        ${f.label}
      </button>
    `,
      )
      .join("");

    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      state.filter = btn.dataset.key;
      wrap
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.toggle("active", b === btn));
      renderProjects();
    });
  }

  function matchesFilter(project) {
    if (state.filter === "all") return true;
    return project.stack === state.filter || project.category === state.filter;
  }

  function matchesQuery(project) {
    if (!state.query) return true;
    const haystack = [
      project.title,
      project.category,
      project.stack,
      ...project.tech,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(state.query.toLowerCase());
  }

  function projectInitials(title) {
    return title
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    const empty = document.getElementById("emptyState");
    const count = document.getElementById("resultsCount");

    const visible = projects.filter((p) => matchesFilter(p) && matchesQuery(p));

    count.textContent = `${visible.length} project${visible.length === 1 ? "" : "s"} found`;
    empty.hidden = visible.length !== 0;
    grid.hidden = visible.length === 0;

    grid.innerHTML = visible
      .map(
        (p, i) => `
      <article class="project-card card" style="border-left-color: var(--cat-${p.stack === "database" ? "db" : p.stack})">
        <div class="project-card__thumb">${projectInitials(p.title)}</div>
        <div class="project-card__body">
          <div class="project-card__top">
            <h3 class="project-card__title">${p.title}</h3>
            <span class="project-card__category">${p.category}</span>
          </div>
          <p class="project-card__desc">${p.description}</p>
          <div class="project-card__tech">
            ${p.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <button class="project-card__btn" data-folder="${p.folder}">
            Open Project →
          </button>
        </div>
      </article>
    `,
      )
      .join("");

    // Wire up "Open Project" buttons — navigates to projects/<folder>/index.html
    grid.querySelectorAll(".project-card__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.open(`projects/${btn.dataset.folder}/index.html`, "_blank");
      });
    });
  }

  function initSearch() {
    const input = document.getElementById("searchInput");
    input.addEventListener("input", (e) => {
      state.query = e.target.value.trim();
      renderProjects();
    });

    // Press "/" anywhere to focus search (common dashboard/editor pattern)
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
    });
  }

  /* ---------------------------------------------------------
     6. RENDER: TIMELINE
  --------------------------------------------------------- */
  function renderTimeline() {
    const list = document.getElementById("timelineList");
    list.innerHTML = timelineEvents
      .map(
        (ev) => `
      <div class="timeline__item">
        <span class="timeline__dot"></span>
        <div class="timeline__year">${ev.year}</div>
        <div class="timeline__title">${ev.title}</div>
      </div>
    `,
      )
      .join("");
  }

  /* ---------------------------------------------------------
     7. RENDER: CONTACT + FOOTER SOCIAL
  --------------------------------------------------------- */
  function renderContact() {
    const grid = document.getElementById("contactGrid");
    grid.innerHTML = contactInfo
      .map((c) => {
        const inner = `
        <div class="contact-card__icon">${icons[c.icon] || ""}</div>
        <div>
          <div class="contact-card__label">${c.label}</div>
          <div class="contact-card__value">${c.value}</div>
        </div>
      `;
        return c.href
          ? `<a class="contact-card card" href="${c.href}">${inner}</a>`
          : `<div class="contact-card card">${inner}</div>`;
      })
      .join("");
  }

  function renderFooterSocial() {
    const wrap = document.getElementById("footerSocial");
    wrap.innerHTML = socialLinks
      .map(
        (s) => `
      <a href="${s.href}" aria-label="${s.label}" target="_blank" rel="noopener">${icons[s.icon] || ""}</a>
    `,
      )
      .join("");
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------
     8. HERO TERMINAL — typewriter "neofetch"-style intro
  --------------------------------------------------------- */
  function typeTerminal() {
    const body = document.getElementById("terminalBody");
    const lines = [
      { html: '<span class="prompt">$</span> whoami' },
      {
        html: '<span class="key">name</span>    <span class="val">Bishal Nath</span>',
      },
      {
        html: '<span class="key">role</span>    <span class="val">MCA Student · Full Stack Dev</span>',
      },
      {
        html: '<span class="key">stack</span>   <span class="val">C++ · JavaScript · SQL · MERN</span>',
      },
      {
        html: '<span class="key">editor</span>  <span class="val">VS Code</span>',
      },
      {
        html: '<span class="key">status</span>  <span class="val">Open to internships</span>',
      },
      { html: '<span class="prompt">$</span> _' },
    ];

    let lineIndex = 0;

    function typeLine() {
      if (lineIndex >= lines.length) return;
      const div = document.createElement("div");
      div.className = "line";
      body.appendChild(div);

      // Reveal each line's markup instantly (typing char-by-char on raw
      // HTML would break tags) but stagger lines for a terminal feel.
      div.innerHTML = lines[lineIndex].html;
      lineIndex += 1;

      if (lineIndex < lines.length) {
        setTimeout(typeLine, 260);
      } else {
        const cursor = document.createElement("span");
        cursor.className = "terminal__cursor";
        div.appendChild(cursor);
      }
    }

    typeLine();
  }

  /* ---------------------------------------------------------
     9. NAVIGATION: smooth scroll, active link highlight, mobile menu
  --------------------------------------------------------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close mobile menu after choosing a link
    links.querySelectorAll(".navlink").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Highlight active section while scrolling
    const sections = [
      ...document.querySelectorAll("main .section, .hero"),
    ].filter((s) => s.id);
    const navLinkFor = (id) =>
      document.querySelector(`.navlink[data-section="${id}"]`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(".navlink")
              .forEach((l) => l.classList.remove("active"));
            const active = navLinkFor(entry.target.id);
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------------------------------------------------
     10. REVEAL-ON-SCROLL (Intersection Observer)
  --------------------------------------------------------- */
  function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (
              entry.target.id === "home" ||
              entry.target.querySelector("#statsStrip")
            ) {
              animateStats();
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    targets.forEach((t) => observer.observe(t));
  }

  /* ---------------------------------------------------------
     11. BACK TO TOP + STICKY NAV SHADOW
  --------------------------------------------------------- */
  function initScrollUX() {
    const backToTop = document.getElementById("backToTop");
    const navbar = document.getElementById("navbar");

    window.addEventListener(
      "scroll",
      () => {
        const scrolled = window.scrollY > 400;
        backToTop.classList.toggle("visible", scrolled);
        navbar.style.boxShadow =
          window.scrollY > 8 ? "var(--shadow-sm)" : "none";
      },
      { passive: true },
    );

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------
     12. INIT
  --------------------------------------------------------- */
  function init() {
    renderStats();
    renderSkills();
    renderFilters();
    renderProjects();
    renderTimeline();
    renderContact();
    renderFooterSocial();
    initSearch();
    initNav();
    initReveal();
    initScrollUX();
    typeTerminal();

    // Hero stats live outside a .reveal wrapper, so animate them on load
    // once they've had a moment to render.
    setTimeout(animateStats, 400);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
