(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'elettronica', area: 'elec', order: 90, icon: 'bi-cpu',
    title: T('Elettronica analogica e digitale', 'Analog & digital electronics'),
    sections: [
      {
        id: 'def-el', title: T('Definizioni e teoremi', 'Definitions and theorems'),
        items: [
          { kind: 'def', title: T('Semiconduttori e drogaggio', 'Semiconductors and doping'),
            text: "Un semiconduttore intrinseco (silicio, germanio) ha una conducibilità intermedia che cresce con la temperatura. Il drogaggio con impurità donatrici (tipo n, portatori maggioritari gli elettroni) o accettrici (tipo p, portatori maggioritari le lacune) ne aumenta la conducibilità. In equilibrio vale la legge di azione di massa.",
            vars: r`n, p|concentrazioni di elettroni e lacune; n_i|concentrazione intrinseca`,
            tex: r`n\,p=n_i^2` },
          { kind: 'def', title: T('Giunzione pn', 'pn junction'),
            text: "La giunzione tra una regione p e una n forma una zona svuotata con un campo elettrico interno (barriera di potenziale). In polarizzazione diretta la barriera si riduce e passa corrente che cresce esponenzialmente; in polarizzazione inversa passa solo una piccola corrente di saturazione, fino alla rottura per valanga o effetto Zener." },
          { kind: 'def', title: T('Regioni di funzionamento del BJT', 'BJT operating regions'),
            text: "Il BJT lavora in zona attiva diretta con giunzione base-emettitore in diretta e base-collettore in inversa: $I_C=\\beta I_B$ (amplificazione). In saturazione entrambe le giunzioni sono in diretta e il transistor si comporta come interruttore chiuso; in interdizione (taglio) entrambe sono in inversa e le correnti sono nulle.",
            vars: r`I_C, I_B|correnti di collettore e di base; \beta|guadagno di corrente; V_{CE}|tensione collettore-emettitore`,
            tex: r`\text{attiva: }I_C=\beta I_B,\qquad \text{saturazione: }V_{CE}\approx V_{CE,sat},\qquad \text{taglio: }I_B\approx0` },
          { kind: 'def', title: T('Regioni di funzionamento del MOSFET', 'MOSFET operating regions'),
            text: "Per un nMOS con tensione di soglia $V_{th}$: se $V_{GS}<V_{th}$ è in interdizione ($I_D\\approx0$); se $V_{GS}>V_{th}$ e $V_{DS}<V_{GS}-V_{th}$ è in zona triodo (resistore controllato); se $V_{DS}\\ge V_{GS}-V_{th}$ è in saturazione (generatore di corrente controllato in tensione, usato per amplificare).",
            vars: r`V_{GS}, V_{DS}|tensioni gate-source e drain-source; V_{th}|soglia; V_{ov}|tensione di overdrive; k_n|parametro di transconduttanza`,
            tex: r`V_{ov}=V_{GS}-V_{th},\qquad \text{saturazione: }V_{DS}\ge V_{ov},\ \ I_D=\tfrac12k_n\,V_{ov}^2` },
          { kind: 'def', title: T('Amplificatore operazionale ideale', 'Ideal operational amplifier'),
            text: "L'amplificatore operazionale ideale ha guadagno ad anello aperto infinito, resistenza d'ingresso infinita (correnti d'ingresso nulle), resistenza d'uscita nulla e banda infinita. L'uscita $v_o=A(v_+-v_-)$ è limitata dalle tensioni di alimentazione.",
            vars: r`v_+, v_-|ingressi non invertente e invertente; A|guadagno ad anello aperto; v_o|uscita`,
            tex: r`v_o=A\,(v_+-v_-),\qquad A\to\infty,\quad i_+=i_-=0` },
          { kind: 'thm', title: T('Corto circuito virtuale', 'Virtual short'),
            text: "Se un amplificatore operazionale ideale è in retroazione negativa e non è saturato, la tensione differenziale d'ingresso è nulla: $v_+=v_-$. Questa proprietà, insieme a $i_+=i_-=0$, permette di calcolare le configurazioni fondamentali.",
            vars: r`v_+, v_-|tensioni agli ingressi non invertente e invertente; i_+, i_-|correnti entranti negli ingressi`,
            tex: r`v_+=v_-,\qquad i_+=i_-=0` },
          { kind: 'thm', title: T('Teorema di Miller', 'Miller theorem'),
            text: "Un'impedenza $Z$ collegata tra ingresso e uscita di un amplificatore di guadagno $A_v$ equivale a due impedenze verso massa: all'ingresso $Z/(1-A_v)$ e all'uscita $Z\\,A_v/(A_v-1)$. L'effetto Miller moltiplica la capacità di retroazione per $(1-A_v)$ riducendo la banda.",
            vars: r`Z|impedenza di retroazione; A_v|guadagno di tensione dell'amplificatore`,
            tex: r`Z_{in}=\frac{Z}{1-A_v},\qquad Z_{out}=\frac{Z\,A_v}{A_v-1}` },
          { kind: 'crit', title: T('Criterio di Barkhausen', 'Barkhausen criterion'),
            text: "Un circuito con retroazione positiva oscilla in modo sostenuto alla pulsazione $\\omega_0$ in cui il guadagno d'anello ha modulo $1$ e fase multipla di $360^\\circ$.",
            vars: r`A|guadagno dell'amplificatore; \beta|funzione di trasferimento della rete di retroazione; \omega_0|pulsazione di oscillazione`,
            tex: r`|A(j\omega_0)\beta(j\omega_0)|=1,\qquad \angle A\beta=0^\circ` },
          { kind: 'thm', title: T('Teoremi di De Morgan', 'De Morgan theorems'),
            text: "Il complemento di una somma logica è il prodotto dei complementi; il complemento di un prodotto logico è la somma dei complementi. Da essi segue che NAND e NOR sono porte universali.",
            vars: r`A, B|variabili logiche; +|OR; \cdot|AND; \bar A|NOT`,
            tex: r`\overline{A+B}=\bar A\cdot\bar B,\qquad \overline{A\cdot B}=\bar A+\bar B` },
          { kind: 'def', title: T('Risoluzione e rapporto segnale-rumore di un ADC', 'ADC resolution and signal-to-noise ratio'),
            text: "Un convertitore analogico-digitale a $N$ bit suddivide il fondo scala in $2^N$ livelli; il passo di quantizzazione è l'LSB. Per un ingresso sinusoidale a fondo scala il rapporto segnale-rumore di quantizzazione ideale è circa $6{,}02\\,N+1{,}76$ dB (ogni bit in più guadagna circa $6$ dB).",
            vars: r`N|numero di bit; V_{FS}|fondo scala; \mathrm{LSB}|passo di quantizzazione`,
            tex: r`\mathrm{LSB}=\frac{V_{FS}}{2^N},\qquad \mathrm{SNR}\approx6.02\,N+1.76\ \mathrm{dB}` },
          { kind: 'oss', title: T('Slew rate e prodotto guadagno-banda', 'Slew rate and gain-bandwidth product'),
            text: "In un amplificatore reale la banda a ciclo chiuso diminuisce all'aumentare del guadagno ($\\mathrm{GBW}=\\text{costante}$) e la velocità massima di variazione dell'uscita (slew rate) limita l'ampiezza massima dei segnali sinusoidali ad alta frequenza.",
            vars: r`\mathrm{GBW}|prodotto guadagno-banda; G_{cl}|guadagno a ciclo chiuso; \mathrm{SR}|slew rate; V_p|ampiezza di picco`,
            tex: r`f_{-3\mathrm{dB}}=\frac{\mathrm{GBW}}{|G_{cl}|},\qquad f_{\max}=\frac{\mathrm{SR}}{2\pi V_p}` }
        ]
      },
      {
        id: 'diodi', title: T('Diodi', 'Diodes'),
        items: [
          { title: T('Equazione di Shockley', 'Shockley equation'),
            vars: r`i_D|corrente nel diodo; I_s|corrente di saturazione inversa; v_D|tensione ai capi; n|fattore di idealità; V_T|tensione termica (circa $25\,\mathrm{mV}$ a $300\,\mathrm K$); k_B|costante di Boltzmann; T|temperatura; q|carica elementare`,
            fig: FORMULARI.fig.plot({ x: [-0.5, 0.8], y: [-5, 40], xl: 'v_D (V)', yl: 'i_D (mA)',
  curves: [{ f: (v) => 1e-9 * (Math.exp(v / 0.0259) - 1) }], v: [0.65], labels: [{ x: 0.65, y: 0, t: 'V_γ', dy: 14, dx: -4 }] }),
            tex: r`i_D=I_s\left(e^{v_D/(nV_T)}-1\right),\qquad V_T=\frac{k_BT}{q}\approx25.9\ \mathrm{mV}\ (300\,\mathrm K)` },
          { title: T('Resistenza dinamica', 'Dynamic resistance'),
            vars: r`r_d|resistenza dinamica del diodo; n|fattore di idealità; V_T|tensione termica; I_D|corrente di polarizzazione`,
            tex: r`r_d=\frac{nV_T}{I_D}` },
          { title: T('Modello a caduta costante', 'Constant-voltage-drop model'),
            vars: r`V_\gamma|tensione di soglia del diodo; V_s|tensione sorgente; R|resistenza in serie; I|corrente`,
            tex: r`V_\gamma\approx0.7\ \mathrm V\ (\mathrm{Si}),\qquad I=\frac{V_s-V_\gamma}{R}` }
        ]
      },
      {
        id: 'transistor', title: T('Transistori', 'Transistors'),
        items: [
          { title: T('BJT in zona attiva', 'BJT in active region'),
            vars: r`I_C, I_B, I_E|correnti di collettore, base, emettitore; \beta|guadagno di corrente; I_s|corrente di saturazione; V_{BE}|tensione base-emettitore; V_T|tensione termica`,
            tex: r`I_C=\beta I_B=I_s\,e^{V_{BE}/V_T},\qquad I_E=(\beta+1)I_B` },
          { title: T('BJT: parametri di piccolo segnale', 'BJT small-signal parameters'),
            vars: r`g_m|transconduttanza; r_\pi|resistenza base-emettitore; r_o|resistenza d'uscita; I_C|corrente di collettore; V_A|tensione di Early; \beta|guadagno di corrente`,
            tex: r`g_m=\frac{I_C}{V_T},\qquad r_\pi=\frac{\beta}{g_m},\qquad r_o=\frac{V_A}{I_C}` },
          { title: T('MOSFET: saturazione', 'MOSFET: saturation'),
            vars: r`I_D|corrente di drain; k_n|parametro di transconduttanza; V_{GS}|tensione gate-source; V_{th}|tensione di soglia; V_{DS}|tensione drain-source`,
            fig: FORMULARI.fig.plot({ x: [0, 6], y: [0, 5.5], xl: 'V_DS', yl: 'I_D',
  curves: [1, 2, 3].map((vo, i) => ({ f: (v) => (v < vo ? vo * v - v * v / 2 : vo * vo / 2), cls: 'fg-c' + (i + 1) })),
  labels: [{ x: 5.2, y: 0.5, t: 'V_ov=1', cls: 't1', dy: -4, dx: -22 }, { x: 5.2, y: 2, t: 'V_ov=2', cls: 't2', dy: -4, dx: -22 }, { x: 5.2, y: 4.5, t: 'V_ov=3', cls: 't3', dy: -4, dx: -22 }] }),
            tex: r`I_D=\tfrac12k_n(V_{GS}-V_{th})^2,\quad V_{DS}\ge V_{GS}-V_{th},\quad k_n=\mu_nC_{ox}\frac WL` },
          { title: T('MOSFET: triodo', 'MOSFET: triode'),
            vars: r`I_D|corrente di drain; k_n|parametro di transconduttanza; V_{GS}|tensione gate-source; V_{th}|tensione di soglia; V_{DS}|tensione drain-source`,
            tex: r`I_D=k_n\left[(V_{GS}-V_{th})V_{DS}-\frac{V_{DS}^2}{2}\right],\quad V_{DS}<V_{GS}-V_{th}` },
          { title: T('MOSFET: piccolo segnale', 'MOSFET: small signal'),
            vars: r`g_m|transconduttanza; k_n|parametro di transconduttanza; V_{GS}, V_{th}|tensione gate-source e di soglia; I_D|corrente di drain`,
            tex: r`g_m=k_n(V_{GS}-V_{th})=\sqrt{2k_nI_D}` }
        ]
      },
      {
        id: 'opamp', title: T('Amplificatori operazionali', 'Operational amplifiers'),
        items: [
          { title: T('Op-amp ideale con retroazione negativa', 'Ideal op-amp, negative feedback'),
            vars: r`v_+, v_-|tensioni agli ingressi non invertente e invertente; i_+, i_-|correnti entranti negli ingressi`,
            tex: r`v_+=v_-\ (\text{corto virtuale}),\qquad i_+=i_-=0` },
          { title: T('Invertente e non invertente', 'Inverting and non-inverting'),
            vars: r`v_o|tensione d'uscita; v_i|tensione d'ingresso; R_1, R_2|resistenze della rete di retroazione`,
            tex: r`\text{inv.: }\frac{v_o}{v_i}=-\frac{R_2}{R_1},\qquad \text{non inv.: }\frac{v_o}{v_i}=1+\frac{R_2}{R_1}` },
          { title: T('Inseguitore di tensione', 'Voltage follower'),
            vars: r`v_o|tensione d'uscita; v_i|tensione d'ingresso`,
            tex: r`v_o=v_i` },
          { title: T('Sommatore invertente', 'Inverting summer'),
            vars: r`v_o|tensione d'uscita; R_f|resistenza di retroazione; v_k|ingressi; R_k|resistenze di ingresso`,
            tex: r`v_o=-R_f\sum_k\frac{v_k}{R_k}` },
          { title: T('Differenziale', 'Difference amplifier'),
            vars: r`v_o|tensione d'uscita; v_1, v_2|ingressi; R_1, R_2|resistenze (rapporto $R_2/R_1$)`,
            tex: r`v_o=\frac{R_2}{R_1}\,(v_2-v_1)` },
          { title: T('Integratore e derivatore', 'Integrator and differentiator'),
            vars: r`v_o|tensione d'uscita; v_i|tensione d'ingresso; R|resistenza; C|capacità; t|tempo`,
            tex: r`v_o=-\frac{1}{RC}\int v_i\,dt,\qquad v_o=-RC\,\frac{dv_i}{dt}` },
          { title: T('Guadagno con $A$ finito', 'Finite-gain effect'),
            vars: r`G_{inv}|guadagno reale dell'amplificatore invertente; A|guadagno ad anello aperto dell'op-amp; R_1, R_2|resistenze di retroazione`,
            tex: r`G_{inv}=\frac{-R_2/R_1}{1+\frac{1}{A}\left(1+\frac{R_2}{R_1}\right)}` },
          { title: T('Prodotto guadagno-banda', 'Gain-bandwidth product'),
            vars: r`f_{-3\mathrm{dB}}|banda a $-3$ dB; GBW|prodotto guadagno-banda; G_{cl}|guadagno ad anello chiuso`,
            tex: r`f_{-3\mathrm{dB}}=\frac{GBW}{|G_{cl}|}` }
        ]
      },
      {
        id: 'filtri', title: T('Filtri del primo ordine', 'First-order filters'),
        items: [
          { title: T('Passa-basso RC', 'RC low-pass'),
            vars: r`H(s)|funzione di trasferimento; R|resistenza; C|capacità; f_c|frequenza di taglio; s|variabile di Laplace`,
            fig: (function () {
  const mag = (x) => -10 * Math.log10(1 + Math.pow(10, 2 * x));
  return FORMULARI.fig.plot({ x: [-2, 2], y: [-40, 6], v: [0], xl: 'log ω', yl: 'dB',
    curves: [{ f: mag, cls: 'fg-c1' }, { f: (x) => (x < 0 ? 0 : -20 * x), cls: 'fg-c2' }],
    pts: [[0, -3.01]], labels: [{ x: 0.15, y: -14, t: '−20 dB/dec', cls: 't2' }, { x: 0.05, y: 4, t: 'ω = 1/T' }] });
})(),
            tex: r`H(s)=\frac{1}{1+sRC},\qquad f_c=\frac{1}{2\pi RC}` },
          { title: T('Passa-alto RC', 'RC high-pass'),
            vars: r`H(s)|funzione di trasferimento; R|resistenza; C|capacità; f_c|frequenza di taglio; s|variabile di Laplace`,
            tex: r`H(s)=\frac{sRC}{1+sRC},\qquad f_c=\frac{1}{2\pi RC}` },
          { title: T('Passa-banda RLC serie', 'Series RLC band-pass'),
            vars: r`H(s)|funzione di trasferimento; R, L, C|resistenza, induttanza, capacità; \omega_0|pulsazione centrale; Q|fattore di merito`,
            tex: r`H(s)=\frac{sRC}{s^2LC+sRC+1},\qquad \omega_0=\frac{1}{\sqrt{LC}},\ \ Q=\frac{\omega_0L}{R}` },
          { title: T('Frequenza di taglio', 'Cut-off frequency'),
            vars: r`H(j\omega_c)|risposta in frequenza alla pulsazione di taglio $\omega_c$; H_{\max}|valore massimo del modulo`,
            tex: r`|H(j\omega_c)|=\frac{|H|_{\max}}{\sqrt2}\ \ (-3\ \mathrm{dB})` }
        ]
      },
      {
        id: 'digitale', title: T('Elettronica digitale', 'Digital electronics'),
        items: [
          { title: T('Algebra di Boole', 'Boolean algebra'),
            vars: r`A, B|variabili logiche (0 o 1); +|OR; \cdot|AND; \bar A|NOT`,
            tex: [r`A+AB=A,\qquad A+\bar AB=A+B,\qquad A\cdot\bar A=0,\qquad A+\bar A=1`,
                  r`\overline{A+B}=\bar A\cdot\bar B,\qquad \overline{AB}=\bar A+\bar B\quad(\text{De Morgan})`] },
          { title: T('OR esclusivo', 'XOR'),
            vars: r`A, B|variabili logiche; \oplus|XOR (vale 1 se gli ingressi sono diversi)`,
            tex: r`A\oplus B=A\bar B+\bar AB` },
          { title: T('Numeri binari', 'Binary numbers'),
            vars: r`N|valore del numero; b_i|bit $i$-esimo; n|numero di bit`,
            tex: r`N=\sum_{i=0}^{n-1}b_i2^i,\qquad \text{range senza segno: }0\dots2^n-1,\qquad \text{compl. a 2: }-2^{n-1}\dots2^{n-1}-1` },
          { title: T('ADC e DAC', 'ADC and DAC'),
            vars: r`\mathrm{LSB}|passo di quantizzazione; V_{FS}|fondo scala; n|numero di bit`,
            tex: [r`\mathrm{LSB}=\frac{V_{FS}}{2^n},\qquad \text{errore di quantizzazione}\le\frac{\mathrm{LSB}}{2}`, r`\mathrm{SNR}\approx6.02\,n+1.76\ \mathrm{dB}`] }
        ]
      }
    ]
  });
})();
