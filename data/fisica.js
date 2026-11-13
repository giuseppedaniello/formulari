(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'fisica', area: 'phys', order: 10, icon: 'bi-rocket-takeoff',
    title: T('Fisica generale (meccanica e termodinamica)', 'General physics (mechanics & thermodynamics)'),
    sections: [
      {
        id: 'def-fi', title: T('Principi e teoremi', 'Principles and theorems'),
        items: [
          { kind: 'thm', title: T('Principio di inerzia (prima legge di Newton)', 'Law of inertia (Newton first law)'),
            text: "Un corpo su cui la risultante delle forze è nulla resta in quiete o si muove di moto rettilineo uniforme in un sistema di riferimento inerziale." },
          { kind: 'thm', title: T('Seconda legge di Newton', 'Newton second law'),
            text: "In un sistema inerziale la risultante delle forze applicate a un corpo è uguale alla derivata della sua quantità di moto; a massa costante, al prodotto della massa per l'accelerazione.",
            vars: r`\mathbf F|risultante delle forze; \mathbf p=m\mathbf v|quantità di moto; m|massa; \mathbf a|accelerazione`,
            tex: r`\mathbf F=\frac{d\mathbf p}{dt}=m\,\mathbf a` },
          { kind: 'thm', title: T('Terza legge di Newton (azione e reazione)', 'Newton third law'),
            text: "Se un corpo $A$ esercita una forza su un corpo $B$, allora $B$ esercita su $A$ una forza uguale e contraria, con la stessa retta d'azione.",
            vars: r`\mathbf F_{AB}|forza di $A$ su $B$`,
            tex: r`\mathbf F_{AB}=-\mathbf F_{BA}` },
          { kind: 'thm', title: T('Conservazione della quantità di moto', 'Conservation of momentum'),
            text: "Se la risultante delle forze esterne su un sistema è nulla, la quantità di moto totale si conserva. Negli urti, per le forze interne molto più intense di quelle esterne, la quantità di moto si conserva anche se l'energia cinetica no (urti anelastici).",
            vars: r`\mathbf P|quantità di moto totale; m_i, \mathbf v_i|masse e velocità`,
            tex: r`\sum\mathbf F_{\text{ext}}=\mathbf 0\ \Rightarrow\ \mathbf P=\sum m_i\mathbf v_i=\text{costante}` },
          { kind: 'thm', title: T('Teorema dell\'energia cinetica', 'Work-energy theorem'),
            text: "Il lavoro della risultante delle forze su un corpo è uguale alla variazione della sua energia cinetica.",
            vars: r`W|lavoro; E_c|energia cinetica; v_i, v_f|velocità iniziale e finale`,
            tex: r`W=\int\mathbf F\cdot d\mathbf r=\Delta E_c=\tfrac12mv_f^2-\tfrac12mv_i^2` },
          { kind: 'def', title: T('Forza conservativa ed energia potenziale', 'Conservative force and potential energy'),
            text: "Una forza è conservativa se il suo lavoro tra due punti non dipende dal percorso (equivalentemente è nullo su ogni percorso chiuso). Allora esiste l'energia potenziale $U$, con $\\mathbf F=-\\nabla U$. Peso, forza elastica e gravitazione sono conservative; l'attrito no.",
            vars: r`\mathbf F|forza conservativa; U|energia potenziale; A, B|punti iniziale e finale`,
            tex: r`\mathbf F=-\nabla U,\qquad W_{A\to B}=U(A)-U(B)` },
          { kind: 'thm', title: T('Conservazione dell\'energia meccanica', 'Conservation of mechanical energy'),
            text: "Se agiscono solo forze conservative (o forze che non compiono lavoro), l'energia meccanica $E=E_c+U$ si conserva. In presenza di forze non conservative, la sua variazione è uguale al lavoro di queste.",
            vars: r`E|energia meccanica; E_c, U|energia cinetica e potenziale`,
            tex: r`E=E_c+U=\text{costante},\qquad \Delta E=W_{\text{non cons.}}` },
          { kind: 'thm', title: T('Conservazione del momento angolare', 'Conservation of angular momentum'),
            text: "La derivata del momento angolare rispetto a un polo fisso è uguale al momento risultante delle forze esterne. Se tale momento è nullo (ad esempio in un campo di forze centrali) il momento angolare si conserva: il moto è piano e l'area spazzata dal raggio vettore cresce uniformemente (seconda legge di Keplero).",
            vars: r`\mathbf L|momento angolare; \boldsymbol\tau_{\text{ext}}|momento delle forze esterne`,
            tex: r`\frac{d\mathbf L}{dt}=\boldsymbol\tau_{\text{ext}},\qquad \boldsymbol\tau_{\text{ext}}=\mathbf 0\ \Rightarrow\ \mathbf L=\text{costante}` },
          { kind: 'thm', title: T('Leggi di Keplero', 'Kepler laws'),
            text: "Prima: i pianeti descrivono ellissi con il Sole in uno dei fuochi. Seconda: il raggio vettore dal Sole spazza aree uguali in tempi uguali. Terza: il quadrato del periodo è proporzionale al cubo del semiasse maggiore.",
            vars: r`T|periodo orbitale; a|semiasse maggiore; G|costante di gravitazione; M|massa del Sole`,
            tex: r`\frac{T^2}{a^3}=\frac{4\pi^2}{GM}` },
          { kind: 'thm', title: T('Principio di Archimede', 'Archimedes principle'),
            text: "Un corpo immerso in un fluido riceve una spinta verso l'alto pari al peso del fluido spostato.",
            vars: r`F_A|spinta di Archimede; \rho_{\text{fl}}|densità del fluido; V_{\text{imm}}|volume immerso; g|accelerazione di gravità`,
            tex: r`F_A=\rho_{\text{fl}}\,V_{\text{imm}}\,g` },
          { kind: 'thm', title: T('Legge di Stevino e principio di Pascal', 'Hydrostatic law and Pascal principle'),
            text: "In un fluido in quiete la pressione cresce linearmente con la profondità (legge di Stevino). Una variazione di pressione applicata a un fluido incomprimibile chiuso si trasmette inalterata in ogni suo punto (principio di Pascal).",
            vars: r`p|pressione alla profondità $h$; p_0|pressione in superficie; \rho|densità; g|gravità`,
            tex: r`p=p_0+\rho g h` },
          { kind: 'thm', title: T('Equazione di continuità e teorema di Bernoulli', 'Continuity equation and Bernoulli theorem'),
            text: "Per un fluido ideale incomprimibile in moto stazionario la portata si conserva: $A_1v_1=A_2v_2$. Lungo una linea di corrente, senza attriti, la somma di pressione, energia cinetica per unità di volume ed energia potenziale per unità di volume è costante (Bernoulli).",
            vars: r`A_i, v_i|sezione e velocità; p|pressione; \rho|densità; h|quota`,
            tex: r`A_1v_1=A_2v_2,\qquad p+\tfrac12\rho v^2+\rho gh=\text{costante}` },
          { kind: 'thm', title: T('Primo principio della termodinamica', 'First law of thermodynamics'),
            text: "La variazione di energia interna di un sistema è uguale al calore assorbito meno il lavoro compiuto dal sistema. L'energia interna è una funzione di stato; calore e lavoro dipendono dalla trasformazione.",
            vars: r`\Delta U|variazione di energia interna; Q|calore assorbito; W|lavoro compiuto dal sistema`,
            tex: r`\Delta U=Q-W` },
          { kind: 'thm', title: T('Secondo principio della termodinamica', 'Second law of thermodynamics'),
            text: "Enunciato di Kelvin-Planck: non esiste una trasformazione il cui unico risultato sia convertire in lavoro il calore preso da una sola sorgente. Enunciato di Clausius: non esiste una trasformazione il cui unico risultato sia trasferire calore da un corpo freddo a uno caldo. Equivalentemente, l'entropia di un sistema isolato non diminuisce.",
            vars: r`\Delta S_{\text{isolato}}|variazione di entropia di un sistema isolato`,
            tex: r`\Delta S_{\text{isolato}}\ge0` },
          { kind: 'thm', title: T('Teorema di Carnot', 'Carnot theorem'),
            text: "Nessuna macchina termica che opera tra due sorgenti può avere rendimento maggiore di una macchina reversibile che opera tra le stesse sorgenti; tutte le macchine reversibili tra le stesse temperature hanno lo stesso rendimento, che dipende solo da queste.",
            vars: r`\eta|rendimento; T_h, T_c|temperature (assolute) delle sorgenti calda e fredda`,
            tex: r`\eta\le\eta_{\text{Carnot}}=1-\frac{T_c}{T_h}` },
          { kind: 'thm', title: T('Principio zero e terzo principio della termodinamica', 'Zeroth and third law of thermodynamics'),
            text: "Principio zero: due sistemi in equilibrio termico con un terzo sono in equilibrio tra loro (definisce la temperatura). Terzo principio: lo zero assoluto non si può raggiungere con un numero finito di trasformazioni, e l'entropia di un cristallo perfetto tende a zero per $T\\to0$." }
        ]
      },
      {
        id: 'cinematica', title: T('Cinematica', 'Kinematics'),
        items: [
          { title: T('Moto uniformemente accelerato', 'Uniformly accelerated motion'),
            vars: r`v|velocità; v_0|velocità iniziale; a|accelerazione costante; t|tempo; s|posizione; s_0|posizione iniziale`,
            tex: [r`v=v_0+at,\qquad s=s_0+v_0t+\tfrac12at^2`, r`v^2=v_0^2+2a\,(s-s_0)`] },
          { title: T('Velocità e accelerazione', 'Velocity and acceleration'),
            vars: r`\mathbf r|vettore posizione; \mathbf v|velocità; \mathbf a|accelerazione; t|tempo`,
            tex: r`\mathbf v=\frac{d\mathbf r}{dt},\qquad \mathbf a=\frac{d\mathbf v}{dt}` },
          { title: T('Moto circolare', 'Circular motion'),
            vars: r`v|velocità tangenziale; \omega|velocità angolare; r|raggio; a_c|accelerazione centripeta; T|periodo`,
            tex: r`v=\omega r,\qquad a_c=\frac{v^2}{r}=\omega^2r,\qquad T=\frac{2\pi}{\omega}` },
          { title: T('Moto del proiettile', 'Projectile motion'),
            vars: r`R|gittata; h_{\max}|quota massima; v_0|velocità iniziale; \theta|angolo di lancio; g|accelerazione di gravità`,
            fig: FORMULARI.fig.plot({ x: [0, 1.2], y: [-0.05, 0.4], v: [0.5, 1], xl: 'x', yl: 'y',
  curves: [{ f: (x) => x - x * x }], pts: [[0.5, 0.25]], labels: [{ x: 0.5, y: 0.25, t: 'h_max', dx: 6, dy: -6 }, { x: 1, y: 0, t: 'R', dy: 14, dx: -3 }, { x: 0.12, y: 0.12, t: 'θ', cls: 't2' }] }),
            tex: r`R=\frac{v_0^2\sin2\theta}{g},\qquad h_{\max}=\frac{v_0^2\sin^2\theta}{2g},\qquad t_{\text{volo}}=\frac{2v_0\sin\theta}{g}` }
        ]
      },
      {
        id: 'dinamica', title: T('Dinamica', 'Dynamics'),
        items: [
          { title: T('Attrito e molla', 'Friction and spring'),
            vars: r`F_{\text{attr}}|forza d'attrito; \mu_s, \mu_d|coefficienti d'attrito statico e dinamico; N|reazione normale; k|costante elastica; x|allungamento`,
            tex: r`F_{\text{attr}}\le\mu_sN,\quad F_{\text{attr}}=\mu_dN,\qquad F_{\text{el}}=-kx` },
          { title: T('Gravitazione', 'Gravitation'),
            vars: r`F|forza gravitazionale; G|costante di gravitazione universale; m_1, m_2|masse; r|distanza; M, R|massa e raggio del pianeta; g|accelerazione di gravità; v_{\text{fuga}}|velocità di fuga`,
            tex: r`F=G\frac{m_1m_2}{r^2},\qquad g=\frac{GM}{R^2},\qquad v_{\text{fuga}}=\sqrt{\frac{2GM}{R}}` },
          { title: T('Lavoro, energia e potenza', 'Work, energy and power'),
            vars: r`W|lavoro; \mathbf F|forza; d\mathbf r|spostamento; E_c|energia cinetica; m|massa; v|velocità; P|potenza`,
            tex: [r`W=\int\mathbf F\cdot d\mathbf r,\qquad E_c=\tfrac12mv^2,\qquad W=\Delta E_c`, r`P=\frac{dW}{dt}=\mathbf F\cdot\mathbf v`] },
          { title: T('Energie potenziali', 'Potential energies'),
            vars: r`U_g|energia potenziale gravitazionale; m|massa; g|gravità; h|quota; U_{el}|energia elastica; k|costante elastica; x|allungamento; M|massa del pianeta; r|distanza dal centro`,
            tex: r`U_g=mgh,\qquad U_{el}=\tfrac12kx^2,\qquad U_{grav}=-\frac{GMm}{r}` },
          { title: T('Urti', 'Collisions'),
            vars: r`\mathbf p|quantità di moto; e|coefficiente di restituzione`,
            tex: [r`\sum\mathbf p_{\text{prima}}=\sum\mathbf p_{\text{dopo}}`, r`\text{completamente anelastico: }v'=\frac{m_1v_1+m_2v_2}{m_1+m_2}`] }
        ]
      },
      {
        id: 'rotazioni', title: T('Dinamica rotazionale', 'Rotational dynamics'),
        items: [
          { title: T('Equazioni fondamentali', 'Fundamental equations'),
            vars: r`\tau|momento della forza; I|momento di inerzia; \alpha|accelerazione angolare; L|momento angolare; \omega|velocità angolare; E_c|energia cinetica rotazionale`,
            tex: r`\tau=I\alpha,\qquad L=I\omega,\qquad E_c=\tfrac12I\omega^2,\qquad \tau=\mathbf r\times\mathbf F` },
          { title: T('Momenti di inerzia', 'Moments of inertia'),
            vars: r`M|massa del corpo; R|raggio; L|lunghezza`,
            tex: [r`\text{anello: }MR^2,\quad \text{disco pieno: }\tfrac12MR^2,\quad \text{sfera piena: }\tfrac25MR^2`,
                  r`\text{asta (centro): }\tfrac1{12}ML^2,\quad \text{asta (estremo): }\tfrac13ML^2`] },
          { title: T('Teorema di Huygens-Steiner', 'Parallel axis theorem'),
            vars: r`I|momento di inerzia rispetto all'asse parallelo; I_{cm}|momento rispetto all'asse per il centro di massa; M|massa; d|distanza tra gli assi`,
            tex: r`I=I_{cm}+Md^2` },
          { title: T('Rotolamento puro', 'Rolling without slipping'),
            vars: r`v_{cm}|velocità del centro di massa; \omega|velocità angolare; R|raggio; M|massa; I_{cm}|momento di inerzia; E_c|energia cinetica totale`,
            tex: r`v_{cm}=\omega R,\qquad E_c=\tfrac12Mv_{cm}^2+\tfrac12I_{cm}\omega^2` }
        ]
      },
      {
        id: 'oscillazioni', title: T('Oscillazioni e onde', 'Oscillations and waves'),
        items: [
          { title: T('Oscillatore armonico', 'Harmonic oscillator'),
            vars: r`x(t)|posizione; A|ampiezza; \omega|pulsazione; \varphi|fase iniziale; k|costante elastica; m|massa; T|periodo`,
            fig: FORMULARI.fig.plot({ x: [0, 7], y: [-1.5, 1.5], h: [1, -1], v: [2 * Math.PI], xl: 't', yl: 'x',
  curves: [{ f: (t) => Math.cos(t + 0.8) }], labels: [{ x: 0.1, y: 1, t: 'A', dy: -4 }, { x: 2 * Math.PI, y: 0, t: 'T', dy: 14, dx: -10 }] }),
            tex: [r`x(t)=A\cos(\omega t+\varphi),\qquad \omega=\sqrt{\frac km},\ \ T=2\pi\sqrt{\frac mk}`, r`E=\tfrac12kA^2`] },
          { title: T('Pendolo semplice', 'Simple pendulum'),
            vars: r`T|periodo; \ell|lunghezza del filo; g|accelerazione di gravità`,
            tex: r`T=2\pi\sqrt{\frac{\ell}{g}}\ \ (\text{piccole oscillazioni})` },
          { title: T('Onda armonica', 'Harmonic wave'),
            vars: r`y|spostamento; A|ampiezza; k|numero d'onda; \omega|pulsazione; \lambda|lunghezza d'onda; f|frequenza; v|velocità di propagazione`,
            tex: r`y=A\sin(kx-\omega t),\qquad k=\frac{2\pi}{\lambda},\quad v=\lambda f=\frac\omega k` },
          { title: T('Velocità su una corda', 'Speed on a string'),
            vars: r`v|velocità dell'onda; T_{\text{tens}}|tensione della corda; \mu|densità lineare di massa`,
            tex: r`v=\sqrt{\frac{T_{\text{tens}}}{\mu}}` },
          { title: T('Intensità sonora', 'Sound intensity'),
            vars: r`\beta|livello sonoro (dB); I|intensità; I_0|intensità di riferimento (soglia di udibilità)`,
            tex: r`\beta=10\log_{10}\frac{I}{I_0},\qquad I_0=10^{-12}\ \mathrm{W/m^2}` },
          { title: T('Legge di Snell', 'Snell\'s law'),
            vars: r`n_1, n_2|indici di rifrazione dei due mezzi; \theta_1, \theta_2|angoli rispetto alla normale; c|velocità della luce nel vuoto; v|velocità nel mezzo`,
            fig: FORMULARI.fig.svg(`
  <rect x="20" y="90" width="200" height="80" fill="currentColor" opacity=".08"/>
  <line class="fg-axis" x1="20" y1="90" x2="220" y2="90"/><line class="fg-dash" x1="120" y1="12" x2="120" y2="170"/>
  <path class="fg-curve fg-c1" d="M70.5 40.5 L120 90"/><path class="fg-curve fg-c2" d="M120 90 L153 151.7"/>
  <text x="26" y="82">n₁</text><text x="26" y="108">n₂ &gt; n₁</text>
  <text x="96" y="64" class="t1">θ₁</text><text x="128" y="124" class="t2">θ₂</text>`),
            tex: r`n_1\sin\theta_1=n_2\sin\theta_2,\qquad n=\frac cv` },
          { title: T('Lente sottile', 'Thin lens'),
            vars: r`p|distanza oggetto-lente; q|distanza immagine-lente; f|distanza focale`,
            tex: r`\frac1p+\frac1q=\frac1f` }
        ]
      },
      {
        id: 'fluidi', title: T('Fluidi', 'Fluids'),
        items: [
          { title: T('Stevino e Archimede', 'Hydrostatics and buoyancy'),
            vars: r`p|pressione alla profondità $h$; p_0|pressione in superficie; \rho|densità del fluido; g|gravità; h|profondità; F_A|spinta di Archimede; V_{\text{imm}}|volume immerso`,
            tex: r`p=p_0+\rho gh,\qquad F_A=\rho_{\text{fl}}\,V_{\text{imm}}\,g` },
          { title: T('Continuità e Bernoulli', 'Continuity and Bernoulli'),
            vars: r`A_1, A_2|sezioni; v_1, v_2|velocità del fluido; p|pressione; \rho|densità; g|gravità; h|quota`,
            tex: r`A_1v_1=A_2v_2,\qquad p+\tfrac12\rho v^2+\rho gh=\text{cost}` }
        ]
      },
      {
        id: 'termo', title: T('Termodinamica', 'Thermodynamics'),
        items: [
          { title: T('Gas perfetti', 'Ideal gas'),
            vars: r`p|pressione; V|volume; n|numero di moli; R|costante dei gas; T|temperatura assoluta; N|numero di molecole; k_B|costante di Boltzmann`,
            fig: FORMULARI.fig.plot({ x: [0.3, 3], y: [0, 3.5], xl: 'V', yl: 'p',
  curves: [{ f: (v) => 0.8 / v, cls: 'fg-c1' }, { f: (v) => 1.4 / v, cls: 'fg-c3' }, { f: (v) => 2 / v, cls: 'fg-c2' }],
  labels: [{ x: 2.3, y: 0.55, t: 'T₁', cls: 't1', dy: -3 }, { x: 2.2, y: 0.95, t: 'T₂', cls: 't3', dy: -6 }, { x: 2.0, y: 1.25, t: 'T₃', cls: 't2', dy: -12 }] }),
            tex: r`pV=nRT=Nk_BT` },
          { title: T('Calore', 'Heat'),
            vars: r`Q|calore scambiato; m|massa; c|calore specifico; \Delta T|variazione di temperatura; L|calore latente`,
            tex: r`Q=mc\,\Delta T,\qquad Q=mL` },
          { title: T('Primo principio', 'First law'),
            vars: r`\Delta U|variazione di energia interna; Q|calore assorbito; W|lavoro compiuto dal sistema; f|gradi di libertà; n, R, T|moli, costante dei gas, temperatura`,
            tex: r`\Delta U=Q-W,\qquad W=\int p\,dV,\qquad U=\tfrac f2nRT` },
          { title: T('Trasformazioni del gas perfetto', 'Ideal-gas processes'),
            vars: r`W|lavoro; n|moli; R|costante dei gas; T|temperatura; V_i, V_f|volumi iniziale e finale; \gamma|rapporto $c_p/c_v$`,
            tex: [r`\text{isoterma: }W=nRT\ln\frac{V_f}{V_i}`, r`\text{adiabatica: }pV^\gamma=\text{cost},\quad \gamma=\frac{c_p}{c_v},\ \ c_p-c_v=R`] },
          { title: T('Rendimento e Carnot', 'Efficiency and Carnot'),
            vars: r`\eta|rendimento; W|lavoro prodotto; Q_h, Q_c|calore assorbito dalla sorgente calda e ceduto alla fredda; T_h, T_c|temperature delle sorgenti`,
            tex: r`\eta=\frac{W}{Q_h}=1-\frac{Q_c}{Q_h},\qquad \eta_{\text{Carnot}}=1-\frac{T_c}{T_h}` },
          { title: T('Entropia', 'Entropy'),
            vars: r`\Delta S|variazione di entropia; \delta Q_{\text{rev}}|calore scambiato in modo reversibile; T|temperatura assoluta`,
            tex: r`\Delta S=\int\frac{\delta Q_{\text{rev}}}{T}\ \ge0\ \text{(sistema isolato)}` },
          { title: T('Conduzione del calore', 'Heat conduction'),
            vars: r`\dot Q|flusso di calore; k|conducibilità termica; A|area; dT/dx|gradiente di temperatura; R_{th}|resistenza termica; \Delta T|differenza di temperatura`,
            tex: r`\dot Q=-kA\,\frac{dT}{dx}=\frac{\Delta T}{R_{th}},\qquad R_{th}=\frac{L}{kA}` }
        ]
      }
    ]
  });
})();
