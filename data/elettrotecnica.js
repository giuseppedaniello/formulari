(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'elettrotecnica', area: 'elec', order: 80, icon: 'bi-lightning-charge',
    title: T('Elettrotecnica', 'Electrical engineering'),
    sections: [
      {
        id: 'def-et', title: T('Definizioni e teoremi', 'Definitions and theorems'),
        items: [
          { kind: 'def', title: T('Bipolo e convenzioni dei versi', 'Two-terminal element and sign conventions'),
            text: "Un bipolo è un componente a due morsetti descritto dalla tensione $v$ ai capi e dalla corrente $i$. Con la convenzione dell'utilizzatore la corrente entra nel morsetto a potenziale maggiore e la potenza $p=vi$ è assorbita; con la convenzione del generatore la corrente esce dal morsetto positivo e $p=vi$ è erogata.",
            vars: r`v|tensione; i|corrente; p|potenza (assorbita con la convenzione dell'utilizzatore)`,
            tex: r`p(t)=v(t)\,i(t)` },
          { kind: 'thm', title: T('Legge di Kirchhoff delle correnti (LKC)', 'Kirchhoff current law'),
            text: "La somma algebrica delle correnti che entrano in un nodo (o in una qualunque superficie chiusa) è nulla: la carica non si accumula nei nodi.",
            vars: r`i_k|correnti dei rami collegati al nodo (con segno secondo il verso)`,
            tex: r`\sum_ki_k=0` },
          { kind: 'thm', title: T('Legge di Kirchhoff delle tensioni (LKT)', 'Kirchhoff voltage law'),
            text: "La somma algebrica delle tensioni lungo una maglia, percorsa in un verso, è nulla; equivalentemente, la tensione tra due nodi non dipende dal percorso.",
            vars: r`v_k|tensioni dei rami della maglia (con segno secondo il verso di percorrenza)`,
            tex: r`\sum_kv_k=0` },
          { kind: 'def', title: T('Relazioni costitutive dei bipoli fondamentali', 'Constitutive relations of basic elements'),
            text: "Resistore: la tensione è proporzionale alla corrente (legge di Ohm). Condensatore: la corrente è proporzionale alla derivata della tensione. Induttore: la tensione è proporzionale alla derivata della corrente. Nei due ultimi casi i componenti immagazzinano energia.",
            vars: r`R|resistenza; C|capacità; L|induttanza`,
            tex: [r`v=R\,i`, r`i=C\,\frac{dv}{dt}`, r`v=L\,\frac{di}{dt}`] },
          { kind: 'def', title: T('Generatori ideali', 'Ideal sources'),
            text: "Il generatore ideale di tensione impone la tensione ai suoi capi qualunque sia la corrente; il generatore ideale di corrente impone la corrente qualunque sia la tensione. Un generatore di tensione spento equivale a un corto circuito, uno di corrente spento a un circuito aperto." },
          { kind: 'thm', title: T('Continuità di tensione e corrente', 'Continuity of capacitor voltage and inductor current'),
            text: "In un circuito con generatori limitati, la tensione sul condensatore e la corrente nell'induttore sono funzioni continue del tempo: il valore subito dopo una commutazione coincide con quello subito prima.",
            vars: r`v_C|tensione sul condensatore; i_L|corrente nell'induttore; 0^-, 0^+|istanti prima e dopo la commutazione`,
            tex: r`v_C(0^+)=v_C(0^-),\qquad i_L(0^+)=i_L(0^-)` },
          { kind: 'thm', title: T('Teorema di Tellegen', 'Tellegen theorem'),
            text: "In una rete con $b$ rami, le tensioni dei rami (che soddisfano LKT) e le correnti dei rami (che soddisfano LKC), prese con versi associati, soddisfano la relazione sotto: la somma delle potenze assorbite è nulla (conservazione della potenza).",
            vars: r`v_k, i_k|tensione e corrente del ramo $k$; b|numero di rami`,
            tex: r`\sum_{k=1}^{b}v_k\,i_k=0` },
          { kind: 'thm', title: T('Sovrapposizione degli effetti', 'Superposition theorem'),
            text: "In una rete lineare ogni tensione o corrente è la somma dei contributi dovuti a ciascun generatore indipendente, calcolati con tutti gli altri spenti (generatori di tensione in corto circuito, di corrente in circuito aperto). Non vale per le potenze.",
            vars: r`y|grandezza totale; y_k|contributo del generatore $k$`,
            tex: r`y=\sum_ky_k,\quad y_k=\text{risposta con il solo generatore }k\text{ attivo}` },
          { kind: 'thm', title: T('Teorema di Thevenin', 'Thevenin theorem'),
            text: "Una rete lineare vista da una coppia di morsetti è equivalente a un generatore ideale di tensione $V_{th}$, pari alla tensione a vuoto, in serie a una resistenza $R_{th}$, pari alla resistenza vista dai morsetti con i generatori indipendenti spenti. L'equivalente vale per qualunque carico connesso.",
            vars: r`V_{th}|tensione di Thevenin; R_{th}|resistenza equivalente; I_{cc}|corrente di cortocircuito`,
            tex: r`V_{th}=V_{\text{a vuoto}},\qquad R_{th}=\frac{V_{th}}{I_{cc}}` },
          { kind: 'thm', title: T('Teorema di Norton', 'Norton theorem'),
            text: "Una rete lineare vista da una coppia di morsetti è equivalente a un generatore ideale di corrente $I_N$, pari alla corrente di cortocircuito, in parallelo alla resistenza $R_N=R_{th}$. L'equivalente di Norton si ottiene da quello di Thevenin con la trasformazione dei generatori.",
            vars: r`I_N|corrente di Norton; R_N|resistenza equivalente; V_{th}, R_{th}|grandezze di Thevenin`,
            tex: r`I_N=I_{cc}=\frac{V_{th}}{R_{th}},\qquad R_N=R_{th}` },
          { kind: 'thm', title: T('Teorema di Millman', 'Millman theorem'),
            text: "Se più rami, ciascuno formato da un generatore ideale di tensione $E_k$ in serie a una conduttanza $G_k$, sono collegati in parallelo fra gli stessi due nodi, la tensione tra i nodi è la media pesata con le conduttanze delle tensioni dei generatori.",
            vars: r`V|tensione tra i due nodi; E_k|tensioni dei generatori; G_k|conduttanze dei rami`,
            tex: r`V=\frac{\sum_kG_kE_k}{\sum_kG_k}` },
          { kind: 'thm', title: T('Teorema di reciprocità', 'Reciprocity theorem'),
            text: "In una rete lineare composta da soli resistori, condensatori, induttori e trasformatori (senza generatori controllati), se un generatore alla porta 1 produce una certa risposta alla porta 2, lo stesso generatore posto alla porta 2 produce la stessa risposta alla porta 1: i parametri soddisfano $z_{12}=z_{21}$.",
            vars: r`z_{ij}, y_{ij}|parametri di impedenza e di ammettenza; A, B, C, D|parametri di trasmissione`,
            tex: r`z_{12}=z_{21},\qquad y_{12}=y_{21},\qquad AD-BC=1` },
          { kind: 'def', title: T('Rappresentazione fasoriale', 'Phasor representation'),
            text: "A una grandezza sinusoidale $x(t)=X_M\\cos(\\omega t+\\varphi)$ si associa il fasore $\\bar X=X\\,e^{j\\varphi}$, con $X=X_M/\\sqrt2$ valore efficace. In regime sinusoidale derivata e integrale diventano moltiplicazione e divisione per $j\\omega$, e le equazioni differenziali diventano algebriche.",
            vars: r`x(t)|grandezza sinusoidale; \bar X|fasore; X|valore efficace; \omega|pulsazione`,
            tex: r`x(t)=\sqrt2\,\operatorname{Re}\{\bar X\,e^{j\omega t}\},\qquad \frac{d}{dt}\to j\omega` },
          { kind: 'def', title: T('Impedenza e ammettenza', 'Impedance and admittance'),
            text: "L'impedenza $Z$ di un bipolo in regime sinusoidale è il rapporto tra fasore di tensione e fasore di corrente; l'ammettenza $Y$ è il suo inverso. Con le impedenze al posto delle resistenze valgono le leggi di Kirchhoff, i partitori, i teoremi di Thevenin e Norton e la sovrapposizione.",
            vars: r`Z|impedenza; R|resistenza; X|reattanza; Y|ammettenza; G|conduttanza; B|suscettanza`,
            tex: r`Z=\frac{\bar V}{\bar I}=R+jX,\qquad Y=\frac1Z=G+jB` },
          { kind: 'thm', title: T('Teorema di Boucherot', 'Boucherot theorem'),
            text: "In regime sinusoidale la potenza attiva totale e la potenza reattiva totale assorbite da un circuito sono le somme delle potenze attive e reattive dei singoli componenti. La potenza apparente non si somma: si ottiene dalla potenza complessa totale.",
            vars: r`P, Q, S|potenze attiva, reattiva, apparente totali; P_k, Q_k|potenze del componente $k$`,
            tex: r`P=\sum_kP_k,\qquad Q=\sum_kQ_k,\qquad S=\sqrt{P^2+Q^2}` },
          { kind: 'def', title: T('Risonanza', 'Resonance'),
            text: "Un circuito è in risonanza quando tensione e corrente ai morsetti sono in fase, cioè quando la reattanza totale è nulla. Nel circuito RLC serie ciò avviene a $\\omega_0=1/\\sqrt{LC}$, dove l'impedenza è minima e la corrente è massima; nel parallelo l'impedenza è massima.",
            vars: r`\omega_0|pulsazione di risonanza; Z|impedenza; L, C|induttanza e capacità`,
            tex: r`\operatorname{Im}Z(\omega_0)=0\iff\omega_0=\frac{1}{\sqrt{LC}}` },
          { kind: 'def', title: T('Sistema trifase simmetrico ed equilibrato', 'Balanced three-phase system'),
            text: "Un sistema trifase è simmetrico se le tre tensioni hanno lo stesso modulo e sono sfasate di $120^\\circ$; è equilibrato se le tre impedenze del carico sono uguali. In tal caso la somma delle tensioni e delle correnti è nulla, il neutro non porta corrente e la potenza istantanea è costante.",
            vars: r`E_1, E_2, E_3|tensioni di fase; V_f, I_f|valori efficaci di fase; \varphi|sfasamento`,
            tex: r`E_1+E_2+E_3=0,\qquad p(t)=3V_fI_f\cos\varphi=\text{costante}` },
          { kind: 'thm', title: T('Teorema di Aron', 'Aron theorem'),
            text: "In un sistema trifase a tre fili la potenza attiva totale è la somma delle letture di due wattmetri, inseriti su due linee con le voltmetriche collegate alla terza linea. Nel caso simmetrico ed equilibrato la potenza reattiva si ricava dalla differenza delle due letture.",
            vars: r`W_1, W_2|letture dei due wattmetri; P, Q|potenze attiva e reattiva totali`,
            tex: r`P=W_1+W_2,\qquad Q=\sqrt3\,(W_1-W_2)` },
          { kind: 'def', title: T('Trasformatore ideale', 'Ideal transformer'),
            text: "Il trasformatore ideale ha accoppiamento perfetto, nessuna perdita e induttanza di magnetizzazione infinita. Con rapporto spire $n=N_1/N_2$ le tensioni stanno nel rapporto $n$ e le correnti nel rapporto inverso; la potenza assorbita è nulla e le impedenze si riportano moltiplicandole per $n^2$.",
            vars: r`v_1, v_2|tensioni al primario e al secondario; i_1, i_2|correnti; n|rapporto spire; Z_1, Z_2|impedenze viste al primario e al secondario`,
            tex: r`\frac{v_1}{v_2}=n,\qquad \frac{i_1}{i_2}=\frac1n,\qquad Z_1=n^2Z_2` },
          { kind: 'def', title: T('Doppio bipolo', 'Two-port network'),
            text: "Un doppio bipolo (quadripolo) è un componente a due porte descritto da due tensioni e due correnti legate da due equazioni lineari, i cui coefficienti sono i parametri $z$, $y$, $h$ o di trasmissione. È reciproco se $z_{12}=z_{21}$." },
          { kind: 'def', title: T('Costante di tempo di un circuito', 'Circuit time constant'),
            text: "In un circuito del primo ordine la costante di tempo è $\\tau=R_{eq}C$ oppure $\\tau=L/R_{eq}$, dove $R_{eq}$ è la resistenza equivalente vista dal componente dinamico. Dopo $5\\tau$ il transitorio è praticamente esaurito (oltre il $99\\%$ del valore finale).",
            vars: r`\tau|costante di tempo; R_{eq}|resistenza equivalente vista dal componente; C, L|capacità, induttanza`,
            tex: r`\tau=R_{eq}C,\qquad \tau=\frac{L}{R_{eq}}` },
          { kind: 'def', title: T('Valore efficace', 'RMS value'),
            text: "Il valore efficace di una grandezza periodica è il valore della grandezza costante che dissipa su una resistenza la stessa potenza media. Per una sinusoide di ampiezza $X_M$ vale $X_M/\\sqrt2$.",
            vars: r`X_{eff}|valore efficace; T|periodo; x(t)|grandezza periodica`,
            tex: r`X_{eff}=\sqrt{\frac1T\int_0^Tx^2(t)\,dt}` }
        ]
      },
      {
        id: 'leggi', title: T('Leggi fondamentali', 'Fundamental laws'),
        items: [
          { title: T('Legge di Ohm e resistività', 'Ohm\'s law and resistivity'),
            vars: r`v|tensione; i|corrente; R|resistenza; G|conduttanza; \rho|resistività; \ell|lunghezza; S|sezione`,
            tex: [r`v=Ri,\qquad i=Gv,\quad G=\frac1R`, r`R=\rho\,\frac{\ell}{S}`] },
          { title: T('Potenza', 'Power'),
            vars: r`p(t)|potenza istantanea; v, i|tensione e corrente; P_R|potenza dissipata; R|resistenza; I, V|valori della corrente e della tensione`,
            tex: r`p(t)=v(t)\,i(t),\qquad P_R=RI^2=\frac{V^2}{R}` },
          { title: T('Resistori in serie e parallelo', 'Series and parallel resistors'),
            vars: r`R_s|resistenza equivalente serie; R_p|equivalente parallelo; R_k|singole resistenze`,
            tex: r`R_{s}=\sum_k R_k,\qquad \frac{1}{R_p}=\sum_k\frac{1}{R_k}` },
          { title: T('Partitori', 'Dividers'),
            vars: r`V|tensione totale; I|corrente totale; R_k|resistenza $k$-esima; G_k|conduttanza $k$-esima`,
            tex: r`V_k=V\,\frac{R_k}{\sum R},\qquad I_k=I\,\frac{G_k}{\sum G}`,
            note: T('Partitore di tensione (serie) e di corrente (parallelo).', 'Voltage divider (series) and current divider (parallel).') }
        ]
      },
      {
        id: 'dinamici', title: T('Bipoli dinamici', 'Dynamic components'),
        items: [
          { title: T('Condensatore', 'Capacitor'),
            vars: r`i|corrente; C|capacità; v|tensione; W_C|energia immagazzinata; V|tensione ai capi`,
            tex: [r`i=C\,\frac{dv}{dt}`, r`W_C=\tfrac12CV^2`] },
          { title: T('Induttore', 'Inductor'),
            vars: r`v|tensione; L|induttanza; i|corrente; W_L|energia immagazzinata; I|corrente`,
            tex: [r`v=L\,\frac{di}{dt}`, r`W_L=\tfrac12LI^2`] },
          { title: T('Condensatori in serie e parallelo', 'Series and parallel capacitors'),
            vars: r`C_s, C_p|capacità equivalenti in serie e parallelo; C_k|singole capacità`,
            tex: r`C_p=\sum_kC_k,\qquad \frac{1}{C_s}=\sum_k\frac{1}{C_k}` },
          { title: T('Induttori in serie e parallelo', 'Series and parallel inductors'),
            vars: r`L_s, L_p|induttanze equivalenti serie e parallelo; L_k|singole induttanze`,
            tex: r`L_s=\sum_kL_k,\qquad \frac{1}{L_p}=\sum_k\frac{1}{L_k}`,
            note: T('Senza mutui accoppiamenti.', 'Without mutual coupling.') }
        ]
      },
      {
        id: 'transitori', title: T('Transitori del primo ordine', 'First-order transients'),
        items: [
          { title: T('Costanti di tempo', 'Time constants'),
            vars: r`\tau_{RC}|costante di tempo del circuito RC; \tau_{RL}|costante di tempo del circuito RL; R, C, L|resistenza, capacità, induttanza`,
            tex: r`\tau_{RC}=RC,\qquad \tau_{RL}=\frac{L}{R}` },
          { title: T('Soluzione generale', 'General solution'),
            vars: r`x(t)|variabile (tensione o corrente); x_\infty|valore a regime; x(0^+)|valore iniziale; \tau|costante di tempo`,
            tex: r`x(t)=x_\infty+\big(x(0^+)-x_\infty\big)\,e^{-t/\tau},\quad t\ge0`,
            note: T('Vale per tensioni sul condensatore e correnti nell\'induttore.', 'Applies to capacitor voltages and inductor currents.') },
          { title: T('Carica di un condensatore', 'Charging a capacitor'),
            vars: r`v_C|tensione sul condensatore; V|tensione del generatore; R, C|resistenza e capacità; t|tempo`,
            fig: FORMULARI.fig.plot({ x: [0, 5], y: [0, 1.25], h: [1, 0.632], v: [1], xl: 't/RC', yl: 'v',
  curves: [{ f: (t) => 1 - Math.exp(-t), cls: 'fg-c1' }, { f: (t) => Math.exp(-t), cls: 'fg-c2' }], pts: [[1, 0.632]],
  labels: [{ x: 3, y: 1, t: 'carica', dy: -5, cls: 't1' }, { x: 2, y: 0.14, t: 'scarica', dy: -6, cls: 't2' }] }),
            tex: r`v_C(t)=V\left(1-e^{-t/RC}\right)` }
        ]
      },
      {
        id: 'sinusoidale', title: T('Regime sinusoidale', 'Sinusoidal steady state'),
        items: [
          { title: T('Fasore', 'Phasor'),
            vars: r`V_M|ampiezza (valore massimo); V|valore efficace; \omega|pulsazione ($2\pi f$); \varphi|fase iniziale; \bar V|fasore`,
            fig: FORMULARI.fig.svg(`
  <line class="fg-axis" x1="30" y1="130" x2="220" y2="130"/><line class="fg-axis" x1="60" y1="165" x2="60" y2="15"/>
  <path class="fg-curve fg-c1" d="M60 130 L175 55"/><path class="fg-curve fg-c1" d="M175 55 l-11 1 m11 -1 l-5 9"/>
  <path class="fg-curve fg-c2" d="M100 130 A40 40 0 0 0 94 108"/><text x="108" y="122" class="t2">φ</text>
  <text x="125" y="82" class="t1">V̄ = V e^{jφ}</text><text x="205" y="146">Re</text><text x="66" y="22">Im</text>`),
            tex: [r`v(t)=V_M\cos(\omega t+\varphi)\ \longleftrightarrow\ \bar V=V\,e^{j\varphi},\quad V=\frac{V_M}{\sqrt2}`],
            note: T('Il modulo del fasore è il valore efficace.', 'The phasor magnitude is the RMS value.') },
          { title: T('Impedenze', 'Impedances'),
            vars: r`Z_R, Z_L, Z_C|impedenze di resistore, induttore, condensatore; R|resistenza; L|induttanza; C|capacità; \omega|pulsazione`,
            tex: r`Z_R=R,\qquad Z_L=j\omega L,\qquad Z_C=\frac{1}{j\omega C}=-\frac{j}{\omega C}` },
          { title: T('Impedenza generica', 'General impedance'),
            vars: r`Z|impedenza; R|resistenza (parte reale); X|reattanza (parte immaginaria); \lvert Z\rvert|modulo; \varphi|sfasamento tra tensione e corrente`,
            fig: FORMULARI.fig.svg(`
  <path class="fg-fill" d="M40 140 L180 140 L180 55 Z"/>
  <text x="100" y="158" class="t1">R</text><text x="186" y="102" class="t3">X</text><text x="94" y="92" class="t2">|Z|</text>
  <text x="62" y="136">φ</text><path class="fg-line" d="M172 140 L172 132 L180 132"/>`),
            tex: r`Z=R+jX=|Z|e^{j\varphi},\quad |Z|=\sqrt{R^2+X^2},\quad \varphi=\arctan\frac XR` },
          { title: T('Potenze', 'Powers'),
            vars: r`P|potenza attiva (W); Q|potenza reattiva (var); S|potenza apparente (VA); \bar S|potenza complessa; V, I|valori efficaci; \varphi|sfasamento; \bar I^*|complesso coniugato del fasore di corrente`,
            fig: FORMULARI.fig.svg(`
  <path class="fg-fill" d="M40 140 L180 140 L180 55 Z"/>
  <text x="100" y="158" class="t1">P (W)</text><text x="186" y="102" class="t3">Q (var)</text><text x="84" y="92" class="t2">S (VA)</text>
  <text x="62" y="136">φ</text><path class="fg-line" d="M172 140 L172 132 L180 132"/>`),
            tex: [r`P=VI\cos\varphi,\quad Q=VI\sin\varphi,\quad S=VI`,
                  r`\bar S=\bar V\,\bar I^{*}=P+jQ,\qquad S^2=P^2+Q^2`],
            note: T('Attiva (W), reattiva (var), apparente (VA). Fattore di potenza $\\cos\\varphi$.', 'Active (W), reactive (var), apparent (VA). Power factor $\\cos\\varphi$.') },
          { title: T('Rifasamento', 'Power-factor correction'),
            vars: r`C|capacità di rifasamento; P|potenza attiva; \varphi_1, \varphi_2|sfasamenti prima e dopo; \omega|pulsazione; V|tensione efficace`,
            tex: r`C=\frac{P\,(\tan\varphi_1-\tan\varphi_2)}{\omega V^2}`,
            note: T('Da $\\cos\\varphi_1$ a $\\cos\\varphi_2$, con $C$ in parallelo al carico.', 'From $\\cos\\varphi_1$ to $\\cos\\varphi_2$, with $C$ in parallel to the load.') },
          { title: T('Risonanza RLC serie', 'Series RLC resonance'),
            vars: r`\omega_0|pulsazione di risonanza; Q|fattore di merito; R, L, C|resistenza, induttanza, capacità`,
            fig: (function () {
  const r = (Q) => (u) => 1 / Math.sqrt(1 + Q * Q * Math.pow(u - 1 / u, 2));
  return FORMULARI.fig.plot({ x: [0.05, 2.5], y: [0, 1.25], v: [1], xl: 'ω/ω₀', yl: '|I|/|I|max',
    curves: [{ f: r(2), cls: 'fg-c1' }, { f: r(6), cls: 'fg-c2' }], labels: [{ x: 1.45, y: 0.4, t: 'Q=2', cls: 't1' }, { x: 1.08, y: 0.9, t: 'Q=6', cls: 't2', dx: 6 }] });
})(),
            tex: [r`\omega_0=\frac{1}{\sqrt{LC}}`, r`Q=\frac{\omega_0L}{R}=\frac{1}{\omega_0RC},\qquad B=\frac{\omega_0}{Q}`] }
        ]
      },
      {
        id: 'teoremi', title: T('Teoremi delle reti', 'Network theorems'),
        items: [
          { title: T('Massimo trasferimento di potenza', 'Maximum power transfer'),
            vars: r`R_L|resistenza di carico; R_{th}|resistenza di Thevenin; V_{th}|tensione di Thevenin; P_{max}|potenza massima al carico`,
            fig: FORMULARI.fig.plot({ x: [0, 5], y: [0, 0.32], v: [1], xl: 'R_L/R_th', yl: 'P/P₀',
  curves: [{ f: (x) => x / Math.pow(1 + x, 2) }], pts: [[1, 0.25]], labels: [{ x: 1, y: 0.25, t: 'P_max', dx: 8, dy: -6, cls: 't2' }] }),
            tex: r`R_L=R_{th}\ \Rightarrow\ P_{max}=\frac{V_{th}^2}{4R_{th}}`,
            note: T('In regime sinusoidale: $Z_L=Z_{th}^{*}$.', 'In sinusoidal steady state: $Z_L=Z_{th}^{*}$.') }
        ]
      },
      {
        id: 'trifase', title: T('Sistemi trifase', 'Three-phase systems'),
        items: [
          { title: T('Collegamento a stella', 'Star connection'),
            vars: r`V_L|tensione di linea (concatenata); V_f|tensione di fase; I_L|corrente di linea; I_f|corrente di fase`,
            tex: r`V_L=\sqrt3\,V_f,\qquad I_L=I_f` },
          { title: T('Collegamento a triangolo', 'Delta connection'),
            vars: r`V_L|tensione di linea; V_f|tensione di fase; I_L|corrente di linea; I_f|corrente di fase`,
            tex: r`V_L=V_f,\qquad I_L=\sqrt3\,I_f` },
          { title: T('Potenze (sistema simmetrico ed equilibrato)', 'Powers (balanced system)'),
            vars: r`P, Q, S|potenze attiva, reattiva, apparente totali; V_L, I_L|tensione e corrente di linea; \varphi|sfasamento fase-corrente`,
            tex: r`P=\sqrt3\,V_LI_L\cos\varphi,\quad Q=\sqrt3\,V_LI_L\sin\varphi,\quad S=\sqrt3\,V_LI_L`,
            note: T('$\\varphi$ è lo sfasamento tra tensione e corrente di fase.', '$\\varphi$ is the phase angle between phase voltage and current.') }
        ]
      },
      {
        id: 'trasformatore', title: T('Trasformatore ideale', 'Ideal transformer'),
        items: [
          { title: T('Rapporti', 'Ratios'),
            vars: r`V_1, V_2|tensioni al primario e al secondario; I_1, I_2|correnti; N_1, N_2|numero di spire; n|rapporto di trasformazione`,
            tex: r`\frac{V_1}{V_2}=\frac{N_1}{N_2}=n,\qquad \frac{I_1}{I_2}=\frac{N_2}{N_1}=\frac1n` },
          { title: T('Impedenza riportata al primario', 'Impedance referred to primary'),
            vars: r`Z_1|impedenza vista dal primario; Z_2|impedenza di carico al secondario; n|rapporto di trasformazione`,
            tex: r`Z_1=n^2\,Z_2` }
        ]
      },
      {
        id: 'metodi', title: T('Metodi di analisi delle reti', 'Network analysis methods'),
        items: [
          { title: T('Numero di equazioni indipendenti', 'Independent equations'),
            vars: r`n|numero di nodi; l|numero di lati (rami)`,
            tex: r`\text{KCL: }n-1\ \ (n\ \text{nodi}),\qquad \text{KVL: }l-n+1\ \ (l\ \text{lati})` },
          { title: T('Analisi nodale', 'Nodal analysis'),
            vars: r`G|matrice delle conduttanze; \mathbf v|tensioni di nodo; \mathbf i_s|correnti impresse; G_{kk}|somma delle conduttanze al nodo $k$; G_{kj}|conduttanza tra i nodi $k$ e $j$ (negativa)`,
            tex: r`G\,\mathbf v=\mathbf i_s,\qquad G_{kk}=\sum G\ \text{al nodo},\ \ G_{kj}=-G_{kj}^{\text{tra }k,j}` },
          { title: T('Correnti di maglia', 'Mesh currents'),
            vars: r`R|matrice delle resistenze; \mathbf i|correnti di maglia; \mathbf e|tensioni impresse; R_{kk}|somma delle resistenze della maglia $k$; R_{kj}|resistenza in comune (negativa)`,
            tex: r`R\,\mathbf i=\mathbf e,\qquad R_{kk}=\sum R\ \text{nella maglia},\ \ R_{kj}=\mp R\ \text{in comune}` },
          { title: T('Trasformazione stella-triangolo', 'Star-delta transformation'),
            vars: r`R_a|resistenza della stella; R_{ab}, R_{bc}, R_{ca}|resistenze del triangolo`,
            tex: [r`R_a=\frac{R_{ab}R_{ac}}{R_{ab}+R_{bc}+R_{ca}}\ \ (\Delta\to Y)`,
                  r`R_{ab}=\frac{R_aR_b+R_bR_c+R_cR_a}{R_c}\ \ (Y\to\Delta)`] },
          { title: T('Generatori equivalenti', 'Source transformation'),
            vars: r`E|tensione del generatore di tensione; R|resistenza interna; I_s|corrente del generatore di corrente`,
            tex: r`E=R\,I_s,\qquad \text{serie }(E,R)\ \longleftrightarrow\ \text{parallelo }(I_s,R)` }
        ]
      },
      {
        id: 'rlc', title: T('Transitori del secondo ordine (RLC)', 'Second-order transients (RLC)'),
        items: [
          { title: T('Frequenze caratteristiche', 'Characteristic quantities'),
            vars: r`\alpha|coefficiente di smorzamento; \omega_0|pulsazione di risonanza; R, L, C|resistenza, induttanza, capacità`,
            tex: r`\text{serie: }\alpha=\frac{R}{2L},\qquad \text{parallelo: }\alpha=\frac{1}{2RC},\qquad \omega_0=\frac{1}{\sqrt{LC}}` },
          { title: T('Radici', 'Roots'),
            vars: r`s_{1,2}|radici dell'equazione caratteristica; \alpha|coefficiente di smorzamento; \omega_0|pulsazione di risonanza`,
            tex: r`s_{1,2}=-\alpha\pm\sqrt{\alpha^2-\omega_0^2}` },
          { title: T('Casi', 'Cases'),
            vars: r`\alpha, \omega_0|smorzamento e pulsazione di risonanza; x_n|risposta naturale; A_1, A_2|costanti dalle condizioni iniziali; s_1,s_2|radici caratteristiche`,
            tex: [r`\alpha>\omega_0:\ x_n=A_1e^{s_1t}+A_2e^{s_2t}\ \ (\text{sovrasmorzato})`,
                  r`\alpha=\omega_0:\ x_n=(A_1+A_2t)\,e^{-\alpha t}\ \ (\text{critico})`,
                  r`\alpha<\omega_0:\ x_n=e^{-\alpha t}(A_1\cos\omega_dt+A_2\sin\omega_dt),\ \ \omega_d=\sqrt{\omega_0^2-\alpha^2}`] },
          { title: T('Fattore di merito', 'Quality factor'),
            vars: r`Q|fattore di merito; \omega_0|pulsazione di risonanza; \alpha|coefficiente di smorzamento; \xi|smorzamento`,
            tex: r`Q=\frac{\omega_0}{2\alpha}=\frac{1}{2\xi}` }
        ]
      },
      {
        id: 'ammettenza', title: T('Ammettenza e risonanza parallelo', 'Admittance and parallel resonance'),
        items: [
          { title: T('Ammettenza', 'Admittance'),
            vars: r`Y|ammettenza; Z|impedenza; G|conduttanza; B|suscettanza; Y_R, Y_L, Y_C|ammettenze di resistore, induttore, condensatore`,
            tex: r`Y=\frac1Z=G+jB,\qquad Y_R=G,\ \ Y_L=\frac{1}{j\omega L},\ \ Y_C=j\omega C` },
          { title: T('Impedenza RLC serie', 'Series RLC impedance'),
            vars: r`Z|impedenza; R, L, C|resistenza, induttanza, capacità; \omega|pulsazione`,
            tex: r`Z=R+j\left(\omega L-\frac{1}{\omega C}\right)` },
          { title: T('Risonanza RLC parallelo', 'Parallel RLC resonance'),
            vars: r`\omega_0|pulsazione di risonanza; Q|fattore di merito; R, L, C|resistenza, induttanza, capacità`,
            tex: r`\omega_0=\frac{1}{\sqrt{LC}},\qquad Q=\frac{R}{\omega_0L}=\omega_0RC,\qquad B=\frac{\omega_0}{Q}` }
        ]
      },
      {
        id: 'mutui', title: T('Induttori accoppiati', 'Coupled inductors'),
        items: [
          { title: T('Equazioni', 'Equations'),
            vars: r`v_1, v_2|tensioni ai due avvolgimenti; i_1, i_2|correnti; L_1, L_2|autoinduttanze; M|mutua induttanza`,
            tex: r`v_1=L_1\frac{di_1}{dt}+M\frac{di_2}{dt},\qquad v_2=M\frac{di_1}{dt}+L_2\frac{di_2}{dt}` },
          { title: T('Coefficiente di accoppiamento', 'Coupling coefficient'),
            vars: r`k|coefficiente di accoppiamento; M|mutua induttanza; L_1, L_2|autoinduttanze`,
            tex: r`k=\frac{M}{\sqrt{L_1L_2}},\qquad 0\le k\le1` },
          { title: T('Energia immagazzinata', 'Stored energy'),
            vars: r`W|energia; L_1, L_2|autoinduttanze; M|mutua induttanza; i_1, i_2|correnti`,
            tex: r`W=\tfrac12L_1i_1^2+\tfrac12L_2i_2^2\pm Mi_1i_2` },
          { title: T('Serie di induttori accoppiati', 'Series connection'),
            vars: r`L_{eq}|induttanza equivalente; L_1, L_2|autoinduttanze; M|mutua induttanza (segno $+$ se concordi)`,
            tex: r`L_{eq}=L_1+L_2\pm2M` }
        ]
      },
      {
        id: 'quadripoli', title: T('Doppi bipoli (quadripoli)', 'Two-port networks'),
        items: [
          { title: T('Parametri di impedenza', 'Z parameters'),
            vars: r`V_1,V_2, I_1,I_2|tensioni e correnti alle porte; z_{ij}|parametri di impedenza`,
            tex: r`\begin{pmatrix}V_1\\V_2\end{pmatrix}=\begin{pmatrix}z_{11}&z_{12}\\z_{21}&z_{22}\end{pmatrix}\begin{pmatrix}I_1\\I_2\end{pmatrix}` },
          { title: T('Parametri di ammettenza', 'Y parameters'),
            vars: r`V_1,V_2, I_1,I_2|tensioni e correnti alle porte; y_{ij}|parametri di ammettenza`,
            tex: r`\begin{pmatrix}I_1\\I_2\end{pmatrix}=\begin{pmatrix}y_{11}&y_{12}\\y_{21}&y_{22}\end{pmatrix}\begin{pmatrix}V_1\\V_2\end{pmatrix},\qquad Y=Z^{-1}` },
          { title: T('Parametri di trasmissione (ABCD)', 'Transmission (ABCD) parameters'),
            vars: r`A, B, C, D|parametri di trasmissione; V_1, I_1|tensione e corrente in ingresso; V_2, I_2|tensione e corrente in uscita`,
            tex: r`\begin{pmatrix}V_1\\I_1\end{pmatrix}=\begin{pmatrix}A&B\\C&D\end{pmatrix}\begin{pmatrix}V_2\\-I_2\end{pmatrix},\quad AD-BC=1\ (\text{reciproco})`,
            note: T('Collegamento in cascata: prodotto delle matrici ABCD.', 'Cascade connection: product of the ABCD matrices.') },
          { title: T('Impedenza d\'ingresso', 'Input impedance'),
            vars: r`Z_{in}|impedenza vista dall'ingresso; Z_L|impedenza di carico; A, B, C, D|parametri di trasmissione`,
            tex: r`Z_{in}=\frac{AZ_L+B}{CZ_L+D}` }
        ]
      },
      {
        id: 'periodico', title: T('Regime periodico non sinusoidale', 'Non-sinusoidal periodic steady state'),
        items: [
          { title: T('Valore efficace', 'RMS value'),
            vars: r`X_{eff}|valore efficace; T|periodo; x|segnale; X_0|valore medio; X_{k,eff}|valore efficace dell'armonica $k$`,
            tex: r`X_{eff}=\sqrt{\frac1T\int_Tx^2dt}=\sqrt{X_0^2+\sum_{k\ge1}X_{k,eff}^2}` },
          { title: T('Potenza attiva', 'Active power'),
            vars: r`P|potenza attiva; V_0, I_0|componenti continue; V_k, I_k|valori efficaci delle armoniche; \varphi_k|sfasamento dell'armonica $k$`,
            tex: r`P=V_0I_0+\sum_{k\ge1}V_{k}I_{k}\cos\varphi_k` },
          { title: T('Distorsione armonica', 'Total harmonic distortion'),
            vars: r`\mathrm{THD}|distorsione armonica totale; X_k|ampiezza dell'armonica $k$; X_1|fondamentale`,
            tex: r`\mathrm{THD}=\frac{\sqrt{\sum_{k\ge2}X_k^2}}{X_1}` },
          { title: T('Valori efficaci di forme d\'onda tipiche', 'RMS of common waveforms'),
            vars: r`V_M|valore massimo (ampiezza)`,
            tex: r`\text{sinusoide: }\frac{V_M}{\sqrt2},\quad \text{quadra: }V_M,\quad \text{triangolare: }\frac{V_M}{\sqrt3},\quad \text{semionda raddrizzata: }\frac{V_M}{2}` },
          { title: T('Valori medi dopo raddrizzamento', 'Mean values after rectification'),
            vars: r`V_M|valore massimo (ampiezza)`,
            tex: r`\text{semionda: }\frac{V_M}{\pi},\qquad \text{doppia semionda: }\frac{2V_M}{\pi}` }
        ]
      },
      {
        id: 'trifase-extra', title: T('Trifase: approfondimenti', 'Three-phase: more'),
        items: [
          { title: T('Tensioni di un sistema simmetrico', 'Symmetric phase voltages'),
            vars: r`E_1, E_2, E_3|tensioni delle tre fasi; E|valore efficace di fase`,
            tex: r`E_1=E,\ \ E_2=Ee^{-j2\pi/3},\ \ E_3=Ee^{-j4\pi/3},\qquad E_1+E_2+E_3=0` },
          { title: T('Impedenza equivalente Y-Δ', 'Y-Δ equivalent impedance'),
            vars: r`Z_Y|impedenza della stella; Z_\Delta|impedenza del triangolo equivalente`,
            tex: r`Z_Y=\frac{Z_\Delta}{3}` },
          { title: T('Potenza istantanea', 'Instantaneous power'),
            vars: r`p(t)|potenza istantanea totale; V_f, I_f|valori efficaci di fase; \varphi|sfasamento`,
            tex: r`p(t)=3\,V_fI_f\cos\varphi=\text{costante}\ \ (\text{sistema simmetrico ed equilibrato})` },
          { title: T('Inserzione Aron', 'Aron connection'),
            vars: r`W_1, W_2|letture dei due wattmetri; P|potenza attiva totale; Q|potenza reattiva totale`,
            tex: r`P=W_1+W_2,\qquad Q=\sqrt3\,(W_1-W_2)` },
          { title: T('Rifasamento trifase', 'Three-phase power-factor correction'),
            vars: r`C_Y, C_\Delta|capacità per fase in collegamento a stella e a triangolo; P|potenza attiva; \varphi_1, \varphi_2|sfasamenti prima e dopo; V_f|tensione di fase; \omega|pulsazione`,
            tex: r`C_Y=\frac{P(\tan\varphi_1-\tan\varphi_2)}{3\omega V_f^2},\qquad C_\Delta=\frac{C_Y}{3}` }
        ]
      }
    ]
  });
})();
