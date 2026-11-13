# Formulari

Pagina statica di formulari (HTML + Bootstrap 5 + KaTeX). Nessun build: apri `index.html`.

## Aggiungere una materia
1. Crea `data/nome-materia.js` copiando la struttura di `data/analisi1.js`.
2. Aggiungi `<script src="data/nome-materia.js"></script>` in `index.html` (prima di `js/app.js`).

## Aggiungere formule
Aggiungi un oggetto `{ title, tex, note?, tags? }` alla lista `items` di una sezione.
- `tex`: LaTeX (usa `String.raw` per non raddoppiare i backslash); array = più righe.
- Testi: `{ it: '...', en: '...' }`. Se manca `en`, si usa l'italiano.
- Nelle note e nei titoli puoi usare math inline con `$...$`.

## Figure e grafici

Ogni formula può avere un campo `fig` (una stringa SVG o un array di stringhe, mostrate affiancate):

```js
{ title: T('Esponenziale', 'Exponential'), tex: r`y=e^x`,
  fig: FORMULARI.fig.plot({ x: [-3, 3], y: [-1, 5], curves: [{ f: Math.exp }] }) }
```

- `FORMULARI.fig.plot({x, y, curves, h, v, pts, labels, xl, yl})`: grafici di funzioni (`f: x=>…`) o curve parametriche (`xy: t=>[x,y], t:[a,b]`, con freccia di direzione); `h`/`v` sono linee tratteggiate, `pts` punti, `labels` testi in coordinate dati.
- `FORMULARI.fig.svg('<…>')`: figure disegnate a mano, coordinate 0–240 × 0–180.
- Classi di colore: `fg-c1/2/3` per le curve, `t1/t2/t3` per i testi, `fg-axis`, `fg-dash`, `fg-fill`, `fg-line`, `fg-pt`. Seguono il tema chiaro/scuro.

## Legenda dei simboli (pulsante ⓘ)

Ogni formula può avere un campo `vars`: una stringa `simbolo|significato; simbolo|significato`. Il simbolo è LaTeX, il significato è testo con `$…$` per la matematica inline. Nelle card compare un pulsante ⓘ che apre/chiude la legenda.

```js
{ title: T('Legge di Ohm', 'Ohm\'s law'), tex: r`v=Ri`,
  vars: r`v|tensione; R|resistenza; i|corrente` }
```

Evita il carattere `|` dentro il simbolo (usa `\lvert x\rvert`, `\Vert x\Vert`). Per tradurre, `vars` accetta anche `T('…it…', '…en…')`.

## Definizioni e enunciati

Una voce con `kind` è una definizione o un enunciato: ha l'etichetta colorata e un `text` (stringa o array di paragrafi, con `$…$` per la matematica; usa `\` nelle stringhe JS normali). La formula `tex` è opzionale.

```js
{ kind: 'thm', title: T('Teorema di Rolle', 'Rolle theorem'),
  text: "Se $f$ è continua su $[a,b]$, derivabile in $(a,b)$ e $f(a)=f(b)$, esiste $\xi\in(a,b)$ ...",
  tex: r`\frac{df}{dx}(\xi)=0`, vars: r`\xi|punto intermedio` }
```

Tipi: `def` (Definizione), `thm` (Teorema), `prop`, `lem`, `cor`, `crit` (Criterio), `oss` (Osservazione). In ogni materia il filtro *Tutto / Formule / Definizioni / Teoremi* mostra solo il tipo scelto.

## Suggerimenti degli utenti

Ogni card ha una bandierina che apre il modulo «Suggerisci una modifica». Il canale di invio si imposta in `js/config.js`:

- `github: 'utente/repo'`: apre una issue precompilata (materia, sezione, voce, link e testo);
- `email: 'nome@dominio.it'`: apre il client di posta con il messaggio precompilato;
- `formUrl: 'https://…'`: copia il testo e apre un modulo (es. Google Forms);
- nessun campo compilato: l'utente può solo copiare il testo e inviarlo da sé.


## Link diretti

Ogni sezione e ogni voce ha un indirizzo stabile, da copiare con il pulsante a forma di catena:

- materia: `#/s/analisi1`
- sezione: `#/s/analisi1/teoremi`
- voce: `#/s/analisi1/teoremi/teorema-di-rolle` (il nome è il titolo italiano senza accenti né simboli, con i trattini)

Se rinomini un titolo, il link alla voce cambia: evitalo per le voci già diffuse.

## Controllo automatico

```bash
node tools/check.js
```

Verifica struttura (id doppi, sezioni vuote, `kind` validi), legende (`vars`), testi (`$` bilanciati, nessun comando LaTeX fuori dalle formule), figure (niente valori non validi) e il rendering KaTeX in modalità rigorosa di ogni formula. Gli avvisi non bloccano; gli errori sì. Lo stesso controllo gira su ogni push e pull request (`.github/workflows/check.yml`).

## Pubblicazione su GitHub Pages

1. Crea il repository e carica tutta la cartella `formulari/` (è già pronta: il sito è statico, senza build).
2. Su GitHub: *Settings → Pages → Build and deployment → Deploy from a branch*, ramo `main`, cartella `/ (root)`.
3. Dopo un minuto il sito è su `https://<utente>.github.io/<repo>/`.
4. In `js/config.js` imposta `feedback.github` a `'utente/repo'` per ricevere i suggerimenti come issue.
5. Sostituisci in `LICENSE` il titolare dei diritti, se vuoi (ora «Autori del Formulari»).

Il sito funziona anche senza connessione dopo il primo caricamento del browser: Bootstrap, icone e KaTeX sono nella cartella `vendor/` (nessuna CDN, nessun tracciamento; il browser salva in locale solo tema e lingua scelti).

## Licenze

Codice: MIT (`LICENSE`). Contenuti: CC BY-SA 4.0 (`LICENSE-CONTENT.md`). Librerie: vedi `vendor/LICENSES.md`.
