#!/usr/bin/env node
/* Controllo dei contenuti del formulario.
 *
 *   node tools/check.js
 *
 * Carica registro, figure e tutti i file in data/, poi verifica struttura, legende, testi e rendering KaTeX.
 * Esce con codice 1 se trova errori (gli avvisi non fanno fallire il controllo).
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

global.window = global;
require(path.join(root, 'js/registry.js'));
require(path.join(root, 'js/figs.js'));
const katex = require(path.join(root, 'vendor/katex/katex.min.js'));

const dataDir = path.join(root, 'data');
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.js')).sort();
const errors = [], warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

for (const f of files) {
  try { require(path.join(dataDir, f)); } catch (e) { err(f, 'errore di caricamento: ' + e.message); }
}

const F = global.FORMULARI;
const KINDS = ['def', 'thm', 'prop', 'lem', 'cor', 'crit', 'oss'];
const areaIds = F.areas.map((a) => a.id);
const tr = (x) => (x == null ? '' : typeof x === 'string' ? x : x.it || '');
const trEn = (x) => (x == null ? '' : typeof x === 'string' ? x : x.en || '');

function render(tex, where, display) {
  try { katex.renderToString(tex, { throwOnError: true, displayMode: !!display }); }
  catch (e) { err(where, `KaTeX: ${e.message.split('\n')[0]}  <<  ${tex.slice(0, 70)}`); }
}

/* testo con matematica inline $...$ */
function checkRich(str, where) {
  if (str == null || str === '') return;
  const parts = String(str).split(/(\$[^$]+\$)/);
  let dollars = 0;
  parts.forEach((p) => {
    if (p.length > 2 && p[0] === '$' && p.endsWith('$')) { render(p.slice(1, -1), where, false); dollars += 2; }
    else {
      if (p.includes('$')) err(where, 'simbolo $ non bilanciato: ' + p.slice(0, 60));
      if (/\\[a-zA-Z]/.test(p)) err(where, 'comando LaTeX fuori da $…$: ' + p.slice(0, 60));
    }
  });
}

function parseVars(v) {
  const x = typeof v === 'string' ? v : tr(v);
  return (x || '').split(/\s*;\s*/).filter(Boolean).map((p) => {
    const i = p.indexOf('|');
    return i < 0 ? [null, p] : [p.slice(0, i).trim(), p.slice(i + 1).trim()];
  });
}

let nSub = 0, nSec = 0, nItems = 0, nTitleEn = 0;
const byKind = { formula: 0 }; KINDS.forEach((k) => (byKind[k] = 0));
let withVars = 0, withFig = 0;
const subjectIds = new Set();

for (const s of F.subjects) {
  nSub++;
  const sw = `[${s.id}]`;
  if (subjectIds.has(s.id)) err(sw, 'id materia duplicato');
  subjectIds.add(s.id);
  if (!s.title || !tr(s.title)) err(sw, 'titolo mancante');
  if (!areaIds.includes(s.area)) err(sw, `area sconosciuta "${s.area}"`);
  const secIds = new Set();
  (s.sections || []).forEach((sec) => {
    nSec++;
    const w = `${sw}/${sec.id}`;
    if (secIds.has(sec.id)) err(w, 'id sezione duplicato');
    secIds.add(sec.id);
    if (!sec.title || !tr(sec.title)) err(w, 'titolo sezione mancante');
    if (!sec.items || !sec.items.length) err(w, 'sezione vuota');
    const titles = new Set();
    (sec.items || []).forEach((it, idx) => {
      nItems++;
      const iw = `${w}#${idx + 1} "${tr(it.title)}"`;
      if (!tr(it.title)) err(iw, 'titolo mancante');
      else {
        if (titles.has(tr(it.title))) warn(iw, 'titolo doppio nella stessa sezione');
        titles.add(tr(it.title));
        checkRich(tr(it.title), iw + ' (titolo)');
        if (trEn(it.title)) nTitleEn++;
      }
      if (it.kind) {
        if (!KINDS.includes(it.kind)) err(iw, `kind sconosciuto "${it.kind}"`);
        byKind[it.kind] = (byKind[it.kind] || 0) + 1;
        if (!it.text) err(iw, 'voce di tipo definizione/enunciato senza text');
      } else byKind.formula++;
      if (it.tex == null && !it.text) err(iw, 'né tex né text');
      if (it.tex != null) {
        const lines = Array.isArray(it.tex) ? it.tex : [it.tex];
        lines.forEach((tx) => { if (typeof tx !== 'string' || !tx.trim()) err(iw, 'tex vuoto'); else render(tx, iw, true); });
      }
      if (it.text) {
        const paras = Array.isArray(it.text) ? it.text : [tr(it.text)];
        paras.forEach((p) => checkRich(typeof p === 'string' ? p : tr(p), iw + ' (text)'));
      }
      if (it.note) checkRich(tr(it.note), iw + ' (note)');
      if (it.vars) {
        withVars++;
        const vs = parseVars(it.vars), seen = new Set();
        if (!vs.length) err(iw, 'vars vuoto');
        vs.forEach(([sym, mean]) => {
          if (sym == null || sym === '') { err(iw, 'vars: simbolo mancante in "' + (mean || '').slice(0, 40) + '"'); return; }
          if (!mean) err(iw, `vars: significato mancante per "${sym}"`);
          if (seen.has(sym)) warn(iw, `vars: simbolo ripetuto "${sym}"`);
          seen.add(sym);
          render(sym, iw + ` (vars:${sym})`, false);
          checkRich(mean, iw + ` (vars:${sym})`);
        });
      } else if (it.tex != null) warn(iw, 'formula senza legenda dei simboli (vars)');
      if (it.fig) {
        withFig++;
        [].concat(it.fig).forEach((svg) => {
          if (typeof svg !== 'string' || !svg.includes('<svg')) err(iw, 'fig non è un SVG');
          else if (/NaN|undefined|Infinity/.test(svg)) err(iw, 'fig contiene valori non validi (NaN/undefined/Infinity)');
        });
      }
    });
  });
}

/* ---- riepilogo ---- */
console.log(`Materie: ${nSub}   Sezioni: ${nSec}   Voci: ${nItems}`);
console.log(`Formule: ${byKind.formula}   Definizioni: ${byKind.def}   Enunciati: ${KINDS.slice(1).reduce((n, k) => n + byKind[k], 0)}`);
console.log(`Con legenda: ${withVars}   Con figura: ${withFig}   Titoli in inglese: ${nTitleEn}/${nItems}`);
if (warnings.length) {
  console.log(`\nAvvisi (${warnings.length}):`);
  warnings.slice(0, 15).forEach((w) => console.log('  - ' + w));
  if (warnings.length > 15) console.log(`  … e altri ${warnings.length - 15}`);
}
if (errors.length) {
  console.log(`\nERRORI (${errors.length}):`);
  errors.forEach((e) => console.log('  ✗ ' + e));
  process.exit(1);
}
console.log('\nTutto in ordine.');
