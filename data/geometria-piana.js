(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'geometria-piana', area: 'math', order: 20, icon: 'bi-triangle',
    title: T('Geometria piana', 'Plane geometry'),
    sections: [
      {
        id: 'def-gp', title: T('Definizioni e teoremi', 'Definitions and theorems'),
        items: [
          { kind: 'def', title: T('Angoli e rette', 'Angles and lines'),
            text: "Un angolo è acuto se misura meno di $90^\\circ$, retto se $90^\\circ$, ottuso se tra $90^\\circ$ e $180^\\circ$. Due angoli sono complementari se la somma è $90^\\circ$, supplementari se è $180^\\circ$. Due rette incidenti sono perpendicolari se formano angoli retti; due rette sono parallele se non hanno punti in comune (o coincidono)." },
          { kind: 'thm', title: T('Rette parallele e trasversale', 'Parallel lines and a transversal'),
            text: "Due rette tagliate da una trasversale sono parallele se e solo se gli angoli alterni interni sono congruenti (equivalentemente, se gli angoli corrispondenti sono congruenti, o se gli angoli coniugati interni sono supplementari)." },
          { kind: 'thm', title: T('Teorema dell\'angolo esterno', 'Exterior angle theorem'),
            text: "In un triangolo ogni angolo esterno è uguale alla somma dei due angoli interni non adiacenti. Da ciò segue che la somma degli angoli interni è $180^\\circ$.",
            vars: r`\alpha, \beta, \gamma|angoli interni; \gamma_{\text{ext}}|angolo esterno in $C$`,
            tex: r`\gamma_{\text{ext}}=\alpha+\beta,\qquad \alpha+\beta+\gamma=180^\circ` },
          { kind: 'crit', title: T('Criteri di congruenza dei triangoli', 'Triangle congruence criteria'),
            text: "Due triangoli sono congruenti se hanno ordinatamente uguali: (LAL) due lati e l'angolo compreso; (ALA) un lato e i due angoli adiacenti; (LLL) i tre lati. Per i triangoli rettangoli basta un cateto e l'ipotenusa." },
          { kind: 'crit', title: T('Criteri di similitudine dei triangoli', 'Triangle similarity criteria'),
            text: "Due triangoli sono simili se hanno: due angoli ordinatamente uguali (AA); oppure due lati in proporzione e l'angolo compreso uguale; oppure i tre lati in proporzione. In triangoli simili il rapporto delle aree è il quadrato del rapporto dei lati.",
            vars: r`A, A'|aree dei due triangoli; l, l'|lati omologhi`,
            tex: r`\frac{A'}{A}=\left(\frac{l'}{l}\right)^2` },
          { kind: 'thm', title: T('Disuguaglianza triangolare', 'Triangle inequality'),
            text: "In ogni triangolo ogni lato è minore della somma degli altri due e maggiore della loro differenza. A lato maggiore è opposto angolo maggiore.",
            vars: r`a, b, c|lati del triangolo`,
            tex: r`|b-c|<a<b+c` },
          { kind: 'def', title: T('Punti notevoli di un triangolo', 'Notable points of a triangle'),
            text: "Baricentro: incontro delle mediane, divide ciascuna mediana in due parti nel rapporto $2:1$ a partire dal vertice. Incentro: incontro delle bisettrici, centro del cerchio inscritto. Circocentro: incontro degli assi dei lati, centro del cerchio circoscritto. Ortocentro: incontro delle altezze. In un triangolo equilatero i quattro punti coincidono." },
          { kind: 'def', title: T('Circonferenza e cerchio', 'Circle'),
            text: "La circonferenza è il luogo dei punti del piano equidistanti da un punto fisso, il centro; il cerchio è la parte di piano da essa racchiusa. Una corda unisce due punti della circonferenza; il diametro è la corda massima ($2r$); una tangente ha un solo punto in comune con la circonferenza." },
          { kind: 'thm', title: T('Tangente e raggio', 'Tangent and radius'),
            text: "La tangente a una circonferenza in un punto è perpendicolare al raggio che passa per quel punto. Da un punto esterno si conducono due tangenti e i segmenti di tangente (dal punto ai punti di contatto) sono congruenti." },
          { kind: 'thm', title: T('Angoli alla circonferenza', 'Inscribed angles'),
            text: "Tutti gli angoli alla circonferenza che insistono sullo stesso arco sono congruenti e valgono la metà dell'angolo al centro corrispondente. Un angolo alla circonferenza che insiste su una semicirconferenza è retto (teorema di Talete sul semicerchio).",
            vars: r`\alpha_{\text{circ}}|angolo alla circonferenza; \alpha_{\text{centro}}|angolo al centro sullo stesso arco`,
            tex: r`\alpha_{\text{circ}}=\tfrac12\,\alpha_{\text{centro}}` },
          { kind: 'thm', title: T('Teorema delle corde', 'Intersecting chords theorem'),
            text: "Se due corde $AB$ e $CD$ di una circonferenza si incontrano in un punto $P$, i prodotti dei segmenti in cui $P$ le divide sono uguali. Se da un punto esterno $P$ partono una secante e una tangente, il quadrato del segmento di tangente è uguale al prodotto dei segmenti della secante.",
            vars: r`A, B, C, D|estremi delle corde o della secante; P|punto d'incontro (o esterno); T|punto di tangenza`,
            tex: [r`PA\cdot PB=PC\cdot PD`, r`PT^2=PA\cdot PB`] },
          { kind: 'crit', title: T('Quadrilateri inscrivibili e circoscrivibili', 'Cyclic and tangential quadrilaterals'),
            text: "Un quadrilatero convesso è inscrivibile in una circonferenza se e solo se gli angoli opposti sono supplementari. È circoscrivibile a una circonferenza se e solo se la somma di due lati opposti è uguale alla somma degli altri due (teorema di Pitot).",
            vars: r`\alpha, \beta, \gamma, \delta|angoli interni; a, b, c, d|lati consecutivi`,
            tex: [r`\text{inscrivibile}\iff\alpha+\gamma=\beta+\delta=180^\circ`, r`\text{circoscrivibile}\iff a+c=b+d`] },
          { kind: 'def', title: T('Omotetia e similitudine', 'Homothety and similarity'),
            text: "Un'omotetia di centro $O$ e rapporto $k\\ne0$ manda ogni punto $P$ nel punto $P'$ della retta $OP$ con $\\overrightarrow{OP'}=k\\,\\overrightarrow{OP}$. Conserva gli angoli e moltiplica le lunghezze per $|k|$ e le aree per $k^2$. Due figure sono simili se si corrispondono in una similitudine.",
            vars: r`O|centro; k|rapporto; P, P'|punto e sua immagine; A, A'|aree`,
            tex: r`\overrightarrow{OP'}=k\,\overrightarrow{OP},\qquad A'=k^2A` },
          { kind: 'thm', title: T('Teorema di Ceva', 'Ceva theorem'),
            text: "Siano $D,E,F$ punti sui lati $BC,CA,AB$ di un triangolo. Le rette $AD,BE,CF$ sono concorrenti se e solo se vale la relazione sotto (con i segmenti presi con segno). Le mediane, le altezze e le bisettrici ne sono casi particolari.",
            vars: r`A, B, C|vertici; D, E, F|punti sui lati opposti`,
            tex: r`\frac{AF}{FB}\cdot\frac{BD}{DC}\cdot\frac{CE}{EA}=1` }
        ]
      },
      {
        id: 'triangoli', title: T('Triangoli', 'Triangles'),
        items: [
          { title: T('Area', 'Area'),
            vars: r`A|area; b|base; h|altezza relativa alla base; a, b, c|lati; \gamma|angolo tra i lati $a$ e $b$; p|semiperimetro`,
            tex: [r`A=\frac{b\,h}{2}=\frac12ab\sin\gamma`, r`A=\sqrt{p(p-a)(p-b)(p-c)},\quad p=\frac{a+b+c}{2}`],
            note: T('Seconda riga: formula di Erone ($p$ semiperimetro).', 'Second line: Heron\'s formula ($p$ semiperimeter).') },
          { title: T('Raggio inscritto e circoscritto', 'Inradius and circumradius'),
            vars: r`r|raggio del cerchio inscritto; R|raggio del cerchio circoscritto; A|area; p|semiperimetro; a, b, c|lati`,
            tex: r`r=\frac{A}{p},\qquad R=\frac{abc}{4A}` },
          { title: T('Triangolo equilatero', 'Equilateral triangle'),
            vars: r`l|lato; h|altezza; A|area`,
            tex: r`h=\frac{\sqrt3}{2}\,l,\qquad A=\frac{\sqrt3}{4}\,l^2` },
          { title: T('Teorema di Pitagora', 'Pythagorean theorem'),
            vars: r`a, b|cateti; c|ipotenusa (triangolo rettangolo)`,
            fig: FORMULARI.fig.svg(`
  <path class="fg-fill" d="M40 140 L200 140 L40 50 Z"/><path class="fg-line" d="M40 132 L48 132 L48 140"/>
  <text x="16" y="98" class="t1">a</text><text x="116" y="158" class="t2">b</text><text x="130" y="90" class="t3">c</text>`),
            tex: r`c^2=a^2+b^2` },
          { title: T('Teoremi di Euclide', 'Euclid\'s theorems'),
            vars: r`a, b|cateti; c|ipotenusa; p, q|proiezioni dei cateti $a,b$ sull'ipotenusa; h|altezza relativa all'ipotenusa`,
            tex: r`a^2=c\cdot p,\qquad b^2=c\cdot q,\qquad h^2=p\cdot q`,
            note: T('Triangolo rettangolo con ipotenusa $c$ divisa dall\'altezza in $p$ e $q$.', 'Right triangle with hypotenuse $c$ split by the altitude into $p$ and $q$.') },
          { title: T('Teorema di Talete e bisettrice', 'Thales and angle bisector'),
            vars: r`AB, AB', AC, AC'|segmenti determinati da rette parallele; BD, DC|parti in cui la bisettrice dell'angolo $A$ divide il lato $BC$`,
            tex: [r`\frac{AB}{AB'}=\frac{AC}{AC'}`, r`\frac{BD}{DC}=\frac{AB}{AC}`],
            note: T('Seconda riga: la bisettrice da $A$ divide $BC$ in $BD$ e $DC$.', 'Second line: the bisector from $A$ splits $BC$ into $BD$ and $DC$.') },
          { title: T('Somma degli angoli', 'Angle sum'),
            vars: r`\alpha, \beta, \gamma|angoli interni del triangolo`,
            tex: r`\alpha+\beta+\gamma=180^\circ=\pi` }
        ]
      },
      {
        id: 'quadrilateri', title: T('Quadrilateri', 'Quadrilaterals'),
        items: [
          { title: T('Rettangolo e quadrato', 'Rectangle and square'),
            vars: r`A|area; P|perimetro; b, h|base e altezza; d|diagonale; l|lato del quadrato`,
            tex: [r`A=b\,h,\quad P=2(b+h),\quad d=\sqrt{b^2+h^2}`, r`\text{quadrato: }A=l^2,\ d=l\sqrt2`] },
          { title: T('Parallelogramma', 'Parallelogram'),
            vars: r`A|area; b|base; h|altezza; a|lato obliquo; \alpha|angolo tra i lati $a$ e $b$`,
            tex: r`A=b\,h=ab\sin\alpha` },
          { title: T('Rombo', 'Rhombus'),
            vars: r`A|area; d_1, d_2|diagonali`,
            tex: r`A=\frac{d_1d_2}{2}` },
          { title: T('Trapezio', 'Trapezoid'),
            vars: r`A|area; B, b|base maggiore e minore; h|altezza`,
            tex: r`A=\frac{(B+b)\,h}{2}` }
        ]
      },
      {
        id: 'cerchio', title: T('Circonferenza e cerchio', 'Circle'),
        items: [
          { title: T('Circonferenza e area', 'Circumference and area'),
            vars: r`C|circonferenza; A|area; r|raggio`,
            tex: r`C=2\pi r,\qquad A=\pi r^2` },
          { title: T('Arco e settore', 'Arc and sector'),
            vars: r`\ell|lunghezza dell'arco; A_{\text{settore}}|area del settore; r|raggio; \theta|angolo al centro (rad)`,
            tex: r`\ell=r\theta,\qquad A_{\text{settore}}=\frac12r^2\theta`,
            note: T('$\\theta$ in radianti.', '$\\theta$ in radians.') },
          { title: T('Corda', 'Chord'),
            vars: r`c|lunghezza della corda; r|raggio; \theta|angolo al centro (rad)`,
            tex: r`c=2r\sin\frac{\theta}{2}` },
          { title: T('Angolo alla circonferenza', 'Inscribed angle'),
            vars: r`\alpha_{\text{circ}}|angolo alla circonferenza; \alpha_{\text{centro}}|angolo al centro che insiste sullo stesso arco`,
            tex: r`\alpha_{\text{circ}}=\tfrac12\,\alpha_{\text{centro}}` }
        ]
      },
      {
        id: 'poligoni', title: T('Poligoni regolari', 'Regular polygons'),
        items: [
          { title: T('Angoli', 'Angles'),
            vars: r`n|numero di lati; \alpha_{\text{int}}|angolo interno (poligono regolare)`,
            tex: r`\sum\alpha_{\text{int}}=(n-2)\pi,\qquad \alpha_{\text{int}}=\frac{(n-2)\pi}{n}` },
          { title: T('Diagonali', 'Diagonals'),
            vars: r`n|numero di lati; N_{\text{diag}}|numero di diagonali`,
            tex: r`N_{\text{diag}}=\frac{n(n-3)}{2}` },
          { title: T('Area', 'Area'),
            vars: r`A|area; p|semiperimetro; a|apotema; n|numero di lati; l|lato`,
            tex: r`A=\frac{p\cdot a}{2}=\frac{n}{4}\,l^2\cot\frac{\pi}{n}`,
            note: T('$p$ perimetro, $a$ apotema, $l$ lato.', '$p$ perimeter, $a$ apothem, $l$ side.') }
        ]
      },

      {
        id: 'figure', title: T('Figure di riferimento', 'Reference figures'),
        items: [
          { title: T('Triangolo: notazione', 'Triangle: notation'),
            vars: r`a, b, c|lati; \alpha, \beta, \gamma|angoli opposti; R|raggio circoscritto`,
            tex: r`\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}=2R,\qquad c^2=a^2+b^2-2ab\cos\gamma`,
            note: T('Teorema dei seni e di Carnot (del coseno). Angoli opposti ai lati omonimi.', 'Law of sines and law of cosines. Angles opposite the sides of the same name.'),
            fig: FORMULARI.fig.svg(`
              <path class="fg-fill" d="M30 150 L210 150 L150 40 Z"/>
              <text x="14" y="162">A</text><text x="214" y="162">B</text><text x="146" y="32">C</text>
              <text x="190" y="88" class="t1">a</text><text x="78" y="88" class="t2">b</text><text x="116" y="168" class="t3">c</text>
              <text x="50" y="145">α</text><text x="186" y="145">β</text><text x="143" y="62">γ</text>`) },
          { title: T('Cerchio: arco, settore, corda', 'Circle: arc, sector, chord'),
            vars: r`\ell|arco; r|raggio; \theta|angolo al centro (rad); c|corda`,
            tex: r`\ell=r\theta,\qquad A_{\text{settore}}=\tfrac12r^2\theta,\qquad c=2r\sin\tfrac\theta2`,
            fig: FORMULARI.fig.svg(`
              <circle class="fg-line" cx="120" cy="90" r="65"/>
              <path class="fg-fill" d="M120 90 L185 90 A65 65 0 0 0 152.5 33.7 Z"/>
              <path class="fg-dash" d="M185 90 L152.5 33.7"/>
              <text x="190" y="94">B</text><text x="152" y="28">C</text><text x="108" y="94">O</text>
              <text x="140" y="84" class="t2">θ</text><text x="150" y="62" class="t1">r</text>`) }
        ]
      }
    ]
  });
})();
