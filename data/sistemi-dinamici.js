(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'sistemi-dinamici', area: 'sys', order: 58, icon: 'bi-activity',
    title: T('Teoria dei sistemi dinamici', 'Dynamical systems theory'),
    sections: [
      {
        id: 'def-sd-stato', title: T('Sistemi e stabilità: definizioni e teoremi', 'Systems and stability: definitions and theorems'),
        items: [
          { kind: 'def', title: T('Sistema dinamico e variabili di stato', 'Dynamical system and state variables'),
            text: "Un sistema dinamico a tempo continuo è descritto da un'equazione di stato e da una trasformazione di uscita; a tempo discreto l'equazione di stato è alle differenze. Lo stato riassume la storia passata: noti lo stato iniziale e l'ingresso, l'evoluzione futura è univocamente determinata.",
            vars: r`\mathbf x|stato; \mathbf u|ingresso; \mathbf y|uscita; \mathbf f|dinamica; \mathbf h|trasformazione di uscita; k|istante discreto`,
            tex: [r`\dot{\mathbf x}=\mathbf f(\mathbf x,\mathbf u),\qquad\mathbf y=\mathbf h(\mathbf x,\mathbf u)`, r`\mathbf x(k+1)=\mathbf f(\mathbf x(k),\mathbf u(k))`] },
          { kind: 'def', title: T('Sistema lineare tempo-invariante', 'Linear time-invariant system'),
            text: "Il sistema è lineare se la dinamica e l'uscita sono funzioni lineari di stato e ingresso (vale la sovrapposizione degli effetti) ed è tempo-invariante se le matrici $A,B,C,D$ non dipendono dal tempo: traslando nel tempo l'ingresso, l'uscita trasla della stessa quantità." },
          { kind: 'def', title: T('Movimento libero e forzato', 'Free and forced motion'),
            text: "Per un sistema lineare l'uscita è la somma del movimento libero, prodotto dallo stato iniziale con ingresso nullo, e del movimento forzato, prodotto dall'ingresso con stato iniziale nullo.",
            vars: r`x_0|stato iniziale; A, B, C, D|matrici del sistema; \tau|istante dell'ingresso`,
            tex: r`y(t)=\underbrace{Ce^{At}x_0}_{\text{libero}}+\underbrace{\int_0^tCe^{A(t-\tau)}Bu(\tau)\,d\tau+Du(t)}_{\text{forzato}}` },
          { kind: 'def', title: T('Stato di equilibrio', 'Equilibrium state'),
            text: "Uno stato $\\bar{\\mathbf x}$ è di equilibrio per l'ingresso costante $\\bar{\\mathbf u}$ se $\\mathbf f(\\bar{\\mathbf x},\\bar{\\mathbf u})=\\mathbf 0$ (a tempo discreto, $\\mathbf f(\\bar{\\mathbf x},\\bar{\\mathbf u})=\\bar{\\mathbf x}$): partendo da $\\bar{\\mathbf x}$ lo stato rimane costante.",
            vars: r`\bar{\mathbf x}|stato di equilibrio; \bar{\mathbf u}|ingresso costante`,
            tex: r`\mathbf f(\bar{\mathbf x},\bar{\mathbf u})=\mathbf 0` },
          { kind: 'def', title: T('Stabilità secondo Lyapunov', 'Lyapunov stability'),
            text: "L'equilibrio $\\bar{\\mathbf x}$ è stabile se per ogni $\\varepsilon>0$ esiste $\\delta>0$ tale che $\\lVert\\mathbf x(0)-\\bar{\\mathbf x}\\rVert<\\delta$ implica $\\lVert\\mathbf x(t)-\\bar{\\mathbf x}\\rVert<\\varepsilon$ per ogni $t\\ge0$. È asintoticamente stabile se inoltre $\\mathbf x(t)\\to\\bar{\\mathbf x}$; è instabile se non è stabile.",
            vars: r`\mathbf x_0|stato iniziale; \bar{\mathbf x}|equilibrio; \varepsilon, \delta|tolleranze`,
            tex: r`\forall\varepsilon\ \exists\delta:\ \lVert\mathbf x_0-\bar{\mathbf x}\rVert<\delta\Rightarrow\lVert\mathbf x(t)-\bar{\mathbf x}\rVert<\varepsilon\ \ \forall t\ge0` },
          { kind: 'thm', title: T('Stabilità dei sistemi lineari a tempo continuo', 'Stability of continuous-time linear systems'),
            text: "Il sistema $\\dot{\\mathbf x}=A\\mathbf x$ è asintoticamente stabile se e solo se tutti gli autovalori di $A$ hanno parte reale negativa. È stabile (non asintoticamente) se e solo se hanno parte reale non positiva e quelli con parte reale nulla hanno molteplicità algebrica uguale alla geometrica. È instabile in tutti gli altri casi.",
            vars: r`A|matrice di stato; \lambda_i(A)|autovalori; \operatorname{Re}|parte reale`,
            tex: r`\text{asintoticamente stabile}\iff\operatorname{Re}\lambda_i(A)<0\ \ \forall i` },
          { kind: 'thm', title: T('Stabilità dei sistemi lineari a tempo discreto', 'Stability of discrete-time linear systems'),
            text: "Il sistema $\\mathbf x(k+1)=A\\mathbf x(k)$ è asintoticamente stabile se e solo se tutti gli autovalori di $A$ hanno modulo minore di $1$. È stabile se e solo se hanno modulo non superiore a $1$ e quelli di modulo $1$ hanno molteplicità algebrica uguale alla geometrica.",
            vars: r`A|matrice di stato; \lambda_i(A)|autovalori`,
            tex: r`\text{asintoticamente stabile}\iff\lvert\lambda_i(A)\rvert<1\ \ \forall i` },
          { kind: 'thm', title: T('Primo metodo di Lyapunov (linearizzazione)', 'Lyapunov first method (linearisation)'),
            text: "Sia $\\bar{\\mathbf x}$ un equilibrio di $\\dot{\\mathbf x}=\\mathbf f(\\mathbf x)$ con $\\mathbf f\\in C^1$ e sia $A$ la Jacobiana di $\\mathbf f$ in $\\bar{\\mathbf x}$. Se tutti gli autovalori di $A$ hanno parte reale negativa, $\\bar{\\mathbf x}$ è localmente asintoticamente stabile; se almeno uno ha parte reale positiva, è instabile; se ce ne sono con parte reale nulla e nessuno positivo, il metodo non decide.",
            vars: r`A|Jacobiana nell'equilibrio; \lambda_i(A)|autovalori`,
            tex: r`A=\frac{\partial\mathbf f}{\partial\mathbf x}\bigg|_{\bar{\mathbf x}},\qquad \operatorname{Re}\lambda_i(A)<0\ \forall i\ \Rightarrow\ \bar{\mathbf x}\ \text{localmente asint. stabile}` },
          { kind: 'thm', title: T('Secondo metodo di Lyapunov', 'Lyapunov second method'),
            text: "Sia $V$ di classe $C^1$, definita positiva in un intorno di $\\bar{\\mathbf x}$ ($V(\\bar{\\mathbf x})=0$, $V>0$ altrove). Se $\\dot V=\\nabla V\\cdot\\mathbf f\\le0$ lungo le traiettorie, l'equilibrio è stabile; se $\\dot V<0$ per $\\mathbf x\\ne\\bar{\\mathbf x}$ è asintoticamente stabile. Se ciò vale ovunque e $V$ è radialmente illimitata, l'equilibrio è globalmente asintoticamente stabile.",
            vars: r`V|funzione di Lyapunov; \dot V|derivata di $V$ lungo le traiettorie`,
            tex: r`V>0,\ \ \dot V=\nabla V\cdot\mathbf f(\mathbf x)<0\ \Rightarrow\ \bar{\mathbf x}\ \text{asintoticamente stabile}` },
          { kind: 'thm', title: T('Principio di invarianza di LaSalle', 'LaSalle invariance principle'),
            text: "Se $V$ è definita positiva, radialmente illimitata e $\\dot V\\le0$, ogni traiettoria converge al più grande insieme invariante contenuto in $\\{\\mathbf x:\\dot V(\\mathbf x)=0\\}$. Se tale insieme contiene il solo equilibrio, questo è globalmente asintoticamente stabile." },
          { kind: 'thm', title: T('Equazione di Lyapunov', 'Lyapunov equation'),
            text: "Una matrice $A$ è di Hurwitz (tutti gli autovalori con parte reale negativa) se e solo se per ogni matrice $Q$ simmetrica definita positiva l'equazione di Lyapunov ha un'unica soluzione $P$ simmetrica definita positiva; allora $V=\\mathbf x^TP\\mathbf x$ è una funzione di Lyapunov per $\\dot{\\mathbf x}=A\\mathbf x$.",
            vars: r`A|matrice di stato; P|soluzione; Q|matrice definita positiva scelta`,
            tex: r`A^TP+PA=-Q,\quad Q>0:\qquad A\ \text{Hurwitz}\iff\exists!\ P=P^T>0` },
          { kind: 'thm', title: T('Stabilità BIBO', 'BIBO stability'),
            text: "Un sistema è BIBO stabile se a ogni ingresso limitato corrisponde un'uscita limitata (con stato iniziale nullo). Per un sistema LTI ciò equivale a $\\int_0^\\infty|g(t)|\\,dt<\\infty$ ($g$ risposta impulsiva), ossia ai poli della funzione di trasferimento tutti con parte reale negativa.",
            vars: r`g(t)|risposta impulsiva; G(s)|funzione di trasferimento; p_i|poli`,
            tex: r`\text{BIBO}\iff\int_0^\infty|g(t)|\,dt<\infty\iff\operatorname{Re}p_i<0\ \ \forall\text{ polo }p_i\text{ di }G(s)` },
          { kind: 'prop', title: T('Stabilità interna ed esterna', 'Internal and external stability'),
            text: "La stabilità asintotica (interna) implica la stabilità BIBO (esterna). Il viceversa è falso: se il sistema ha una parte instabile non raggiungibile o non osservabile, l'autovalore instabile non compare tra i poli di $G(s)$ e il sistema può essere BIBO stabile pur essendo instabile." }
        ]
      },
      {
        id: 'def-sd-struct', title: T('Raggiungibilità, osservabilità e controllo: teoremi', 'Reachability, observability and control: theorems'),
        items: [
          { kind: 'def', title: T('Raggiungibilità e controllabilità', 'Reachability and controllability'),
            text: "Uno stato $\\mathbf x_1$ è raggiungibile se esiste un ingresso che porta lo stato da $\\mathbf 0$ a $\\mathbf x_1$ in tempo finito; il sistema è completamente raggiungibile se lo sono tutti gli stati. È controllabile se si può portare a $\\mathbf 0$ qualunque stato iniziale. Per sistemi lineari a tempo continuo i due concetti coincidono." },
          { kind: 'thm', title: T('Criterio di Kalman per la raggiungibilità', 'Kalman reachability criterion'),
            text: "Il sistema $(A,B)$ di ordine $n$ è completamente raggiungibile se e solo se la matrice di raggiungibilità ha rango $n$.",
            vars: r`\mathcal R|matrice di raggiungibilità; A, B|matrici del sistema; n|ordine`,
            tex: r`\mathcal R=\begin{bmatrix}B&AB&\cdots&A^{n-1}B\end{bmatrix},\qquad \operatorname{rk}\mathcal R=n` },
          { kind: 'def', title: T('Osservabilità', 'Observability'),
            text: "Un sistema è osservabile se lo stato iniziale è determinabile in modo unico dalla conoscenza dell'ingresso e dell'uscita su un intervallo finito. Uno stato non osservabile è indistinguibile dallo stato nullo." },
          { kind: 'thm', title: T('Criterio di Kalman per l\'osservabilità', 'Kalman observability criterion'),
            text: "Il sistema $(A,C)$ di ordine $n$ è completamente osservabile se e solo se la matrice di osservabilità ha rango $n$.",
            vars: r`\mathcal O|matrice di osservabilità; A, C|matrici del sistema; n|ordine`,
            tex: r`\mathcal O=\begin{bmatrix}C\\CA\\\vdots\\CA^{n-1}\end{bmatrix},\qquad \operatorname{rk}\mathcal O=n` },
          { kind: 'thm', title: T('Dualità raggiungibilità-osservabilità', 'Reachability-observability duality'),
            text: "Il sistema $(A,B,C)$ è osservabile se e solo se il sistema duale $(A^T,C^T)$ è raggiungibile; è raggiungibile se e solo se $(A^T,B^T)$ è osservabile." },
          { kind: 'thm', title: T('Test di Popov-Belevitch-Hautus (PBH)', 'Popov-Belevitch-Hautus test'),
            text: "Il sistema è raggiungibile se e solo se $\\operatorname{rk}[\\lambda I-A\\ \\ B]=n$ per ogni autovalore $\\lambda$ di $A$ (non esiste un autovettore sinistro di $A$ ortogonale alle colonne di $B$). È osservabile se e solo se $\\operatorname{rk}\\begin{bmatrix}\\lambda I-A\\\\C\\end{bmatrix}=n$ per ogni $\\lambda$.",
            vars: r`\lambda|autovalore di $A$; \sigma(A)|spettro di $A$; n|ordine`,
            tex: r`\text{raggiungibile}\iff\operatorname{rk}[\,\lambda I-A\ \ B\,]=n\ \ \forall\lambda\in\sigma(A)` },
          { kind: 'thm', title: T('Decomposizione di Kalman', 'Kalman decomposition'),
            text: "Con un opportuno cambio di coordinate lo stato si separa in quattro parti: raggiungibile e osservabile, raggiungibile non osservabile, non raggiungibile osservabile, non raggiungibile non osservabile. La funzione di trasferimento dipende solo dalla parte raggiungibile e osservabile." },
          { kind: 'thm', title: T('Allocazione dei poli', 'Pole placement'),
            text: "Se $(A,B)$ è raggiungibile, per ogni insieme di $n$ numeri reali o a coppie complesse coniugate esiste $K$ tale che gli autovalori di $A-BK$ siano quelli assegnati (formula di Ackermann nel caso con un solo ingresso). Se non è raggiungibile, gli autovalori della parte non raggiungibile non si possono modificare.",
            vars: r`K|guadagno di retroazione dallo stato; \mu_i|autovalori desiderati`,
            tex: r`\sigma(A-BK)=\{\mu_1,\dots,\mu_n\}\ \text{assegnati}` },
          { kind: 'thm', title: T('Osservatore di stato', 'State observer'),
            text: "Se $(A,C)$ è osservabile, per ogni insieme di autovalori esiste $L$ tale che gli autovalori di $A-LC$ siano quelli assegnati. L'errore di stima $\\mathbf e=\\mathbf x-\\hat{\\mathbf x}$ evolve secondo $\\dot{\\mathbf e}=(A-LC)\\mathbf e$ e tende a zero.",
            vars: r`\hat{\mathbf x}|stima dello stato; L|guadagno dell'osservatore; \mathbf e|errore di stima`,
            tex: r`\dot{\hat{\mathbf x}}=A\hat{\mathbf x}+B\mathbf u+L(\mathbf y-C\hat{\mathbf x}),\qquad \dot{\mathbf e}=(A-LC)\,\mathbf e` },
          { kind: 'thm', title: T('Principio di separazione', 'Separation principle'),
            text: "Progettando la retroazione dallo stato stimato $\\mathbf u=-K\\hat{\\mathbf x}$, gli autovalori del sistema complessivo sono l'unione di quelli di $A-BK$ (controllore) e di $A-LC$ (osservatore): i due progetti si possono fare separatamente.",
            vars: r`A_{cl}|matrice del sistema controllato con osservatore; K, L|guadagni di controllo e di osservazione`,
            tex: r`\sigma(A_{cl})=\sigma(A-BK)\cup\sigma(A-LC)` },
          { kind: 'thm', title: T('Realizzazione minima', 'Minimal realisation'),
            text: "Una realizzazione in variabili di stato di una funzione di trasferimento $G(s)$ ha ordine minimo se e solo se è raggiungibile e osservabile; il suo ordine è il grado del denominatore di $G(s)$ in forma irriducibile. Due realizzazioni minime sono legate da un cambio di coordinate." },
          { kind: 'thm', title: T('Teorema di Poincaré-Bendixson', 'Poincaré-Bendixson theorem'),
            text: "Per un sistema autonomo piano, se una traiettoria rimane in un insieme chiuso e limitato che non contiene equilibri, allora la traiettoria converge a un'orbita periodica (ciclo limite)." }
        ]
      },
      {
        id: 'stato', title: T('Rappresentazione di stato', 'State-space representation'),
        items: [
          { title: T('Sistema lineare tempo-invariante (TC)', 'LTI system (continuous time)'),
            vars: r`x(t)\in\mathbb R^n|stato; u(t)|ingresso; y(t)|uscita; A|matrice di stato (dinamica); B|matrice degli ingressi; C|matrice delle uscite; D|matrice di trasmissione diretta`,
            tex: r`\dot x(t)=Ax(t)+Bu(t),\qquad y(t)=Cx(t)+Du(t)` },
          { title: T('Sistema lineare (TD)', 'LTI system (discrete time)'),
            vars: r`x(k)|stato al passo $k$; u(k)|ingresso; y(k)|uscita; A, B, C, D|matrici di stato, ingresso, uscita, trasmissione diretta`,
            tex: r`x(k+1)=Ax(k)+Bu(k),\qquad y(k)=Cx(k)+Du(k)` },
          { title: T('Sistema non lineare', 'Nonlinear system'),
            vars: r`x|stato; u|ingresso; y|uscita; f|funzione che descrive la dinamica; h|funzione d'uscita`,
            tex: r`\dot x=f(x,u),\qquad y=h(x,u)` },
          { title: T('Formula di Lagrange (TC)', 'Variation of constants (CT)'),
            vars: r`x_0|stato iniziale; e^{At}|matrice di transizione di stato; \tau|variabile di integrazione (istante dell'ingresso)`,
            tex: r`x(t)=e^{At}x_0+\int_0^te^{A(t-\tau)}Bu(\tau)\,d\tau` },
          { title: T('Formula di Lagrange (TD)', 'Variation of constants (DT)'),
            vars: r`x_0|stato iniziale; A^k|matrice di transizione; i|indice dell'istante dell'ingresso`,
            tex: r`x(k)=A^kx_0+\sum_{i=0}^{k-1}A^{\,k-1-i}\,B\,u(i)` },
          { title: T('Funzione di trasferimento', 'Transfer function'),
            vars: r`G(s), G(z)|funzione di trasferimento (TC e TD); s|variabile di Laplace; z|variabile della trasformata Z; I|identità`,
            tex: r`G(s)=C(sI-A)^{-1}B+D,\qquad G(z)=C(zI-A)^{-1}B+D` }
        ]
      },
      {
        id: 'esponenziale', title: T('Esponenziale di matrice e modi', 'Matrix exponential and modes'),
        items: [
          { title: T('Definizione', 'Definition'),
            vars: r`A|matrice quadrata; t|tempo; e^{At}|esponenziale di matrice`,
            tex: r`e^{At}=\sum_{k=0}^{\infty}\frac{A^kt^k}{k!}=I+At+\frac{A^2t^2}{2}+\dots` },
          { title: T('Con la trasformata di Laplace', 'Via Laplace transform'),
            vars: r`\mathcal L^{-1}|antitrasformata di Laplace; s|variabile di Laplace; (sI-A)^{-1}|risolvente`,
            tex: r`e^{At}=\mathcal L^{-1}\left\{(sI-A)^{-1}\right\}` },
          { title: T('Matrice diagonalizzabile', 'Diagonalisable matrix'),
            vars: r`P|matrice degli autovettori; D|matrice diagonale degli autovalori $\lambda_i$`,
            tex: r`A=PDP^{-1}\ \Rightarrow\ e^{At}=P\,e^{Dt}P^{-1}=P\operatorname{diag}\!\left(e^{\lambda_1t},\dots,e^{\lambda_nt}\right)P^{-1}` },
          { title: T('Proprietà', 'Properties'),
            vars: r`A|matrice quadrata; t|tempo; I|identità`,
            tex: r`\frac{d}{dt}e^{At}=Ae^{At},\quad e^{A\cdot0}=I,\quad (e^{At})^{-1}=e^{-At},\quad e^{A(t+s)}=e^{At}e^{As}` },
          { title: T('Decomposizione modale', 'Modal decomposition'),
            vars: r`\lambda_i|autovalori; \mathbf v_i|autovettori destri; \mathbf w_i^T|autovettori sinistri (righe di $P^{-1}$); x_0|stato iniziale`,
            tex: r`x(t)=\sum_{i=1}^{n}e^{\lambda_it}\,\mathbf v_i\,\mathbf w_i^{T}x_0`,
            note: T('$\\mathbf v_i$ autovettori destri, $\\mathbf w_i^T$ sinistri (con $\\mathbf w_i^T\\mathbf v_j=\\delta_{ij}$).', '$\\mathbf v_i$ right eigenvectors, $\\mathbf w_i^T$ left ones (with $\\mathbf w_i^T\\mathbf v_j=\\delta_{ij}$).') },
          { title: T('Modi con autovalore complesso', 'Complex eigenvalue modes'),
            vars: r`\sigma|parte reale (smorzamento); \omega|parte immaginaria (pulsazione); \varphi|fase`,
            tex: r`\lambda=\sigma\pm j\omega\ \Rightarrow\ \text{modo }e^{\sigma t}\cos(\omega t+\varphi)` },
          { title: T('Autovalore con molteplicità', 'Repeated eigenvalue'),
            vars: r`\lambda|autovalore; m|dimensione del blocco di Jordan; t|tempo`,
            tex: r`\text{blocco di Jordan di dimensione }m:\quad e^{\lambda t},\ te^{\lambda t},\dots,t^{m-1}e^{\lambda t}` }
        ]
      },
      {
        id: 'equilibrio', title: T('Equilibri e linearizzazione', 'Equilibria and linearisation'),
        items: [
          { title: T('Punto di equilibrio', 'Equilibrium point'),
            vars: r`\bar x, \bar u|stato e ingresso di equilibrio; f|campo vettoriale della dinamica`,
            tex: r`f(\bar x,\bar u)=0` },
          { title: T('Linearizzazione', 'Linearisation'),
            vars: r`A, B|matrici del sistema linearizzato (Jacobiane di $f$); (\bar x,\bar u)|punto di equilibrio; \delta x, \delta u|scostamenti dall'equilibrio`,
            tex: r`A=\left.\frac{\partial f}{\partial x}\right|_{(\bar x,\bar u)},\quad B=\left.\frac{\partial f}{\partial u}\right|_{(\bar x,\bar u)},\quad \delta\dot x=A\,\delta x+B\,\delta u` },
          { title: T('Equilibrio di un sistema lineare', 'Equilibrium of a linear system'),
            vars: r`\bar x, \bar y|stato e uscita di equilibrio; \bar u|ingresso costante; A, B, C, D|matrici del sistema`,
            tex: r`\bar x=-A^{-1}B\bar u\quad(\det A\ne0),\qquad \bar y=\big(D-CA^{-1}B\big)\bar u=G(0)\,\bar u` }
        ]
      },
      {
        id: 'strutturali', title: T('Raggiungibilità e osservabilità', 'Reachability and observability'),
        items: [
          { title: T('Matrice di raggiungibilità', 'Reachability matrix'),
            vars: r`\mathcal R|matrice di raggiungibilità; A, B|matrici del sistema; n|ordine del sistema`,
            tex: r`\mathcal R=\begin{bmatrix}B&AB&A^2B&\cdots&A^{n-1}B\end{bmatrix},\qquad \text{raggiungibile}\iff\operatorname{rk}\mathcal R=n` },
          { title: T('Matrice di osservabilità', 'Observability matrix'),
            vars: r`\mathcal O|matrice di osservabilità; A, C|matrici del sistema; n|ordine`,
            tex: r`\mathcal O=\begin{bmatrix}C\\CA\\\vdots\\CA^{n-1}\end{bmatrix},\qquad \text{osservabile}\iff\operatorname{rk}\mathcal O=n` },
          { title: T('Gramiano di raggiungibilità', 'Reachability Gramian'),
            vars: r`W_r(T)|gramiano di raggiungibilità sull'intervallo $[0,T]$; A, B|matrici del sistema`,
            tex: r`W_r(T)=\int_0^Te^{A\tau}BB^Te^{A^T\tau}d\tau` }
        ]
      },
      {
        id: 'controllo-stato', title: T('Controllo nello spazio di stato', 'State-space control'),
        items: [
          { title: T('Retroazione dallo stato', 'State feedback'),
            vars: r`K|guadagno di retroazione; v|nuovo ingresso (riferimento); A-BK|matrice a ciclo chiuso`,
            tex: r`u=-Kx+v\ \Rightarrow\ \dot x=(A-BK)x+Bv`,
            note: T('Se la coppia $(A,B)$ è raggiungibile, gli autovalori di $A-BK$ sono assegnabili a piacere.', 'If $(A,B)$ is reachable, the eigenvalues of $A-BK$ can be placed arbitrarily.') },
          { title: T('Formula di Ackermann', 'Ackermann\'s formula'),
            vars: r`K|guadagno di retroazione; \mathcal R|matrice di raggiungibilità; \varphi|polinomio caratteristico desiderato; \varphi(A)|polinomio valutato in $A$`,
            tex: r`K=\begin{bmatrix}0&\cdots&0&1\end{bmatrix}\mathcal R^{-1}\,\varphi(A),\qquad \varphi(\lambda)=\prod_i(\lambda-\lambda_i^{\text{des}})`,
            note: T('Caso a singolo ingresso.', 'Single-input case.') },
          { title: T('Osservatore di Luenberger', 'Luenberger observer'),
            vars: r`\hat x|stima dello stato; L|guadagno dell'osservatore; e=x-\hat x|errore di stima`,
            tex: r`\dot{\hat x}=A\hat x+Bu+L(y-C\hat x),\qquad \dot e=(A-LC)\,e`,
            note: T('Se $(A,C)$ è osservabile, gli autovalori di $A-LC$ sono assegnabili.', 'If $(A,C)$ is observable, the eigenvalues of $A-LC$ can be placed.') },
          { title: T('LQR', 'LQR'),
            vars: r`J|funzionale di costo; Q|peso sullo stato ($Q\ge0$); R|peso sul controllo ($R>0$); P|soluzione dell'equazione di Riccati; u|controllo ottimo`,
            tex: [r`J=\int_0^\infty\left(x^TQx+u^TRu\right)dt,\qquad u=-R^{-1}B^TP\,x`,
                  r`A^TP+PA-PBR^{-1}B^TP+Q=0`],
            note: T('Seconda riga: equazione algebrica di Riccati.', 'Second line: algebraic Riccati equation.') }
        ]
      },
      {
        id: 'risposta', title: T('Risposta e funzione di trasferimento', 'Response and transfer function'),
        items: [
          { title: T('Risposta impulsiva', 'Impulse response'),
            vars: r`g(t)|risposta impulsiva; \delta(t)|impulso di Dirac; \mathcal L|trasformata di Laplace`,
            tex: r`g(t)=Ce^{At}B+D\,\delta(t),\qquad G(s)=\mathcal L\{g(t)\}` },
          { title: T('Risposta forzata e libera', 'Forced and free response'),
            vars: r`x_0|stato iniziale; g|risposta impulsiva; *|convoluzione`,
            tex: r`y(t)=\underbrace{Ce^{At}x_0}_{\text{libera}}+\underbrace{(g*u)(t)}_{\text{forzata}}` },
          { title: T('Guadagno statico', 'Static gain'),
            vars: r`G(0)|guadagno in continua; A, B, C, D|matrici del sistema`,
            tex: r`G(0)=D-CA^{-1}B\quad(\det A\ne0)` },
          { title: T('Poli e autovalori', 'Poles and eigenvalues'),
            vars: r`G(s)|funzione di trasferimento; A|matrice di stato`,
            tex: r`\{\text{poli di }G(s)\}\subseteq\{\text{autovalori di }A\},\quad\text{con uguaglianza se il sistema è minimo (raggiungibile e osservabile)}` },
          { title: T('Polinomio caratteristico', 'Characteristic polynomial'),
            vars: r`p(s)|polinomio caratteristico; a_i|coefficienti; n|ordine; s|variabile complessa`,
            tex: r`p(s)=\det(sI-A)=s^n+a_{n-1}s^{n-1}+\dots+a_0` }
        ]
      },
      {
        id: 'realizzazione', title: T('Forme canoniche e realizzazione', 'Canonical forms and realisation'),
        items: [
          { title: T('Forma canonica di controllo (ordine 3)', 'Controllable canonical form (order 3)'),
            vars: r`G(s)|funzione di trasferimento; a_i|coefficienti del denominatore; b_i|coefficienti del numeratore; A, B, C|matrici della realizzazione`,
            tex: [r`G(s)=\frac{b_2s^2+b_1s+b_0}{s^3+a_2s^2+a_1s+a_0}`,
                  r`A=\begin{pmatrix}0&1&0\\0&0&1\\-a_0&-a_1&-a_2\end{pmatrix},\ B=\begin{pmatrix}0\\0\\1\end{pmatrix},\ C=\begin{pmatrix}b_0&b_1&b_2\end{pmatrix}`] },
          { title: T('Forma canonica di osservazione', 'Observable canonical form'),
            vars: r`A_c, B_c, C_c|matrici della forma di controllo; A_o, B_o, C_o|matrici della forma di osservazione`,
            tex: r`A_o=A_c^T,\quad B_o=C_c^T,\quad C_o=B_c^T` },
          { title: T('Cambio di coordinate', 'Change of coordinates'),
            vars: r`T|matrice di cambio di base (invertibile); \tilde x|nuove coordinate di stato; \tilde A, \tilde B, \tilde C, \tilde D|matrici nelle nuove coordinate`,
            tex: r`\tilde x=Tx:\quad \tilde A=TAT^{-1},\ \tilde B=TB,\ \tilde C=CT^{-1},\ \tilde D=D` },
          { title: T('Invarianti', 'Invariants'),
            vars: r`G(s)|funzione di trasferimento; \mathcal R, \mathcal O|matrici di raggiungibilità e osservabilità`,
            tex: r`\text{autovalori, }G(s),\ \mathrm{rk}\,\mathcal R,\ \mathrm{rk}\,\mathcal O\ \text{non cambiano con }T` }
        ]
      },
      {
        id: 'piano-fase', title: T('Sistemi del secondo ordine: piano delle fasi', 'Second-order systems: phase plane'),
        items: [
          { title: T('Classificazione degli equilibri', 'Equilibrium classification'),
            vars: r`\tau|traccia di $A$ (somma degli autovalori); \delta|determinante di $A$ (prodotto degli autovalori); \Delta|discriminante di $\lambda^2-\tau\lambda+\delta$`,
            tex: [r`\tau=\operatorname{tr}A,\qquad \delta=\det A,\qquad \Delta=\tau^2-4\delta`,
                  r`\delta<0:\ \text{sella};\quad \delta>0,\ \tau<0:\ \text{stabile (nodo se }\Delta\ge0,\ \text{fuoco se }\Delta<0)`,
                  r`\delta>0,\ \tau>0:\ \text{instabile};\quad \tau=0,\ \delta>0:\ \text{centro}`] }
        ]
      },
      {
        id: 'discretizzazione', title: T('Discretizzazione esatta', 'Exact discretisation'),
        items: [
          { title: T('Campionamento con ZOH', 'Sampling with ZOH'),
            vars: r`A_d, B_d|matrici del sistema discretizzato; T|periodo di campionamento; A, B|matrici del sistema continuo; \sigma|variabile di integrazione`,
            tex: r`A_d=e^{AT},\qquad B_d=\int_0^Te^{A\sigma}d\sigma\,B=A^{-1}(A_d-I)B\ \ (\det A\ne0)` },
          { title: T('Autovalori', 'Eigenvalues'),
            vars: r`\lambda|autovalore continuo; \lambda_d|autovalore discretizzato; T|periodo di campionamento`,
            tex: r`\lambda_d=e^{\lambda T}\quad\Rightarrow\quad\operatorname{Re}\lambda<0\iff|\lambda_d|<1` },
          { title: T('Approssimazione di Eulero', 'Euler approximation'),
            vars: r`A_d, B_d|matrici discretizzate; A, B|matrici del sistema continuo; T|periodo di campionamento`,
            tex: r`A_d\approx I+AT,\qquad B_d\approx BT` }
        ]
      },
      {
        id: 'nonlineari', title: T('Esempi classici di sistemi non lineari', 'Classical nonlinear systems'),
        items: [
          { title: T('Pendolo', 'Pendulum'),
            vars: r`\theta|angolo dalla verticale; g|accelerazione di gravità; \ell|lunghezza del pendolo; k|intero`,
            tex: r`\ddot\theta+\frac g\ell\sin\theta=0:\quad \text{equilibri }\theta=k\pi;\ \ \text{linearizzato in }0:\ \ \ddot\theta+\frac g\ell\theta=0` },
          { title: T('Logistica', 'Logistic'),
            vars: r`x|popolazione; r|tasso di crescita; K|capacità portante`,
            tex: r`\dot x=rx\left(1-\frac xK\right):\quad \text{equilibri }0\ (\text{instabile}),\ K\ (\text{stabile})` },
          { title: T('Lotka-Volterra', 'Lotka-Volterra'),
            vars: r`x|prede; y|predatori; \alpha|crescita delle prede; \beta|tasso di predazione; \delta|crescita dei predatori per predazione; \gamma|mortalità dei predatori`,
            tex: r`\dot x=\alpha x-\beta xy,\ \ \dot y=\delta xy-\gamma y:\quad \text{equilibrio non banale }\left(\frac\gamma\delta,\frac\alpha\beta\right)` },
          { title: T('Van der Pol', 'Van der Pol'),
            vars: r`x|posizione; \mu|parametro di non linearità e smorzamento`,
            tex: r`\ddot x-\mu(1-x^2)\dot x+x=0\quad(\text{ciclo limite per }\mu>0)` }
        ]
      },

      {
        id: 'ritratti', title: T('Ritratti di fase (grafici)', 'Phase portraits (graphs)'),
        items: [
          { title: T('Nodo stabile', 'Stable node'),
            vars: r`\lambda_1,\lambda_2|autovalori; c_1, c_2|costanti dalle condizioni iniziali; v_1, v_2|autovettori`,
            tex: r`\lambda_1,\lambda_2<0\ \text{reali}:\quad x=c_1e^{\lambda_1t}v_1+c_2e^{\lambda_2t}v_2`,
            fig: (function () {
              const c = [[1.8, 0.8], [1.8, -0.8], [-1.8, 0.8], [-1.8, -0.8], [0.4, 1.9], [-0.4, -1.9]];
              return FORMULARI.fig.plot({ x: [-2, 2], y: [-2, 2], xl: 'x₁', yl: 'x₂',
                curves: c.map((k) => ({ xy: (t) => [k[0] * Math.exp(-t), k[1] * Math.exp(-3 * t)], t: [0, 3.5], cls: 'fg-c1' })), pts: [[0, 0]] });
            })() },
          { title: T('Sella (instabile)', 'Saddle (unstable)'),
            vars: r`\lambda_1,\lambda_2|autovalori (uno negativo, uno positivo)`,
            tex: r`\lambda_1<0<\lambda_2:\quad \text{ritratto a iperboli}`,
            fig: (function () {
              const cv = [];
              [0.4, 1.0, 2.0].forEach((a) => [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach((q) =>
                cv.push({ xy: (t) => [q[0] * a * Math.exp(-t), q[1] * 0.5 * a * Math.exp(t)], t: [-2, 1.5], cls: 'fg-c2' })));
              return FORMULARI.fig.plot({ x: [-2, 2], y: [-2, 2], xl: 'x₁', yl: 'x₂', curves: cv, pts: [[0, 0]] });
            })() },
          { title: T('Fuoco stabile', 'Stable focus'),
            vars: r`\sigma|parte reale dell'autovalore; \omega|parte immaginaria`,
            tex: r`\lambda=\sigma\pm j\omega,\ \sigma<0:\quad x\sim e^{\sigma t}\left(\cos\omega t,\ \sin\omega t\right)`,
            fig: FORMULARI.fig.plot({ x: [-2, 2], y: [-2, 2], xl: 'x₁', yl: 'x₂',
              curves: [{ xy: (t) => [1.8 * Math.exp(-0.25 * t) * Math.cos(t), 1.8 * Math.exp(-0.25 * t) * Math.sin(t)], t: [0, 14], cls: 'fg-c3' }], pts: [[0, 0]] }) },
          { title: T('Centro (marginalmente stabile)', 'Centre (marginally stable)'),
            vars: r`\omega|pulsazione di rotazione; x_1, x_2|variabili di stato`,
            tex: r`\lambda=\pm j\omega:\quad x_1^2+x_2^2=\text{cost.}\ (\text{orbite chiuse})`,
            fig: FORMULARI.fig.plot({ x: [-2, 2], y: [-2, 2], xl: 'x₁', yl: 'x₂',
              curves: [0.5, 1, 1.6].map((r0) => ({ xy: (t) => [r0 * Math.cos(t), -r0 * Math.sin(t)], t: [0, 6.3], cls: 'fg-c1' })), pts: [[0, 0]] }) }
        ]
      }
    ]
  });
})();
