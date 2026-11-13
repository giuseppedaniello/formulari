(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'controlli-automatici', area: 'sys', order: 60, icon: 'bi-sliders',
    title: T('Controlli automatici', 'Automatic control'),
    sections: [
      {
        id: 'def-ca', title: T('Definizioni e teoremi', 'Definitions and theorems'),
        items: [
          { kind: 'def', title: T('Funzione di trasferimento', 'Transfer function'),
            text: "Un sistema lineare tempo-invariante con un ingresso e un'uscita (SISO) è descritto dalla funzione di trasferimento $G(s)$, rapporto tra le trasformate di Laplace dell'uscita e dell'ingresso con condizioni iniziali nulle. Coincide con la trasformata della risposta impulsiva.",
            vars: r`G(s)|funzione di trasferimento; Y(s), U(s)|trasformate di uscita e ingresso; g(t)|risposta impulsiva`,
            tex: r`G(s)=\frac{Y(s)}{U(s)}\Big|_{\text{cond. iniziali nulle}}=\mathcal L\{g(t)\}` },
          { kind: 'def', title: T('Poli, zeri e grado relativo', 'Poles, zeros and relative degree'),
            text: "I poli sono le radici del denominatore di $G(s)$, gli zeri quelle del numeratore (dopo le semplificazioni). Il grado relativo è il numero dei poli meno quello degli zeri: la funzione è propria se è $\\ge0$ e strettamente propria se è $>0$ (condizione di realizzabilità fisica).",
            vars: r`K|guadagno; z_j|zeri; p_i|poli; n, m|numero di poli e di zeri; r|grado relativo`,
            tex: r`G(s)=K\,\frac{\prod_j(s-z_j)}{\prod_i(s-p_i)},\qquad r=n-m` },
          { kind: 'def', title: T('Guadagno statico', 'Static gain'),
            text: "Per un sistema asintoticamente stabile senza poli né zeri nell'origine, il guadagno statico $\\mu=G(0)$ è il valore a regime della risposta al gradino unitario.",
            vars: r`\mu|guadagno statico; y_{\text{gradino}}|risposta al gradino unitario`,
            tex: r`\mu=G(0)=\lim_{t\to\infty}y_{\text{gradino}}(t)` },
          { kind: 'def', title: T('Sistema a fase minima', 'Minimum-phase system'),
            text: "Una funzione di trasferimento è a fase minima se ha poli e zeri tutti a parte reale negativa e guadagno positivo. A parità di modulo ha la minima variazione di fase. Zeri a parte reale positiva danno luogo a un sistema a non minima fase, con risposta al gradino che parte nel verso opposto." },
          { kind: 'thm', title: T('Condizione di stabilità (polinomio di Hurwitz)', 'Stability condition (Hurwitz polynomial)'),
            text: "Un sistema lineare tempo-invariante con funzione di trasferimento in forma irriducibile è BIBO stabile, e asintoticamente stabile, se e solo se tutte le radici del polinomio caratteristico hanno parte reale negativa (polinomio di Hurwitz)." },
          { kind: 'thm', title: T('Criterio di Routh', 'Routh criterion'),
            text: "Il polinomio $a_ns^n+\\dots+a_0$ con $a_n>0$ ha tutte le radici a parte reale negativa se e solo se tutti gli elementi della prima colonna della tabella di Routh sono positivi; il numero di variazioni di segno nella prima colonna è il numero di radici a parte reale positiva. Condizione necessaria: tutti i coefficienti sono non nulli e dello stesso segno.",
            vars: r`a_i|coefficienti del polinomio caratteristico; n|grado`,
            tex: r`a_ns^n+\dots+a_0:\ \ \text{radici in }\operatorname{Re}s<0\iff\text{prima colonna di Routh}>0` },
          { kind: 'thm', title: T('Criterio di Nyquist', 'Nyquist criterion'),
            text: "Sia $L(s)$ la funzione d'anello con $P$ poli a parte reale positiva. Il sistema a ciclo chiuso è asintoticamente stabile se e solo se il diagramma di Nyquist di $L(j\\omega)$, percorso per $\\omega\\in(-\\infty,+\\infty)$, circonda il punto $-1$ in senso antiorario esattamente $P$ volte. In generale i poli instabili a ciclo chiuso sono $Z=P+N$, con $N$ numero di giri orari.",
            vars: r`Z|poli a ciclo chiuso a parte reale positiva; P|poli instabili a ciclo aperto; N|giri orari attorno a $-1$`,
            tex: r`Z=P+N` },
          { kind: 'crit', title: T('Criterio di Bode', 'Bode criterion'),
            text: "Se $L(s)$ è asintoticamente stabile, a fase minima e il suo modulo attraversa $0$ dB una sola volta, il sistema a ciclo chiuso è asintoticamente stabile se e solo se il margine di fase è positivo." },
          { kind: 'def', title: T('Margini di stabilità', 'Stability margins'),
            text: "Il margine di fase è la fase aggiuntiva che porterebbe all'instabilità: $m_\\varphi=180^\\circ+\\angle L(j\\omega_c)$, con $\\omega_c$ pulsazione di attraversamento ($|L|=1$). Il margine di guadagno è il fattore di cui si può aumentare il guadagno: $m_g=1/|L(j\\omega_\\pi)|$ con $\\omega_\\pi$ pulsazione in cui la fase è $-180^\\circ$. Margini maggiori indicano maggiore robustezza.",
            vars: r`m_\varphi|margine di fase; m_g|margine di guadagno; \omega_c|pulsazione di attraversamento; \omega_\pi|pulsazione di fase $-180^\circ$`,
            tex: [r`m_\varphi=180^\circ+\angle L(j\omega_c),\qquad |L(j\omega_c)|=1`, r`m_g=\frac{1}{|L(j\omega_\pi)|},\qquad \angle L(j\omega_\pi)=-180^\circ`] },
          { kind: 'def', title: T('Errore a regime e tipo del sistema', 'Steady-state error and system type'),
            text: "L'errore a regime è il limite dell'errore $e(t)=r(t)-y(t)$ per $t\\to\\infty$. Il tipo del sistema è il numero $g$ di poli nell'origine della funzione d'anello: determina se gradino, rampa e parabola sono inseguiti con errore finito, nullo o infinito." },
          { kind: 'thm', title: T('Principio del modello interno', 'Internal model principle'),
            text: "Per avere errore a regime nullo con un riferimento (o un disturbo) la cui trasformata ha un polo di molteplicità $k$ in $s=0$, la funzione d'anello deve contenere almeno $k$ poli nell'origine: il regolatore deve includere un modello del segnale da inseguire o reiettare.",
            vars: r`e_\infty|errore a regime; r(t)|riferimento; L(s)|funzione d'anello`,
            tex: r`e_\infty=0\ \text{per }r(t)\leftrightarrow\frac1{s^k}\iff L(s)\ \text{ha almeno }k\ \text{poli in }0` },
          { kind: 'def', title: T('Luogo delle radici', 'Root locus'),
            text: "Il luogo delle radici è l'insieme dei poli a ciclo chiuso, ossia delle radici di $1+K\\,L(s)=0$, al variare del guadagno $K$ da $0$ a $+\\infty$. Parte dai poli a ciclo aperto ($K=0$) e termina negli zeri ($K\\to\\infty$) o all'infinito lungo gli asintoti.",
            vars: r`K|guadagno variabile; L(s)|funzione di trasferimento a ciclo aperto`,
            tex: r`1+K\,L(s)=0,\qquad K\in[0,+\infty)` },
          { kind: 'thm', title: T('Regole di tracciamento del luogo', 'Root locus construction rules'),
            text: "Il luogo ha tanti rami quanti i poli $n$ ed è simmetrico rispetto all'asse reale. $m$ rami terminano negli zeri finiti, gli altri $n-m$ tendono all'infinito lungo asintoti che formano con l'asse reale gli angoli indicati e che si incontrano nel punto $\\sigma_a$. Un punto dell'asse reale appartiene al luogo se a destra di esso c'è un numero dispari di poli e zeri reali.",
            vars: r`n, m|numero di poli e di zeri; \theta_k|angoli degli asintoti; \sigma_a|centro degli asintoti; p_i, z_j|poli e zeri`,
            tex: r`\theta_k=\frac{(2k+1)\,180^\circ}{n-m},\qquad \sigma_a=\frac{\sum p_i-\sum z_j}{n-m}` },
          { kind: 'prop', title: T('Vincolo tra sensitività e complementare', 'Sensitivity trade-off'),
            text: "Le funzioni $S=1/(1+L)$ e $T=L/(1+L)$ verificano $S+T=1$: non possono essere entrambe piccole alla stessa pulsazione. Un guadagno d'anello alto in bassa frequenza riduce l'errore e l'effetto dei disturbi ($S\\approx0$), ma se resta alto in alta frequenza amplifica il rumore di misura ($T\\approx1$).",
            vars: r`S|funzione di sensitività; T|sensitività complementare; L|guadagno d'anello`,
            tex: r`S(s)+T(s)=1` },
          { kind: 'def', title: T('Specifiche nel dominio del tempo', 'Time-domain specifications'),
            text: "Sovraelongazione: massimo scostamento percentuale dal valore finale. Tempo di salita: tempo per passare dal $10\\%$ al $90\\%$ del valore finale. Tempo di assestamento: tempo oltre il quale la risposta resta entro una banda (tipicamente $2\\%$ o $5\\%$) del valore finale. Tempo di picco: istante della massima sovraelongazione." },
          { kind: 'thm', title: T('Relazione di Bode tra modulo e fase', 'Bode gain-phase relation'),
            text: "Per un sistema a fase minima la fase è univocamente determinata dal modulo: dove il diagramma asintotico del modulo ha pendenza costante di $-20\\,k$ dB/dec, la fase è circa $-90^\\circ k$. Per questo un buon margine di fase richiede che il modulo attraversi $0$ dB con pendenza non superiore a circa $-20$ dB/dec." },
          { kind: 'def', title: T('Regolatore PID', 'PID controller'),
            text: "Il regolatore PID genera il controllo come somma di tre termini: proporzionale all'errore, proporzionale all'integrale dell'errore (annulla l'errore a regime per ingressi costanti) e proporzionale alla sua derivata (anticipa l'andamento dell'errore e aumenta lo smorzamento).",
            vars: r`u|controllo; e|errore; K_p, K_i, K_d|guadagni proporzionale, integrale, derivativo`,
            tex: r`u(t)=K_p\,e(t)+K_i\int_0^te(\tau)\,d\tau+K_d\,\frac{de}{dt}` },
          { kind: 'oss', title: T('Saturazione e windup', 'Saturation and windup'),
            text: "Se l'attuatore satura, il termine integrale del PID continua ad accumularsi (windup) e provoca sovraelongazioni elevate e transitori lunghi. Le tecniche anti-windup (clamping, back-calculation) limitano o correggono l'integrale quando il controllo è saturato." }
        ]
      },
      {
        id: 'fdt', title: T('Funzione di trasferimento', 'Transfer function'),
        items: [
          { title: T('Forma poli-zeri', 'Pole-zero form'),
            vars: r`K|guadagno (costante); z_i|zeri; p_k|poli`,
            tex: r`G(s)=K\,\frac{\prod_i (s-z_i)}{\prod_k (s-p_k)}` },
          { title: T('Forma di Bode (costanti di tempo)', 'Bode form (time constants)'),
            vars: r`\mu|guadagno statico; g|numero di poli nell'origine (tipo); \tau_i|costanti di tempo degli zeri; T_k|costanti di tempo dei poli`,
            tex: r`G(s)=\frac{\mu}{s^{g}}\,\frac{\prod_i(1+\tau_i s)}{\prod_k(1+T_k s)}`,
            note: T('$\\mu$ guadagno statico, $g$ numero di poli nell\'origine (tipo del sistema).',
                    '$\\mu$ is the static gain, $g$ the number of poles at the origin (system type).') },
          { title: T('Da rappresentazione di stato', 'From state-space'),
            vars: r`A, B, C, D|matrici del sistema; I|identità; s|variabile di Laplace`,
            tex: r`\dot x=Ax+Bu,\ \ y=Cx+Du\ \Rightarrow\ G(s)=C(sI-A)^{-1}B+D` },
          { title: T('Risposta in frequenza', 'Frequency response'),
            vars: r`\omega|pulsazione (rad/s); \lvert G\rvert|modulo (guadagno); \angle G|fase; \lvert G\rvert_{dB}|modulo in decibel`,
            tex: r`G(j\omega)=|G(j\omega)|\,e^{j\angle G(j\omega)},\qquad |G|_{dB}=20\log_{10}|G(j\omega)|` }
        ]
      },
      {
        id: 'ordine1', title: T('Sistemi del primo e secondo ordine', 'First and second order systems'),
        items: [
          { title: T('Primo ordine', 'First order'),
            vars: r`\mu|guadagno statico; \tau|costante di tempo; t|tempo`,
            tex: [r`G(s)=\frac{\mu}{1+\tau s}`, r`y_{\text{gradino}}(t)=\mu\left(1-e^{-t/\tau}\right)`],
            note: T('Assestamento: $t_a\\approx3\\tau$ (5%), $4{,}6\\tau$ (1%).', 'Settling time: $t_s\\approx3\\tau$ (5%), $4.6\\tau$ (1%).') },
          { title: T('Secondo ordine canonico', 'Canonical second order'),
            vars: r`\omega_n|pulsazione naturale; \xi|smorzamento`,
            tex: r`G(s)=\frac{\omega_n^2}{s^2+2\xi\omega_n s+\omega_n^2}`,
            note: T('$\\omega_n$ pulsazione naturale, $\\xi$ smorzamento.', '$\\omega_n$ natural frequency, $\\xi$ damping ratio.') },
          { title: T('Poli', 'Poles'),
            vars: r`\omega_n|pulsazione naturale; \xi|smorzamento (poli complessi per $0<\xi<1$); j|unità immaginaria`,
            tex: r`s_{1,2}=-\xi\omega_n\pm j\omega_n\sqrt{1-\xi^2}\qquad(0<\xi<1)` },
          { title: T('Sovraelongazione', 'Overshoot'),
            vars: r`S\%|sovraelongazione percentuale rispetto al valore finale; \xi|smorzamento`,
            fig: (function () {
  const z = 0.3, y = (t) => 1 - Math.exp(-z * t) / Math.sqrt(1 - z * z) * Math.sin(Math.sqrt(1 - z * z) * t + Math.acos(z));
  const tp = Math.PI / Math.sqrt(1 - z * z), mp = 1 + Math.exp(-Math.PI * z / Math.sqrt(1 - z * z));
  return FORMULARI.fig.plot({ x: [0, 14], y: [0, 1.6], h: [1, mp], v: [tp], xl: 't', yl: 'y',
    curves: [{ f: y }], pts: [[tp, mp]], labels: [{ x: tp, y: 0, t: 'tₚ', dy: 14, dx: -4 }, { x: 6, y: mp, t: 'S%', dy: -4, cls: 't2' }] });
})(),
            tex: r`S\%=100\,e^{-\pi\xi/\sqrt{1-\xi^2}}` },
          { title: T('Tempo di picco e di assestamento', 'Peak and settling time'),
            vars: r`t_p|tempo di picco; t_s|tempo di assestamento (banda al 5%); \omega_n|pulsazione naturale; \xi|smorzamento`,
            tex: [r`t_p=\frac{\pi}{\omega_n\sqrt{1-\xi^2}}`, r`t_s\approx\frac{3}{\xi\omega_n}\ (5\%),\qquad t_s\approx\frac{4.6}{\xi\omega_n}\ (1\%)`] },
          { title: T('Picco di risonanza', 'Resonance peak'),
            vars: r`M_r|picco di risonanza; \omega_r|pulsazione di risonanza; \omega_n|pulsazione naturale; \xi|smorzamento ($\xi<0{,}707$)`,
            tex: r`M_r=\frac{1}{2\xi\sqrt{1-\xi^2}},\qquad \omega_r=\omega_n\sqrt{1-2\xi^2}\qquad(\xi<1/\sqrt2)` }
        ]
      },
      {
        id: 'retroazione', title: T('Retroazione e regime permanente', 'Feedback and steady state'),
        items: [
          { title: T('Funzioni ad anello chiuso', 'Closed-loop functions'),
            vars: r`W(s)|funzione di trasferimento a ciclo chiuso; L(s)|guadagno d'anello; C(s)|controllore; G(s)|processo`,
            tex: r`W(s)=\frac{L(s)}{1+L(s)},\qquad L(s)=C(s)G(s)` },
          { title: T('Sensitività e complementare', 'Sensitivity and complementary'),
            vars: r`S(s)|funzione di sensitività; T(s)|sensitività complementare; L(s)|guadagno d'anello`,
            tex: r`S(s)=\frac{1}{1+L(s)},\qquad T(s)=\frac{L(s)}{1+L(s)},\qquad S+T=1` },
          { title: T('Errore a regime', 'Steady-state error'),
            vars: r`e_\infty|errore a regime; R(s)|trasformata del riferimento; L(s)|guadagno d'anello`,
            tex: r`e_\infty=\lim_{s\to0}s\,\frac{R(s)}{1+L(s)}` },
          { title: T('Costanti di errore', 'Error constants'),
            vars: r`K_p|costante di posizione; K_v|costante di velocità; K_a|costante di accelerazione; L(s)|guadagno d'anello`,
            tex: r`K_p=\lim_{s\to0}L(s),\quad K_v=\lim_{s\to0}sL(s),\quad K_a=\lim_{s\to0}s^2L(s)`,
            note: T('Errore a gradino $\\frac{1}{1+K_p}$, a rampa $\\frac{1}{K_v}$, a parabola $\\frac{1}{K_a}$ (ingressi unitari).',
                    'Step error $\\frac{1}{1+K_p}$, ramp $\\frac{1}{K_v}$, parabola $\\frac{1}{K_a}$ (unit inputs).') }
        ]
      },
      {
        id: 'stabilita', title: T('Stabilità', 'Stability'),
        items: [
          { title: T('Margini di stabilità', 'Stability margins'),
            vars: r`m_\varphi|margine di fase; m_g|margine di guadagno; \omega_c|pulsazione di attraversamento ($\lvert L\rvert=1$); \omega_\pi|pulsazione in cui la fase vale $-180^\circ$`,
            tex: [r`m_\varphi=180^\circ+\angle L(j\omega_c),\qquad |L(j\omega_c)|=1`,
                  r`m_g=\frac{1}{|L(j\omega_\pi)|},\qquad \angle L(j\omega_\pi)=-180^\circ`],
            note: T('Margine di fase e margine di guadagno.', 'Phase margin and gain margin.') }
        ]
      },
      {
        id: 'pid', title: T('Regolatori PID', 'PID controllers'),
        items: [
          { title: T('Forma ideale', 'Ideal form'),
            vars: r`K_p|guadagno proporzionale; T_i|tempo integrale; T_d|tempo derivativo; K_i, K_d|guadagni integrale e derivativo`,
            tex: r`C(s)=K_p\left(1+\frac{1}{T_is}+T_ds\right)=K_p+\frac{K_i}{s}+K_ds`,
            note: T('$K_i=K_p/T_i$, $K_d=K_pT_d$.', '$K_i=K_p/T_i$, $K_d=K_pT_d$.') },
          { title: T('Ziegler-Nichols (anello chiuso)', 'Ziegler-Nichols (closed loop)'),
            vars: r`K_u|guadagno critico (oscillazione sostenuta); T_u|periodo delle oscillazioni; K_p, T_i, T_d|parametri del regolatore`,
            tex: [r`\text{P:}\ K_p=0.5K_u`,
                  r`\text{PI:}\ K_p=0.45K_u,\ T_i=\frac{T_u}{1.2}`,
                  r`\text{PID:}\ K_p=0.6K_u,\ T_i=\frac{T_u}{2},\ T_d=\frac{T_u}{8}`],
            note: T('$K_u$ guadagno critico, $T_u$ periodo delle oscillazioni sostenute.', '$K_u$ ultimate gain, $T_u$ period of sustained oscillation.') }
        ]
      },
      {
        id: 'modelli', title: T('Modelli fisici ricorrenti', 'Common physical models'),
        items: [
          { title: T('Massa-molla-smorzatore', 'Mass-spring-damper'),
            vars: r`m|massa; b|coefficiente di smorzamento; k|rigidezza della molla; x|posizione; F|forza applicata; \omega_n|pulsazione naturale; \xi|smorzamento`,
            tex: [r`m\ddot x+b\dot x+kx=F\ \Rightarrow\ G(s)=\frac{1}{ms^2+bs+k}`, r`\omega_n=\sqrt{\frac km},\qquad \xi=\frac{b}{2\sqrt{km}},\qquad \mu=\frac1k`] },
          { title: T('Motore in corrente continua', 'DC motor'),
            vars: r`v|tensione di armatura; i|corrente; R|resistenza; L|induttanza; K_e|costante di forza controelettromotrice; K_t|costante di coppia; \omega|velocità angolare; J|inerzia; B|attrito viscoso`,
            tex: [r`v=Ri+L\frac{di}{dt}+K_e\omega,\qquad J\dot\omega+B\omega=K_ti`,
                  r`\frac{\Omega(s)}{V(s)}=\frac{K_t}{(Ls+R)(Js+B)+K_tK_e}`] },
          { title: T('Motore DC con $L\\approx0$', 'DC motor with $L\\approx0$'),
            vars: r`K|guadagno statico; \tau_m|costante di tempo meccanica; \Omega|velocità angolare; V|tensione`,
            tex: r`\frac{\Omega(s)}{V(s)}=\frac{K}{1+\tau_ms},\quad K=\frac{K_t}{RB+K_tK_e},\quad \tau_m=\frac{RJ}{RB+K_tK_e}` },
          { title: T('Circuito RC e RLC serie', 'RC and series RLC'),
            vars: r`V_C|tensione sul condensatore; V_i|tensione d'ingresso; R, L, C|resistenza, induttanza, capacità`,
            tex: [r`\frac{V_C}{V_i}=\frac{1}{1+sRC}`, r`\frac{V_C}{V_i}=\frac{1}{LCs^2+RCs+1},\quad \omega_n=\frac{1}{\sqrt{LC}},\ \xi=\frac R2\sqrt{\frac CL}`] },
          { title: T('Sistema termico', 'Thermal system'),
            vars: r`C_{th}|capacità termica; R_{th}|resistenza termica; T|temperatura; T_a|temperatura ambiente; P|potenza fornita`,
            tex: r`C_{th}\dot T=P-\frac{T-T_a}{R_{th}}\ \Rightarrow\ G(s)=\frac{R_{th}}{1+sR_{th}C_{th}}` },
          { title: T('Serbatoio', 'Tank'),
            vars: r`A|sezione del serbatoio; h|livello; q_{in}|portata in ingresso; R_f|resistenza idraulica`,
            tex: r`A\dot h=q_{in}-\frac{h}{R_f}\ \Rightarrow\ G(s)=\frac{R_f}{1+sAR_f}` },
          { title: T('Integratore e ritardo puro', 'Integrator and pure delay'),
            vars: r`K|guadagno; \tau|ritardo temporale; s|variabile di Laplace`,
            tex: r`G(s)=\frac{K}{s},\qquad G(s)=e^{-s\tau},\ \ \text{approssimazione di Padé: }e^{-s\tau}\approx\frac{1-s\tau/2}{1+s\tau/2}` }
        ]
      },
      {
        id: 'bode', title: T('Diagrammi di Bode', 'Bode plots'),
        items: [
          { title: T('Costante e polo nell\'origine', 'Constant and pole at origin'),
            vars: r`K|guadagno; g|numero di poli nell'origine`,
            tex: r`K:\ 20\log_{10}|K|\ \text{dB};\qquad \frac{1}{s^g}:\ -20g\ \mathrm{dB/dec},\ \ \text{fase }-90^\circ g` },
          { title: T('Polo reale', 'Real pole'),
            vars: r`T|costante di tempo del polo; \omega|pulsazione`,
            fig: (function () {
  const mag = (x) => -10 * Math.log10(1 + Math.pow(10, 2 * x));
  return FORMULARI.fig.plot({ x: [-2, 2], y: [-40, 6], v: [0], xl: 'log ω', yl: 'dB',
    curves: [{ f: mag, cls: 'fg-c1' }, { f: (x) => (x < 0 ? 0 : -20 * x), cls: 'fg-c2' }],
    pts: [[0, -3.01]], labels: [{ x: 0.15, y: -14, t: '−20 dB/dec', cls: 't2' }, { x: 0.05, y: 4, t: 'ω = 1/T' }] });
})(),
            tex: r`\frac{1}{1+sT}:\ \text{taglio }\omega=\tfrac1T,\ \ -20\ \mathrm{dB/dec},\ \ \text{fase }0\to-90^\circ\ (-45^\circ\text{ in }\omega=\tfrac1T)` },
          { title: T('Zero reale', 'Real zero'),
            vars: r`\tau|costante di tempo dello zero`,
            tex: r`1+s\tau:\ \text{taglio }\omega=\tfrac1\tau,\ \ +20\ \mathrm{dB/dec},\ \ \text{fase }0\to+90^\circ` },
          { title: T('Coppia di poli complessi', 'Complex pole pair'),
            vars: r`\omega_n|pulsazione naturale; \xi|smorzamento`,
            fig: (function () {
  const g = (z) => (x) => { const u = Math.pow(10, x); return -10 * Math.log10(Math.pow(1 - u * u, 2) + Math.pow(2 * z * u, 2)); };
  return FORMULARI.fig.plot({ x: [-1, 1], y: [-40, 25], v: [0], xl: 'log ω/ωₙ', yl: 'dB',
    curves: [{ f: g(0.1), cls: 'fg-c2' }, { f: g(0.3), cls: 'fg-c3' }, { f: g(0.7), cls: 'fg-c1' }],
    labels: [{ x: -0.95, y: 17, t: 'ξ=0,1', cls: 't2' }, { x: 0.25, y: -3, t: 'ξ=0,3', cls: 't3', dy: -4 }, { x: 0.35, y: -14, t: 'ξ=0,7', cls: 't1' }] });
})(),
            tex: r`\frac{\omega_n^2}{s^2+2\xi\omega_ns+\omega_n^2}:\ -40\ \mathrm{dB/dec},\ \ \text{fase }0\to-180^\circ,\ \ |G(j\omega_n)|=\frac{1}{2\xi}` },
          { title: T('Ritardo puro', 'Pure delay'),
            vars: r`\tau|ritardo; \omega|pulsazione`,
            tex: r`|e^{-j\omega\tau}|=1,\qquad \angle e^{-j\omega\tau}=-\omega\tau` },
          { title: T('Margine di fase e smorzamento', 'Phase margin and damping'),
            vars: r`\xi|smorzamento; m_\varphi|margine di fase in gradi`,
            tex: r`\xi\approx\frac{m_\varphi[^\circ]}{100}\quad(m_\varphi\lesssim60^\circ)` },
          { title: T('Banda passante a ciclo chiuso (secondo ordine)', 'Closed-loop bandwidth (2nd order)'),
            vars: r`\omega_{BW}|banda passante a $-3$ dB; \omega_n|pulsazione naturale; \xi|smorzamento`,
            tex: r`\omega_{BW}=\omega_n\sqrt{1-2\xi^2+\sqrt{4\xi^4-4\xi^2+2}}` },
          { title: T('Tempo di salita', 'Rise time'),
            vars: r`t_r|tempo di salita (da 10% a 90%); \tau|costante di tempo; \omega_n|pulsazione naturale; \xi|smorzamento`,
            tex: r`\text{1° ordine (10–90\%): }t_r\approx2.2\,\tau;\qquad \text{2° ordine: }t_r\approx\frac{1+1.1\xi+1.4\xi^2}{\omega_n}` }
        ]
      },
      {
        id: 'luogo', title: T('Luogo delle radici', 'Root locus'),
        items: [
          { title: T('Equazione e condizioni', 'Equation and conditions'),
            vars: r`K|guadagno variabile; G(s)|funzione di trasferimento a ciclo aperto; s|punto del piano complesso`,
            tex: [r`1+K\,G(s)=0`, r`\text{modulo: }K=\frac{1}{|G(s)|},\qquad \text{fase: }\angle G(s)=\pm180^\circ(2k+1)`] },
          { title: T('Rami e asintoti', 'Branches and asymptotes'),
            vars: r`n|numero di poli; m|numero di zeri; \theta|angolo degli asintoti; \sigma|baricentro degli asintoti; p_i, z_j|poli e zeri`,
            fig: FORMULARI.fig.plot({ x: [-3, 1], y: [-2.6, 2.6], xl: 'Re', yl: 'Im',
  curves: [{ xy: (t) => [t, 0], t: [-2, 0], cls: 'fg-c1', arrow: false }, { xy: (t) => [-1, t], t: [0, 2.6], cls: 'fg-c1', arrow: false }, { xy: (t) => [-1, -t], t: [0, 2.6], cls: 'fg-c1', arrow: false }],
  pts: [[0, 0], [-2, 0]], labels: [{ x: 0, y: 0, t: 'p₁', dx: -4, dy: 16 }, { x: -2, y: 0, t: 'p₂', dx: -4, dy: 16 }, { x: -1, y: 1.4, t: 'σ = −1', dx: 6, cls: 't1' }] }),
            tex: [r`n\ \text{rami},\ \ m\ \text{zeri finiti},\ \ n-m\ \text{asintoti}`,
                  r`\theta_k=\frac{(2k+1)180^\circ}{n-m},\qquad \sigma_a=\frac{\sum p_i-\sum z_j}{n-m}`] },
          { title: T('Asse reale', 'Real axis'),
            vars: r`luogo|insieme dei poli a ciclo chiuso al variare di $K$`,
            tex: r`\text{un punto dell'asse reale è nel luogo se a destra ci sono}\ \text{un numero dispari di poli e zeri reali}` },
          { title: T('Punti di diramazione', 'Break points'),
            vars: r`K|guadagno; G(s)|funzione di trasferimento; s|punto sull'asse reale`,
            tex: r`\frac{dK}{ds}=0,\qquad K=-\frac{1}{G(s)}` },
          { title: T('Angolo di partenza da un polo complesso', 'Angle of departure'),
            vars: r`\theta_p|angolo di partenza; p|polo considerato; p_i|altri poli; z_j|zeri`,
            tex: r`\theta_p=180^\circ+\sum\angle(p-z_j)-\sum_{i\ne p}\angle(p-p_i)` }
        ]
      },
      {
        id: 'specifiche', title: T('Specifiche e piano $s$', 'Specifications and the $s$-plane'),
        items: [
          { title: T('Smorzamento da sovraelongazione', 'Damping from overshoot'),
            vars: r`\xi|smorzamento; S|sovraelongazione percentuale`,
            tex: r`\xi=\frac{-\ln(S/100)}{\sqrt{\pi^2+\ln^2(S/100)}}` },
          { title: T('Posizione dei poli', 'Pole location'),
            vars: r`\xi|smorzamento; \beta|angolo del polo dall'asse reale negativo; \omega_n|modulo del polo $\lvert p\rvert$; t_s|tempo di assestamento`,
            tex: r`\xi=\cos\beta,\qquad \omega_n=|p|,\qquad t_s\approx\frac{3}{|\operatorname{Re}p|}`,
            note: T('$\\beta$: angolo del polo rispetto all\'asse reale negativo.', '$\\beta$: pole angle from the negative real axis.') },
          { title: T('Poli dominanti', 'Dominant poles'),
            vars: r`poli dominanti|poli più vicini all'asse immaginario, che determinano la risposta`,
            tex: r`\text{poli con }|\operatorname{Re}|\ \text{5–10 volte più piccolo degli altri dominano la risposta}` },
          { title: T('Margini e picco della sensitività', 'Margins and sensitivity peak'),
            vars: r`M_s|picco della sensitività; S(j\omega)|sensitività; m_\varphi|margine di fase; m_g|margine di guadagno`,
            tex: r`M_s=\max_\omega|S(j\omega)|:\qquad m_\varphi\ge2\arcsin\frac{1}{2M_s},\qquad m_g\ge\frac{M_s}{M_s-1}` }
        ]
      },
      {
        id: 'compensatori', title: T('Reti correttrici', 'Compensators'),
        items: [
          { title: T('Rete anticipatrice', 'Lead network'),
            vars: r`\tau|costante di tempo dello zero; \alpha|rapporto fra poli e zeri; \varphi_{\max}|massimo anticipo di fase; \omega_m|pulsazione del massimo anticipo`,
            tex: [r`C(s)=\frac{1+\tau s}{1+\alpha\tau s},\quad 0<\alpha<1`,
                  r`\varphi_{\max}=\arcsin\frac{1-\alpha}{1+\alpha}\ \ \text{in}\ \ \omega_m=\frac{1}{\tau\sqrt\alpha}`] },
          { title: T('Rete ritardatrice', 'Lag network'),
            vars: r`\tau|costante di tempo dello zero; \alpha|rapporto fra poli e zeri`,
            tex: r`C(s)=\frac{1+\tau s}{1+\alpha\tau s},\quad \alpha>1;\qquad \text{attenuazione ad alta frequenza }\tfrac1\alpha` },
          { title: T('PD e PI', 'PD and PI'),
            vars: r`K_p|guadagno proporzionale; T_d|tempo derivativo; T_i|tempo integrale`,
            tex: r`C_{PD}=K_p(1+T_ds),\qquad C_{PI}=K_p\left(1+\frac{1}{T_is}\right)` },
          { title: T('PID con filtro sulla derivata', 'PID with derivative filter'),
            vars: r`K_p|guadagno proporzionale; T_i|tempo integrale; T_d|tempo derivativo; N|coefficiente del filtro sulla derivata`,
            tex: r`C(s)=K_p\left(1+\frac{1}{T_is}+\frac{T_ds}{1+T_ds/N}\right),\quad N\approx5\text{–}20` },
          { title: T('Anti-windup (back-calculation)', 'Anti-windup (back-calculation)'),
            vars: r`I|termine integrale; e|errore; T_t|costante di tracking; u_{sat}|uscita saturata; u|uscita non saturata`,
            tex: r`\dot I=\frac{K_p}{T_i}\,e+\frac{1}{T_t}(u_{sat}-u)` }
        ]
      },
      {
        id: 'errore-tipo', title: T('Tipo del sistema ed errore a regime', 'System type and steady-state error'),
        items: [
          { title: T('Errori a regime per ingressi canonici', 'Steady-state errors'),
            vars: r`tipo|numero di integratori in $L(s)$; K_p, K_v, K_a|costanti di errore`,
            tex: r`\begin{array}{c|ccc}\text{tipo}&\text{gradino}&\text{rampa}&\text{parabola}\\\hline0&\frac{1}{1+K_p}&\infty&\infty\\1&0&\frac{1}{K_v}&\infty\\2&0&0&\frac{1}{K_a}\end{array}` },
          { title: T('Risposta ai disturbi', 'Disturbance response'),
            vars: r`Y|uscita; R|riferimento; D_y, D_u|disturbi in uscita e sul processo; N|rumore di misura; S, T|sensitività e complementare; G|processo`,
            tex: r`Y=T\,R+S\,D_y+G\,S\,D_u-T\,N` },
          { title: T('Sensitività alle variazioni del processo', 'Sensitivity to plant variations'),
            vars: r`T|sensitività complementare; G|processo; S|funzione di sensitività`,
            tex: r`\frac{dT/T}{dG/G}=S(s)` }
        ]
      },

      {
        id: 'risposte-grafici', title: T('Risposte al gradino (grafici)', 'Step responses (graphs)'),
        items: [
          { title: T('Sistema del primo ordine', 'First-order system'),
            vars: r`K|guadagno statico; \tau|costante di tempo; t_{5\%}|tempo di assestamento al 5%`,
            tex: r`y(t)=K\left(1-e^{-t/\tau}\right),\qquad y(\tau)=0{,}632\,K,\quad t_{5\%}\approx3\tau`,
            fig: FORMULARI.fig.plot({ x: [0, 5], y: [0, 1.3], h: [1, 0.632], v: [1], xl: 't', yl: 'y',
              curves: [{ f: (t) => 1 - Math.exp(-t) }], pts: [[1, 0.632]],
              labels: [{ x: 1, y: 0, t: 'τ', dy: 14, dx: -3 }, { x: 5, y: 1, t: 'K', dx: -12, dy: -5 }] }) },
          { title: T('Secondo ordine al variare di ξ', 'Second order vs ξ'),
            vars: r`\xi|smorzamento; \omega_n|pulsazione naturale; \omega_d|pulsazione smorzata $\omega_n\sqrt{1-\xi^2}$; \varphi|fase $\arccos\xi$; S\%|sovraelongazione; t_s|tempo di assestamento`,
            tex: [r`\xi<1:\ \ y(t)=1-\frac{e^{-\xi\omega_nt}}{\sqrt{1-\xi^2}}\sin(\omega_dt+\varphi)`,
                  r`S\%=100\,e^{-\pi\xi/\sqrt{1-\xi^2}},\qquad t_s\approx\frac{4}{\xi\omega_n}`],
            note: T('Curve per $\\xi=0{,}2$ (rossa), $0{,}7$ (blu), $1$ (verde); $\\omega_n=1$.', 'Curves for $\\xi=0.2$ (red), $0.7$ (blue), $1$ (green); $\\omega_n=1$.'),
            fig: (function () {
              const u = (z) => (t) => z >= 1 ? 1 - (1 + t) * Math.exp(-t) :
                1 - Math.exp(-z * t) / Math.sqrt(1 - z * z) * Math.sin(Math.sqrt(1 - z * z) * t + Math.acos(z));
              return FORMULARI.fig.plot({ x: [0, 14], y: [0, 1.7], h: [1], xl: 't', yl: 'y',
                curves: [{ f: u(0.2), cls: 'fg-c2' }, { f: u(0.7), cls: 'fg-c1' }, { f: u(1), cls: 'fg-c3' }] });
            })() },
          { title: T('Posizione dei poli e comportamento', 'Pole location and behaviour'),
            vars: r`s_{1,2}|poli; \xi|smorzamento; \omega_n|pulsazione naturale; \varphi|angolo dall'asse reale negativo`,
            tex: r`s_{1,2}=-\xi\omega_n\pm j\omega_n\sqrt{1-\xi^2},\qquad |s|=\omega_n,\quad \cos\varphi=\xi`,
            fig: FORMULARI.fig.svg(`
              <line class="fg-axis" x1="20" y1="90" x2="225" y2="90"/><line class="fg-axis" x1="150" y1="10" x2="150" y2="170"/>
              <text x="222" y="104" text-anchor="end">Re</text><text x="156" y="18">Im</text>
              <path class="fg-dash" d="M150 90 L90 40"/><path class="fg-dash" d="M150 90 L90 140"/>
              <path class="fg-curve fg-c3" d="M150 40 A50 50 0 0 0 150 140"/>
              <circle class="fg-pt" cx="90" cy="40" r="3.5"/><circle class="fg-pt" cx="90" cy="140" r="3.5"/>
              <text x="70" y="36">s₁</text><text x="70" y="152">s₂</text>
              <text x="128" y="82" class="t1">φ</text><text x="62" y="104">−ξωₙ</text>
              <text x="160" y="170" class="t3">|s| = ωₙ</text>`) }
        ]
      }
    ]
  });
})();
