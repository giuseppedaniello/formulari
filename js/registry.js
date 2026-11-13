/* Registro globale: aree e materie.
 * Ogni file in data/ chiama FORMULARI.register({...}).
 *
 * Formato di una materia:
 * {
 *   id: 'analisi1', area: 'math', order: 20, icon: 'bi-graph-up',
 *   title: { it: 'Analisi 1', en: 'Calculus 1' },
 *   sections: [
 *     { id: 'limiti', title: {it, en}, items: [
 *       { title: {it, en},
 *         tex: String.raw`...`  (oppure array di stringhe: più righe),
 *         note: {it, en},   // opzionale; supporta math inline con $...$
 *         tags: ['limite'] } // opzionale, usato dalla ricerca
 *     ]}
 *   ]
 * }
 * Testi: stringa semplice oppure { it, en }. Se manca 'en' si usa 'it'.
 */
window.FORMULARI = {
  areas: [
    { id: 'math', title: { it: 'Matematica', en: 'Mathematics' }, icon: 'bi-infinity' },
    { id: 'methods', title: { it: 'Metodi matematici', en: 'Mathematical methods' }, icon: 'bi-braces-asterisk' },
    { id: 'phys', title: { it: 'Fisica', en: 'Physics' }, icon: 'bi-magnet' },
    { id: 'sys',  title: { it: 'Sistemi e controlli', en: 'Systems & control' }, icon: 'bi-diagram-3' },
    { id: 'elec', title: { it: 'Elettrotecnica ed elettronica', en: 'Electrical engineering & electronics' }, icon: 'bi-lightning-charge' },
    { id: 'ref', title: { it: 'Riferimenti', en: 'Reference' }, icon: 'bi-bookmark-star' }
  ],
  subjects: [],
  register(subject) { this.subjects.push(subject); }
};
