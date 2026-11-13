# Come contribuire

Grazie per aiutarci a migliorare il Formulari. Ci sono tre modi per farlo.

## 1. Segnala una correzione dal sito

Su ogni card c'è una bandierina: apre il modulo «Suggerisci una modifica» e prepara il messaggio con materia, sezione e voce.
Indica sempre la formula (o il testo) corretta e, se puoi, la fonte (libro, dispensa, norma).

## 2. Apri una issue

Usa il modello «Suggerimento di modifica» e compila i campi. Le segnalazioni con fonte vengono verificate per prime.

## 3. Proponi una modifica con una pull request

I contenuti stanno in `data/<materia>.js`, un file per materia (vedi `README.md` per il formato).

```bash
node tools/check.js
```

Il comando controlla sintassi, titoli doppi, simboli delle legende e rendering KaTeX di tutte le formule: deve finire senza errori.
La stessa verifica gira in automatico su ogni pull request.

Regole di stile dei contenuti:

- ogni materia usa le proprie convenzioni di notazione (es. `j` per l'unità immaginaria, `ξ` per lo smorzamento);
- le derivate si scrivono con `\frac{d}{dx}`;
- gli enunciati riportano ipotesi e tesi complete;
- aggiungi sempre la legenda dei simboli (`vars`) dove c'è una formula.
