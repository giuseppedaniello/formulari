/* Configurazione del formulario.
 *
 * feedback: dove arrivano i suggerimenti di modifica degli utenti (pulsante a forma di bandierina su ogni card).
 * Compila UNO solo dei campi; lasciali tutti vuoti per far copiare il testo all'utente senza invio automatico.
 *
 *   github:  'utente/repository'                     -> apre una nuova issue precompilata (serve il sito pubblicato su GitHub)
 *   label:   'suggerimento'                          -> etichetta opzionale per le issue
 *   email:   'nome@dominio.it'                       -> apre il client di posta con il messaggio precompilato
 *   formUrl: 'https://forms.gle/...'                 -> apre un modulo (Google Forms o simili); il testo viene copiato negli appunti
 */
window.FORMULARI_CONFIG = {
  feedback: { github: '', label: '', email: '', formUrl: '' }
};
