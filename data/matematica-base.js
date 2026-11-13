(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'matematica-base', area: 'math', order: 10, icon: 'bi-plus-slash-minus',
    title: T('Matematica di base', 'Basic mathematics'),
    sections: [
      {
        id: 'def-mb', title: T('Definizioni e teoremi', 'Definitions and theorems'),
        items: [
          { kind: 'def', title: T('Insiemi numerici', 'Number sets'),
            text: "I naturali $\\mathbb N$, gli interi $\\mathbb Z$, i razionali $\\mathbb Q$ (frazioni di interi), i reali $\\mathbb R$ e i complessi $\\mathbb C$ formano una catena di inclusioni. I numeri reali non razionali si dicono irrazionali (es. $\\sqrt2$, $\\pi$).",
            vars: r`\mathbb N|numeri naturali; \mathbb Z|interi; \mathbb Q|razionali; \mathbb R|reali; \mathbb C|complessi`,
            tex: r`\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\subset\mathbb C` },
          { kind: 'def', title: T('Funzione, dominio e immagine', 'Function, domain and image'),
            text: "Una funzione $f:A\\to B$ associa a ogni elemento $x$ del dominio $A$ un unico elemento $f(x)$ di $B$. L'immagine è l'insieme dei valori effettivamente assunti, $f(A)\\subseteq B$." },
          { kind: 'def', title: T('Funzioni iniettive, suriettive, biiettive', 'Injective, surjective, bijective functions'),
            text: "$f$ è iniettiva se elementi distinti hanno immagini distinte; suriettiva se ogni elemento di $B$ è immagine di qualche $x$; biiettiva se è iniettiva e suriettiva. Solo le funzioni biiettive sono invertibili.",
            vars: r`x_1, x_2|elementi del dominio`,
            tex: r`f\ \text{iniettiva}\iff\big(f(x_1)=f(x_2)\Rightarrow x_1=x_2\big)` },
          { kind: 'def', title: T('Funzione composta e inversa', 'Composite and inverse function'),
            text: "La composta $g\\circ f$ si ottiene applicando prima $f$ e poi $g$. L'inversa $f^{-1}$ di una funzione biiettiva è l'unica funzione tale che $f^{-1}(f(x))=x$ e $f(f^{-1}(y))=y$; il suo grafico è il simmetrico di quello di $f$ rispetto alla bisettrice $y=x$.",
            vars: r`f, g|funzioni; f^{-1}|funzione inversa`,
            tex: r`(g\circ f)(x)=g(f(x)),\qquad f^{-1}(f(x))=x` },
          { kind: 'def', title: T('Funzioni pari, dispari, periodiche, monotone', 'Even, odd, periodic, monotone functions'),
            text: "$f$ è pari se $f(-x)=f(x)$ (grafico simmetrico rispetto all'asse $y$), dispari se $f(-x)=-f(x)$ (simmetrico rispetto all'origine), periodica di periodo $T$ se $f(x+T)=f(x)$. È crescente se $x_1<x_2\\Rightarrow f(x_1)\\le f(x_2)$, strettamente crescente se vale $<$ (analogamente per decrescente).",
            vars: r`T|periodo`,
            tex: r`\text{pari: }f(-x)=f(x),\qquad \text{dispari: }f(-x)=-f(x),\qquad \text{periodica: }f(x+T)=f(x)` },
          { kind: 'def', title: T('Valore assoluto', 'Absolute value'),
            text: "Il valore assoluto di un numero reale è la sua distanza da $0$. Vale $|xy|=|x||y|$, $|x|\\ge0$ con uguaglianza solo per $x=0$ e la disuguaglianza triangolare $|x+y|\\le|x|+|y|$.",
            vars: r`x|numero reale`,
            tex: r`|x|=\begin{cases}x&x\ge0\\-x&x<0\end{cases}` },
          { kind: 'def', title: T('Potenza a esponente reale', 'Power with real exponent'),
            text: "Per $a>0$: $a^0=1$, $a^{-n}=1/a^n$, $a^{m/n}=\\sqrt[n]{a^m}$ e, per esponenti reali, $a^x$ è definita per continuità. Le proprietà $a^{x+y}=a^xa^y$ e $(a^x)^y=a^{xy}$ valgono per ogni $x,y$ reali.",
            vars: r`a|base positiva; x, y|esponenti reali`,
            tex: r`a^{x+y}=a^xa^y,\qquad (a^x)^y=a^{xy},\qquad a^{m/n}=\sqrt[n]{a^m}` },
          { kind: 'def', title: T('Logaritmo', 'Logarithm'),
            text: "Per $a>0,\\ a\\ne1$ e $x>0$, il logaritmo in base $a$ di $x$ è l'unico esponente $y$ tale che $a^y=x$. È la funzione inversa dell'esponenziale: $\\log_a(a^x)=x$ e $a^{\\log_ax}=x$. Il logaritmo naturale $\\ln$ ha base $e$.",
            vars: r`a|base; x|argomento positivo; y|logaritmo`,
            tex: r`y=\log_ax\iff a^y=x` },
          { kind: 'def', title: T('Radice n-esima aritmetica', 'Arithmetic n-th root'),
            text: "Per $a\\ge0$ la radice $n$-esima $\\sqrt[n]{a}$ è l'unico numero $b\\ge0$ con $b^n=a$. Per $n$ dispari è definita anche per $a<0$. Vale $\\sqrt[n]{a^n}=|a|$ se $n$ è pari, $=a$ se $n$ è dispari.",
            vars: r`a|radicando; n|indice della radice`,
            tex: r`\sqrt[n]{a}=b\iff b^n=a,\quad b\ge0` },
          { kind: 'thm', title: T('Principio di induzione', 'Induction principle'),
            text: "Sia $P(n)$ un'affermazione sui numeri naturali. Se $P(n_0)$ è vera (base) e, per ogni $n\\ge n_0$, da $P(n)$ segue $P(n+1)$ (passo induttivo), allora $P(n)$ è vera per ogni $n\\ge n_0$." },
          { kind: 'thm', title: T('Disuguaglianza tra media aritmetica e geometrica', 'AM-GM inequality'),
            text: "Per numeri non negativi la media geometrica non supera quella aritmetica, con uguaglianza se e solo se i numeri sono tutti uguali.",
            vars: r`a_i|numeri non negativi; n|numero di termini`,
            tex: r`\sqrt[n]{a_1a_2\cdots a_n}\le\frac{a_1+a_2+\dots+a_n}{n},\qquad \sqrt{ab}\le\frac{a+b}{2}` },
          { kind: 'thm', title: T('Disuguaglianza di Bernoulli', 'Bernoulli inequality'),
            text: "Per ogni $x\\ge-1$ e ogni intero $n\\ge1$ vale la disuguaglianza sotto, che si dimostra per induzione.",
            vars: r`x|numero reale con $x\ge-1$; n|esponente intero positivo`,
            tex: r`(1+x)^n\ge1+nx` },
          { kind: 'thm', title: T('Teorema fondamentale dell\'algebra', 'Fundamental theorem of algebra'),
            text: "Ogni polinomio a coefficienti complessi di grado $n\\ge1$ ha almeno una radice complessa; contando le molteplicità ne ha esattamente $n$. Un polinomio a coefficienti reali ha le radici complesse a coppie coniugate.",
            vars: r`p|polinomio di grado $n$; a_n|coefficiente direttivo; z_i|radici complesse`,
            tex: r`p(z)=a_n(z-z_1)(z-z_2)\cdots(z-z_n)` },
          { kind: 'thm', title: T('Formula di De Moivre', 'De Moivre formula'),
            text: "Per ogni intero $n$, la potenza $n$-esima di un numero complesso in forma polare si ottiene elevando il modulo a $n$ e moltiplicando l'argomento per $n$.",
            vars: r`\rho|modulo; \theta|argomento; n|esponente intero`,
            tex: r`\big(\rho(\cos\theta+j\sin\theta)\big)^n=\rho^n\big(\cos n\theta+j\sin n\theta\big)` }
        ]
      },
      {
        id: 'algebra', title: T('Algebra elementare', 'Elementary algebra'),
        items: [
          { title: T('Prodotti notevoli', 'Special products'),
            vars: r`a, b|numeri reali (o espressioni) qualsiasi`,
            tex: [r`(a\pm b)^2 = a^2 \pm 2ab + b^2`, r`(a+b)(a-b) = a^2 - b^2`],
            tags: ['quadrato', 'binomio'] },
          { title: T('Cubi', 'Cubes'),
            vars: r`a, b|numeri reali (o espressioni) qualsiasi`,
            tex: [r`(a\pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3`, r`a^3 \pm b^3 = (a\pm b)(a^2 \mp ab + b^2)`] },
          { title: T('Binomio di Newton', 'Binomial theorem'),
            vars: r`n|esponente, intero $\ge0$; k|indice del termine ($0\le k\le n$); \binom{n}{k}|coefficiente binomiale = numero di modi di scegliere $k$ elementi tra $n$; n!|fattoriale: $n(n-1)\cdots1$, con $0!=1$`,
            tex: r`(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^{k},\qquad \binom{n}{k}=\frac{n!}{k!\,(n-k)!}` },
          { title: T('Equazione di secondo grado', 'Quadratic equation'),
            vars: r`a, b, c|coefficienti ($a\ne0$); x_{1,2}|soluzioni; \Delta|discriminante: $\Delta>0$ due soluzioni, $=0$ una doppia, $<0$ nessuna reale`,
            tex: [r`ax^2+bx+c=0 \;\Rightarrow\; x_{1,2}=\frac{-b\pm\sqrt{\Delta}}{2a},\quad \Delta=b^2-4ac`,
                  r`x_1+x_2=-\frac{b}{a},\qquad x_1x_2=\frac{c}{a}`],
            note: T('Relazioni di Viète nella seconda riga.', 'Vieta\'s formulas in the second line.') },
          { title: T('Potenze', 'Powers'),
            vars: r`a|base; m, n|esponenti`,
            tex: [r`a^m a^n = a^{m+n},\quad \frac{a^m}{a^n}=a^{m-n},\quad (a^m)^n=a^{mn}`,
                  r`a^{-n}=\frac{1}{a^n},\quad a^{m/n}=\sqrt[n]{a^m}`] },
          { title: T('Logaritmi', 'Logarithms'),
            vars: r`a|base del logaritmo ($a>0$, $a\ne1$); x, y|argomenti ($>0$); k|esponente reale; b|nuova base nel cambio di base`,
            tex: [r`\log_a(xy)=\log_a x+\log_a y,\qquad \log_a\frac{x}{y}=\log_a x-\log_a y`,
                  r`\log_a x^k = k\log_a x,\qquad \log_a x=\frac{\log_b x}{\log_b a}`],
            note: T('Valide per $x,y>0$, $a>0$, $a\\ne 1$.', 'Valid for $x,y>0$, $a>0$, $a\\ne 1$.') },
          { title: T('Valore assoluto', 'Absolute value'),
            vars: r`a, b, x|numeri reali; c|costante ($c>0$)`,
            tex: [r`|a+b|\le |a|+|b|`, r`|x|<c \iff -c<x<c,\qquad |x|>c \iff x<-c \ \lor\ x>c`],
            note: T('Disuguaglianza triangolare e disequazioni elementari ($c>0$).', 'Triangle inequality and basic inequalities ($c>0$).') }
        ]
      },
      {
        id: 'trigonometria', title: T('Trigonometria', 'Trigonometry'),
        items: [
          { title: T('Relazione fondamentale', 'Fundamental identity'),
            vars: r`\alpha|angolo`,
            tex: r`\sin^2\alpha+\cos^2\alpha=1,\qquad \tan\alpha=\frac{\sin\alpha}{\cos\alpha}` },
          { title: T('Formule di addizione', 'Angle-sum formulas'),
            vars: r`\alpha, \beta|angoli`,
            tex: [r`\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta`,
                  r`\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta`,
                  r`\tan(\alpha\pm\beta)=\frac{\tan\alpha\pm\tan\beta}{1\mp\tan\alpha\tan\beta}`] },
          { title: T('Formule di duplicazione', 'Double-angle formulas'),
            vars: r`\alpha|angolo`,
            tex: [r`\sin 2\alpha = 2\sin\alpha\cos\alpha`,
                  r`\cos 2\alpha = \cos^2\alpha-\sin^2\alpha = 2\cos^2\alpha-1 = 1-2\sin^2\alpha`] },
          { title: T('Formule di bisezione (potenze)', 'Power-reduction'),
            vars: r`\alpha|angolo`,
            tex: r`\sin^2\alpha=\frac{1-\cos 2\alpha}{2},\qquad \cos^2\alpha=\frac{1+\cos 2\alpha}{2}` },
          { title: T('Teoremi sui triangoli', 'Triangle theorems'),
            vars: r`a, b, c|lati del triangolo; \alpha, \beta, \gamma|angoli opposti ai lati $a,b,c$; R|raggio della circonferenza circoscritta`,
            tex: [r`\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}=2R`,
                  r`c^2=a^2+b^2-2ab\cos\gamma`],
            note: T('Teorema dei seni (con raggio $R$ della circonferenza circoscritta) e teorema del coseno.',
                    'Law of sines (with circumradius $R$) and law of cosines.') },
          { title: T('Gradi e radianti', 'Degrees and radians'),
            vars: r`\alpha_{\text{rad}}|angolo in radianti; \alpha_{\text{deg}}|angolo in gradi`,
            tex: r`\alpha_{\text{rad}}=\alpha_{\text{deg}}\cdot\frac{\pi}{180}` }
        ]
      },
      {
        id: 'complessi', title: T('Numeri complessi', 'Complex numbers'),
        items: [
          { title: T('Forme di un numero complesso', 'Forms of a complex number'),
            vars: r`z|numero complesso; a|parte reale; b|parte immaginaria; j|unità immaginaria, $j^2=-1$; \rho|modulo $|z|$; \theta|argomento (fase)`,
            tex: [r`z=a+jb=\rho e^{j\theta}=\rho(\cos\theta+j\sin\theta)`,
                  r`\rho=\sqrt{a^2+b^2},\qquad \theta=\operatorname{atan2}(b,a)`],
            note: T('Qui $j$ è l\'unità immaginaria ($j^2=-1$), come in ingegneria.', 'Here $j$ is the imaginary unit ($j^2=-1$), as in engineering.') },
          { title: T('Formule di Eulero', 'Euler\'s formulas'),
            vars: r`\theta|angolo (rad); j|unità immaginaria`,
            tex: [r`e^{j\theta}=\cos\theta+j\sin\theta`,
                  r`\cos\theta=\frac{e^{j\theta}+e^{-j\theta}}{2},\qquad \sin\theta=\frac{e^{j\theta}-e^{-j\theta}}{2j}`] },
          { title: T('Prodotto, quoziente, potenza', 'Product, quotient, power'),
            vars: r`z_1,z_2|numeri complessi; \rho_i|moduli; \theta_i|argomenti; n|esponente intero`,
            tex: [r`z_1z_2=\rho_1\rho_2\,e^{j(\theta_1+\theta_2)},\qquad \frac{z_1}{z_2}=\frac{\rho_1}{\rho_2}e^{j(\theta_1-\theta_2)}`,
                  r`z^n=\rho^n e^{jn\theta}`],
            note: T('Formula di De Moivre nell\'ultima riga.', 'De Moivre\'s formula in the last line.') },
          { title: T('Radici n-esime', 'n-th roots'),
            vars: r`n|indice della radice; \rho, \theta|modulo e argomento di $z$; k|indice della radice ($n$ valori distinti)`,
            tex: r`\sqrt[n]{z}=\sqrt[n]{\rho}\;e^{j\frac{\theta+2k\pi}{n}},\qquad k=0,1,\dots,n-1` },
          { title: T('Coniugato e modulo', 'Conjugate and modulus'),
            vars: r`z=a+jb|numero complesso; \bar z|complesso coniugato; \lvert z\rvert|modulo`,
            tex: r`\bar z=a-jb,\qquad z\bar z=|z|^2,\qquad \frac{1}{z}=\frac{\bar z}{|z|^2}` }
        ]
      },
      {
        id: 'somme', title: T('Somme e combinatoria', 'Sums and combinatorics'),
        items: [
          { title: T('Somme notevoli', 'Common sums'),
            vars: r`n|numero di termini; k|indice di sommatoria`,
            tex: [r`\sum_{k=1}^{n}k=\frac{n(n+1)}{2},\qquad \sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6}`] },
          { title: T('Progressione geometrica', 'Geometric progression'),
            vars: r`q|ragione; n|ultimo indice della somma`,
            tex: r`\sum_{k=0}^{n}q^k=\frac{1-q^{n+1}}{1-q}\quad(q\ne1)`,
            tags: ['serie'] },
          { title: T('Progressione aritmetica', 'Arithmetic progression'),
            vars: r`a_1|primo termine; a_n|ultimo termine; n|numero di termini`,
            tex: r`\sum_{k=1}^{n}a_k=\frac{n\,(a_1+a_n)}{2}` },
          { title: T('Permutazioni e combinazioni', 'Permutations and combinations'),
            vars: r`n|numero di elementi; k|numero di elementi scelti; P_n|permutazioni (ordinamenti di $n$ oggetti); D_{n,k}|disposizioni (conta l'ordine); C_{n,k}|combinazioni (non conta l'ordine)`,
            tex: [r`P_n=n!,\qquad D_{n,k}=\frac{n!}{(n-k)!}`, r`C_{n,k}=\binom{n}{k}=\frac{n!}{k!(n-k)!}`],
            note: T('Permutazioni, disposizioni semplici, combinazioni semplici.', 'Permutations, k-permutations, combinations.') }
        ]
      },
      {
        id: 'radicali', title: T('Radicali, polinomi e disequazioni', 'Radicals, polynomials and inequalities'),
        items: [
          { title: T('Radicali', 'Radicals'),
            vars: r`a, b|numeri reali non negativi (dove compare la radice)`,
            tex: r`\sqrt{a^2}=|a|,\qquad \sqrt a\sqrt b=\sqrt{ab},\qquad \frac{1}{\sqrt a+\sqrt b}=\frac{\sqrt a-\sqrt b}{a-b}` },
          { title: T('Frazioni algebriche', 'Algebraic fractions'),
            vars: r`a, b, c, d|numeri o espressioni, con denominatori $\ne0$`,
            tex: r`\frac ab\pm\frac cd=\frac{ad\pm bc}{bd},\qquad \frac{a/b}{c/d}=\frac{ad}{bc}` },
          { title: T('Teorema del resto e di Ruffini', 'Remainder and factor theorem'),
            vars: r`P(x)|polinomio; Q(x)|quoziente della divisione per $(x-a)$; a|valore in cui si valuta / radice candidata; P(a)|resto della divisione`,
            tex: r`P(x)=(x-a)Q(x)+P(a);\qquad P(a)=0\iff(x-a)\mid P(x)` },
          { title: T('Relazioni tra radici e coefficienti', 'Roots and coefficients'),
            vars: r`a_k|coefficienti del polinomio; n|grado; x_i|radici`,
            tex: r`a_nx^n+\dots+a_0=a_n\prod(x-x_i):\quad \sum x_i=-\frac{a_{n-1}}{a_n},\quad \prod x_i=(-1)^n\frac{a_0}{a_n}` },
          { title: T('Disequazione di secondo grado', 'Quadratic inequality'),
            vars: r`a, b, c|coefficienti; \Delta|discriminante; x_1<x_2|radici dell'equazione associata`,
            tex: r`a>0,\ \Delta>0:\ ax^2+bx+c>0\iff x<x_1\ \lor\ x>x_2` },
          { title: T('Esponenziali e logaritmi', 'Exponentials and logarithms'),
            vars: r`a|base; x, y|esponenti / argomenti`,
            tex: r`a>1:\ a^x>a^y\iff x>y,\quad \log_ax>\log_ay\iff x>y>0;\qquad 0<a<1:\ \text{verso invertito}` }
        ]
      },
      {
        id: 'trig-extra', title: T('Trigonometria e funzioni iperboliche: altre formule', 'More trigonometry and hyperbolic functions'),
        items: [
          { title: T('Archi associati', 'Related angles'),
            vars: r`\alpha|angolo`,
            tex: r`\sin(-\alpha)=-\sin\alpha,\quad \cos(-\alpha)=\cos\alpha,\quad \sin(\pi-\alpha)=\sin\alpha,\quad \cos(\pi-\alpha)=-\cos\alpha` },
          { title: T('Archi complementari', 'Complementary angles'),
            vars: r`\alpha|angolo; x|valore in $[-1,1]$`,
            tex: r`\sin\!\left(\tfrac\pi2-\alpha\right)=\cos\alpha,\qquad \arcsin x+\arccos x=\tfrac\pi2` },
          { title: T('Prostaferesi', 'Sum-to-product'),
            vars: r`p, q|angoli`,
            tex: r`\sin p+\sin q=2\sin\frac{p+q}{2}\cos\frac{p-q}{2},\qquad \cos p+\cos q=2\cos\frac{p+q}{2}\cos\frac{p-q}{2}` },
          { title: T('Werner', 'Product-to-sum'),
            vars: r`\alpha, \beta|angoli`,
            tex: r`\sin\alpha\cos\beta=\tfrac12\big[\sin(\alpha+\beta)+\sin(\alpha-\beta)\big],\quad \cos\alpha\cos\beta=\tfrac12\big[\cos(\alpha-\beta)+\cos(\alpha+\beta)\big]` },
          { title: T('Formule parametriche', 'Tangent half-angle'),
            vars: r`\alpha|angolo; t|$\tan(\alpha/2)$`,
            tex: r`t=\tan\frac\alpha2:\quad \sin\alpha=\frac{2t}{1+t^2},\ \ \cos\alpha=\frac{1-t^2}{1+t^2},\ \ \tan\alpha=\frac{2t}{1-t^2}` },
          { title: T('Somma di seno e coseno (sfasamento)', 'Combining sine and cosine'),
            vars: r`a, b|coefficienti reali; R|ampiezza risultante; \varphi|fase; x|angolo/variabile`,
            tex: r`a\cos x+b\sin x=R\cos(x-\varphi),\qquad R=\sqrt{a^2+b^2},\ \ \varphi=\operatorname{atan2}(b,a)`,
            note: T('Utile per sommare grandezze sinusoidali isofrequenziali.', 'Useful for summing same-frequency sinusoids.') },
          { title: T('Funzioni iperboliche', 'Hyperbolic functions'),
            vars: r`x|variabile reale`,
            tex: [r`\sinh x=\frac{e^x-e^{-x}}{2},\quad \cosh x=\frac{e^x+e^{-x}}{2},\quad \tanh x=\frac{\sinh x}{\cosh x}`, r`\cosh^2x-\sinh^2x=1`] },
          { title: T('Iperboliche inverse', 'Inverse hyperbolic'),
            vars: r`x|variabile (per arccosh $x\ge1$, per arctanh $|x|<1$)`,
            tex: r`\operatorname{arcsinh}x=\ln\!\left(x+\sqrt{x^2+1}\right),\quad \operatorname{arccosh}x=\ln\!\left(x+\sqrt{x^2-1}\right),\quad \operatorname{arctanh}x=\tfrac12\ln\frac{1+x}{1-x}` }
        ]
      },
      {
        id: 'insiemi', title: T('Insiemi e combinatoria', 'Sets and combinatorics'),
        items: [
          { title: T('Leggi di De Morgan', 'De Morgan\'s laws'),
            vars: r`A, B|insiemi; A^c|complementare di $A$; \cup, \cap|unione, intersezione`,
            tex: r`(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c` },
          { title: T('Cardinalità', 'Cardinality'),
            vars: r`\lvert A\rvert|numero di elementi di $A$`,
            tex: r`|A\cup B|=|A|+|B|-|A\cap B|` },
          { title: T('Con ripetizione', 'With repetition'),
            vars: r`n|numero di tipi di elementi; k|numero di elementi scelti; D'_{n,k}|disposizioni con ripetizione; C'_{n,k}|combinazioni con ripetizione`,
            tex: r`D'_{n,k}=n^k,\qquad C'_{n,k}=\binom{n+k-1}{k}` },
          { title: T('Permutazioni con elementi uguali', 'Permutations with repeated elements'),
            vars: r`n|numero totale di elementi; n_i|molteplicità dell'elemento $i$-esimo ($\sum n_i=n$)`,
            tex: r`\frac{n!}{n_1!\,n_2!\cdots n_k!}` }
        ]
      },

      {
        id: 'grafici-trig', title: T('Circonferenza goniometrica', 'Unit circle'),
        items: [
          { title: T('Seno, coseno, tangente', 'Sine, cosine, tangent'),
            vars: r`\theta|angolo orientato dall'asse $x$; x, y|coordinate del punto sulla circonferenza unitaria`,
            tex: r`\cos\theta=x,\quad \sin\theta=y,\quad \tan\theta=\frac yx,\qquad \sin^2\theta+\cos^2\theta=1`,
            fig: FORMULARI.fig.svg(`
              <line class="fg-axis" x1="30" y1="90" x2="215" y2="90"/><line class="fg-axis" x1="120" y1="10" x2="120" y2="172"/>
              <circle class="fg-line" cx="120" cy="90" r="65"/>
              <path class="fg-line" d="M120 90 L170 48"/>
              <path class="fg-curve fg-c3" d="M170 48 L170 90"/><path class="fg-curve fg-c2" d="M120 90 L170 90"/>
              <path class="fg-curve fg-c1" d="M185 90 L185 36"/>
              <circle class="fg-pt" cx="170" cy="48" r="3"/>
              <text x="140" y="84" class="t1">θ</text><text x="132" y="104" class="t2">cos θ</text>
              <text x="174" y="72" class="t3">sin θ</text><text x="189" y="64" class="t1">tan θ</text>
              <text x="186" y="104">1</text><text x="100" y="26">1</text>`) },
          { title: T('Valori notevoli (schema)', 'Special values (diagram)'),
            vars: r`\pi/6, \pi/4, \pi/3|angoli di $30^\circ$, $45^\circ$, $60^\circ$`,
            tex: r`\sin\tfrac\pi6=\tfrac12,\ \ \sin\tfrac\pi4=\tfrac{\sqrt2}2,\ \ \sin\tfrac\pi3=\tfrac{\sqrt3}2`,
            fig: FORMULARI.fig.svg(`
              <line class="fg-axis" x1="30" y1="90" x2="215" y2="90"/><line class="fg-axis" x1="120" y1="10" x2="120" y2="172"/>
              <circle class="fg-line" cx="120" cy="90" r="65" style="opacity:.6"/>
              <g class="fg-dash"><path d="M120 90 L176.3 57.5"/><path d="M120 90 L166 44"/><path d="M120 90 L152.5 33.7"/></g>
              <circle class="fg-pt" cx="176.3" cy="57.5" r="2.8"/><circle class="fg-pt" cx="166" cy="44" r="2.8"/><circle class="fg-pt" cx="152.5" cy="33.7" r="2.8"/>
              <text x="181" y="58">30°</text><text x="170" y="42">45°</text><text x="148" y="26">60°</text>
              <text x="200" y="104">0°</text><text x="124" y="16">90°</text>`) }
        ]
      }
    ]
  });
})();
