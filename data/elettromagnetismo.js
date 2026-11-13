(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'elettromagnetismo', area: 'phys', order: 20, icon: 'bi-lightning',
    title: T('Elettromagnetismo', 'Electromagnetism'),
    sections: [
      {
        id: 'def-em', title: T('Leggi e teoremi', 'Laws and theorems'),
        items: [
          { kind: 'thm', title: T('Legge di Coulomb', 'Coulomb law'),
            text: "La forza tra due cariche puntiformi in quiete è diretta lungo la retta che le congiunge, proporzionale al prodotto delle cariche e inversamente proporzionale al quadrato della distanza; è repulsiva per cariche dello stesso segno, attrattiva per segni opposti.",
            vars: r`q_1, q_2|cariche; r|distanza; \hat{\mathbf r}|versore da una carica all'altra; \varepsilon_0|permittività del vuoto`,
            tex: r`\mathbf F=\frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}\,\hat{\mathbf r}` },
          { kind: 'thm', title: T('Principio di sovrapposizione elettrico', 'Superposition principle (electric)'),
            text: "Il campo elettrico (e il potenziale) prodotto da più cariche è la somma vettoriale (scalare) dei campi (potenziali) prodotti da ciascuna carica come se fosse sola." },
          { kind: 'thm', title: T('Teorema di Gauss per il campo elettrico', 'Gauss law for the electric field'),
            text: "Il flusso del campo elettrico attraverso una superficie chiusa è uguale alla carica contenuta divisa per la permittività. In forma locale: la divergenza del campo è la densità di carica divisa per $\\varepsilon_0$.",
            vars: r`\mathbf E|campo elettrico; S|superficie chiusa; Q_{\text{int}}|carica interna; \rho|densità di carica; \varepsilon_0|permittività del vuoto`,
            tex: [r`\oint_S\mathbf E\cdot\mathbf n\,dS=\frac{Q_{\text{int}}}{\varepsilon_0}`, r`\nabla\cdot\mathbf E=\frac{\rho}{\varepsilon_0}`] },
          { kind: 'thm', title: T('Conservatività del campo elettrostatico', 'Conservative nature of the electrostatic field'),
            text: "Il campo elettrostatico è conservativo: la sua circuitazione lungo ogni percorso chiuso è nulla e il rotore è nullo. Esiste quindi il potenziale elettrostatico, con $\\mathbf E=-\\nabla V$.",
            vars: r`\mathbf E|campo elettrostatico; V|potenziale elettrico`,
            tex: r`\oint\mathbf E\cdot d\mathbf l=0,\qquad \nabla\times\mathbf E=\mathbf 0,\qquad \mathbf E=-\nabla V` },
          { kind: 'thm', title: T('Teorema di Coulomb sui conduttori', 'Coulomb theorem for conductors'),
            text: "All'equilibrio elettrostatico il campo all'interno di un conduttore è nullo, il conduttore è equipotenziale, la carica sta sulla superficie e il campo appena fuori è perpendicolare alla superficie con intensità $\\sigma/\\varepsilon_0$.",
            vars: r`\sigma|densità superficiale di carica; \varepsilon_0|permittività del vuoto`,
            tex: r`E_{\text{fuori}}=\frac{\sigma}{\varepsilon_0}` },
          { kind: 'def', title: T('Capacità di un condensatore', 'Capacitance of a capacitor'),
            text: "La capacità è il rapporto tra la carica su un'armatura e la tensione tra le armature; dipende solo dalla geometria e dal dielettrico. L'energia immagazzinata è $\\tfrac12CV^2$.",
            vars: r`C|capacità; Q|carica; V|tensione; W|energia`,
            tex: r`C=\frac{Q}{V},\qquad W=\tfrac12CV^2=\frac{Q^2}{2C}` },
          { kind: 'thm', title: T('Teorema di Gauss per il campo magnetico', 'Gauss law for magnetism'),
            text: "Il flusso del campo magnetico attraverso una superficie chiusa è sempre nullo: le linee di campo sono chiuse e non esistono monopoli magnetici.",
            vars: r`\mathbf B|induzione magnetica; S|superficie chiusa`,
            tex: [r`\oint_S\mathbf B\cdot\mathbf n\,dS=0`, r`\nabla\cdot\mathbf B=0`] },
          { kind: 'thm', title: T('Legge di Ampère-Maxwell', 'Ampère-Maxwell law'),
            text: "La circuitazione del campo magnetico lungo una linea chiusa è proporzionale alla corrente concatenata, sommata alla corrente di spostamento dovuta alla variazione del flusso del campo elettrico. In regime stazionario resta la sola corrente di conduzione.",
            vars: r`\mu_0|permeabilità del vuoto; I_{\text{conc}}|corrente concatenata; \Phi_E|flusso elettrico`,
            tex: r`\oint\mathbf B\cdot d\mathbf l=\mu_0\left(I_{\text{conc}}+\varepsilon_0\frac{d\Phi_E}{dt}\right)` },
          { kind: 'thm', title: T('Legge di Faraday-Neumann-Lenz', 'Faraday-Neumann-Lenz law'),
            text: "La forza elettromotrice indotta in un circuito è uguale all'opposto della derivata del flusso del campo magnetico concatenato. Il segno meno (legge di Lenz) esprime che la corrente indotta si oppone alla variazione di flusso che l'ha generata.",
            vars: r`\varepsilon|forza elettromotrice indotta; \Phi_B|flusso magnetico; \mathbf B|induzione magnetica; \mathbf E|campo elettrico`,
            tex: [r`\varepsilon=-\frac{d\Phi_B}{dt}`, r`\nabla\times\mathbf E=-\frac{\partial\mathbf B}{\partial t}`] },
          { kind: 'thm', title: T('Equazioni di Maxwell nel vuoto', 'Maxwell equations in vacuum'),
            text: "Il campo elettromagnetico nel vuoto è governato da quattro equazioni, nella forma locale sotto: legge di Gauss elettrica, legge di Gauss magnetica, legge di Faraday e legge di Ampère-Maxwell. Dalle equazioni di Maxwell segue l'esistenza di onde elettromagnetiche che si propagano alla velocità $c=1/\\sqrt{\\mu_0\\varepsilon_0}$.",
            vars: r`\mathbf E, \mathbf B|campo elettrico e magnetico; \rho, \mathbf J|densità di carica e di corrente; c|velocità della luce`,
            tex: [r`\nabla\cdot\mathbf E=\frac{\rho}{\varepsilon_0},\qquad \nabla\cdot\mathbf B=0`, r`\nabla\times\mathbf E=-\frac{\partial\mathbf B}{\partial t},\qquad \nabla\times\mathbf B=\mu_0\mathbf J+\mu_0\varepsilon_0\frac{\partial\mathbf E}{\partial t}`] },
          { kind: 'thm', title: T('Teorema di Poynting', 'Poynting theorem'),
            text: "La potenza elettromagnetica che attraversa una superficie chiusa è il flusso del vettore di Poynting. Il teorema esprime la conservazione dell'energia: la diminuzione dell'energia del campo nel volume è uguale alla potenza uscente più quella ceduta alle cariche.",
            vars: r`u|densità di energia del campo; \mathbf S=\mathbf E\times\mathbf H|vettore di Poynting; \mathbf J|densità di corrente`,
            tex: r`-\frac{d}{dt}\int_Vu\,dV=\oint_{\partial V}\mathbf S\cdot\mathbf n\,dS+\int_V\mathbf E\cdot\mathbf J\,dV` },
          { kind: 'thm', title: T('Condizioni di raccordo all\'interfaccia', 'Boundary conditions at an interface'),
            text: "Sulla superficie di separazione tra due mezzi la componente tangenziale di $\\mathbf E$ è continua e la componente normale di $\\mathbf D$ ha un salto pari alla densità superficiale di carica libera; la componente normale di $\\mathbf B$ è continua e quella tangenziale di $\\mathbf H$ ha un salto pari alla densità superficiale di corrente.",
            vars: r`E_t, H_t|componenti tangenziali; D_n, B_n|componenti normali; \sigma_f, K_f|densità superficiali di carica e di corrente libere`,
            tex: [r`E_{t1}=E_{t2},\qquad D_{n2}-D_{n1}=\sigma_f`, r`B_{n1}=B_{n2},\qquad H_{t2}-H_{t1}=K_f`] },
          { kind: 'def', title: T('Onda elettromagnetica piana', 'Plane electromagnetic wave'),
            text: "Un'onda piana monocromatica ha campi $\\mathbf E$ e $\\mathbf B$ perpendicolari tra loro e alla direzione di propagazione, in fase, con rapporto $E/B=c$. Nel vuoto trasporta potenza media per unità di area pari a $\\frac{E_0^2}{2Z_0}$, con $Z_0\\approx377\\,\\Omega$.",
            vars: r`\mathbf E_0|ampiezza del campo elettrico; k|numero d'onda; \omega|pulsazione; Z_0|impedenza del vuoto`,
            tex: r`\mathbf E=\mathbf E_0\cos(kz-\omega t),\qquad \frac EB=c,\qquad Z_0=\sqrt{\frac{\mu_0}{\varepsilon_0}}` }
        ]
      },
      {
        id: 'elettrostatica', title: T('Elettrostatica', 'Electrostatics'),
        items: [
          { title: T('Legge di Coulomb', 'Coulomb\'s law'),
            vars: r`F|forza tra due cariche; q_1, q_2|cariche; r|distanza; \varepsilon_0|permittività del vuoto`,
            tex: r`F=\frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}` },
          { title: T('Campo elettrico', 'Electric field'),
            vars: r`\mathbf E|campo elettrico; \mathbf F|forza; q|carica di prova o carica sorgente; r|distanza; \varepsilon_0|permittività del vuoto`,
            tex: r`\mathbf E=\frac{\mathbf F}{q},\qquad E_{\text{punto}}=\frac{q}{4\pi\varepsilon_0r^2}` },
          { title: T('Campi notevoli', 'Standard fields'),
            vars: r`\lambda|densità lineare di carica; \sigma|densità superficiale di carica; r|distanza; \varepsilon_0|permittività del vuoto`,
            tex: r`\text{filo: }E=\frac{\lambda}{2\pi\varepsilon_0r},\qquad \text{piano: }E=\frac{\sigma}{2\varepsilon_0},\qquad \text{sfera (}r>R\text{): }E=\frac{Q}{4\pi\varepsilon_0r^2}` },
          { title: T('Potenziale', 'Potential'),
            vars: r`V|potenziale elettrico; q|carica; r|distanza; \mathbf E|campo elettrico; \varepsilon_0|permittività del vuoto`,
            tex: r`V=\frac{q}{4\pi\varepsilon_0r},\qquad \mathbf E=-\nabla V,\qquad \Delta V=-\int\mathbf E\cdot d\mathbf l` },
          { title: T('Condensatore piano', 'Parallel-plate capacitor'),
            vars: r`C|capacità; \varepsilon_0, \varepsilon_r|permittività del vuoto e relativa; A|area delle armature; d|distanza tra le armature; Q|carica; V|tensione; W|energia immagazzinata`,
            tex: r`C=\frac{\varepsilon_0\varepsilon_rA}{d},\qquad Q=CV,\qquad W=\tfrac12CV^2` },
          { title: T('Densità di energia', 'Energy density'),
            vars: r`u_E|densità di energia del campo elettrico; \varepsilon|permittività del mezzo; E|intensità del campo`,
            tex: r`u_E=\tfrac12\varepsilon E^2` }
        ]
      },
      {
        id: 'magnetismo', title: T('Magnetostatica', 'Magnetostatics'),
        items: [
          { title: T('Forza di Lorentz', 'Lorentz force'),
            vars: r`\mathbf F|forza; q|carica; \mathbf E, \mathbf B|campi elettrico e magnetico; \mathbf v|velocità; I|corrente; \mathbf l|vettore lunghezza del filo`,
            tex: r`\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B),\qquad \mathbf F=I\,\mathbf l\times\mathbf B` },
          { title: T('Legge di Biot-Savart', 'Biot-Savart law'),
            vars: r`d\mathbf B|contributo al campo magnetico; \mu_0|permeabilità del vuoto; I|corrente; d\mathbf l|elemento di conduttore; \hat{\mathbf r}|versore verso il punto; r|distanza`,
            tex: r`d\mathbf B=\frac{\mu_0}{4\pi}\frac{I\,d\mathbf l\times\hat{\mathbf r}}{r^2}` },
          { title: T('Campi magnetici notevoli', 'Standard magnetic fields'),
            vars: r`B|intensità del campo magnetico; \mu_0|permeabilità del vuoto; I|corrente; r|distanza dal filo; n|spire per unità di lunghezza`,
            tex: r`\text{filo: }B=\frac{\mu_0I}{2\pi r},\qquad \text{solenoide: }B=\mu_0nI,\qquad \text{spira (centro): }B=\frac{\mu_0I}{2R}` },
          { title: T('Moto in un campo magnetico', 'Motion in a magnetic field'),
            vars: r`r|raggio dell'orbita; m|massa; v|velocità; q|carica; B|campo magnetico; \omega_c|pulsazione di ciclotrone`,
            tex: r`r=\frac{mv}{qB},\qquad \omega_c=\frac{qB}{m}` },
          { title: T('Circuiti magnetici', 'Magnetic circuits'),
            vars: r`\mathcal F|forza magnetomotrice; N|numero di spire; I|corrente; \mathcal R|riluttanza; \Phi|flusso; \ell|lunghezza del percorso; \mu|permeabilità; A|sezione`,
            tex: r`\mathcal F=NI=\mathcal R\,\Phi,\qquad \mathcal R=\frac{\ell}{\mu A}` },
          { title: T('Densità di energia', 'Energy density'),
            vars: r`u_B|densità di energia del campo magnetico; B|campo magnetico; \mu|permeabilità del mezzo`,
            tex: r`u_B=\frac{B^2}{2\mu}` }
        ]
      },
      {
        id: 'induzione', title: T('Induzione e induttanza', 'Induction and inductance'),
        items: [
          { title: T('Conduttore in moto', 'Moving conductor'),
            vars: r`\varepsilon|forza elettromotrice indotta; B|campo magnetico; \ell|lunghezza del conduttore; v|velocità`,
            tex: r`\varepsilon=B\,\ell\,v` },
          { title: T('Autoinduttanza', 'Self-inductance'),
            vars: r`\Phi|flusso concatenato; L|induttanza; I|corrente; v|tensione; \mu|permeabilità; N|numero di spire; A|sezione`,
            tex: r`\Phi=LI,\qquad v=L\frac{di}{dt},\qquad L_{\text{sol}}=\frac{\mu N^2A}{\ell}` },
          { title: T('Mutua induttanza', 'Mutual inductance'),
            vars: r`\Phi_{12}|flusso concatenato con 1 dovuto alla corrente in 2; M|mutua induttanza; I_2|corrente nel circuito 2; k|coefficiente di accoppiamento; L_1, L_2|autoinduttanze`,
            tex: r`\Phi_{12}=MI_2,\qquad M=k\sqrt{L_1L_2},\quad 0\le k\le1` }
        ]
      },
      {
        id: 'maxwell', title: T('Equazioni di Maxwell e onde', 'Maxwell\'s equations and waves'),
        items: [
          { title: T('Forma differenziale', 'Differential form'),
            vars: r`\mathbf D, \mathbf E|induzione e campo elettrico; \mathbf B, \mathbf H|induzione e campo magnetico; \rho|densità di carica; \mathbf J|densità di corrente`,
            tex: [r`\nabla\!\cdot\mathbf D=\rho,\qquad \nabla\!\cdot\mathbf B=0`, r`\nabla\times\mathbf E=-\frac{\partial\mathbf B}{\partial t},\qquad \nabla\times\mathbf H=\mathbf J+\frac{\partial\mathbf D}{\partial t}`] },
          { title: T('Relazioni costitutive', 'Constitutive relations'),
            vars: r`\varepsilon, \mu|permittività e permeabilità del mezzo; \mathbf J|densità di corrente; \sigma|conducibilità`,
            tex: r`\mathbf D=\varepsilon\mathbf E,\qquad \mathbf B=\mu\mathbf H,\qquad \mathbf J=\sigma\mathbf E` },
          { title: T('Onda piana nel vuoto', 'Plane wave in vacuum'),
            vars: r`c|velocità della luce; \mu_0, \varepsilon_0|permeabilità e permittività del vuoto; E, B|campi dell'onda; Z_0|impedenza del vuoto (circa $377\,\Omega$)`,
            tex: r`c=\frac{1}{\sqrt{\mu_0\varepsilon_0}},\qquad \frac{E}{B}=c,\qquad Z_0=\sqrt{\frac{\mu_0}{\varepsilon_0}}\approx377\ \Omega` },
          { title: T('Vettore di Poynting', 'Poynting vector'),
            vars: r`\mathbf S|vettore di Poynting (densità di potenza); \mathbf E, \mathbf H|campi elettrico e magnetico; E_0|ampiezza del campo elettrico; \langle S\rangle|valore medio`,
            tex: r`\mathbf S=\mathbf E\times\mathbf H,\qquad \langle S\rangle=\frac{E_0^2}{2Z}` },
          { title: T('Velocità nel mezzo', 'Speed in a medium'),
            vars: r`v|velocità di propagazione; \mu, \varepsilon|permeabilità e permittività del mezzo; n|indice di rifrazione; \varepsilon_r, \mu_r|valori relativi`,
            tex: r`v=\frac{1}{\sqrt{\mu\varepsilon}},\qquad n=\sqrt{\varepsilon_r\mu_r}` }
        ]
      }
    ]
  });
})();
