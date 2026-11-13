(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'geometria-analitica', area: 'math', order: 55, icon: 'bi-rulers',
    title: T('Geometria analitica', 'Analytic geometry'),
    sections: [
      {
        id: 'def-ga', title: T('Definizioni e teoremi', 'Definitions and theorems'),
        items: [
          { kind: 'def', title: T('Luogo geometrico', 'Locus'),
            text: "Un luogo geometrico è l'insieme dei punti del piano (o dello spazio) che soddisfano una data proprietà. Si descrive con un'equazione nelle coordinate: la circonferenza, l'ellisse, l'iperbole e la parabola sono luoghi." },
          { kind: 'def', title: T('Coefficiente angolare di una retta', 'Slope of a line'),
            text: "Il coefficiente angolare $m$ di una retta non verticale è la tangente dell'angolo che essa forma con il verso positivo dell'asse $x$: è la variazione di $y$ per ogni unità di $x$.",
            vars: r`m|coefficiente angolare; \theta|angolo con l'asse $x$; (x_1,y_1), (x_2,y_2)|due punti della retta`,
            tex: r`m=\tan\theta=\frac{y_2-y_1}{x_2-x_1}` },
          { kind: 'def', title: T('Circonferenza come luogo', 'Circle as a locus'),
            text: "La circonferenza di centro $C=(x_C,y_C)$ e raggio $r$ è il luogo dei punti $P$ tali che $\\overline{PC}=r$.",
            vars: r`(x_C,y_C)|centro; r|raggio`,
            tex: r`(x-x_C)^2+(y-y_C)^2=r^2` },
          { kind: 'def', title: T('Ellisse come luogo', 'Ellipse as a locus'),
            text: "L'ellisse è il luogo dei punti $P$ per cui la somma delle distanze da due punti fissi, i fuochi $F_1,F_2$, è costante e uguale a $2a$. Con fuochi $(\\pm c,0)$ e $b^2=a^2-c^2$ ha equazione canonica sotto; l'eccentricità è $e=c/a<1$.",
            vars: r`F_1, F_2|fuochi; a, b|semiassi; c|distanza focale; e|eccentricità`,
            tex: r`\overline{PF_1}+\overline{PF_2}=2a\iff\frac{x^2}{a^2}+\frac{y^2}{b^2}=1` },
          { kind: 'def', title: T('Iperbole come luogo', 'Hyperbola as a locus'),
            text: "L'iperbole è il luogo dei punti $P$ per cui il valore assoluto della differenza delle distanze dai fuochi è costante e uguale a $2a$. Con fuochi $(\\pm c,0)$ e $b^2=c^2-a^2$ ha equazione canonica sotto, asintoti $y=\\pm\\frac bax$ ed eccentricità $e=c/a>1$.",
            vars: r`F_1, F_2|fuochi; a, b|semiassi; c|distanza focale; e|eccentricità`,
            tex: r`\big|\overline{PF_1}-\overline{PF_2}\big|=2a\iff\frac{x^2}{a^2}-\frac{y^2}{b^2}=1` },
          { kind: 'def', title: T('Parabola come luogo', 'Parabola as a locus'),
            text: "La parabola è il luogo dei punti equidistanti da un punto fisso, il fuoco $F$, e da una retta fissa, la direttrice $d$. Per fuoco $(0,\\frac{1}{4a})$ e direttrice $y=-\\frac1{4a}$ ha equazione $y=ax^2$; l'eccentricità è $e=1$.",
            vars: r`F|fuoco; d|direttrice; a|coefficiente della parabola`,
            tex: r`\overline{PF}=\operatorname{dist}(P,d)\iff y=ax^2` },
          { kind: 'thm', title: T('Prodotto vettoriale: proprietà', 'Cross product: properties'),
            text: "Il prodotto vettoriale $\\mathbf u\\times\\mathbf v$ è un vettore perpendicolare a entrambi, con verso dato dalla regola della mano destra e modulo uguale all'area del parallelogramma di lati $\\mathbf u,\\mathbf v$. È anticommutativo e nullo se e solo se $\\mathbf u,\\mathbf v$ sono paralleli.",
            vars: r`\mathbf u, \mathbf v|vettori in $\mathbb R^3$; \theta|angolo tra i vettori`,
            tex: r`\lVert\mathbf u\times\mathbf v\rVert=\lVert\mathbf u\rVert\,\lVert\mathbf v\rVert\sin\theta,\qquad \mathbf v\times\mathbf u=-\mathbf u\times\mathbf v` },
          { kind: 'def', title: T('Vettori collineari e complanari', 'Collinear and coplanar vectors'),
            text: "Due vettori sono paralleli (collineari) se uno è multiplo dell'altro, ossia se il loro prodotto vettoriale è nullo. Tre vettori sono complanari se il loro prodotto misto è nullo, cioè se sono linearmente dipendenti.",
            vars: r`\mathbf u, \mathbf v, \mathbf w|vettori di $\mathbb R^3$`,
            tex: r`\mathbf u\parallel\mathbf v\iff\mathbf u\times\mathbf v=\mathbf 0,\qquad \mathbf u,\mathbf v,\mathbf w\ \text{complanari}\iff\mathbf u\cdot(\mathbf v\times\mathbf w)=0` },
          { kind: 'def', title: T('Piano e vettore normale', 'Plane and normal vector'),
            text: "Un piano è l'insieme dei punti $P$ per cui $\\overrightarrow{P_0P}$ è perpendicolare a un vettore fisso $\\mathbf n$, il vettore normale. In coordinate: $ax+by+cz+d=0$ con $\\mathbf n=(a,b,c)$. Due piani sono paralleli se le normali sono parallele, perpendicolari se le normali sono perpendicolari.",
            vars: r`\mathbf n=(a,b,c)|vettore normale; P_0|punto del piano`,
            tex: r`\mathbf n\cdot(P-P_0)=0\iff ax+by+cz+d=0` },
          { kind: 'thm', title: T('Posizione reciproca di due rette nello spazio', 'Relative position of two lines in space'),
            text: "Due rette dello spazio sono: incidenti (un solo punto in comune), parallele (stessa direzione, nessun punto o coincidenti) oppure sghembe (non complanari, né incidenti né parallele). Le rette di direzioni $\\mathbf v_1,\\mathbf v_2$ passanti per $P_1,P_2$ sono complanari se e solo se $\\overrightarrow{P_1P_2}\\cdot(\\mathbf v_1\\times\\mathbf v_2)=0$.",
            vars: r`P_1, P_2|punti delle due rette; \mathbf v_1, \mathbf v_2|vettori direttori`,
            tex: r`\text{complanari}\iff\overrightarrow{P_1P_2}\cdot(\mathbf v_1\times\mathbf v_2)=0` },
          { kind: 'def', title: T('Isometrie e similitudini', 'Isometries and similarities'),
            text: "Un'isometria è una trasformazione che conserva le distanze: traslazioni, rotazioni, simmetrie (riflessioni) e loro composizioni. Una similitudine moltiplica tutte le distanze per un fattore costante $k>0$ (le omotetie ne sono un esempio)." }
        ]
      },
      {
        id: 'retta', title: T('Piano cartesiano e retta', 'Cartesian plane and line'),
        items: [
          { title: T('Distanza e punto medio', 'Distance and midpoint'),
            vars: r`P_1=(x_1,y_1), P_2=(x_2,y_2)|due punti del piano; d|distanza; M|punto medio del segmento`,
            tex: [r`d(P_1,P_2)=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}`, r`M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)`] },
          { title: T('Equazioni della retta', 'Equations of a line'),
            vars: r`m|coefficiente angolare (pendenza); q|intercetta con l'asse $y$; a, b, c|coefficienti della forma implicita; (x_1,y_1), (x_2,y_2)|due punti della retta`,
            tex: [r`y=mx+q,\qquad ax+by+c=0\ \ \left(m=-\frac ab\right)`, r`m=\frac{y_2-y_1}{x_2-x_1}=\tan\theta`] },
          { title: T('Retta per due punti', 'Line through two points'),
            vars: r`(x_1,y_1), (x_2,y_2)|due punti distinti della retta; (x,y)|punto generico`,
            tex: r`\frac{y-y_1}{y_2-y_1}=\frac{x-x_1}{x_2-x_1}` },
          { title: T('Retta per un punto con coefficiente angolare', 'Point-slope form'),
            vars: r`(x_0,y_0)|punto di passaggio; m|coefficiente angolare`,
            tex: r`y-y_0=m\,(x-x_0)` },
          { title: T('Parallelismo e perpendicolarità', 'Parallel and perpendicular'),
            vars: r`r, s|rette; m_1, m_2|coefficienti angolari`,
            tex: r`r\parallel s\iff m_1=m_2,\qquad r\perp s\iff m_1m_2=-1` },
          { title: T('Angolo tra due rette', 'Angle between two lines'),
            vars: r`\theta|angolo (acuto) tra le rette; m_1, m_2|coefficienti angolari`,
            tex: r`\tan\theta=\left|\frac{m_2-m_1}{1+m_1m_2}\right|` },
          { title: T('Distanza punto-retta', 'Point-line distance'),
            vars: r`d|distanza; (x_0,y_0)|punto; ax+by+c=0|equazione della retta`,
            tex: r`d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}` },
          { title: T('Fascio di rette', 'Pencil of lines'),
            vars: r`ax+by+c=0, a'x+b'y+c'=0|due rette generatrici; k|parametro del fascio`,
            tex: r`(ax+by+c)+k\,(a'x+b'y+c')=0` }
        ]
      },
      {
        id: 'coniche', title: T('Coniche', 'Conic sections'),
        items: [
          { title: T('Circonferenza', 'Circle'),
            vars: r`(x_C,y_C)|centro; r|raggio; a, b, c|coefficienti dell'equazione canonica; C|centro`,
            tex: [r`(x-x_C)^2+(y-y_C)^2=r^2`,
                  r`x^2+y^2+ax+by+c=0:\ \ C=\left(-\frac a2,-\frac b2\right),\ \ r=\sqrt{\frac{a^2+b^2}{4}-c}`] },
          { title: T('Parabola con asse verticale', 'Parabola (vertical axis)'),
            vars: r`a, b, c|coefficienti; \Delta|discriminante; V|vertice; F|fuoco; d|direttrice`,
            fig: FORMULARI.fig.plot({ x: [-2.5, 2.5], y: [-1, 3.5], h: [-0.5], xl: 'x', yl: 'y',
  curves: [{ f: (x) => 0.5 * x * x }], pts: [[0, 0.5], [0, 0]], labels: [{ x: 0, y: 0.5, t: 'F', dx: 8, dy: -2 }, { x: 0, y: 0, t: 'V', dx: 8, dy: 14 }, { x: 1.2, y: -0.5, t: 'direttrice', dy: -4 }] }),
            tex: [r`y=ax^2+bx+c,\qquad \Delta=b^2-4ac`,
                  r`V=\left(-\frac{b}{2a},-\frac{\Delta}{4a}\right),\quad F=\left(-\frac{b}{2a},\frac{1-\Delta}{4a}\right),\quad y_d=\frac{-1-\Delta}{4a}`] },
          { title: T('Ellisse', 'Ellipse'),
            vars: r`a, b|semiassi (maggiore, minore); c|distanza focale ($c^2=a^2-b^2$); F|fuochi; e|eccentricità ($e<1$)`,
            fig: FORMULARI.fig.plot({ x: [-3, 3], y: [-2, 2], xl: 'x', yl: 'y',
  curves: [{ xy: (t) => [2 * Math.cos(t), 1.2 * Math.sin(t)], t: [0, 6.2832], arrow: false }],
  pts: [[1.6, 0], [-1.6, 0]], labels: [{ x: 1.6, y: 0, t: 'F₂', dy: 16, dx: -6 }, { x: -1.6, y: 0, t: 'F₁', dy: 16, dx: -6 }, { x: 2, y: 0, t: 'a', dy: 14, dx: 2 }, { x: 0, y: 1.2, t: 'b', dx: 6, dy: 2 }] }),
            tex: [r`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\quad(a>b)`, r`c^2=a^2-b^2,\quad F=(\pm c,0),\quad e=\frac ca<1`],
            note: T('Area $\\pi ab$.', 'Area $\\pi ab$.') },
          { title: T('Iperbole', 'Hyperbola'),
            vars: r`a, b|semiassi; c|distanza focale ($c^2=a^2+b^2$); F|fuochi; e|eccentricità ($e>1$)`,
            fig: FORMULARI.fig.plot({ x: [-3, 3], y: [-3, 3], xl: 'x', yl: 'y',
  curves: [{ xy: (t) => [Math.cosh(t), Math.sinh(t)], t: [-1.9, 1.9], arrow: false }, { xy: (t) => [-Math.cosh(t), Math.sinh(t)], t: [-1.9, 1.9], arrow: false },
           { f: (x) => x, cls: 'fg-c2' }, { f: (x) => -x, cls: 'fg-c2' }],
  pts: [[1.41, 0], [-1.41, 0]], labels: [{ x: 2, y: 2.4, t: 'asintoti', cls: 't2' }] }),
            tex: [r`\frac{x^2}{a^2}-\frac{y^2}{b^2}=1`, r`c^2=a^2+b^2,\quad F=(\pm c,0),\quad e=\frac ca>1,\quad y=\pm\frac bax`],
            note: T('Ultimo termine: asintoti.', 'Last term: asymptotes.') },
          { title: T('Iperbole equilatera riferita agli asintoti', 'Rectangular hyperbola'),
            vars: r`k|costante non nulla; x, y|coordinate (gli assi sono gli asintoti)`,
            tex: r`xy=k` },
          { title: T('Classificazione dalla forma quadratica', 'Classification by the quadratic form'),
            vars: r`A, B, C|coefficienti dei termini $x^2$, $xy$, $y^2$; B^2-4AC|discriminante della conica`,
            tex: r`Ax^2+Bxy+Cy^2+\dots=0:\quad B^2-4AC\ \begin{cases}<0&\text{ellisse}\\=0&\text{parabola}\\>0&\text{iperbole}\end{cases}` }
        ]
      },
      {
        id: 'spazio', title: T('Geometria nello spazio', '3D geometry'),
        items: [
          { title: T('Prodotto vettoriale', 'Cross product'),
            vars: r`\mathbf u, \mathbf v|vettori in $\mathbb R^3$; \mathbf i,\mathbf j,\mathbf k|versori degli assi; u_i, v_i|componenti`,
            tex: r`\mathbf u\times\mathbf v=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix},\qquad \|\mathbf u\times\mathbf v\|=\|\mathbf u\|\|\mathbf v\|\sin\theta` },
          { title: T('Prodotto misto e volume', 'Triple product and volume'),
            vars: r`\mathbf u,\mathbf v,\mathbf w|vettori in $\mathbb R^3$; V|volume del parallelepipedo che sottendono`,
            tex: r`\mathbf u\cdot(\mathbf v\times\mathbf w)=\det[\mathbf u\ \mathbf v\ \mathbf w],\qquad V_{\text{parallelepipedo}}=\big|\mathbf u\cdot(\mathbf v\times\mathbf w)\big|` },
          { title: T('Piano', 'Plane'),
            vars: r`a, b, c, d|coefficienti; \mathbf n|vettore normale al piano`,
            tex: r`ax+by+cz+d=0,\qquad \mathbf n=(a,b,c)`,
            note: T('Per tre punti: $\\mathbf n=(P_2-P_1)\\times(P_3-P_1)$.', 'Through three points: $\\mathbf n=(P_2-P_1)\\times(P_3-P_1)$.') },
          { title: T('Retta (parametrica)', 'Line (parametric)'),
            vars: r`(x_0,y_0,z_0)|punto della retta; \mathbf v=(l,m,n)|vettore direttore; t|parametro reale`,
            tex: r`\begin{cases}x=x_0+lt\\y=y_0+mt\\z=z_0+nt\end{cases},\qquad \mathbf v=(l,m,n)` },
          { title: T('Distanza punto-piano', 'Point-plane distance'),
            vars: r`d|distanza; (x_0,y_0,z_0)|punto; ax+by+cz+d=0|equazione del piano`,
            tex: r`d=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}` },
          { title: T('Distanza punto-retta', 'Point-line distance'),
            vars: r`d|distanza; P|punto; P_0|punto della retta; \mathbf v|vettore direttore della retta`,
            tex: r`d=\frac{\|(P-P_0)\times\mathbf v\|}{\|\mathbf v\|}` },
          { title: T('Angoli', 'Angles'),
            vars: r`\theta|angolo; \mathbf v_1,\mathbf v_2|direttori delle rette; \mathbf n_1,\mathbf n_2|normali dei piani; \mathbf v, \mathbf n|direttore della retta e normale del piano`,
            tex: [r`\cos\theta_{\text{rette}}=\frac{|\mathbf v_1\cdot\mathbf v_2|}{\|\mathbf v_1\|\|\mathbf v_2\|}`,
                  r`\cos\theta_{\text{piani}}=\frac{|\mathbf n_1\cdot\mathbf n_2|}{\|\mathbf n_1\|\|\mathbf n_2\|}`] },
          { title: T('Sfera', 'Sphere'),
            vars: r`(x_C,y_C,z_C)|centro; r|raggio`,
            tex: r`(x-x_C)^2+(y-y_C)^2+(z-z_C)^2=r^2` }
        ]
      },
      {
        id: 'trasformazioni', title: T('Trasformazioni', 'Transformations'),
        items: [
          { title: T('Coordinate polari', 'Polar coordinates'),
            vars: r`\rho|distanza dall'origine; \theta|angolo dall'asse $x$; x, y|coordinate cartesiane`,
            fig: FORMULARI.fig.svg(`
  <line class="fg-axis" x1="30" y1="150" x2="220" y2="150"/><line class="fg-axis" x1="60" y1="170" x2="60" y2="15"/>
  <path class="fg-line" d="M60 150 L170 70"/><circle class="fg-pt" cx="170" cy="70" r="3.5"/>
  <path class="fg-dash" d="M170 70 L170 150"/><path class="fg-dash" d="M170 70 L60 70"/>
  <path class="fg-curve fg-c2" d="M100 150 A40 40 0 0 0 92.3 126.6"/>
  <text x="108" y="140" class="t2">θ</text><text x="105" y="102" class="t1">ρ</text>
  <text x="166" y="164">x</text><text x="40" y="74">y</text><text x="176" y="68">(x, y)</text>
  <text x="212" y="164">x</text>`),
            tex: r`x=\rho\cos\theta,\ \ y=\rho\sin\theta,\qquad \rho=\sqrt{x^2+y^2},\ \ \theta=\operatorname{atan2}(y,x)` },
          { title: T('Rotazione nel piano', 'Planar rotation'),
            vars: r`\theta|angolo di rotazione (antiorario); (x,y)|coordinate di partenza; (x',y')|coordinate dopo la rotazione`,
            tex: r`\begin{pmatrix}x'\\y'\end{pmatrix}=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}` },
          { title: T('Traslazione e omotetia', 'Translation and scaling'),
            vars: r`(a,b)|vettore di traslazione; k|rapporto di omotetia`,
            tex: r`(x',y')=(x+a,\,y+b),\qquad (x',y')=(kx,\,ky)` },
          { title: T('Rotazioni nello spazio', '3D rotations'),
            vars: r`R_z(\theta)|rotazione di $\theta$ attorno all'asse $z$; \theta|angolo di rotazione`,
            tex: r`R_z(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta&0\\\sin\theta&\cos\theta&0\\0&0&1\end{pmatrix}` }
        ]
      }
    ]
  });
})();
