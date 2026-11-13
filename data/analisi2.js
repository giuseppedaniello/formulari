(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'analisi2', area: 'math', order: 40, icon: 'bi-bezier2',
    title: T('Analisi matematica 2', 'Calculus 2'),
    sections: [
      {
        id: 'def-topologia', title: T('Topologia, limiti e continuità in R^n', 'Topology, limits and continuity in R^n'),
        items: [
          { kind: 'def', title: T('Intorno e tipi di punti', 'Neighbourhood and types of points'),
            text: "Un intorno di $\\mathbf x_0\\in\\mathbb R^n$ di raggio $r$ è la palla aperta $B_r(\\mathbf x_0)$. Dato $A\\subseteq\\mathbb R^n$, un punto è interno ad $A$ se un suo intorno è contenuto in $A$; di frontiera se ogni suo intorno contiene punti di $A$ e punti del complementare; di accumulazione se ogni suo intorno contiene punti di $A$ diversi da esso.",
            vars: r`\mathbf x_0|centro; r|raggio; B_r|palla aperta; \lVert\cdot\rVert|norma euclidea`,
            tex: r`B_r(\mathbf x_0)=\{\mathbf x\in\mathbb R^n:\ \lVert\mathbf x-\mathbf x_0\rVert<r\}` },
          { kind: 'def', title: T('Insiemi aperti, chiusi, limitati, compatti', 'Open, closed, bounded, compact sets'),
            text: "$A$ è aperto se tutti i suoi punti sono interni; chiuso se il suo complementare è aperto (equivalentemente se contiene la sua frontiera); limitato se è contenuto in una palla; compatto se è chiuso e limitato (in $\\mathbb R^n$)." },
          { kind: 'def', title: T('Limite di una funzione di più variabili', 'Limit of a multivariable function'),
            text: "$\\lim_{\\mathbf x\\to\\mathbf x_0}f(\\mathbf x)=L$ se per ogni $\\varepsilon>0$ esiste $\\delta>0$ tale che $|f(\\mathbf x)-L|<\\varepsilon$ per ogni $\\mathbf x$ del dominio con $0<\\lVert\\mathbf x-\\mathbf x_0\\rVert<\\delta$. Se il limite esiste, è lo stesso lungo ogni curva che tende a $\\mathbf x_0$: due curve con limiti diversi provano che il limite non esiste.",
            vars: r`f|funzione di $n$ variabili; \mathbf x_0|punto di accumulazione del dominio; L|limite; \varepsilon, \delta|tolleranze`,
            tex: r`\forall\varepsilon>0\ \exists\delta>0:\ 0<\lVert\mathbf x-\mathbf x_0\rVert<\delta\Rightarrow|f(\mathbf x)-L|<\varepsilon` },
          { kind: 'def', title: T('Funzione continua in più variabili', 'Continuous multivariable function'),
            text: "$f$ è continua in $\\mathbf x_0$ del dominio se $\\lim_{\\mathbf x\\to\\mathbf x_0}f(\\mathbf x)=f(\\mathbf x_0)$. Somma, prodotto, quoziente (con denominatore non nullo) e composizione di funzioni continue sono continue." },
          { kind: 'thm', title: T('Teorema di Weierstrass in R^n', 'Weierstrass theorem in R^n'),
            text: "Se $K\\subset\\mathbb R^n$ è compatto e $f:K\\to\\mathbb R$ è continua, allora $f$ ammette massimo e minimo assoluti su $K$.",
            vars: r`K|insieme chiuso e limitato; \mathbf x_m, \mathbf x_M|punti di minimo e di massimo assoluti`,
            tex: r`K\ \text{compatto},\ f\in C(K)\ \Rightarrow\ \exists\,\mathbf x_m,\mathbf x_M\in K:\ f(\mathbf x_m)\le f\le f(\mathbf x_M)` },
          { kind: 'thm', title: T('Insiemi connessi e valori intermedi', 'Connected sets and intermediate values'),
            text: "Un insieme è connesso per archi se due suoi punti qualsiasi si congiungono con una curva continua contenuta nell'insieme. Se $f$ è continua su un insieme connesso per archi, la sua immagine è un intervallo: $f$ assume ogni valore compreso tra due suoi valori." }
        ]
      },
      {
        id: 'def-diff', title: T('Calcolo differenziale: definizioni e teoremi', 'Differential calculus: definitions and theorems'),
        items: [
          { kind: 'def', title: T('Derivata parziale e derivata direzionale', 'Partial and directional derivative'),
            text: "La derivata parziale rispetto a $x_i$ si ottiene derivando rispetto a $x_i$ con le altre variabili fisse. La derivata direzionale lungo il versore $\\mathbf v$ è la derivata di $t\\mapsto f(\\mathbf x_0+t\\mathbf v)$ in $t=0$.",
            vars: r`\mathbf e_i|$i$-esimo versore della base; \mathbf v|direzione (versore); t, h|incrementi`,
            tex: [r`\frac{\partial f}{\partial x_i}(\mathbf x_0)=\lim_{h\to0}\frac{f(\mathbf x_0+h\,\mathbf e_i)-f(\mathbf x_0)}{h}`, r`\frac{\partial f}{\partial\mathbf v}(\mathbf x_0)=\lim_{t\to0}\frac{f(\mathbf x_0+t\,\mathbf v)-f(\mathbf x_0)}{t},\qquad\lVert\mathbf v\rVert=1`] },
          { kind: 'def', title: T('Gradiente', 'Gradient'),
            text: "Il gradiente di $f$ in $\\mathbf x_0$ è il vettore delle derivate parziali. Se $f$ è differenziabile, è perpendicolare alla curva (superficie) di livello passante per $\\mathbf x_0$ e indica la direzione di massima crescita, con rapidità $\\lVert\\nabla f\\rVert$.",
            vars: r`\nabla f|gradiente; \partial f/\partial x_i|derivata parziale rispetto a $x_i$`,
            tex: r`\nabla f(\mathbf x_0)=\left(\frac{\partial f}{\partial x_1},\dots,\frac{\partial f}{\partial x_n}\right)(\mathbf x_0)` },
          { kind: 'def', title: T('Funzione differenziabile', 'Differentiable function'),
            text: "$f$ è differenziabile in $\\mathbf x_0$ se esiste un vettore $\\mathbf a$ tale che $f(\\mathbf x_0+\\mathbf h)=f(\\mathbf x_0)+\\mathbf a\\cdot\\mathbf h+o(\\lVert\\mathbf h\\rVert)$ per $\\mathbf h\\to\\mathbf 0$. In tal caso $\\mathbf a=\\nabla f(\\mathbf x_0)$.",
            vars: r`\mathbf h|incremento; \nabla f|gradiente; o(\lVert\mathbf h\rVert)|resto trascurabile rispetto a $\lVert\mathbf h\rVert$`,
            tex: r`f(\mathbf x_0+\mathbf h)=f(\mathbf x_0)+\nabla f(\mathbf x_0)\cdot\mathbf h+o(\lVert\mathbf h\rVert)` },
          { kind: 'thm', title: T('Differenziabile implica continua e derivabile', 'Differentiable implies continuous and directionally differentiable'),
            text: "Se $f$ è differenziabile in $\\mathbf x_0$ allora è continua in $\\mathbf x_0$, ammette tutte le derivate direzionali e vale la formula del gradiente. I viceversa sono falsi: l'esistenza delle derivate parziali non garantisce neppure la continuità.",
            vars: r`\mathbf v|direzione (versore); \nabla f|gradiente`,
            tex: r`\frac{\partial f}{\partial\mathbf v}(\mathbf x_0)=\nabla f(\mathbf x_0)\cdot\mathbf v` },
          { kind: 'thm', title: T('Teorema del differenziale totale', 'Total differential theorem'),
            text: "Se $f$ ha derivate parziali in un intorno di $\\mathbf x_0$ e queste sono continue in $\\mathbf x_0$, allora $f$ è differenziabile in $\\mathbf x_0$. In particolare ogni funzione di classe $C^1$ è differenziabile." },
          { kind: 'thm', title: T('Teorema di Schwarz', 'Schwarz theorem'),
            text: "Se $f$ è di classe $C^2$ in un aperto (le derivate seconde esistono e sono continue), le derivate seconde miste coincidono: la matrice Hessiana è simmetrica.",
            vars: r`f|funzione di classe $C^2$; x, y|variabili`,
            tex: r`\frac{\partial^2f}{\partial x\,\partial y}=\frac{\partial^2f}{\partial y\,\partial x}` },
          { kind: 'thm', title: T('Derivata della funzione composta', 'Chain rule'),
            text: "Se $f$ è differenziabile in $(x(t),y(t))$ e $x,y$ sono derivabili in $t$, la funzione $t\\mapsto f(x(t),y(t))$ è derivabile. In generale, per $\\mathbf g:\\mathbb R^m\\to\\mathbb R^n$ e $f:\\mathbb R^n\\to\\mathbb R$ differenziabili, il gradiente della composta è $J_{\\mathbf g}^T\\,\\nabla f$.",
            vars: r`f|funzione di due variabili; x(t), y(t)|curva; J_{\mathbf g}|matrice Jacobiana di $\mathbf g$`,
            tex: r`\frac{d}{dt}f(x(t),y(t))=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}` },
          { kind: 'prop', title: T('Piano tangente e direzione di massima crescita', 'Tangent plane and steepest ascent'),
            text: "Se $f$ è differenziabile in $(x_0,y_0)$ il grafico ammette piano tangente $z=f(x_0,y_0)+\\nabla f\\cdot(x-x_0,\\,y-y_0)$. Tra tutte le direzioni $\\mathbf v$, la derivata direzionale è massima per $\\mathbf v=\\nabla f/\\lVert\\nabla f\\rVert$ e vale $\\lVert\\nabla f\\rVert$ (se $\\nabla f\\ne0$).",
            vars: r`\mathbf v|direzione (versore); \nabla f|gradiente in $(x_0,y_0)$`,
            tex: r`\max_{\lVert\mathbf v\rVert=1}\frac{\partial f}{\partial\mathbf v}=\lVert\nabla f\rVert` },
          { kind: 'thm', title: T('Formula di Taylor al secondo ordine', 'Second-order Taylor formula'),
            text: "Se $f$ è di classe $C^2$ in un intorno di $\\mathbf x_0$, per $\\mathbf h\\to\\mathbf 0$ vale lo sviluppo con resto di Peano, dove $H_f$ è la matrice Hessiana (simmetrica per il teorema di Schwarz).",
            vars: r`\mathbf h|incremento; \nabla f|gradiente; H_f|matrice Hessiana`,
            tex: r`f(\mathbf x_0+\mathbf h)=f(\mathbf x_0)+\nabla f(\mathbf x_0)\cdot\mathbf h+\tfrac12\,\mathbf h^TH_f(\mathbf x_0)\,\mathbf h+o(\lVert\mathbf h\rVert^2)` }
        ]
      },
      {
        id: 'def-estremi', title: T('Massimi, minimi e vincoli: teoremi', 'Extrema and constraints: theorems'),
        items: [
          { kind: 'def', title: T('Punti di estremo e punti stazionari', 'Extremum points and stationary points'),
            text: "$\\mathbf x_0$ è di massimo relativo se $f(\\mathbf x)\\le f(\\mathbf x_0)$ in un intorno di $\\mathbf x_0$ (minimo relativo se vale $\\ge$). È un punto stazionario (o critico) se $\\nabla f(\\mathbf x_0)=\\mathbf 0$. Un punto stazionario che non è di estremo si chiama punto di sella." },
          { kind: 'thm', title: T('Teorema di Fermat in più variabili', 'Fermat theorem in several variables'),
            text: "Se $\\mathbf x_0$ è interno al dominio, è un punto di estremo relativo e $f$ è differenziabile in $\\mathbf x_0$, allora $\\nabla f(\\mathbf x_0)=\\mathbf 0$.",
            vars: r`\mathbf x_0|punto interno di estremo relativo; \nabla f|gradiente`,
            tex: r`\mathbf x_0\ \text{estremo relativo interno}\ \Rightarrow\ \nabla f(\mathbf x_0)=\mathbf 0` },
          { kind: 'crit', title: T('Criterio dell\'Hessiana', 'Hessian test'),
            text: "Sia $f\\in C^2$ e $\\nabla f(\\mathbf x_0)=\\mathbf 0$. Se $H_f(\\mathbf x_0)$ è definita positiva, $\\mathbf x_0$ è di minimo relativo; se definita negativa, di massimo relativo; se indefinita, è una sella. Se è solo semidefinita il criterio non decide. Per $n=2$, con $D=\\det H_f$: $D>0,\\,f_{xx}>0$ minimo; $D>0,\\,f_{xx}<0$ massimo; $D<0$ sella.",
            vars: r`H_f|matrice Hessiana in $\mathbf x_0$; D|determinante Hessiano; f_{xx}, f_{yy}, f_{xy}|derivate seconde`,
            tex: r`D=f_{xx}f_{yy}-f_{xy}^2:\quad D>0\ \begin{cases}f_{xx}>0&\text{minimo}\\f_{xx}<0&\text{massimo}\end{cases}\quad D<0\ \text{sella}` },
          { kind: 'prop', title: T('Segno di una matrice simmetrica', 'Definiteness of a symmetric matrix'),
            text: "Una matrice simmetrica è definita positiva se tutti i suoi autovalori sono positivi, equivalentemente se i minori principali di testa sono tutti positivi (criterio di Sylvester); è indefinita se ha autovalori di segno opposto." },
          { kind: 'thm', title: T('Teorema dei moltiplicatori di Lagrange', 'Lagrange multipliers theorem'),
            text: "Siano $f,g$ di classe $C^1$ e $\\mathbf x_0$ un estremo relativo di $f$ sul vincolo $g(\\mathbf x)=0$, con $\\nabla g(\\mathbf x_0)\\ne\\mathbf 0$. Allora esiste $\\lambda\\in\\mathbb R$ tale che $\\nabla f(\\mathbf x_0)=\\lambda\\nabla g(\\mathbf x_0)$: i candidati sono i punti stazionari della lagrangiana.",
            vars: r`f|funzione da ottimizzare; g|vincolo; \lambda|moltiplicatore; \mathcal L|lagrangiana`,
            tex: r`\mathcal L=f-\lambda g,\qquad \nabla_{\mathbf x,\lambda}\mathcal L=\mathbf 0\iff\begin{cases}\nabla f=\lambda\nabla g\\ g=0\end{cases}` },
          { kind: 'thm', title: T('Teorema della funzione implicita (Dini)', 'Implicit function theorem (Dini)'),
            text: "Sia $F$ di classe $C^1$ in un intorno di $(x_0,y_0)$, con $F(x_0,y_0)=0$ e $\\frac{\\partial F}{\\partial y}(x_0,y_0)\\ne0$. Allora in un intorno di $x_0$ l'equazione $F(x,y)=0$ definisce una funzione $y=\\varphi(x)$ di classe $C^1$ con $\\varphi(x_0)=y_0$, la cui derivata è data dalla formula.",
            vars: r`F|funzione di due variabili; y=\varphi(x)|funzione implicita; \partial F/\partial x, \partial F/\partial y|derivate parziali in $(x,y)$`,
            tex: r`\frac{dy}{dx}=-\,\frac{\partial F/\partial x}{\partial F/\partial y}` },
          { kind: 'thm', title: T('Teorema del Dini per sistemi', 'Implicit function theorem for systems'),
            text: "Se $\\mathbf F:\\mathbb R^{n+m}\\to\\mathbb R^m$ è di classe $C^1$, $\\mathbf F(\\mathbf x_0,\\mathbf y_0)=\\mathbf 0$ e la matrice Jacobiana rispetto a $\\mathbf y$ è invertibile in $(\\mathbf x_0,\\mathbf y_0)$, allora $\\mathbf F(\\mathbf x,\\mathbf y)=\\mathbf 0$ definisce localmente $\\mathbf y=\\boldsymbol\\varphi(\\mathbf x)$ di classe $C^1$.",
            vars: r`\mathbf F|funzione vettoriale con $m$ componenti; \partial\mathbf F/\partial\mathbf y|Jacobiana rispetto alle incognite $\mathbf y$; J_{\boldsymbol\varphi}|Jacobiana della funzione implicita`,
            tex: r`J_{\boldsymbol\varphi}=-\left(\frac{\partial\mathbf F}{\partial\mathbf y}\right)^{-1}\frac{\partial\mathbf F}{\partial\mathbf x}` }
        ]
      },
      {
        id: 'def-integrali', title: T('Integrali multipli: definizioni e teoremi', 'Multiple integrals: definitions and theorems'),
        items: [
          { kind: 'def', title: T('Integrale doppio e dominio normale', 'Double integral and normal domain'),
            text: "L'integrale doppio di una funzione limitata su un dominio limitato $D$ è il limite delle somme di Riemann su partizioni sempre più fini di $D$. $D$ è normale rispetto all'asse $x$ se $D=\\{a\\le x\\le b,\\ g_1(x)\\le y\\le g_2(x)\\}$ con $g_1\\le g_2$ continue; analogamente rispetto all'asse $y$.",
            vars: r`D|dominio; \Delta A_i|area dell'$i$-esima cella; (\xi_i,\eta_i)|punto della cella`,
            tex: r`\iint_Df\,dx\,dy=\lim\sum_if(\xi_i,\eta_i)\,\Delta A_i` },
          { kind: 'thm', title: T('Integrabilità delle funzioni continue', 'Integrability of continuous functions'),
            text: "Se $D$ è un dominio chiuso e limitato con frontiera regolare a tratti e $f$ è continua su $D$, allora $f$ è integrabile su $D$. Un insieme di misura nulla, come una curva, non influisce sul valore dell'integrale." },
          { kind: 'thm', title: T('Teorema di Fubini', 'Fubini theorem'),
            text: "Se $f$ è continua sul dominio normale $D=\\{a\\le x\\le b,\\ g_1(x)\\le y\\le g_2(x)\\}$, l'integrale doppio si calcola come integrale iterato. Su un rettangolo si può scambiare l'ordine di integrazione.",
            vars: r`D|dominio normale; a, b|estremi in $x$; g_1(x), g_2(x)|curve che delimitano $D$ in $y$`,
            tex: r`\iint_Df\,dx\,dy=\int_a^b\left(\int_{g_1(x)}^{g_2(x)}f(x,y)\,dy\right)dx` },
          { kind: 'thm', title: T('Teorema del cambio di variabili', 'Change of variables theorem'),
            text: "Sia $\\Phi:D'\\to D$, $(u,v)\\mapsto(x,y)$, di classe $C^1$, biunivoca e con Jacobiano non nullo (al più sulla frontiera). Allora l'integrale su $D$ si trasforma moltiplicando per il modulo del determinante Jacobiano.",
            vars: r`D, D'|dominio nelle variabili $(x,y)$ e $(u,v)$; \det\partial(x,y)/\partial(u,v)|determinante Jacobiano`,
            tex: r`\iint_Df(x,y)\,dx\,dy=\iint_{D'}f\big(x(u,v),y(u,v)\big)\left|\det\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv` },
          { kind: 'thm', title: T('Teoremi di Guldino', 'Pappus-Guldinus theorems'),
            text: "Il volume del solido ottenuto ruotando di un giro una figura piana di area $A$ attorno a una retta esterna è $V=2\\pi\\,d_G\\,A$, con $d_G$ distanza del baricentro dall'asse. L'area della superficie generata da una curva di lunghezza $\\ell$ è $S=2\\pi\\,d_G\\,\\ell$.",
            vars: r`d_G|distanza del baricentro dall'asse di rotazione; A|area della figura; \ell|lunghezza della curva`,
            tex: r`V=2\pi\,d_G\,A,\qquad S=2\pi\,d_G\,\ell` },
          { kind: 'crit', title: T('Integrale improprio multiplo e confronto', 'Improper multiple integral and comparison'),
            text: "Per $f\\ge0$ su un dominio illimitato, o con $f$ non limitata, l'integrale improprio è il limite su domini che invadono $D$ e non dipende dalla scelta di questi. Vale il confronto: se $0\\le f\\le g$ e $\\iint g$ converge, converge anche $\\iint f$. Esempio: $\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}dx\\,dy=\\pi$." }
        ]
      },
      {
        id: 'def-curve', title: T('Curve, campi e integrali di linea: teoremi', 'Curves, fields and line integrals: theorems'),
        items: [
          { kind: 'def', title: T('Curva regolare e lunghezza', 'Regular curve and length'),
            text: "Una curva parametrica $\\mathbf r:[a,b]\\to\\mathbb R^n$ è regolare se è di classe $C^1$ e $\\frac{d\\mathbf r}{dt}\\ne\\mathbf 0$ per ogni $t$. La lunghezza è l'integrale della norma del vettore velocità e non dipende dalla parametrizzazione.",
            vars: r`\mathbf r(t)|parametrizzazione; d\mathbf r/dt|vettore velocità; L|lunghezza`,
            tex: r`L=\int_a^b\left\lVert\frac{d\mathbf r}{dt}\right\rVert dt` },
          { kind: 'def', title: T('Integrale di linea di prima specie', 'Line integral of a scalar field'),
            text: "Dato un campo scalare $f$ continuo su una curva regolare $\\gamma$, l'integrale rispetto alla lunghezza d'arco non dipende dall'orientazione. Per $f=1$ dà la lunghezza; se $f$ è una densità lineare dà la massa.",
            vars: r`f|campo scalare; \gamma|curva; ds|elemento di lunghezza d'arco`,
            tex: r`\int_\gamma f\,ds=\int_a^bf(\mathbf r(t))\left\lVert\frac{d\mathbf r}{dt}\right\rVert dt` },
          { kind: 'def', title: T('Integrale di linea di seconda specie (lavoro)', 'Line integral of a vector field (work)'),
            text: "Per un campo vettoriale $\\mathbf F$ continuo su una curva orientata $\\gamma$, il lavoro è l'integrale del prodotto scalare di $\\mathbf F$ per lo spostamento infinitesimo; cambia segno se si inverte l'orientazione.",
            vars: r`\mathbf F|campo vettoriale; d\mathbf r|spostamento infinitesimo; \gamma|curva orientata`,
            tex: r`\int_\gamma\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(\mathbf r(t))\cdot\frac{d\mathbf r}{dt}\,dt` },
          { kind: 'def', title: T('Campo conservativo e potenziale', 'Conservative field and potential'),
            text: "Un campo $\\mathbf F$ è conservativo in un aperto $\\Omega$ se esiste $U$ di classe $C^1$ (potenziale) con $\\mathbf F=\\nabla U$. Equivalentemente il lavoro dipende solo dagli estremi della curva, ossia è nullo su ogni curva chiusa.",
            vars: r`U|potenziale; A, B|estremi della curva; \oint|integrale su una curva chiusa`,
            tex: r`\mathbf F=\nabla U\iff\int_\gamma\mathbf F\cdot d\mathbf r=U(B)-U(A)\iff\oint\mathbf F\cdot d\mathbf r=0` },
          { kind: 'thm', title: T('Condizione necessaria: campo irrotazionale', 'Necessary condition: irrotational field'),
            text: "Se $\\mathbf F$ è di classe $C^1$ ed è conservativo, allora è irrotazionale: $\\nabla\\times\\mathbf F=\\mathbf 0$ (in due dimensioni, $\\frac{\\partial F_2}{\\partial x}=\\frac{\\partial F_1}{\\partial y}$).",
            vars: r`\nabla\times\mathbf F|rotore; F_1, F_2|componenti del campo`,
            tex: r`\mathbf F\ \text{conservativo}\ \Rightarrow\ \nabla\times\mathbf F=\mathbf 0,\qquad \frac{\partial F_2}{\partial x}=\frac{\partial F_1}{\partial y}` },
          { kind: 'thm', title: T('Condizione sufficiente: dominio semplicemente connesso', 'Sufficient condition: simply connected domain'),
            text: "Se $\\mathbf F$ è di classe $C^1$ e irrotazionale in un aperto semplicemente connesso, allora è conservativo. Senza la connessione semplice è falso: il campo $\\frac{(-y,\\,x)}{x^2+y^2}$ è irrotazionale in $\\mathbb R^2\\setminus\\{\\mathbf 0\\}$ ma non conservativo (circuitazione $2\\pi$ sulla circonferenza unitaria)." },
          { kind: 'thm', title: T('Teorema di Green', 'Green theorem'),
            text: "Sia $D$ un dominio piano limitato con frontiera $\\partial D$ regolare a tratti, orientata in senso antiorario, e $F_1,F_2$ di classe $C^1$ in un aperto contenente $D$. La circuitazione sul bordo è uguale all'integrale doppio del rotore scalare. Con $F=(-y,x)/2$ si ottiene l'area di $D$.",
            vars: r`D|dominio piano; \partial D|bordo orientato in senso antiorario; F_1, F_2|componenti del campo; A|area`,
            tex: [r`\oint_{\partial D}(F_1\,dx+F_2\,dy)=\iint_D\left(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right)dx\,dy`, r`A(D)=\frac12\oint_{\partial D}(x\,dy-y\,dx)`] }
        ]
      },
      {
        id: 'def-superfici', title: T('Superfici e flussi: definizioni e teoremi', 'Surfaces and flux: definitions and theorems'),
        items: [
          { kind: 'def', title: T('Superficie parametrica regolare e area', 'Regular parametric surface and area'),
            text: "Una superficie parametrica $\\mathbf r:D\\to\\mathbb R^3$ è regolare se è di classe $C^1$ e $\\mathbf r_u\\times\\mathbf r_v\\ne\\mathbf 0$ (vettori tangenti indipendenti). L'area è l'integrale della norma del prodotto vettoriale fondamentale.",
            vars: r`\mathbf r(u,v)|parametrizzazione; \mathbf r_u, \mathbf r_v|derivate parziali; D|dominio dei parametri`,
            tex: r`A=\iint_D\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv` },
          { kind: 'def', title: T('Orientamento e normale', 'Orientation and normal'),
            text: "Una superficie regolare è orientabile se si può scegliere con continuità il versore normale. Per una superficie chiusa si usa di solito la normale uscente. Il nastro di Möbius non è orientabile.",
            vars: r`\mathbf n|versore normale; \mathbf r_u, \mathbf r_v|vettori tangenti`,
            tex: r`\mathbf n=\frac{\mathbf r_u\times\mathbf r_v}{\lVert\mathbf r_u\times\mathbf r_v\rVert}` },
          { kind: 'def', title: T('Flusso di un campo attraverso una superficie', 'Flux of a field through a surface'),
            text: "Il flusso di $\\mathbf F$ attraverso la superficie orientata $\\Sigma$ è l'integrale della componente normale di $\\mathbf F$; cambia segno se si inverte l'orientamento.",
            vars: r`\Phi|flusso; \Sigma|superficie orientata; \mathbf n|normale; dS|elemento di superficie`,
            tex: r`\Phi=\iint_\Sigma\mathbf F\cdot\mathbf n\,dS=\iint_D\mathbf F(\mathbf r(u,v))\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv` },
          { kind: 'thm', title: T('Teorema della divergenza (Gauss)', 'Divergence theorem (Gauss)'),
            text: "Sia $V$ un solido limitato con frontiera $\\partial V$ regolare a tratti e orientata con la normale uscente, e $\\mathbf F$ di classe $C^1$ in un aperto contenente $V$. Il flusso uscente è uguale all'integrale della divergenza.",
            vars: r`V|solido; \partial V|superficie chiusa; \mathbf n|normale uscente; \nabla\cdot\mathbf F|divergenza`,
            tex: r`\oiint_{\partial V}\mathbf F\cdot\mathbf n\,dS=\iiint_V\nabla\cdot\mathbf F\,dV` },
          { kind: 'thm', title: T('Teorema di Stokes', 'Stokes theorem'),
            text: "Sia $\\Sigma$ una superficie regolare orientata, con bordo $\\partial\\Sigma$ orientato coerentemente (regola della mano destra), e $\\mathbf F$ di classe $C^1$. La circuitazione sul bordo è uguale al flusso del rotore attraverso $\\Sigma$.",
            vars: r`\Sigma|superficie orientata; \partial\Sigma|suo bordo; \nabla\times\mathbf F|rotore`,
            tex: r`\oint_{\partial\Sigma}\mathbf F\cdot d\mathbf r=\iint_\Sigma(\nabla\times\mathbf F)\cdot\mathbf n\,dS` }
        ]
      },
      {
        id: 'def-serie', title: T('Serie di potenze: definizioni e teoremi', 'Power series: definitions and theorems'),
        items: [
          { kind: 'def', title: T('Serie di potenze e raggio di convergenza', 'Power series and radius of convergence'),
            text: "Una serie di potenze centrata in $x_0$ ha la forma $\\sum a_n(x-x_0)^n$. Esiste $R\\in[0,+\\infty]$, il raggio di convergenza, tale che la serie converge assolutamente per $|x-x_0|<R$ e non converge per $|x-x_0|>R$; negli estremi va studiata a parte.",
            vars: r`a_n|coefficienti; x_0|centro; R|raggio di convergenza`,
            tex: r`\sum_{n=0}^{\infty}a_n(x-x_0)^n` },
          { kind: 'thm', title: T('Teorema di Cauchy-Hadamard', 'Cauchy-Hadamard theorem'),
            text: "Il raggio di convergenza è l'inverso del massimo limite di $\\sqrt[n]{|a_n|}$. Se esiste il limite del rapporto dei coefficienti, $R=\\lim|a_n/a_{n+1}|$.",
            vars: r`R|raggio di convergenza; a_n|coefficienti`,
            tex: r`\frac1R=\limsup_{n\to\infty}\sqrt[n]{|a_n|},\qquad R=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|` },
          { kind: 'thm', title: T('Derivazione e integrazione termine a termine', 'Term-by-term differentiation and integration'),
            text: "Nell'intervallo $(x_0-R,\\,x_0+R)$ la somma $S(x)$ della serie è derivabile e integrabile termine a termine; le serie derivata e integrata hanno lo stesso raggio di convergenza $R$.",
            vars: r`S(x)|somma della serie; a_n|coefficienti; c|costante di integrazione`,
            tex: r`\frac{dS}{dx}=\sum_{n\ge1}n\,a_n(x-x_0)^{n-1},\qquad \int S\,dx=\sum_{n\ge0}\frac{a_n}{n+1}(x-x_0)^{n+1}+c` },
          { kind: 'def', title: T('Serie di Taylor e funzione analitica', 'Taylor series and analytic function'),
            text: "Se $f$ è derivabile infinite volte in $x_0$, la sua serie di Taylor è $\\sum\\frac{1}{n!}\\frac{d^nf}{dx^n}(x_0)\\,(x-x_0)^n$. $f$ è analitica in $x_0$ se la serie converge a $f$ in un intorno di $x_0$. Condizione sufficiente: derivate di ogni ordine uniformemente limitate nell'intorno.",
            vars: r`x_0|centro; n!|fattoriale; \frac{d^nf}{dx^n}|derivata $n$-esima`,
            tex: r`f(x)=\sum_{n=0}^{\infty}\frac{1}{n!}\frac{d^nf}{dx^n}\bigg|_{x_0}(x-x_0)^n` }
        ]
      },
      {
        id: 'diff-multi', title: T('Calcolo differenziale in più variabili', 'Multivariable differential calculus'),
        items: [
          { title: T('Gradiente e derivata direzionale', 'Gradient and directional derivative'),
            vars: r`f|funzione scalare di più variabili; \nabla f|gradiente: vettore delle derivate parziali; \partial f/\partial x|derivata parziale rispetto a $x$; \mathbf v|direzione (versore, $\Vert \mathbf v\Vert =1$); D_{\mathbf v}f|derivata direzionale: variazione di $f$ lungo $\mathbf v$`,
            fig: FORMULARI.fig.svg(`
  <circle class="fg-line" cx="100" cy="90" r="22" opacity=".5"/><circle class="fg-line" cx="100" cy="90" r="46" opacity=".5"/><circle class="fg-line" cx="100" cy="90" r="70" opacity=".5"/>
  <circle class="fg-pt" cx="153" cy="45" r="3.5"/>
  <path class="fg-curve fg-c2" d="M153 45 L182 20"/><path class="fg-curve fg-c2" d="M182 20 l-10 2 m10 -2 l-2 10"/>
  <path class="fg-curve fg-c1" d="M153 45 L190 54"/><path class="fg-curve fg-c1" d="M190 54 l-9 -5 m9 5 l-8 5"/>
  <text x="186" y="20" class="t2">∇f</text><text x="194" y="60" class="t1">v</text><text x="30" y="30">linee di livello</text>`),
            tex: [r`\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right)`,
                  r`\frac{\partial f}{\partial \mathbf v}=\nabla f\cdot\mathbf v,\quad \|\mathbf v\|=1`] },
          { title: T('Piano tangente', 'Tangent plane'),
            vars: r`z|quota del piano tangente; (x_0,y_0)|punto di tangenza; f_x, f_y|derivate parziali in $(x_0,y_0)$`,
            tex: r`z=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)` },
          { title: T('Matrice Hessiana', 'Hessian matrix'),
            vars: r`H_f|matrice Hessiana; f_{xx}, f_{yy}|derivate seconde pure; f_{xy}, f_{yx}|derivate seconde miste (uguali se $f\in C^2$)`,
            tex: r`H_f=\begin{pmatrix}f_{xx}&f_{xy}\\f_{yx}&f_{yy}\end{pmatrix}`,
            note: T('Simmetrica se le derivate seconde sono continue (Schwarz).', 'Symmetric if second derivatives are continuous (Schwarz).') },
          { title: T('Taylor al secondo ordine', 'Second-order Taylor'),
            vars: r`\mathbf x_0|punto di sviluppo; \mathbf h|incremento $\mathbf x-\mathbf x_0$; \nabla f|gradiente; H_f|matrice Hessiana; o(\cdot)|resto trascurabile`,
            tex: r`f(\mathbf x)=f(\mathbf x_0)+\nabla f(\mathbf x_0)\cdot\mathbf h+\tfrac12\,\mathbf h^{T}H_f(\mathbf x_0)\,\mathbf h+o(\|\mathbf h\|^2)` },
          { title: T('Punti stazionari (2 variabili)', 'Stationary points (2 variables)'),
            vars: r`\nabla f|gradiente (si annulla nei punti stazionari); H_f|matrice Hessiana; D|determinante Hessiano; f_{xx}, f_{yy}, f_{xy}|derivate seconde`,
            tex: [r`\nabla f=0,\qquad D=\det H_f=f_{xx}f_{yy}-f_{xy}^2`,
                  r`D>0,\ f_{xx}>0:\ \text{minimo};\quad D>0,\ f_{xx}<0:\ \text{massimo};\quad D<0:\ \text{sella}`],
            note: T('Se $D=0$ il criterio non decide.', 'If $D=0$ the test is inconclusive.') },
          { title: T('Derivata della funzione composta', 'Chain rule'),
            vars: r`f(x,y)|funzione di due variabili; x(t), y(t)|curva parametrica; \dot x, \dot y|derivate rispetto a $t$; f_x, f_y|derivate parziali`,
            tex: r`\frac{d}{dt}f(x(t),y(t))=f_x\,\dot x+f_y\,\dot y` }
        ]
      },
      {
        id: 'integrali-multipli', title: T('Integrali multipli', 'Multiple integrals'),
        items: [
          { title: T('Coordinate polari', 'Polar coordinates'),
            vars: r`\rho|distanza dall'origine; \theta|angolo dall'asse $x$; \rho\,d\rho\,d\theta|elemento d'area`,
            fig: FORMULARI.fig.svg(`
  <line class="fg-axis" x1="30" y1="150" x2="220" y2="150"/><line class="fg-axis" x1="60" y1="170" x2="60" y2="15"/>
  <path class="fg-line" d="M60 150 L170 70"/><circle class="fg-pt" cx="170" cy="70" r="3.5"/>
  <path class="fg-dash" d="M170 70 L170 150"/><path class="fg-dash" d="M170 70 L60 70"/>
  <path class="fg-curve fg-c2" d="M100 150 A40 40 0 0 0 92.3 126.6"/>
  <text x="108" y="140" class="t2">θ</text><text x="105" y="102" class="t1">ρ</text>
  <text x="166" y="164">x</text><text x="40" y="74">y</text><text x="176" y="68">(x, y)</text>
  <text x="212" y="164">x</text>`),
            tex: r`x=\rho\cos\theta,\ \ y=\rho\sin\theta,\qquad dx\,dy=\rho\,d\rho\,d\theta` },
          { title: T('Coordinate cilindriche', 'Cylindrical coordinates'),
            vars: r`\rho|distanza dall'asse $z$; \theta|angolo azimutale; z|quota; dV|elemento di volume`,
            tex: r`x=\rho\cos\theta,\ y=\rho\sin\theta,\ z=z,\qquad dV=\rho\,d\rho\,d\theta\,dz` },
          { title: T('Coordinate sferiche', 'Spherical coordinates'),
            vars: r`\rho|distanza dall'origine; \varphi|angolo polare (dall'asse $z$); \theta|angolo azimutale; dV|elemento di volume`,
            tex: [r`x=\rho\sin\varphi\cos\theta,\ y=\rho\sin\varphi\sin\theta,\ z=\rho\cos\varphi`, r`dV=\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta`],
            note: T('$\\varphi\\in[0,\\pi]$ angolo polare, $\\theta\\in[0,2\\pi)$ azimut.', '$\\varphi\\in[0,\\pi]$ polar angle, $\\theta\\in[0,2\\pi)$ azimuth.') },
          { title: T('Baricentro e momento di inerzia', 'Centroid and moment of inertia'),
            vars: r`D|dominio; A|area; x_G|ascissa del baricentro; I_z|momento d'inerzia rispetto all'asse $z$; \rho_m|densità di massa`,
            tex: r`x_G=\frac{1}{A}\iint_Dx\,dx\,dy,\qquad I_z=\iint_D\rho_m\,(x^2+y^2)\,dx\,dy` },
          { title: T('Integrale gaussiano', 'Gaussian integral'),
            vars: r`x|variabile di integrazione`,
            tex: r`\int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt\pi` }
        ]
      },
      {
        id: 'campi', title: T('Curve, campi e teoremi integrali', 'Curves, fields and integral theorems'),
        items: [
          { title: T('Lunghezza di una curva', 'Arc length'),
            vars: r`L|lunghezza; \mathbf r(t)|parametrizzazione; \mathbf r'(t)|vettore velocità; a, b|estremi del parametro`,
            tex: r`L=\int_a^b\|\mathbf r'(t)\|\,dt` },
          { title: T('Integrale di linea di un campo scalare', 'Line integral of a scalar field'),
            vars: r`f|campo scalare; \gamma|curva; ds|elemento di lunghezza; \mathbf r(t)|parametrizzazione di $\gamma$`,
            tex: r`\int_\gamma f\,ds=\int_a^bf(\mathbf r(t))\,\|\mathbf r'(t)\|\,dt` },
          { title: T('Lavoro di un campo vettoriale', 'Work of a vector field'),
            vars: r`\mathbf F|campo vettoriale (forza); \gamma|curva percorsa; d\mathbf r|spostamento infinitesimo; \mathbf r(t)|parametrizzazione`,
            tex: r`\int_\gamma\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt` },
          { title: T('Divergenza e rotore', 'Divergence and curl'),
            vars: r`\mathbf F=(F_1,F_2,F_3)|campo vettoriale; \nabla\cdot\mathbf F|divergenza (scalare: sorgenti del campo); \nabla\times\mathbf F|rotore (vettore: tendenza a ruotare)`,
            tex: r`\nabla\!\cdot\mathbf F=\frac{\partial F_1}{\partial x}+\frac{\partial F_2}{\partial y}+\frac{\partial F_3}{\partial z},\qquad \nabla\times\mathbf F=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\ \partial_x&\partial_y&\partial_z\\ F_1&F_2&F_3\end{vmatrix}` }
        ]
      },
      {
        id: 'diff-extra', title: T('Differenziabilità, funzioni implicite, Jacobiana', 'Differentiability, implicit functions, Jacobian'),
        items: [
          { title: T('Matrice Jacobiana', 'Jacobian matrix'),
            vars: r`\mathbf f=(f_1,\dots,f_m)|funzione vettoriale; J_{\mathbf f}|matrice Jacobiana (riga $i$ = gradiente di $f_i$); \mathbf g\circ\mathbf f|composizione`,
            tex: r`J_{\mathbf f}=\left(\frac{\partial f_i}{\partial x_j}\right),\qquad J_{\mathbf g\circ\mathbf f}=J_{\mathbf g}(\mathbf f)\,J_{\mathbf f}` },
          { title: T('Retta tangente a una curva di livello', 'Tangent to a level curve'),
            vars: r`F|funzione di due variabili; (x_0,y_0)|punto sulla curva $F=c$; \nabla F|gradiente (normale alla curva)`,
            tex: r`\nabla F(x_0,y_0)\cdot(x-x_0,\,y-y_0)=0` }
        ]
      },
      {
        id: 'operatori', title: T('Operatori differenziali e identità', 'Differential operators and identities'),
        items: [
          { title: T('Laplaciano', 'Laplacian'),
            vars: r`f|funzione scalare; \nabla^2 f|Laplaciano; f_{xx}, f_{yy}, f_{zz}|derivate seconde pure`,
            tex: r`\nabla^2f=\nabla\!\cdot\nabla f=f_{xx}+f_{yy}+f_{zz}` },
          { title: T('Laplaciano in coordinate polari e sferiche', 'Laplacian in polar and spherical coordinates'),
            vars: r`\rho|raggio; \theta, \varphi|angoli; f_\rho, f_{\rho\rho}|derivate rispetto a $\rho$`,
            tex: [r`\nabla^2f=f_{\rho\rho}+\frac1\rho f_\rho+\frac{1}{\rho^2}f_{\theta\theta}`,
                  r`\nabla^2f=\frac{1}{r^2}\frac{\partial}{\partial r}\!\left(r^2\frac{\partial f}{\partial r}\right)+\frac{1}{r^2\sin\varphi}\frac{\partial}{\partial\varphi}\!\left(\sin\varphi\frac{\partial f}{\partial\varphi}\right)+\frac{1}{r^2\sin^2\varphi}\frac{\partial^2f}{\partial\theta^2}`] },
          { title: T('Identità fondamentali', 'Fundamental identities'),
            vars: r`f|campo scalare; \mathbf F|campo vettoriale; \nabla\times|rotore; \nabla\cdot|divergenza`,
            tex: r`\nabla\times(\nabla f)=0,\qquad \nabla\!\cdot(\nabla\times\mathbf F)=0` },
          { title: T('Regole del prodotto', 'Product rules'),
            vars: r`f, g|campi scalari; \mathbf F|campo vettoriale`,
            tex: r`\nabla(fg)=f\nabla g+g\nabla f,\qquad \nabla\!\cdot(f\mathbf F)=f\,\nabla\!\cdot\mathbf F+\nabla f\cdot\mathbf F` },
          { title: T('Potenziale di un campo conservativo', 'Potential of a conservative field'),
            vars: r`U|potenziale; F_1, F_2|componenti del campo; (x_0,y_0)|punto di riferimento`,
            tex: r`U(x,y)=\int_{x_0}^xF_1(t,y_0)\,dt+\int_{y_0}^yF_2(x,s)\,ds` }
        ]
      },
      {
        id: 'superfici', title: T('Superfici e flussi', 'Surfaces and flux'),
        items: [
          { title: T('Area di un grafico', 'Area of a graph'),
            vars: r`A|area della superficie $z=f(x,y)$; D|dominio; f_x, f_y|derivate parziali`,
            tex: r`A=\iint_D\sqrt{1+f_x^2+f_y^2}\,dx\,dy` },
          { title: T('Superficie parametrica', 'Parametric surface'),
            vars: r`\mathbf r(u,v)|parametrizzazione; \mathbf r_u, \mathbf r_v|derivate parziali; D|dominio dei parametri; \mathbf n\,dS|elemento di superficie orientato`,
            tex: r`A=\iint_D\|\mathbf r_u\times\mathbf r_v\|\,du\,dv,\qquad \mathbf n\,dS=(\mathbf r_u\times\mathbf r_v)\,du\,dv` },
          { title: T('Flusso di un campo', 'Flux of a field'),
            vars: r`\Phi|flusso attraverso $\Sigma$; \mathbf F|campo vettoriale; \mathbf n|normale; \Sigma|superficie; \mathbf r(u,v)|parametrizzazione`,
            tex: r`\Phi=\iint_\Sigma\mathbf F\cdot\mathbf n\,dS=\iint_D\mathbf F(\mathbf r(u,v))\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv` },
          { title: T('Superficie di rotazione', 'Surface of revolution'),
            vars: r`S|area della superficie; f|funzione che ruota attorno all'asse $x$; a, b|estremi`,
            tex: r`S=2\pi\int_a^bf(x)\sqrt{1+f'(x)^2}\,dx` }
        ]
      },
      {
        id: 'serie-potenze', title: T('Serie di potenze', 'Power series'),
        items: [
          { title: T('Raggio di convergenza', 'Radius of convergence'),
            vars: r`a_n|coefficienti; x_0|centro della serie; R|raggio di convergenza (converge per $|x-x_0|<R$)`,
            tex: r`\sum a_n(x-x_0)^n:\quad R=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|=\frac{1}{\limsup\sqrt[n]{|a_n|}}` },
          { title: T('Derivazione e integrazione termine a termine', 'Term-by-term calculus'),
            vars: r`a_n|coefficienti; x|variabile (dentro il raggio di convergenza)`,
            tex: r`\frac{d}{dx}\sum a_nx^n=\sum na_nx^{n-1},\qquad \int\sum a_nx^n\,dx=\sum\frac{a_n}{n+1}x^{n+1}`,
            note: T('Nell\'intervallo aperto di convergenza.', 'Inside the open interval of convergence.') },
          { title: T('Sviluppi notevoli e raggio', 'Standard expansions and radius'),
            vars: r`R|raggio di convergenza`,
            tex: r`e^x,\ \sin x,\ \cos x:\ R=\infty;\qquad \frac{1}{1-x},\ \ln(1+x),\ \arctan x:\ R=1` }
        ]
      },
      {
        id: 'grafici-superfici', title: T('Grafici di funzioni di due variabili e superfici', 'Graphs of two-variable functions and surfaces'),
        items: [
          { title: T('Piano', 'Plane'),
            vars: r`z|quota; a, b|pendenze lungo $x$ e $y$ (sono $f_x$ e $f_y$); c|quota in $(0,0)$`,
            tex: r`z=ax+by+c`,
            fig: FORMULARI.fig.mesh3d({ f: (x, y) => 0.5 * x + 0.3 * y, u: [-1, 1], v: [-1, 1], nu: 8, nv: 8, az: 1.2 }) },
          { title: T('Paraboloide ellittico', 'Elliptic paraboloid'),
            vars: r`z|quota; x, y|coordinate nel piano; (0,0)|vertice: punto di minimo`,
            tex: r`z=x^2+y^2,\qquad \text{sezioni orizzontali: circonferenze}`,
            fig: FORMULARI.fig.mesh3d({ f: (x, y) => x * x + y * y, u: [-1.2, 1.2], v: [-1.2, 1.2], ax: 1.5, ay: 1.5, az: 3.2 }) },
          { title: T('Paraboloide iperbolico (sella)', 'Hyperbolic paraboloid (saddle)'),
            vars: r`z|quota; x, y|coordinate nel piano; (0,0)|punto di sella: minimo lungo $x$, massimo lungo $y$`,
            tex: r`z=x^2-y^2`,
            fig: FORMULARI.fig.mesh3d({ f: (x, y) => x * x - y * y, u: [-1.2, 1.2], v: [-1.2, 1.2], ax: 1.5, ay: 1.5, az: 1.7 }) },
          { title: T('Cono', 'Cone'),
            vars: r`z|quota; \sqrt{x^2+y^2}|distanza dall'asse $z$`,
            tex: r`z=\sqrt{x^2+y^2}`,
            fig: FORMULARI.fig.mesh3d({ f: (x, y) => Math.hypot(x, y), u: [-1.2, 1.2], v: [-1.2, 1.2], ax: 1.5, ay: 1.5, az: 1.9 }) },
          { title: T('Sfera ed ellissoide', 'Sphere and ellipsoid'),
            vars: r`a, b, c|semiassi lungo $x$, $y$, $z$; r|raggio della sfera ($a=b=c=r$)`,
            tex: [r`x^2+y^2+z^2=r^2`, r`\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1`],
            fig: [
              FORMULARI.fig.mesh3d({ P: (u, v) => [Math.sin(v) * Math.cos(u), Math.sin(v) * Math.sin(u), Math.cos(v)], u: [0, 2 * Math.PI], v: [0, Math.PI], nu: 16, nv: 10, ax: 1.5, ay: 1.5, az: 1.5 }),
              FORMULARI.fig.mesh3d({ P: (u, v) => [1.4 * Math.sin(v) * Math.cos(u), 0.8 * Math.sin(v) * Math.sin(u), 0.9 * Math.cos(v)], u: [0, 2 * Math.PI], v: [0, Math.PI], nu: 16, nv: 10, ax: 1.7, ay: 1.2, az: 1.3 })
            ] },
          { title: T('Cilindro e iperboloide a una falda', 'Cylinder and one-sheet hyperboloid'),
            vars: r`r|raggio del cilindro; a, b, c|semiassi dell'iperboloide`,
            tex: [r`x^2+y^2=r^2\quad(\text{asse }z)`, r`\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1`],
            fig: [
              FORMULARI.fig.mesh3d({ P: (u, v) => [Math.cos(u), Math.sin(u), v], u: [0, 2 * Math.PI], v: [0, 1.8], nu: 20, nv: 6, ax: 1.5, ay: 1.5, az: 2 }),
              FORMULARI.fig.mesh3d({ P: (u, v) => [Math.sqrt(1 + v * v) * Math.cos(u), Math.sqrt(1 + v * v) * Math.sin(u), v], u: [0, 2 * Math.PI], v: [-1.2, 1.2], nu: 20, nv: 8, ax: 1.9, ay: 1.9, az: 1.5 })
            ] },
          { title: T('Gaussiana in due variabili', 'Two-variable Gaussian'),
            vars: r`z|quota; x, y|coordinate nel piano; e|numero di Nepero`,
            tex: r`z=e^{-(x^2+y^2)},\qquad \iint_{\mathbb R^2}e^{-(x^2+y^2)}dx\,dy=\pi`,
            fig: FORMULARI.fig.mesh3d({ f: (x, y) => Math.exp(-(x * x + y * y)), u: [-2, 2], v: [-2, 2], nu: 16, nv: 16, ax: 2.4, ay: 2.4, az: 1.3 }) },
          { title: T('Linee di livello', 'Level curves'),
            vars: r`c|valore costante di $f$ lungo la curva; x, y|coordinate nel piano`,
            tex: [r`f(x,y)=x^2+y^2=c\ \Rightarrow\ \text{circonferenze}`, r`f(x,y)=x^2-y^2=c\ \Rightarrow\ \text{iperboli (}c=0:\text{ le rette }y=\pm x\text{)}`],
            note: T('Il gradiente è sempre perpendicolare alle linee di livello e punta verso i valori crescenti di $f$.', 'The gradient is always perpendicular to the level curves and points towards increasing $f$.'),
            fig: [
              FORMULARI.fig.plot({ x: [-2, 2], y: [-2, 2], xl: 'x', yl: 'y', curves: [0.5, 1, 1.5, 1.9].map((r) => ({ xy: (t) => [r * Math.cos(t), r * Math.sin(t)], t: [0, 6.2832], cls: 'fg-c1', arrow: false })) }),
              FORMULARI.fig.plot({ x: [-2, 2], y: [-2, 2], xl: 'x', yl: 'y', curves: [
                { f: (x) => x, cls: 'fg-c3' }, { f: (x) => -x, cls: 'fg-c3' },
                ...[0.5, 1.5].flatMap((c) => [
                  { xy: (t) => [Math.sqrt(c) * Math.cosh(t), Math.sqrt(c) * Math.sinh(t)], t: [-1.9, 1.9], cls: 'fg-c1', arrow: false },
                  { xy: (t) => [-Math.sqrt(c) * Math.cosh(t), Math.sqrt(c) * Math.sinh(t)], t: [-1.9, 1.9], cls: 'fg-c1', arrow: false },
                  { xy: (t) => [Math.sqrt(c) * Math.sinh(t), Math.sqrt(c) * Math.cosh(t)], t: [-1.9, 1.9], cls: 'fg-c2', arrow: false },
                  { xy: (t) => [Math.sqrt(c) * Math.sinh(t), -Math.sqrt(c) * Math.cosh(t)], t: [-1.9, 1.9], cls: 'fg-c2', arrow: false }
                ])] })
            ] }
        ]
      }
    ]
  });
})();
