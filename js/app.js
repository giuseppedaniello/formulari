(function () {
  'use strict';

  const F = window.FORMULARI;

  /* ---------- stringhe dell'interfaccia (IT / EN) ---------- */
  const UI = {
    it: {
      search: 'Cerca formule, es. "taylor", "laplace", "thevenin"…',
      home: 'Home', copy: 'Copia LaTeX', copied: 'Copiato!', info: 'Significato dei simboli', vars: 'Simboli',
      fbBtn: 'Suggerisci una modifica', fbTitle: 'Suggerisci una modifica', fbType: 'Tipo di segnalazione',
      fbError: 'Errore nella formula o nel testo', fbMissing: 'Manca qualcosa', fbUnclear: 'Poco chiaro', fbOther: 'Altro',
      fbMsg: 'Descrivi la modifica (es. formula corretta, simbolo, fonte)', fbSend: 'Invia', fbCopy: 'Copia testo',
      fbCopied: 'Testo copiato', fbSent: 'Si è aperta la pagina di invio: completa lì la segnalazione.',
      fbNoChannel: 'Nessun canale di invio configurato: copia il testo e mandalo al curatore del formulario.',
      fbEmpty: 'Scrivi almeno una breve descrizione.',
      linkBtn: 'Copia il link a questa voce', linkSec: 'Copia il link a questa sezione', linkCopied: 'Link copiato',
      about: 'Informazioni',
      fAll: 'Tutto', fFormulas: 'Formule', fDefs: 'Definizioni', fThms: 'Teoremi',
      soon: 'presto', formulas: 'formule', sections: 'sezioni', subjects: 'materie',
      noResults: 'Nessun risultato per', results: 'risultati per',
      empty: 'Questa materia è in costruzione: i contenuti arriveranno presto.',
      welcomeSub: 'Raccolta di formule e riferimenti, organizzata per materia.',
      theme: 'Cambia tema'
    },
    en: {
      search: 'Search formulas, e.g. "taylor", "laplace", "thevenin"…',
      home: 'Home', copy: 'Copy LaTeX', copied: 'Copied!', info: 'Meaning of the symbols', vars: 'Symbols',
      fbBtn: 'Suggest an edit', fbTitle: 'Suggest an edit', fbType: 'Type of report',
      fbError: 'Mistake in the formula or text', fbMissing: 'Something is missing', fbUnclear: 'Unclear', fbOther: 'Other',
      fbMsg: 'Describe the change (e.g. correct formula, symbol, source)', fbSend: 'Send', fbCopy: 'Copy text',
      fbCopied: 'Text copied', fbSent: 'The submission page opened: finish your report there.',
      fbNoChannel: 'No submission channel is configured: copy the text and send it to the maintainer.',
      fbEmpty: 'Please write a short description.',
      linkBtn: 'Copy link to this entry', linkSec: 'Copy link to this section', linkCopied: 'Link copied',
      about: 'About',
      fAll: 'All', fFormulas: 'Formulas', fDefs: 'Definitions', fThms: 'Theorems',
      soon: 'soon', formulas: 'formulas', sections: 'sections', subjects: 'subjects',
      noResults: 'No results for', results: 'results for',
      empty: 'This subject is under construction: content is coming soon.',
      welcomeSub: 'A collection of formulas and references, organised by subject.',
      theme: 'Toggle theme'
    }
  };

  /* ---------- stato e storage ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignora */ } }
  };
  let lang = store.get('lang') || ((navigator.language || 'it').startsWith('en') ? 'en' : 'it');
  let pendingSection = null;

  const $ = (s) => document.querySelector(s);
  const t = (x) => (x == null ? '' : typeof x === 'string' ? x : (x[lang] || x.it || ''));
  const ui = (k) => UI[lang][k] || UI.it[k] || k;

  /* ---------- helper DOM ---------- */
  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === 'class') e.className = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) e.setAttribute(k, v);
    }
    kids.flat().forEach((c) => {
      if (c == null || c === false) return;
      e.append(c.nodeType ? c : document.createTextNode(c));
    });
    return e;
  }

  /* testo con math inline $...$ */
  function rich(str) {
    const span = h('span');
    String(str).split(/(\$[^$]+\$)/).forEach((p) => {
      if (p.length > 2 && p[0] === '$' && p.endsWith('$')) {
        const m = h('span');
        try { katex.render(p.slice(1, -1), m, { throwOnError: false }); } catch (e) { m.textContent = p; }
        span.append(m);
      } else if (p) span.append(p);
    });
    return span;
  }

  /* ---------- dati ---------- */
  const subjects = () => F.subjects.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  const byId = (id) => F.subjects.find((s) => s.id === id);
  const countItems = (s) => (s.sections || []).reduce((n, sec) => n + sec.items.length, 0);

  /* ---------- card formula ---------- */
  function copyText(text, btn) {
    const done = () => {
      const old = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check2"></i> ' + ui('copied');
      setTimeout(() => (btn.innerHTML = old), 1200);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, () => fallback());
    } else fallback();
    function fallback() {
      const ta = h('textarea', { style: 'position:fixed;opacity:0' });
      ta.value = text; document.body.append(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* ignora */ }
      ta.remove();
    }
  }

  /* legenda: "simbolo|significato; simbolo|significato" (stringa, {it,en} o array di coppie) */
  function mathSpan(tex) {
    const m = h('span');
    try { katex.render(tex, m, { throwOnError: false }); } catch (e) { m.textContent = tex; }
    return m;
  }
  function parseVars(v) {
    const x = t(v);
    if (!x) return [];
    if (Array.isArray(x)) return x;
    return x.split(/\s*;\s*/).map((p) => { const i = p.indexOf('|'); return i < 0 ? null : [p.slice(0, i).trim(), p.slice(i + 1).trim()]; }).filter(Boolean);
  }

  /* tipi di voce: senza `kind` è una formula; con `kind` è una definizione o un enunciato */
  const KINDS = {
    def:  { group: 'def', it: 'Definizione', en: 'Definition' },
    thm:  { group: 'thm', it: 'Teorema', en: 'Theorem' },
    prop: { group: 'thm', it: 'Proposizione', en: 'Proposition' },
    lem:  { group: 'thm', it: 'Lemma', en: 'Lemma' },
    cor:  { group: 'thm', it: 'Corollario', en: 'Corollary' },
    crit: { group: 'thm', it: 'Criterio', en: 'Test' },
    oss:  { group: 'thm', it: 'Osservazione', en: 'Remark' }
  };
  const groupOf = (item) => (item.kind && KINDS[item.kind] ? KINDS[item.kind].group : 'formula');

  /* ---------- link diretti ---------- */
  const slugify = (x) => String(x || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\$[^$]*\$/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'voce';
  function slugOf(sec, item) {
    const base = slugify(item.title && (item.title.it || item.title));
    let n = 0;
    for (const other of sec.items) {
      if (other === item) break;
      if (slugify(other.title && (other.title.it || other.title)) === base) n++;
    }
    return n ? base + '-' + (n + 1) : base;
  }
  const baseUrl = () => location.origin + location.pathname;
  const linkFor = (ctx, item) => baseUrl() + '#/s/' + ctx.s.id + '/' + ctx.sec.id + (item ? '/' + slugOf(ctx.sec, item) : '');
  function copyLink(url, btn) {
    const done = () => {
      const old = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check2"></i>';
      btn.title = ui('linkCopied');
      setTimeout(() => { btn.innerHTML = old; }, 1200);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done);
    else { const ta = h('textarea', { style: 'position:fixed;opacity:0' }); ta.value = url; document.body.append(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { /* ignora */ } ta.remove(); done(); }
  }

  /* ---------- suggerimenti degli utenti ---------- */
  const FB = ((window.FORMULARI_CONFIG || {}).feedback) || {};
  const fbChannel = () => (FB.github ? 'github' : FB.email ? 'email' : FB.formUrl ? 'form' : '');
  let fbEl = null, fbState = null;

  function fbReport(ctx, item, type, msg) {
    const lines = [
      'Materia: ' + t(ctx.s.title), 'Sezione: ' + t(ctx.sec.title), 'Voce: ' + t(item.title),
      'Link: ' + location.origin + location.pathname + '#/s/' + ctx.s.id, 'Tipo: ' + type, '', msg.trim()
    ];
    return lines.join('\n');
  }

  function openFeedback(ctx, item) {
    if (!fbEl) {
      const sel = h('select', { class: 'form-select mb-2', id: 'fb-type' },
        ...['fbError', 'fbMissing', 'fbUnclear', 'fbOther'].map((k) => h('option', { value: k }, '')));
      const ta = h('textarea', { class: 'form-control', rows: '5', id: 'fb-msg' });
      const alert = h('div', { class: 'small mt-2 text-body-secondary', id: 'fb-help' });
      const sendBtn = h('button', { class: 'btn btn-primary', type: 'button', id: 'fb-send' });
      const copyBtn = h('button', { class: 'btn btn-outline-secondary', type: 'button', id: 'fb-copy' });
      fbEl = h('div', { class: 'modal fade', tabindex: '-1', 'aria-hidden': 'true' },
        h('div', { class: 'modal-dialog modal-dialog-centered' },
          h('div', { class: 'modal-content' },
            h('div', { class: 'modal-header' }, h('h5', { class: 'modal-title', id: 'fb-title' }),
              h('button', { type: 'button', class: 'btn-close', 'data-bs-dismiss': 'modal', 'aria-label': 'Close' })),
            h('div', { class: 'modal-body' },
              h('div', { class: 'small text-body-secondary mb-3', id: 'fb-ctx' }),
              h('label', { class: 'form-label small', for: 'fb-type', id: 'fb-type-l' }), sel,
              h('label', { class: 'form-label small', for: 'fb-msg', id: 'fb-msg-l' }), ta, alert),
            h('div', { class: 'modal-footer' }, copyBtn, sendBtn))));
      document.body.append(fbEl);
      copyBtn.addEventListener('click', () => {
        const txt = fbCollect();
        if (!txt) return;
        const done = () => { $('#fb-help').textContent = ui('fbCopied'); };
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, done); else done();
      });
      sendBtn.addEventListener('click', () => {
        const txt = fbCollect();
        if (!txt) return;
        const ch = fbChannel(), title = '[' + t(fbState.ctx.s.title) + '] ' + t(fbState.item.title);
        if (ch === 'github') {
          window.open('https://github.com/' + FB.github + '/issues/new?title=' + encodeURIComponent(title) +
            '&body=' + encodeURIComponent(txt) + (FB.label ? '&labels=' + encodeURIComponent(FB.label) : ''), '_blank', 'noopener');
        } else if (ch === 'email') {
          location.href = 'mailto:' + FB.email + '?subject=' + encodeURIComponent('Formulari: ' + title) + '&body=' + encodeURIComponent(txt);
        } else if (ch === 'form') {
          if (navigator.clipboard) navigator.clipboard.writeText(txt);
          window.open(FB.formUrl, '_blank', 'noopener');
        }
        $('#fb-help').textContent = ui('fbSent');
      });
    }
    fbState = { ctx, item };
    const set = (sel, txt) => { const e = fbEl.querySelector(sel); if (e) e.textContent = txt; };
    set('#fb-title', ui('fbTitle')); set('#fb-type-l', ui('fbType')); set('#fb-msg-l', ui('fbMsg'));
    set('#fb-send', ui('fbSend')); set('#fb-copy', ui('fbCopy'));
    set('#fb-ctx', t(ctx.s.title) + ' › ' + t(ctx.sec.title) + ' › ' + t(item.title));
    [...fbEl.querySelectorAll('#fb-type option')].forEach((o) => { o.textContent = ui(o.value); });
    fbEl.querySelector('#fb-msg').value = '';
    const ch = fbChannel();
    fbEl.querySelector('#fb-send').hidden = !ch;
    set('#fb-help', ch ? '' : ui('fbNoChannel'));
    bootstrap.Modal.getOrCreateInstance(fbEl).show();
  }
  function fbCollect() {
    const msg = fbEl.querySelector('#fb-msg').value;
    if (!msg.trim()) { fbEl.querySelector('#fb-help').textContent = ui('fbEmpty'); return null; }
    const sel = fbEl.querySelector('#fb-type');
    return fbReport(fbState.ctx, fbState.item, sel.options[sel.selectedIndex].textContent, msg);
  }

  function card(item, crumb, ctx) {
    const lines = item.tex == null ? [] : (Array.isArray(item.tex) ? item.tex : [item.tex]);
    const kind = item.kind && KINDS[item.kind];
    const body = h('div', { class: 'formula' });
    lines.forEach((tx) => {
      const d = h('div');
      katex.render(tx, d, { displayMode: true, throwOnError: false });
      body.append(d);
    });
    const btn = lines.length ? h('button', { class: 'btn btn-sm btn-light border copy-btn', type: 'button', title: ui('copy') },
      h('i', { class: 'bi bi-clipboard' })) : null;
    if (btn) btn.addEventListener('click', () => copyText(lines.join('\n'), btn));
    const rawText = Array.isArray(item.text) ? item.text : t(item.text);
    const paras = [].concat(rawText || []).filter(Boolean);
    const statement = paras.length ? h('div', { class: 'statement' }, ...paras.map((p) => h('p', {}, rich(p)))) : null;
    let legend = null, infoBtn = null;
    const vs = parseVars(item.vars);
    if (vs.length) {
      legend = h('dl', { class: 'formula-vars', hidden: true },
        ...vs.map(([sym, mean]) => [h('dt', {}, mathSpan(sym)), h('dd', {}, rich(mean))]));
      infoBtn = h('button', { class: 'btn btn-sm btn-light border info-btn', type: 'button', title: ui('info') },
        h('i', { class: 'bi bi-info-circle' }));
      infoBtn.addEventListener('click', () => {
        legend.hidden = !legend.hidden;
        infoBtn.classList.toggle('active', !legend.hidden);
      });
    }
    const flag = ctx ? h('button', { class: 'btn btn-sm btn-light border flag-btn', type: 'button', title: ui('fbBtn'), 'aria-label': ui('fbBtn') },
      h('i', { class: 'bi bi-flag' })) : null;
    if (flag) flag.addEventListener('click', () => openFeedback(ctx, item));
    const linkBtn = ctx ? h('button', { class: 'btn btn-sm btn-light border link-btn', type: 'button', title: ui('linkBtn'), 'aria-label': ui('linkBtn') },
      h('i', { class: 'bi bi-link-45deg' })) : null;
    if (linkBtn) linkBtn.addEventListener('click', () => copyLink(linkFor(ctx, item), linkBtn));
    return h('div', { class: 'card formula-card' + (kind ? ' kind-' + item.kind : '') },
      h('div', { class: 'card-body' },
        crumb || null,
        kind ? h('span', { class: 'kind-badge' }, t(kind)) : null,
        h('div', { class: 'card-title' }, rich(t(item.title))),
        statement,
        lines.length ? body : null,
        item.fig ? h('div', { class: 'formula-figs' },
          ...[].concat(item.fig).map((svg) => {
            const d = h('div', { class: 'formula-fig' }); d.innerHTML = svg; return d;
          })) : null,
        legend,
        item.note ? h('div', { class: 'formula-note' }, rich(t(item.note))) : null),
      h('div', { class: 'card-tools' }, linkBtn, flag, infoBtn, btn));
  }

  /* ---------- sidebar ---------- */
  function renderNav(activeId) {
    const nav = $('#nav');
    nav.replaceChildren();
    nav.append(h('a', { class: 'nav-link' + (!activeId ? ' active' : ''), href: '#/' },
      h('i', { class: 'bi bi-house me-2' }), ui('home')));
    F.areas.forEach((area) => {
      const list = subjects().filter((s) => s.area === area.id);
      if (!list.length) return;
      nav.append(h('div', { class: 'area-title' }, t(area.title)));
      list.forEach((s) => {
        const soon = !countItems(s);
        nav.append(h('a', {
          class: 'nav-link d-flex align-items-center' + (s.id === activeId ? ' active' : '') + (soon ? ' soon' : ''),
          href: '#/s/' + s.id
        },
          h('i', { class: 'bi ' + (s.icon || 'bi-book') + ' me-2' }),
          h('span', { class: 'flex-grow-1' }, t(s.title)),
          soon ? h('span', { class: 'badge text-bg-secondary fw-normal' }, ui('soon')) : null));
      });
    });
    nav.append(h('hr', { class: 'my-3' }), h('a', { class: 'nav-link' + (activeId === 'about' ? ' active' : ''), href: '#/about' },
      h('i', { class: 'bi bi-info-circle me-2' }), ui('about')));
  }

  /* ---------- viste ---------- */
    function renderHome() {
    document.title = 'Formulari';
    renderNav(null);
    const main = $('#main');
    main.replaceChildren(
      h('h1', { class: 'display-6 fw-semibold' }, 'Formulari'),
      h('p', { class: 'lead text-body-secondary mb-4' }, ui('welcomeSub')));
    F.areas.forEach((area) => {
      const list = subjects().filter((s) => s.area === area.id);
      if (!list.length) return;
      main.append(h('h2', { class: 'h5 mt-4 mb-3' },
        h('i', { class: 'bi ' + area.icon + ' me-2' }), t(area.title)));
      const row = h('div', { class: 'row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3' });
      list.forEach((s) => {
        const n = countItems(s);
        row.append(h('div', { class: 'col' },
          h('a', { href: '#/s/' + s.id, class: 'text-decoration-none' },
            h('div', { class: 'card subject-card h-100' },
              h('div', { class: 'card-body' },
                h('div', { class: 'd-flex align-items-center mb-1' },
                  h('i', { class: 'bi ' + (s.icon || 'bi-book') + ' fs-4 me-2 text-primary' }),
                  h('span', { class: 'fw-semibold text-body' }, t(s.title))),
                h('div', { class: 'small text-body-secondary' },
                  n ? `${s.sections.length} ${ui('sections')} · ${n} ${ui('formulas')}` : ui('soon')))))));
      });
      main.append(row);
    });
    window.scrollTo(0, 0);
  }

  function renderAbout() {
    document.title = ui('about') + ' · Formulari';
    renderNav('about');
    const main = $('#main');
    let nItems = 0, nDef = 0, nSub = F.subjects.length;
    F.subjects.forEach((s) => (s.sections || []).forEach((sec) => sec.items.forEach((it) => { nItems++; if (it.kind) nDef++; })));
    const repo = ((window.FORMULARI_CONFIG || {}).feedback || {}).github;
    const it = lang === 'it';
    const p = (txt) => h('p', {}, rich(txt));
    main.replaceChildren(
      h('h1', { class: 'display-6 fw-semibold mb-3' }, h('i', { class: 'bi bi-info-circle me-2 text-primary' }), ui('about')),
      p(it ? 'Formulari raccoglie formule, definizioni, teoremi e figure per gli studenti di ingegneria, organizzati per materia e ricercabili.'
           : 'Formulari collects formulas, definitions, theorems and figures for engineering students, organised by subject and searchable.'),
      h('div', { class: 'row g-3 my-3' },
        ...[[nSub, it ? 'materie' : 'subjects'], [nItems, it ? 'voci' : 'entries'], [nDef, it ? 'definizioni ed enunciati' : 'definitions and statements']].map(([n, l]) =>
          h('div', { class: 'col-6 col-md-4' }, h('div', { class: 'card text-center' }, h('div', { class: 'card-body' },
            h('div', { class: 'display-6' }, String(n)), h('div', { class: 'text-body-secondary small' }, l)))))),
      h('h2', { class: 'h5 mt-4' }, it ? 'Come usarlo' : 'How to use it'),
      h('ul', {},
        h('li', {}, rich(it ? 'La ricerca in alto cerca in titoli, testi, formule e simboli, senza distinguere accenti e maiuscole.' : 'The search box looks into titles, texts, formulas and symbols, ignoring accents and case.')),
        h('li', {}, rich(it ? 'Il pulsante ⓘ su ogni formula mostra il significato dei simboli; il pulsante a forma di catena copia il link diretto alla voce.' : 'The ⓘ button shows what each symbol means; the chain button copies a direct link to the entry.')),
        h('li', {}, rich(it ? 'Nelle materie con definizioni e teoremi il filtro in alto separa formule, definizioni ed enunciati.' : 'In subjects with definitions and theorems, the filter on top separates formulas, definitions and statements.')),
        h('li', {}, rich(it ? 'La bandierina permette di suggerire una correzione: indica sempre la formula giusta e, se puoi, la fonte.' : 'The flag lets you suggest a correction: always give the correct formula and, if possible, the source.'))),
      h('h2', { class: 'h5 mt-4' }, it ? 'Attenzione' : 'Please note'),
      p(it ? 'I contenuti sono scritti da studenti e non sostituiscono dispense e libri di testo. Se trovi un errore, segnalalo.'
           : 'The content is written by students and does not replace lecture notes or textbooks. If you find a mistake, please report it.'),
      h('h2', { class: 'h5 mt-4' }, it ? 'Licenza' : 'Licence'),
      p(it ? 'Contenuti: Creative Commons BY-SA 4.0. Codice: licenza MIT. Librerie: Bootstrap, Bootstrap Icons e KaTeX (MIT).'
           : 'Content: Creative Commons BY-SA 4.0. Code: MIT licence. Libraries: Bootstrap, Bootstrap Icons and KaTeX (MIT).'),
      repo ? h('p', {}, h('a', { href: 'https://github.com/' + repo, target: '_blank', rel: 'noopener' },
        h('i', { class: 'bi bi-github me-1' }), 'github.com/' + repo)) : null);
    window.scrollTo(0, 0);
  }

  function renderSubject(id, sectionId, cardSlug) {
    const s = byId(id);
    if (!s) return renderHome();
    document.title = t(s.title) + ' · Formulari';
    renderNav(id);
    const main = $('#main');
    main.replaceChildren(
      h('h1', { class: 'h2 fw-semibold mb-3' }, h('i', { class: 'bi ' + (s.icon || 'bi-book') + ' me-2 text-primary' }), t(s.title)));
    if (!countItems(s)) {
      main.append(h('div', { class: 'alert alert-secondary' }, ui('empty')));
      return;
    }
    const hasKinds = s.sections.some((sec) => sec.items.some((it) => it.kind));
    if (hasKinds) {
      const bar = h('div', { class: 'btn-group btn-group-sm filter-bar mb-3', role: 'group' });
      [['all', 'fAll'], ['formula', 'fFormulas'], ['def', 'fDefs'], ['thm', 'fThms']].forEach(([k, lab]) => {
        bar.append(h('button', {
          type: 'button', class: 'btn btn-outline-primary' + (k === 'all' ? ' active' : ''), 'data-f': k,
          onclick: () => {
            bar.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b.dataset.f === k));
            main.dataset.filter = k;
            main.querySelectorAll('.formula-section').forEach((sec) => {
              sec.hidden = k !== 'all' && !sec.querySelector('.col[data-group="' + k + '"]');
            });
            main.querySelectorAll('.toc button').forEach((b) => { b.hidden = document.getElementById('sec-' + b.dataset.sec).hidden; });
          }
        }, ui(lab)));
      });
      main.dataset.filter = 'all';
      main.append(bar);
    } else delete main.dataset.filter;
    const toc = h('div', { class: 'toc' });
    s.sections.forEach((sec) => {
      toc.append(h('button', {
        class: 'btn btn-sm btn-outline-secondary', type: 'button', 'data-sec': sec.id,
        onclick: () => document.getElementById('sec-' + sec.id).scrollIntoView({ behavior: 'smooth' })
      }, rich(t(sec.title))));
    });
    main.append(toc);
    s.sections.forEach((sec) => {
      const row = h('div', { class: 'row row-cols-1 row-cols-xl-2 g-3' });
      sec.items.forEach((it) => row.append(h('div', { class: 'col', 'data-group': groupOf(it), id: 'c-' + sec.id + '-' + slugOf(sec, it) }, card(it, null, { s, sec }))));
      const secLink = h('button', { class: 'btn btn-sm btn-link anchor-link', type: 'button', title: ui('linkSec'), 'aria-label': ui('linkSec') },
        h('i', { class: 'bi bi-link-45deg' }));
      secLink.addEventListener('click', () => copyLink(linkFor({ s, sec }), secLink));
      main.append(h('section', { class: 'formula-section', id: 'sec-' + sec.id },
        h('h2', { class: 'h4 mb-3 d-flex align-items-center gap-2' }, rich(t(sec.title)), secLink), row));
    });
    const target = cardSlug && document.getElementById('c-' + sectionId + '-' + cardSlug);
    if (target) {
      target.scrollIntoView({ block: 'center', behavior: 'instant' });
      target.firstElementChild.classList.add('flash');
      setTimeout(() => target.firstElementChild.classList.remove('flash'), 2400);
    } else if (sectionId) {
      const el = document.getElementById('sec-' + sectionId);
      if (el) el.scrollIntoView({ behavior: 'instant' });
    } else window.scrollTo({ top: 0, behavior: 'instant' });
  }

  /* ---------- ricerca ---------- */
  const norm = (x) => String(x || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  let index = null;
  function buildIndex() {
    index = [];
    F.subjects.forEach((s) => (s.sections || []).forEach((sec) => sec.items.forEach((it) => {
      const text = norm([
        JSON.stringify(it.title), JSON.stringify(it.note || ''), JSON.stringify(it.text || ''), (it.tags || []).join(' '),
        JSON.stringify(sec.title), JSON.stringify(s.title),
        Array.isArray(it.tex) ? it.tex.join(' ') : (it.tex || '')
      ].join(' '));
      index.push({ s, sec, it, text });
    })));
  }

  function renderSearch(q) {
    if (!index) buildIndex();
    const terms = norm(q).split(/\s+/).filter(Boolean);
    const hits = index.filter((e) => terms.every((w) => e.text.includes(w))).slice(0, 100);
    renderNav(null);
    const main = $('#main');
    main.replaceChildren();
    if (!hits.length) {
      main.append(h('div', { class: 'alert alert-warning' }, `${ui('noResults')} “${q}”`));
      return;
    }
    main.append(h('h1', { class: 'h5 mb-3' }, `${hits.length} ${ui('results')} “${q}”`));
    const row = h('div', { class: 'row row-cols-1 row-cols-xl-2 g-3' });
    hits.forEach((e) => {
      const crumb = h('div', {
        class: 'breadcrumb-mini mb-1',
        onclick: () => go(e.s.id, e.sec.id)
      }, `${t(e.s.title)} › ${t(e.sec.title)}`);
      row.append(h('div', { class: 'col' }, card(e.it, crumb, { s: e.s, sec: e.sec })));
    });
    main.append(row);
    window.scrollTo(0, 0);
  }

  /* ---------- routing ---------- */
  function go(id, sectionId) {
    pendingSection = sectionId || null;
    const target = '#/s/' + id + (sectionId ? '/' + sectionId : '');
    if (location.hash === target) route(); else location.hash = target;
  }

  function route() {
    $('#search').value = '';
    const m = location.hash.match(/^#\/s\/([\w-]+)(?:\/([\w-]+))?(?:\/([\w-]+))?/);
    if (location.hash === '#/about') renderAbout();
    else if (m) renderSubject(m[1], m[2] || pendingSection, m[3]);
    else renderHome();
    pendingSection = null;
    const off = document.getElementById('sidebar');
    const inst = window.bootstrap && bootstrap.Offcanvas.getInstance(off);
    if (inst) inst.hide();
  }

  /* ---------- tema e lingua ---------- */
  function applyTheme(th) {
    document.documentElement.setAttribute('data-bs-theme', th);
    $('#btn-theme').innerHTML = th === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  }
  function initTheme() {
    const saved = store.get('theme');
    applyTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    $('#btn-theme').addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      store.set('theme', next); applyTheme(next);
    });
  }

  function applyLang() {
    document.documentElement.lang = lang;
    $('#search').placeholder = ui('search');
    $('#btn-lang').textContent = lang === 'it' ? 'EN' : 'IT';
    $('#btn-theme').title = ui('theme');
  }
  function refresh() {
    const q = $('#search').value.trim();
    if (q) renderSearch(q); else route();
  }

  /* ---------- avvio ---------- */
  function init() {
    initTheme();
    applyLang();
    $('#btn-lang').addEventListener('click', () => {
      lang = lang === 'it' ? 'en' : 'it';
      store.set('lang', lang); applyLang(); refresh();
    });
    let timer;
    $('#search').addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const q = $('#search').value.trim();
        if (q) renderSearch(q); else route();
      }, 120);
    });
    window.addEventListener('hashchange', route);
    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
