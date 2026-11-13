(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'algebra-lineare', area: 'math', order: 50, icon: 'bi-grid-3x3-gap',
    title: T('Algebra lineare', 'Linear algebra'),
    sections: [
      {
        id: 'def-spazi', title: T('Spazi vettoriali: definizioni e teoremi', 'Vector spaces: definitions and theorems'),
        items: [
          { kind: 'def', title: T('Spazio vettoriale', 'Vector space'),
            text: "Uno spazio vettoriale su un campo $\\mathbb K$ (di solito $\\mathbb R$ o $\\mathbb C$) è un insieme $V$ con una somma, che lo rende un gruppo commutativo, e un prodotto per scalari tali che per ogni $\\mathbf u,\\mathbf v\\in V$ e $\\alpha,\\beta\\in\\mathbb K$: $\\alpha(\\mathbf u+\\mathbf v)=\\alpha\\mathbf u+\\alpha\\mathbf v$, $(\\alpha+\\beta)\\mathbf u=\\alpha\\mathbf u+\\beta\\mathbf u$, $(\\alpha\\beta)\\mathbf u=\\alpha(\\beta\\mathbf u)$, $1\\mathbf u=\\mathbf u$." },
          { kind: 'def', title: T('Sottospazio vettoriale', 'Vector subspace'),
            text: "Un sottoinsieme $W\\subseteq V$ è un sottospazio se contiene il vettore nullo ed è chiuso rispetto alla somma e al prodotto per scalari (con un'unica verifica: $\\alpha\\mathbf u+\\beta\\mathbf v\\in W$). L'intersezione di sottospazi è un sottospazio; l'unione in generale no.",
            vars: r`W|sottoinsieme di $V$; \alpha, \beta|scalari; \mathbf u, \mathbf v|vettori`,
            tex: r`\mathbf 0\in W,\qquad \mathbf u,\mathbf v\in W,\ \alpha,\beta\in\mathbb K\ \Rightarrow\ \alpha\mathbf u+\beta\mathbf v\in W` },
          { kind: 'def', title: T('Combinazione lineare e span', 'Linear combination and span'),
            text: "Una combinazione lineare dei vettori $\\mathbf v_1,\\dots,\\mathbf v_k$ è un vettore $\\sum\\alpha_i\\mathbf v_i$. L'insieme di tutte le combinazioni lineari è il sottospazio generato (span), il più piccolo sottospazio che contiene i vettori.",
            vars: r`\mathbf v_i|vettori generatori; \alpha_i|coefficienti`,
            tex: r`\operatorname{span}(\mathbf v_1,\dots,\mathbf v_k)=\Big\{\sum_{i=1}^k\alpha_i\mathbf v_i:\ \alpha_i\in\mathbb K\Big\}` },
          { kind: 'def', title: T('Dipendenza e indipendenza lineare', 'Linear dependence and independence'),
            text: "I vettori $\\mathbf v_1,\\dots,\\mathbf v_k$ sono linearmente indipendenti se l'unica combinazione lineare che dà il vettore nullo è quella con tutti i coefficienti nulli; altrimenti sono dipendenti (almeno uno è combinazione lineare degli altri).",
            vars: r`\mathbf v_i|vettori; \alpha_i|coefficienti`,
            tex: r`\sum_i\alpha_i\mathbf v_i=\mathbf 0\ \Rightarrow\ \alpha_1=\dots=\alpha_k=0` },
          { kind: 'def', title: T('Base e dimensione', 'Basis and dimension'),
            text: "Una base di $V$ è un insieme di vettori linearmente indipendenti che generano $V$: ogni vettore si scrive in modo unico come combinazione lineare dei vettori della base (le coordinate). Tutte le basi di $V$ hanno lo stesso numero di elementi, detto dimensione $\\dim V$." },
          { kind: 'thm', title: T('Teorema di completamento e di Steinitz', 'Completion and Steinitz theorem'),
            text: "In uno spazio di dimensione finita ogni insieme di vettori indipendenti si può completare a una base, ogni insieme di generatori contiene una base, e in uno spazio di dimensione $n$ ogni insieme di più di $n$ vettori è dipendente." },
          { kind: 'thm', title: T('Formula di Grassmann', 'Grassmann formula'),
            text: "Se $U,W$ sono sottospazi di uno spazio di dimensione finita, la dimensione della loro somma si ottiene sottraendo quella dell'intersezione.",
            vars: r`U, W|sottospazi; U+W|somma dei sottospazi; U\cap W|intersezione`,
            tex: r`\dim(U+W)=\dim U+\dim W-\dim(U\cap W)` },
          { kind: 'def', title: T('Somma diretta', 'Direct sum'),
            text: "La somma $U+W$ è diretta, e si scrive $U\\oplus W$, se $U\\cap W=\\{\\mathbf 0\\}$, equivalentemente se ogni vettore di $U+W$ si scrive in modo unico come somma di un vettore di $U$ e uno di $W$. In tal caso $\\dim(U\\oplus W)=\\dim U+\\dim W$." }
        ]
      },
      {
        id: 'def-appl', title: T('Applicazioni lineari', 'Linear maps'),
        items: [
          { kind: 'def', title: T('Applicazione lineare', 'Linear map'),
            text: "Un'applicazione $f:V\\to W$ tra spazi vettoriali è lineare se conserva somma e prodotto per scalari. Una applicazione lineare è determinata dai valori sui vettori di una base.",
            vars: r`f|applicazione lineare; \alpha, \beta|scalari; \mathbf u, \mathbf v|vettori di $V$`,
            tex: r`f(\alpha\mathbf u+\beta\mathbf v)=\alpha f(\mathbf u)+\beta f(\mathbf v)` },
          { kind: 'def', title: T('Nucleo e immagine', 'Kernel and image'),
            text: "Il nucleo di $f$ è l'insieme dei vettori mandati in $\\mathbf 0$; l'immagine è l'insieme dei valori assunti da $f$. Sono sottospazi di $V$ e $W$ rispettivamente.",
            vars: r`\ker f|nucleo; \operatorname{Im}f|immagine`,
            tex: r`\ker f=\{\mathbf v\in V:\ f(\mathbf v)=\mathbf 0\},\qquad \operatorname{Im}f=\{f(\mathbf v):\ \mathbf v\in V\}` },
          { kind: 'thm', title: T('Teorema nullità più rango', 'Rank-nullity theorem'),
            text: "Se $f:V\\to W$ è lineare e $V$ ha dimensione finita, la dimensione del dominio è la somma delle dimensioni del nucleo (nullità) e dell'immagine (rango).",
            vars: r`\dim\ker f|nullità; \dim\operatorname{Im}f|rango di $f$`,
            tex: r`\dim V=\dim\ker f+\dim\operatorname{Im}f` },
          { kind: 'prop', title: T('Iniettività, suriettività, isomorfismi', 'Injectivity, surjectivity, isomorphisms'),
            text: "$f$ è iniettiva se e solo se $\\ker f=\\{\\mathbf 0\\}$; è suriettiva se e solo se $\\operatorname{Im}f=W$. Se $\\dim V=\\dim W$ finita, iniettiva e suriettiva sono equivalenti e $f$ è un isomorfismo. Due spazi sono isomorfi se e solo se hanno la stessa dimensione." },
          { kind: 'def', title: T('Matrice associata a una applicazione lineare', 'Matrix of a linear map'),
            text: "Fissate le basi $\\mathcal B$ di $V$ e $\\mathcal C$ di $W$, a $f$ è associata la matrice le cui colonne sono le coordinate delle immagini dei vettori di $\\mathcal B$ rispetto a $\\mathcal C$. Cambiando basi la matrice cambia per prodotto con matrici invertibili; per un endomorfismo con cambio di base $P$ si ha $A'=P^{-1}AP$ (matrici simili).",
            vars: r`A|matrice associata; \mathcal B, \mathcal C|basi di partenza e di arrivo; P|matrice di cambio di base`,
            tex: r`[f(\mathbf v)]_{\mathcal C}=A\,[\mathbf v]_{\mathcal B},\qquad A'=P^{-1}AP` }
        ]
      },
      {
        id: 'def-matrici', title: T('Matrici, determinante e sistemi', 'Matrices, determinants and systems'),
        items: [
          { kind: 'def', title: T('Rango di una matrice', 'Rank of a matrix'),
            text: "Il rango di una matrice $A$ è la dimensione dello spazio generato dalle sue colonne. Coincide con la dimensione dello spazio generato dalle righe e con l'ordine massimo di un minore non nullo (teorema degli orlati). È invariante per operazioni elementari sulle righe.",
            vars: r`A|matrice $m\times n$; \operatorname{rk}A|rango`,
            tex: r`\operatorname{rk}A=\dim\operatorname{span}(\text{colonne})=\dim\operatorname{span}(\text{righe})\le\min(m,n)` },
          { kind: 'def', title: T('Determinante', 'Determinant'),
            text: "Il determinante di una matrice quadrata $A$ $n\\times n$ è la somma, estesa a tutte le permutazioni $\\sigma$ di $\\{1,\\dots,n\\}$, dei prodotti $a_{1\\sigma(1)}\\cdots a_{n\\sigma(n)}$ con il segno della permutazione. È l'unica funzione multilineare e alternante delle righe che vale $1$ sulla matrice identità.",
            vars: r`A|matrice quadrata; S_n|permutazioni di $n$ elementi; \operatorname{sgn}(\sigma)|segno della permutazione`,
            tex: r`\det A=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\,a_{1\sigma(1)}\cdots a_{n\sigma(n)}` },
          { kind: 'thm', title: T('Teorema di Binet', 'Cauchy-Binet (product rule) theorem'),
            text: "Il determinante del prodotto di due matrici quadrate è il prodotto dei determinanti. Segue che $\\det A^{-1}=1/\\det A$ e che matrici simili hanno lo stesso determinante.",
            vars: r`A, B|matrici quadrate della stessa dimensione`,
            tex: r`\det(AB)=\det A\,\det B` },
          { kind: 'thm', title: T('Caratterizzazione delle matrici invertibili', 'Characterisation of invertible matrices'),
            text: "Per una matrice quadrata $A$ di ordine $n$ sono equivalenti: $A$ è invertibile; $\\det A\\ne0$; $\\operatorname{rk}A=n$; le colonne (o le righe) sono linearmente indipendenti; $A\\mathbf x=\\mathbf 0$ ha solo la soluzione nulla; $0$ non è un autovalore di $A$." },
          { kind: 'thm', title: T('Teorema di Rouché-Capelli', 'Rouché-Capelli theorem'),
            text: "Il sistema $A\\mathbf x=\\mathbf b$ è compatibile se e solo se il rango di $A$ coincide con quello della matrice completa $[A|\\mathbf b]$. In tal caso, se $r$ è il rango comune e $n$ il numero di incognite, le soluzioni dipendono da $n-r$ parametri liberi: sono una sola se $r=n$.",
            vars: r`A|matrice dei coefficienti; \mathbf b|termini noti; [A\mid\mathbf b]|matrice completa; r|rango comune; n|numero di incognite`,
            tex: [r`A\mathbf x=\mathbf b\ \text{compatibile}\iff\operatorname{rk}A=\operatorname{rk}[A\mid\mathbf b]=r`, r`\text{soluzioni: }\infty^{\,n-r}`] },
          { kind: 'thm', title: T('Regola di Cramer', 'Cramer rule'),
            text: "Se $A$ è quadrata con $\\det A\\ne0$, il sistema $A\\mathbf x=\\mathbf b$ ha un'unica soluzione, le cui componenti sono i rapporti fra il determinante di $A_i$ ($A$ con la colonna $i$ sostituita da $\\mathbf b$) e il determinante di $A$.",
            vars: r`x_i|$i$-esima incognita; A_i|matrice $A$ con la colonna $i$ sostituita da $\mathbf b$`,
            tex: r`x_i=\frac{\det A_i}{\det A},\qquad \det A\ne0` }
        ]
      },
      {
        id: 'def-autovalori', title: T('Autovalori e diagonalizzazione: teoremi', 'Eigenvalues and diagonalisation: theorems'),
        items: [
          { kind: 'def', title: T('Autovalore, autovettore, autospazio', 'Eigenvalue, eigenvector, eigenspace'),
            text: "Sia $A$ una matrice quadrata. Un numero $\\lambda$ è un autovalore se esiste un vettore $\\mathbf v\\ne\\mathbf 0$ (autovettore) con $A\\mathbf v=\\lambda\\mathbf v$. Gli autovalori sono le radici del polinomio caratteristico $\\det(A-\\lambda I)$. L'autospazio di $\\lambda$ è $\\ker(A-\\lambda I)$.",
            vars: r`A|matrice quadrata; \lambda|autovalore; \mathbf v|autovettore; I|matrice identità`,
            tex: r`A\mathbf v=\lambda\mathbf v,\ \ \mathbf v\ne\mathbf 0\iff\det(A-\lambda I)=0` },
          { kind: 'def', title: T('Molteplicità algebrica e geometrica', 'Algebraic and geometric multiplicity'),
            text: "La molteplicità algebrica di $\\lambda$ è la sua molteplicità come radice del polinomio caratteristico; la molteplicità geometrica è la dimensione del suo autospazio. Vale sempre $1\\le m_g(\\lambda)\\le m_a(\\lambda)$.",
            vars: r`m_a, m_g|molteplicità algebrica e geometrica`,
            tex: r`1\le m_g(\lambda)=\dim\ker(A-\lambda I)\le m_a(\lambda)` },
          { kind: 'thm', title: T('Autovettori di autovalori distinti', 'Eigenvectors of distinct eigenvalues'),
            text: "Autovettori relativi ad autovalori distinti sono linearmente indipendenti. In particolare, una matrice $n\\times n$ con $n$ autovalori distinti è diagonalizzabile." },
          { kind: 'thm', title: T('Criterio di diagonalizzabilità', 'Diagonalisability criterion'),
            text: "Una matrice quadrata su $\\mathbb K$ è diagonalizzabile se e solo se il polinomio caratteristico ha tutte le radici in $\\mathbb K$ e per ogni autovalore la molteplicità geometrica è uguale a quella algebrica. In tal caso $A=PDP^{-1}$, con $D$ diagonale degli autovalori e $P$ con colonne autovettori.",
            vars: r`P|matrice degli autovettori; D|matrice diagonale degli autovalori`,
            tex: r`A=PDP^{-1},\quad D=\operatorname{diag}(\lambda_1,\dots,\lambda_n),\quad P=[\mathbf v_1\ \cdots\ \mathbf v_n]` },
          { kind: 'thm', title: T('Teorema spettrale', 'Spectral theorem'),
            text: "Una matrice reale simmetrica ha autovalori reali ed è diagonalizzabile con una base ortonormale di autovettori: esiste una matrice ortogonale $Q$ tale che $A=Q\\Lambda Q^T$. Autovettori di autovalori distinti sono ortogonali.",
            vars: r`Q|matrice ortogonale degli autovettori; \Lambda|matrice diagonale degli autovalori`,
            tex: r`A=A^T\in\mathbb R^{n\times n}\ \Rightarrow\ A=Q\Lambda Q^T,\quad Q^TQ=I` },
          { kind: 'thm', title: T('Teorema di Cayley-Hamilton', 'Cayley-Hamilton theorem'),
            text: "Ogni matrice quadrata annulla il proprio polinomio caratteristico: sostituendo $A$ al posto di $\\lambda$ si ottiene la matrice nulla. Ne segue che $A^n$ è combinazione lineare delle potenze inferiori.",
            vars: r`p|polinomio caratteristico; A|matrice quadrata $n\times n$`,
            tex: r`p(\lambda)=\det(\lambda I-A)\ \Rightarrow\ p(A)=0` },
          { kind: 'thm', title: T('Forma canonica di Jordan', 'Jordan canonical form'),
            text: "Ogni matrice quadrata complessa è simile a una matrice diagonale a blocchi, i cui blocchi di Jordan hanno un autovalore sulla diagonale e $1$ sulla sopradiagonale. Il numero di blocchi relativi a $\\lambda$ è la molteplicità geometrica; la somma delle loro dimensioni è la molteplicità algebrica.",
            vars: r`J_m(\lambda)|blocco di Jordan $m\times m$ relativo a $\lambda$; P|matrice del cambio di base`,
            tex: r`A=PJP^{-1},\quad J=\operatorname{diag}\big(J_{m_1}(\lambda_1),\dots,J_{m_k}(\lambda_k)\big)` }
        ]
      },
      {
        id: 'def-euclidei', title: T('Spazi euclidei e forme quadratiche', 'Euclidean spaces and quadratic forms'),
        items: [
          { kind: 'def', title: T('Prodotto scalare', 'Inner product'),
            text: "Un prodotto scalare reale su $V$ è una funzione bilineare, simmetrica e definita positiva ($\\langle\\mathbf v,\\mathbf v\\rangle>0$ per $\\mathbf v\\ne\\mathbf 0$). Induce la norma $\\lVert\\mathbf v\\rVert=\\sqrt{\\langle\\mathbf v,\\mathbf v\\rangle}$ e l'angolo tra due vettori non nulli. Il prodotto scalare standard su $\\mathbb R^n$ è $\\mathbf u\\cdot\\mathbf v=\\sum u_iv_i$.",
            vars: r`\mathbf u, \mathbf v|vettori; \theta|angolo tra i vettori; \lVert\cdot\rVert|norma`,
            tex: r`\langle\mathbf u,\mathbf v\rangle=\lVert\mathbf u\rVert\,\lVert\mathbf v\rVert\cos\theta` },
          { kind: 'thm', title: T('Disuguaglianza di Cauchy-Schwarz', 'Cauchy-Schwarz inequality'),
            text: "Per ogni coppia di vettori vale la disuguaglianza sotto; l'uguaglianza si ha se e solo se i vettori sono linearmente dipendenti. Da essa segue la disuguaglianza triangolare per la norma.",
            vars: r`\mathbf u, \mathbf v|vettori di uno spazio euclideo`,
            tex: [r`|\langle\mathbf u,\mathbf v\rangle|\le\lVert\mathbf u\rVert\,\lVert\mathbf v\rVert`, r`\lVert\mathbf u+\mathbf v\rVert\le\lVert\mathbf u\rVert+\lVert\mathbf v\rVert`] },
          { kind: 'def', title: T('Ortogonalità e base ortonormale', 'Orthogonality and orthonormal basis'),
            text: "Due vettori sono ortogonali se il loro prodotto scalare è nullo. Una base è ortonormale se i suoi vettori sono a due a due ortogonali e di norma $1$: in tal caso le coordinate di $\\mathbf v$ sono i prodotti scalari con i vettori della base. Una matrice le cui colonne sono ortonormali è ortogonale, $Q^TQ=I$.",
            vars: r`\mathbf q_i|vettori della base ortonormale; \delta_{ij}|delta di Kronecker`,
            tex: r`\langle\mathbf q_i,\mathbf q_j\rangle=\delta_{ij},\qquad [\mathbf v]_i=\langle\mathbf v,\mathbf q_i\rangle` },
          { kind: 'thm', title: T('Teorema delle proiezioni ortogonali', 'Orthogonal projection theorem'),
            text: "Se $W$ è un sottospazio di uno spazio euclideo di dimensione finita, ogni vettore $\\mathbf v$ si scrive in modo unico come $\\mathbf w+\\mathbf z$ con $\\mathbf w\\in W$ e $\\mathbf z\\in W^\\perp$; $\\mathbf w$ è la proiezione ortogonale e il punto di $W$ più vicino a $\\mathbf v$.",
            vars: r`W|sottospazio; W^\perp|complemento ortogonale; \mathbf w|proiezione ortogonale di $\mathbf v$ su $W$`,
            tex: r`V=W\oplus W^\perp,\qquad \lVert\mathbf v-\mathbf w\rVert=\min_{\mathbf u\in W}\lVert\mathbf v-\mathbf u\rVert` },
          { kind: 'thm', title: T('Procedimento di Gram-Schmidt', 'Gram-Schmidt process'),
            text: "Da ogni insieme di vettori linearmente indipendenti $\\mathbf v_1,\\dots,\\mathbf v_k$ si ottiene un insieme ortonormale $\\mathbf q_1,\\dots,\\mathbf q_k$ che genera, per ogni $j$, lo stesso sottospazio di $\\mathbf v_1,\\dots,\\mathbf v_j$. Di conseguenza ogni spazio euclideo di dimensione finita ha una base ortonormale e ogni matrice a colonne indipendenti ha una fattorizzazione $A=QR$." },
          { kind: 'def', title: T('Matrice definita positiva', 'Positive definite matrix'),
            text: "Una matrice simmetrica $A$ è definita positiva se $\\mathbf x^TA\\mathbf x>0$ per ogni $\\mathbf x\\ne\\mathbf 0$ (semidefinita se $\\ge0$). Equivale a: tutti gli autovalori sono positivi; esiste una matrice invertibile $B$ con $A=B^TB$.",
            vars: r`A|matrice simmetrica; \mathbf x|vettore; \lambda_i|autovalori`,
            tex: r`A=A^T>0\iff\mathbf x^TA\mathbf x>0\ \ \forall\mathbf x\ne\mathbf 0\iff\lambda_i(A)>0\ \ \forall i` },
          { kind: 'crit', title: T('Criterio di Sylvester', 'Sylvester criterion'),
            text: "Una matrice simmetrica è definita positiva se e solo se tutti i minori principali di testa (determinanti delle sottomatrici $k\\times k$ in alto a sinistra) sono positivi. È definita negativa se e solo se hanno segno alternato, a partire da negativo.",
            vars: r`A_k|sottomatrice $k\times k$ in alto a sinistra`,
            tex: r`A=A^T>0\iff\det A_k>0\ \ (k=1,\dots,n)` },
          { kind: 'thm', title: T('Decomposizione ai valori singolari', 'Singular value decomposition'),
            text: "Ogni matrice reale $A$ di dimensione $m\\times n$ si scrive come $A=U\\Sigma V^T$ con $U,V$ ortogonali e $\\Sigma$ rettangolare diagonale con elementi $\\sigma_1\\ge\\sigma_2\\ge\\dots\\ge0$, i valori singolari. Essi sono le radici quadrate degli autovalori di $A^TA$ e il numero di quelli non nulli è il rango.",
            vars: r`U, V|matrici ortogonali; \Sigma|matrice dei valori singolari; \sigma_i|valori singolari`,
            tex: r`A=U\Sigma V^T,\qquad \sigma_i=\sqrt{\lambda_i(A^TA)}` },
          { kind: 'thm', title: T('Soluzione ai minimi quadrati', 'Least squares solution'),
            text: "Il vettore $\\mathbf x$ minimizza $\\lVert A\\mathbf x-\\mathbf b\\rVert$ se e solo se $A\\mathbf x$ è la proiezione ortogonale di $\\mathbf b$ sullo spazio delle colonne di $A$, ossia se soddisfa le equazioni normali. Se le colonne di $A$ sono indipendenti la soluzione è unica.",
            vars: r`A|matrice dei dati; \mathbf b|vettore delle osservazioni; \mathbf x|soluzione ai minimi quadrati`,
            tex: r`\min_{\mathbf x}\lVert A\mathbf x-\mathbf b\rVert\iff A^TA\,\mathbf x=A^T\mathbf b` }
        ]
      },
      {
        id: 'matrici', title: T('Matrici', 'Matrices'),
        items: [
          { title: T('Prodotto righe per colonne', 'Matrix product'),
            vars: r`A, B|matrici ($A$: $m\times n$, $B$: $n\times p$); (AB)_{ij}|elemento in riga $i$, colonna $j$; a_{ik}, b_{kj}|elementi delle matrici`,
            tex: r`(AB)_{ij}=\sum_{k}a_{ik}\,b_{kj}` },
          { title: T('Trasposta e inversa di un prodotto', 'Transpose and inverse of a product'),
            vars: r`A, B|matrici (invertibili per l'inversa); A^T|trasposta; A^{-1}|inversa`,
            tex: r`(AB)^T=B^TA^T,\qquad (AB)^{-1}=B^{-1}A^{-1}` },
          { title: T('Inversa 2×2', '2×2 inverse'),
            vars: r`a, b, c, d|elementi della matrice; ad-bc|determinante (deve essere $\ne0$)`,
            tex: r`\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}` },
          { title: T('Inversa con i complementi algebrici', 'Inverse via adjugate'),
            vars: r`A|matrice quadrata; \det A|determinante; \operatorname{adj}(A)|matrice aggiunta (trasposta dei cofattori); M_{ji}|minore: determinante senza riga $j$ e colonna $i$`,
            tex: r`A^{-1}=\frac{1}{\det A}\,\operatorname{adj}(A),\qquad \operatorname{adj}(A)_{ij}=(-1)^{i+j}M_{ji}` },
          { title: T('Matrici ortogonali', 'Orthogonal matrices'),
            vars: r`Q|matrice ortogonale; I|matrice identità; Q^T|trasposta`,
            tex: r`Q^TQ=I\iff Q^{-1}=Q^T,\qquad \det Q=\pm1` }
        ]
      },
      {
        id: 'determinanti', title: T('Determinante', 'Determinant'),
        items: [
          { title: T('2×2 e 3×3 (Sarrus)', '2×2 and 3×3 (Sarrus)'),
            vars: r`a, b, c, d|elementi della matrice 2×2; a_{ij}|elemento in riga $i$, colonna $j$; \det A|determinante`,
            tex: [r`\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc`,
                  r`\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}`] },
          { title: T('Sviluppo di Laplace', 'Laplace expansion'),
            vars: r`a_{ij}|elemento in riga $i$, colonna $j$; M_{ij}|minore: determinante della matrice senza riga $i$ e colonna $j$; i|riga fissata dello sviluppo`,
            tex: r`\det A=\sum_{j}(-1)^{i+j}a_{ij}M_{ij}` },
          { title: T('Proprietà', 'Properties'),
            vars: r`A, B|matrici quadrate $n\times n$; \alpha|scalare; n|ordine delle matrici`,
            tex: r`\det(AB)=\det A\det B,\quad \det A^T=\det A,\quad \det(\alpha A)=\alpha^n\det A,\quad \det A^{-1}=\frac{1}{\det A}` }
        ]
      },
      {
        id: 'spazi', title: T('Spazi vettoriali', 'Vector spaces'),
        items: [
          { title: T('Cambio di base', 'Change of basis'),
            vars: r`[\mathbf v]_{\mathcal B}|coordinate di $\mathbf v$ nella base $\mathcal B$; P|matrice di passaggio; A, A'|matrice dell'applicazione nelle due basi`,
            tex: r`[\mathbf v]_{\mathcal B'}=P^{-1}[\mathbf v]_{\mathcal B},\qquad A'=P^{-1}AP` },
          { title: T('Prodotto scalare e norma', 'Dot product and norm'),
            vars: r`\mathbf u, \mathbf v|vettori; u_i, v_i|componenti; \Vert \mathbf u\Vert \Vert \mathbf u\Vert |norma (lunghezza); \theta|angolo tra i vettori`,
            tex: r`\mathbf u\cdot\mathbf v=\sum u_iv_i=\|\mathbf u\|\|\mathbf v\|\cos\theta,\qquad \|\mathbf u\|=\sqrt{\mathbf u\cdot\mathbf u}` },
          { title: T('Proiezione ortogonale', 'Orthogonal projection'),
            vars: r`\operatorname{proj}_{\mathbf v}\mathbf u|proiezione di $\mathbf u$ sulla direzione di $\mathbf v$; \mathbf u\cdot\mathbf v|prodotto scalare`,
            fig: FORMULARI.fig.svg(`
  <path class="fg-curve fg-c1" d="M40 140 L210 110"/><path class="fg-curve fg-c3" d="M40 140 L130 40"/>
  <path class="fg-dash" d="M130 40 L144.4 121.6"/><path class="fg-curve fg-c2" d="M40 140 L144.4 121.6" style="stroke-width:4"/>
  <circle class="fg-pt" cx="144.4" cy="121.6" r="3"/>
  <text x="212" y="112" class="t1">v</text><text x="124" y="34" class="t3">u</text><text x="70" y="150" class="t2">proj_v u</text>`),
            tex: r`\operatorname{proj}_{\mathbf v}\mathbf u=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\,\mathbf v` },
          { title: T('Gram-Schmidt', 'Gram-Schmidt'),
            vars: r`\mathbf v_k|vettori linearmente indipendenti di partenza; \mathbf w_k|vettori ortogonali ottenuti; \mathbf q_k|vettori ortonormali (normalizzati)`,
            tex: r`\mathbf w_k=\mathbf v_k-\sum_{i<k}\operatorname{proj}_{\mathbf w_i}\mathbf v_k,\qquad \mathbf q_k=\frac{\mathbf w_k}{\|\mathbf w_k\|}` }
        ]
      },
      {
        id: 'autovalori', title: T('Autovalori e diagonalizzazione', 'Eigenvalues and diagonalisation'),
        items: [
          { title: T('Autovalori e autovettori', 'Eigenvalues and eigenvectors'),
            vars: r`A|matrice quadrata; \lambda|autovalore; \mathbf v|autovettore ($\mathbf v\ne0$); p(\lambda)|polinomio caratteristico; I|identità`,
            tex: r`A\mathbf v=\lambda\mathbf v,\qquad p(\lambda)=\det(A-\lambda I)=0` },
          { title: T('Traccia e determinante', 'Trace and determinant'),
            vars: r`\operatorname{tr}A|traccia (somma degli elementi diagonali); \lambda_i|autovalori (contati con molteplicità)`,
            tex: r`\operatorname{tr}A=\sum\lambda_i,\qquad \det A=\prod\lambda_i` },
          { title: T('Diagonalizzazione', 'Diagonalisation'),
            vars: r`A|matrice diagonalizzabile; P|matrice degli autovettori (colonne); D|matrice diagonale degli autovalori; \lambda_i|autovalori; \mathbf v_i|autovettori`,
            tex: r`A=PDP^{-1},\quad D=\operatorname{diag}(\lambda_1,\dots,\lambda_n),\quad P=[\mathbf v_1\ \cdots\ \mathbf v_n]`,
            note: T('Possibile se per ogni autovalore molteplicità geometrica = algebrica.', 'Possible iff geometric = algebraic multiplicity for every eigenvalue.') },
          { title: T('Potenze di una matrice', 'Matrix powers'),
            vars: r`A|matrice diagonalizzabile; k|esponente intero; P, D|matrici della diagonalizzazione`,
            tex: r`A^k=PD^kP^{-1}` }
        ]
      },
      {
        id: 'norme', title: T('Norme', 'Norms'),
        items: [
          { title: T('Norme vettoriali', 'Vector norms'),
            vars: r`x|vettore; x_i|componenti; \Vert x\Vert _1, \Vert x\Vert _2, \Vert x\Vert _\infty|norma 1, euclidea, del massimo`,
            tex: r`\|x\|_1=\sum|x_i|,\qquad \|x\|_2=\sqrt{\sum x_i^2},\qquad \|x\|_\infty=\max|x_i|` },
          { title: T('Norme matriciali', 'Matrix norms'),
            vars: r`A|matrice; a_{ij}|elementi; \sigma_{\max}|massimo valore singolare; \lambda_{\max}|massimo autovalore; \Vert A\Vert _F|norma di Frobenius; \operatorname{tr}|traccia`,
            tex: [r`\|A\|_1=\max_j\sum_i|a_{ij}|,\qquad \|A\|_\infty=\max_i\sum_j|a_{ij}|`,
                  r`\|A\|_2=\sigma_{\max}(A)=\sqrt{\lambda_{\max}(A^TA)},\qquad \|A\|_F=\sqrt{\operatorname{tr}(A^TA)}`] },
          { title: T('Proprietà', 'Properties'),
            vars: r`A, B|matrici; x|vettore; \Vert \cdot\Vert |norma vettoriale e matriciale compatibili`,
            tex: r`\|Ax\|\le\|A\|\,\|x\|,\qquad \|AB\|\le\|A\|\,\|B\|` }
        ]
      },
      {
        id: 'fattorizzazioni', title: T('Fattorizzazioni e minimi quadrati', 'Factorisations and least squares'),
        items: [
          { title: T('Fattorizzazione LU', 'LU factorisation'),
            vars: r`P|matrice di permutazione (pivoting); A|matrice quadrata; L, U|fattori triangolare inferiore e superiore`,
            tex: r`PA=LU,\qquad L\ \text{triang. inferiore (diag. 1)},\ U\ \text{triang. superiore}` },
          { title: T('Fattorizzazione QR', 'QR factorisation'),
            vars: r`A|matrice; Q|matrice con colonne ortonormali; R|matrice triangolare superiore`,
            tex: r`A=QR,\qquad Q^TQ=I,\ R\ \text{triang. superiore}` },
          { title: T('Cholesky', 'Cholesky'),
            vars: r`A|matrice simmetrica definita positiva; L|matrice triangolare inferiore`,
            tex: r`A=A^T>0\ \Rightarrow\ A=LL^T` },
          { title: T('Decomposizione ai valori singolari (SVD)', 'Singular value decomposition'),
            vars: r`A|matrice $m\times n$; U, V|matrici ortogonali; \Sigma|matrice diagonale dei valori singolari; \sigma_i|valori singolari ($\ge0$); \operatorname{rk}A|rango`,
            tex: r`A=U\Sigma V^T,\qquad \sigma_i=\sqrt{\lambda_i(A^TA)},\qquad \operatorname{rk}A=\#\{\sigma_i>0\}` },
          { title: T('Numero di condizionamento', 'Condition number'),
            vars: r`\kappa(A)|numero di condizionamento; \sigma_{\max}, \sigma_{\min}|massimo e minimo valore singolare`,
            tex: r`\kappa(A)=\|A\|\,\|A^{-1}\|=\frac{\sigma_{\max}}{\sigma_{\min}}` },
          { title: T('Pseudoinversa', 'Pseudoinverse'),
            vars: r`A^+|pseudoinversa (Moore-Penrose); U, \Sigma, V|fattori della SVD; \Sigma^+|inversa dei valori singolari non nulli`,
            tex: r`A^+=V\Sigma^+U^T,\qquad A^+=(A^TA)^{-1}A^T\ \ (\text{colonne indipendenti})` },
          { title: T('Minimi quadrati', 'Least squares'),
            vars: r`A|matrice dei dati; b|vettore delle osservazioni; x|soluzione ai minimi quadrati; A^TAx=A^Tb|equazioni normali`,
            tex: r`\min_x\|Ax-b\|_2\ \Rightarrow\ A^TAx=A^Tb,\qquad x=A^+b` },
          { title: T('Proiettore ortogonale', 'Orthogonal projector'),
            vars: r`P|proiettore sullo spazio generato dalle colonne di $A$; A|matrice a colonne indipendenti`,
            tex: r`P=A(A^TA)^{-1}A^T,\qquad P^2=P=P^T` }
        ]
      },
      {
        id: 'forme-quadratiche', title: T('Forme quadratiche e gradienti', 'Quadratic forms and gradients'),
        items: [
          { title: T('Forma quadratica', 'Quadratic form'),
            vars: r`q(x)|forma quadratica; A|matrice simmetrica; \lambda_{\min}, \lambda_{\max}|minimo e massimo autovalore; x^TAx/x^Tx|rapporto di Rayleigh`,
            tex: r`q(x)=x^TAx,\quad A=A^T:\qquad \lambda_{\min}\le\frac{x^TAx}{x^Tx}\le\lambda_{\max}`,
            note: T('Rapporto di Rayleigh.', 'Rayleigh quotient.') },
          { title: T('Segno di una forma quadratica', 'Definiteness'),
            vars: r`A|matrice simmetrica; \lambda_i|autovalori; A>0|definita positiva`,
            tex: r`A>0\iff\lambda_i>0\ \forall i\iff\text{minori principali di testa}>0` },
          { title: T('Gradienti matriciali utili', 'Useful matrix gradients'),
            vars: r`a|vettore costante; x|vettore variabile; A|matrice; b|vettore costante; \nabla_x|gradiente rispetto a $x$`,
            tex: r`\nabla_x(a^Tx)=a,\quad \nabla_x(x^TAx)=(A+A^T)x,\quad \nabla_x\|Ax-b\|^2=2A^T(Ax-b)` }
        ]
      },
      {
        id: 'matrici-altro', title: T('Altre formule utili', 'Other useful results'),
        items: [
          { title: T('Traccia', 'Trace'),
            vars: r`A, B|matrici (prodotti definiti); \operatorname{tr}|traccia`,
            tex: r`\operatorname{tr}(AB)=\operatorname{tr}(BA),\qquad \operatorname{tr}(A+B)=\operatorname{tr}A+\operatorname{tr}B` },
          { title: T('Determinante a blocchi (Schur)', 'Block determinant (Schur)'),
            vars: r`A, B, C, D|blocchi della matrice (con $A$ invertibile); D-CA^{-1}B|complemento di Schur`,
            tex: r`\det\begin{pmatrix}A&B\\C&D\end{pmatrix}=\det A\cdot\det(D-CA^{-1}B)` },
          { title: T('Inversa a blocchi triangolare', 'Block-triangular inverse'),
            vars: r`A, D|blocchi diagonali invertibili; B|blocco fuori diagonale`,
            tex: r`\begin{pmatrix}A&B\\0&D\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}BD^{-1}\\0&D^{-1}\end{pmatrix}` },
          { title: T('Sherman-Morrison', 'Sherman-Morrison'),
            vars: r`A|matrice invertibile; u, v|vettori colonna; uv^T|matrice di rango 1`,
            tex: r`(A+uv^T)^{-1}=A^{-1}-\frac{A^{-1}uv^TA^{-1}}{1+v^TA^{-1}u}` },
          { title: T('Blocco di Jordan', 'Jordan block'),
            vars: r`J_m(\lambda)|blocco di Jordan di dimensione $m$; \lambda|autovalore; N|matrice nilpotente (uni sulla sopradiagonale); k|esponente; \binom ki|coefficiente binomiale`,
            tex: r`J_m(\lambda)=\lambda I+N,\quad N^m=0,\qquad J^k=\sum_{i=0}^{m-1}\binom ki\lambda^{k-i}N^i` }
        ]
      }
    ]
  });
})();
