/* Au Cochon Volant — contenu, langues et mouvements */
(() => {
  "use strict";

  /* ---------- Textes FR / EN ---------- */
  const T = {
    fr: {
      "skip": "Aller au contenu",
      "nav.restaurant": "Le restaurant", "nav.menu": "La carte", "nav.reviews": "Avis", "nav.find": "Nous trouver",
      "nav.call": "Réserver · 06 58 01 42 16", "nav.open": "Menu", "nav.close": "Fermer",
      "hero.sub": "Rôtisserie · Paris 12<sup>e</sup>",
      "hero.alt": "La façade du restaurant Au Cochon Volant, rue Jules-César, un soir : lambrequin bleu canard, devanture en bois et salle éclairée",
      "about.title": "Ici, les cochons volent.",
      "about.lead": "On disait « quand les cochons voleront ». Rue Jules-César, à deux pas de Gare de Lyon, c'est chose faite.",
      "about.p1": "Tous les jours, un cochon de lait tourne doucement sur la broche jusqu'à ce que sa peau craque. Autour de lui : terrines, pâté de tête, joue braisée et purée maison, frites, tiramisu. Une cuisine de produit, sans chichis, des assiettes généreuses et des vins à prix sages.",
      "about.p2": "La salle est petite, l'accueil est grand. Venez en voisin, en voyageur entre deux trains, ou en bande affamée.",
      "about.tip": "Conseil d'ami : le cochon de lait part vite. Venez tôt.",
      "menu.title": "La carte",
      "menu.intro": "Ce que l'on vient chercher ici. L'ardoise change avec le marché.",
      "menu.note": "Prix à l'ardoise, sur place. Une question sur la carte du jour ? Appelez-nous au <a href=\"tel:+33658014216\">06 58 01 42 16</a>.",
      "reviews.title": "Ce qu'en disent les passagers",
      "reviews.score": "sur environ 700 avis Google",
      "reviews.src": "Extraits d'avis publics laissés sur Google, reproduits tels quels.",
      "find.title": "Point d'atterrissage",
      "find.transit": "Métro Bastille (1, 5, 8), Gare de Lyon (1, 14, RER A et D), Quai de la Rapée (5).",
      "find.hours": "Horaires",
      "find.dir": "Itinéraire dans Google Maps",
      "foot.line": "Quand les cochons voleront ? C'est déjà le cas.",
      days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
      closed: "Fermé", and: " et ",
      openNow: (t) => `Ouvert en ce moment, jusqu'à ${t}`,
      closedNow: (d, t) => `Fermé en ce moment. Réouverture ${d} à ${t}`,
      today: "aujourd'hui", tomorrow: "demain",
      fmt: (h, m) => `${h}h${m ? String(m).padStart(2, "0") : ""}`,
    },
    en: {
      "skip": "Skip to content",
      "nav.restaurant": "The restaurant", "nav.menu": "Menu", "nav.reviews": "Reviews", "nav.find": "Find us",
      "nav.call": "Book · +33 6 58 01 42 16", "nav.open": "Menu", "nav.close": "Close",
      "hero.sub": "Rotisserie · Paris 12th",
      "hero.alt": "The front of Au Cochon Volant on rue Jules-César at night: teal awning, wooden shopfront and a lit dining room",
      "about.title": "Here, pigs fly.",
      "about.lead": "The French say “when pigs fly”. On rue Jules-César, a few steps from Gare de Lyon, they finally do.",
      "about.p1": "Every day a suckling pig turns slowly on the spit until its skin crackles. Around it: terrines, head cheese, braised pork cheek with house mash, fries, tiramisu. Honest, product-first cooking, generous plates and fairly priced wine.",
      "about.p2": "The room is small, the welcome is big. Drop in as a neighbour, as a traveller between two trains, or as a hungry crowd.",
      "about.tip": "Friendly tip: the suckling pig sells out fast. Come early.",
      "menu.title": "The menu",
      "menu.intro": "What people come here for. The chalkboard changes with the market.",
      "menu.note": "Prices are on the chalkboard. Questions about today's menu? Call us on <a href=\"tel:+33658014216\">+33 6 58 01 42 16</a>.",
      "reviews.title": "What our passengers say",
      "reviews.score": "from around 700 Google reviews",
      "reviews.src": "Excerpts from public Google reviews, quoted as written.",
      "find.title": "Landing spot",
      "find.transit": "Metro Bastille (1, 5, 8), Gare de Lyon (1, 14, RER A and D), Quai de la Rapée (5).",
      "find.hours": "Opening hours",
      "find.dir": "Directions in Google Maps",
      "foot.line": "When pigs fly? They already do.",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      closed: "Closed", and: " and ",
      openNow: (t) => `Open now, until ${t}`,
      closedNow: (d, t) => `Closed right now. Opens ${d} at ${t}`,
      today: "today", tomorrow: "tomorrow",
      fmt: (h, m) => { const hh = h % 12 || 12; return `${hh}${m ? ":" + String(m).padStart(2, "0") : ""}${h < 12 || h === 24 ? "am" : "pm"}`; },
    },
  };

  /* ---------- La carte (ajoutez les prix dans `price`, ex. "18 €") ---------- */
  const MENU = [
    { cat: { fr: "Pour commencer", en: "To start" }, icon: "flower", items: [
      { fr: ["Terrine de cochon", "Maison, avec ses cornichons"], en: ["Pork terrine", "House-made, with pickles"], price: null },
      { fr: ["Pâté de tête artisanal", ""], en: ["Artisanal head cheese", ""], price: null },
      { fr: ["Rillettes", ""], en: ["Pork rillettes", ""], price: null },
      { fr: ["Chorizo ibérique", ""], en: ["Iberian chorizo", ""], price: null },
    ]},
    { cat: { fr: "À la broche", en: "From the spit" }, icon: "sun", items: [
      { fr: ["Cochon de lait rôti", "Tourné à la broche jusqu'à ce que la peau craque"], en: ["Roast suckling pig", "Turned on the spit until the skin crackles"], tag: { fr: "Tous les jours", en: "Every day" }, price: null },
      { fr: ["Travers de porc", ""], en: ["Pork ribs", ""], price: null },
    ]},
    { cat: { fr: "Les plats", en: "Mains" }, icon: "leaf", items: [
      { fr: ["Joue de cochon braisée", "Cuite des heures, purée maison"], en: ["Braised pork cheek", "Slow-cooked for hours, house mash"], price: null },
      { fr: ["Plume de cochon au gorgonzola", ""], en: ["Pork pluma with gorgonzola", ""], price: null },
      { fr: ["Faux-filet", ""], en: ["Sirloin steak", ""], price: null },
      { fr: ["Tartare de Charolais", ""], en: ["Charolais beef tartare", ""], price: null },
      { fr: ["Frites", "Celles dont on nous parle dans presque chaque avis"], en: ["Fries", "The ones nearly every review mentions"], price: null },
    ]},
    { cat: { fr: "Pour finir", en: "To finish" }, icon: "star", items: [
      { fr: ["Tiramisu maison", ""], en: ["House tiramisu", ""], tag: { fr: "Culte", en: "Legendary" }, price: null },
      { fr: ["Cheesecake", ""], en: ["Cheesecake", ""], price: null },
      { fr: ["Baba au rhum", ""], en: ["Rum baba", ""], price: null },
      { fr: ["Café gourmand", ""], en: ["Café gourmand", "Coffee with a trio of mini desserts"], price: null },
    ]},
  ];

  /* ---------- Avis Google (extraits publics, tels quels) ---------- */
  const REVIEWS = [
    { q: "Mention spéciale pour le cochon grillé, absolument délicieux : viande tendre", who: "Stéphane L.", c: "pink", r: -1.2 },
    { q: "Le rapport qualité quantité prix est au rendez-vous. Les cuissons sont toujours parfaitement exécutées", who: "Thomas L.", c: "paper", r: .8 },
    { q: "Une véritable petite pépite ne changez rien ! On reviendra à coups sûrs", who: "Constance D.", c: "yellow", r: 1.1 },
    { q: "Les assiettes sont généreuses, les vins sont raisonnables.. bref on se régale", who: "Twentycent L.", c: "green", r: -.7 },
    { q: "Les plats sont énormes ! Super copieux, très bon rapport qualité", who: "Monica F.", c: "cobalt", r: .6 },
    { q: "Generous portions and yummy food.", who: "I. J.", c: "pink", r: -1, l: "en" },
  ];

  /* ---------- Horaires (heure de Paris). [ouverture, fermeture] en minutes ---------- */
  const L = [12 * 60, 14 * 60 + 30], D = [19 * 60, 24 * 60];
  const HOURS = { 0: [], 1: [L], 2: [L], 3: [L, D], 4: [L, D], 5: [L, D], 6: [D] };

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "fr";

  /* ---------- Formes de papier ---------- */
  const scallop = (r, n, depth) => {
    let d = "";
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + .5) / n) * Math.PI * 2, a2 = ((i + 1) / n) * Math.PI * 2;
      const p = (a, rr) => `${(Math.cos(a) * rr).toFixed(2)} ${(Math.sin(a) * rr).toFixed(2)}`;
      d += (i ? "" : `M${p(a0, r - depth)}`) + `Q${p(a1, r + depth)} ${p(a2, r - depth)}`;
    }
    return d + "Z";
  };
  const star = (ro, ri, n) => {
    let d = "";
    for (let i = 0; i < n * 2; i++) {
      const a = (i / (n * 2)) * Math.PI * 2 - Math.PI / 2, r = i % 2 ? ri : ro;
      d += `${i ? "L" : "M"}${(Math.cos(a) * r).toFixed(2)} ${(Math.sin(a) * r).toFixed(2)}`;
    }
    return d + "Z";
  };
  const edge = (w, h, n) => {
    const s = w / n;
    let d = `M0 ${h}V${h * .55}`;
    for (let i = 0; i < n; i++) d += `Q${(i + .5) * s} ${-h * .25} ${(i + 1) * s} ${h * .55}`;
    return d + `V${h}Z`;
  };

  function buildShapes() {
    $("#r-scallop-out").setAttribute("d", scallop(186, 28, 9));
    $("#r-scallop-mid").setAttribute("d", scallop(163, 40, 5));
    $("#r-sun").setAttribute("d", star(150, 122, 20));
    const dots = $("#r-dots");
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", (Math.cos(a) * 106).toFixed(2));
      c.setAttribute("cy", (Math.sin(a) * 106).toFixed(2));
      c.setAttribute("r", i % 2 ? 2.4 : 4);
      dots.appendChild(c);
    }
    // Nuages découpés : bosses de largeurs variées, du bord gauche au bord droit
    const cloud = (base, widths, lift, phase) => {
      let x = -40, i = phase, d = `M-40 140V${base}`;
      while (x < 1480) {
        const w = widths[i % widths.length], h = lift * (0.7 + (i * 37 % 10) / 22);
        d += `C${x + w * .1} ${base - h} ${x + w * .9} ${base - h} ${x + w} ${base}`;
        x += w; i++;
      }
      return d + `V140Z`;
    };
    $("#cloud-back").setAttribute("d", cloud(78, [150, 118, 176, 132, 160, 124], 62, 0));
    $("#cloud-front").setAttribute("d", cloud(104, [112, 140, 96, 128, 104, 150], 46, 3));
    ["#edge-a", "#edge-b", "#edge-c"].forEach((id, k) => $(id).setAttribute("d", edge(1440, 60, [24, 30, 20][k])));
  }

  const ICONS = {
    flower: '<svg viewBox="-12 -12 24 24" aria-hidden="true"><path fill="#0f8a56" d="M0-11C4-11 4-4 0-3 4-4 11-4 11 0S4 4 0 3c4 1 4 8 0 8S-4 4 0 3c-4 1-11 1-11-3S-4-4 0-3c-4-1-4-8 0-8Z"/><circle r="3.4" fill="#f6c230"/></svg>',
    sun: '<svg viewBox="-12 -12 24 24" aria-hidden="true"><path fill="#ec4a2c" d="' + star(12, 7, 10) + '"/><circle r="5" fill="#f6c230"/></svg>',
    leaf: '<svg viewBox="-12 -12 24 24" aria-hidden="true"><path fill="#2443c4" d="M-10 10C-10-4-2-11 10-10 11 2 4 10-10 10Z"/><path fill="#f28ba8" d="M-7 7C-6-1-1-6 6-7 6 1 2 6-7 7Z"/></svg>',
    star: '<svg viewBox="-12 -12 24 24" aria-hidden="true"><path fill="#d94775" d="' + star(12, 5, 6) + '"/></svg>',
  };

  /* ---------- Rendu ---------- */
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function renderMenu() {
    $("#menu-list").innerHTML = MENU.map((c) => `
      <div class="cat">
        <h3>${ICONS[c.icon]}<span>${c.cat[lang]}</span>${ICONS[c.icon]}</h3>
        <ul>${c.items.map((it) => {
          const [name, desc] = it[lang];
          const right = it.price ? `<span class="dish__lead" aria-hidden="true"></span><span class="dish__price">${esc(it.price)}</span>`
            : it.tag ? `<span class="dish__lead" aria-hidden="true"></span><span class="dish__tag">${it.tag[lang]}</span>` : "";
          return `<li class="dish"><div class="dish__row"><span class="dish__name">${esc(name)}</span>${right}</div>${desc ? `<p class="dish__desc">${esc(desc)}</p>` : ""}</li>`;
        }).join("")}</ul>
      </div>`).join("");
  }

  function renderReviews() {
    $("#review-list").innerHTML = REVIEWS.map((r) => `
      <li class="strip strip--${r.c}" style="--r:${r.r}deg">
        <figure style="margin:0"><blockquote lang="${r.l || "fr"}">« ${esc(r.q)} »</blockquote>
        <figcaption>${esc(r.who)} · Google</figcaption></figure>
      </li>`).join("");
  }

  function parisNow() {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: +get("hour") * 60 + +get("minute") };
  }

  function renderHours() {
    const t = T[lang], now = parisNow();
    const f = (m) => t.fmt(Math.floor(m / 60), m % 60);
    const order = [1, 2, 3, 4, 5, 6, 0];
    $("#hours-body").innerHTML = order.map((d) => {
      const s = HOURS[d];
      const txt = s.length ? s.map(([a, b]) => `${f(a)}–${f(b === 1440 ? 0 : b)}`).join(t.and) : t.closed;
      return `<tr class="${d === now.day ? "is-today" : ""}"><th scope="row">${t.days[d]}</th><td class="${s.length ? "" : "is-closed"}">${txt}</td></tr>`;
    }).join("");

    const open = HOURS[now.day].find(([a, b]) => now.min >= a && now.min < b);
    let msg, ok = !!open;
    if (open) msg = t.openNow(f(open[1] === 1440 ? 0 : open[1]));
    else {
      for (let k = 0; k < 8; k++) {
        const d = (now.day + k) % 7;
        const next = HOURS[d].find(([a]) => k > 0 || a > now.min);
        if (next) { msg = t.closedNow(k === 0 ? t.today : k === 1 ? t.tomorrow : t.days[d].toLowerCase(), f(next[0])); break; }
      }
    }
    $("#status").innerHTML = `<svg viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="7" fill="${ok ? "#0f8a56" : "#ec4a2c"}"/></svg><span>${msg}</span>`;
  }

  function setLang(l) {
    lang = l;
    const t = T[l];
    document.documentElement.lang = l;
    $$("[data-i18n]").forEach((el) => { const v = t[el.dataset.i18n]; if (typeof v === "string") el.innerHTML = v; });
    $$("[data-i18n-alt]").forEach((el) => { el.alt = t[el.dataset.i18nAlt]; });
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
    const nav = $("#nav");
    $(".nav__toggle").textContent = nav.classList.contains("is-open") ? t["nav.close"] : t["nav.open"];
    renderMenu(); renderReviews(); renderHours();
    try { localStorage.setItem("acv-lang", l); } catch (e) { /* stockage indisponible */ }
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const nav = $("#nav"), toggle = $(".nav__toggle"), hero = $("#accueil");
    const setOpen = (o) => {
      nav.classList.toggle("is-open", o);
      toggle.setAttribute("aria-expanded", String(o));
      toggle.textContent = T[lang][o ? "nav.close" : "nav.open"];
      document.body.style.overflow = o ? "hidden" : "";
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    $$("#nav-links a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); } });
    $$(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

    new IntersectionObserver(([e]) => nav.classList.toggle("is-solid", !e.isIntersecting), { rootMargin: "-80px 0px 0px" }).observe(hero);

    const links = $$('#nav-links a[href^="#"]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.getAttribute("href") === "#" + e.target.id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main > section[id]").forEach((s) => io.observe(s));
  }

  /* ---------- Mouvement ---------- */
  function initMotion() {
    if (reduce) return;
    const media = $(".hero__media"), back = $(".hero__clouds--back"), front = $(".hero__clouds--front"), spin = $(".rosace__spin");
    const rosace = $("#rosace");
    let ticking = false;
    const frame = () => {
      const y = scrollY, vh = innerHeight;
      if (y < vh * 1.2) {
        media.style.transform = `translate3d(0, ${y * .28}px, 0)`;
        back.style.transform = `translate3d(0, ${-y * .06}px, 0)`;
        front.style.transform = `translate3d(0, ${-y * .12}px, 0)`;
      }
      const r = rosace.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) spin.style.transform = `rotate(${((r.top + r.height / 2 - vh / 2) * -.05).toFixed(2)}deg)`;
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
    frame();

    // Collage couche par couche : visible par défaut, l'animation ne s'arme que hors écran
    const arm = (el, onIn) => {
      if (el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add("is-pending");
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        requestAnimationFrame(() => { onIn(el); });
        io.disconnect();
      }, { threshold: .25 });
      io.observe(el);
    };
    arm(rosace, (el) => { el.classList.add("is-in"); el.classList.remove("is-pending"); });
    $$(".strip").forEach((s, i) => arm(s, (el) => { el.style.transitionDelay = `${(i % 2) * 120}ms`; el.classList.remove("is-pending"); }));
  }

  /* ---------- Démarrage ---------- */
  buildShapes();
  let saved = null;
  try { saved = localStorage.getItem("acv-lang"); } catch (e) { /* stockage indisponible */ }
  const initial = saved || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en");
  setLang(initial === "en" ? "en" : "fr");
  initNav();
  initMotion();
  setInterval(renderHours, 60000);
})();
