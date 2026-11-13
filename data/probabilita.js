(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'probabilita', area: 'methods', order: 30, icon: 'bi-dice-5',
    title: T('Probabilità e statistica', 'Probability & statistics'),
    sections: [
      {
        id: 'def-pr', title: T('Definizioni e teoremi', 'Definitions and theorems'),
        items: [
          { kind: 'def', title: T('Spazio di probabilità e assiomi di Kolmogorov', 'Probability space and Kolmogorov axioms'),
            text: "Uno spazio di probabilità è una terna $(\\Omega,\\mathcal F,P)$: $\\Omega$ è l'insieme dei risultati possibili, $\\mathcal F$ una famiglia di sottoinsiemi (eventi) chiusa rispetto a complementare e unioni numerabili, $P$ una misura con $P(\\Omega)=1$, $P(A)\\ge0$ e $\\sigma$-additiva sugli eventi disgiunti.",
            vars: r`\Omega|spazio campionario; \mathcal F|eventi; P|probabilità; A_i|eventi a due a due disgiunti`,
            tex: r`P(A)\ge0,\qquad P(\Omega)=1,\qquad P\Big(\bigcup_iA_i\Big)=\sum_iP(A_i)\ \ (A_i\ \text{disgiunti})` },
          { kind: 'def', title: T('Probabilità condizionata', 'Conditional probability'),
            text: "La probabilità di $A$ condizionata a $B$, con $P(B)>0$, è la probabilità che si verifichi $A$ sapendo che si è verificato $B$.",
            vars: r`A, B|eventi; P(A\cap B)|probabilità che si verifichino entrambi`,
            tex: r`P(A\mid B)=\frac{P(A\cap B)}{P(B)}` },
          { kind: 'def', title: T('Indipendenza di eventi', 'Independence of events'),
            text: "Due eventi sono indipendenti se la probabilità dell'intersezione è il prodotto delle probabilità, ossia se il verificarsi di uno non cambia la probabilità dell'altro. Eventi incompatibili con probabilità positiva non sono indipendenti.",
            vars: r`A, B|eventi`,
            tex: r`P(A\cap B)=P(A)\,P(B)` },
          { kind: 'thm', title: T('Teorema della probabilità totale', 'Law of total probability'),
            text: "Se $A_1,\\dots,A_n$ è una partizione dello spazio campionario con $P(A_i)>0$, la probabilità di un evento $B$ si ottiene pesando le probabilità condizionate con quelle delle parti della partizione.",
            vars: r`A_i|partizione di $\Omega$; B|evento di interesse`,
            tex: r`P(B)=\sum_{i=1}^nP(B\mid A_i)\,P(A_i)` },
          { kind: 'thm', title: T('Teorema di Bayes', 'Bayes theorem'),
            text: "Con la stessa partizione e $P(B)>0$, la probabilità a posteriori di $A_i$ dato $B$ si ottiene dalla verosimiglianza e dalla probabilità a priori.",
            vars: r`P(A_i)|probabilità a priori; P(B\mid A_i)|verosimiglianza; P(A_i\mid B)|probabilità a posteriori`,
            tex: r`P(A_i\mid B)=\frac{P(B\mid A_i)\,P(A_i)}{\sum_jP(B\mid A_j)\,P(A_j)}` },
          { kind: 'def', title: T('Variabile aleatoria e funzione di ripartizione', 'Random variable and distribution function'),
            text: "Una variabile aleatoria $X$ è una funzione dallo spazio campionario ai numeri reali. La sua funzione di ripartizione $F(x)=P(X\\le x)$ è crescente, continua da destra, con limiti $0$ e $1$ agli estremi. Se è derivabile, la derivata è la densità di probabilità.",
            vars: r`X|variabile aleatoria; F|funzione di ripartizione; f|densità`,
            tex: r`F(x)=P(X\le x),\qquad f(x)=\frac{dF}{dx},\qquad \int_{-\infty}^{\infty}f(x)\,dx=1` },
          { kind: 'def', title: T('Valore atteso e varianza', 'Expected value and variance'),
            text: "Il valore atteso è la media pesata dei valori possibili; la varianza misura la dispersione attorno ad esso e la deviazione standard è la sua radice quadrata.",
            vars: r`E[X]|valore atteso; \operatorname{Var}(X)|varianza; x_i, p_i|valori e probabilità (caso discreto); f|densità`,
            tex: [r`E[X]=\sum_ix_ip_i=\int_{-\infty}^{\infty}x\,f(x)\,dx`, r`\operatorname{Var}(X)=E\big[(X-E[X])^2\big]=E[X^2]-E[X]^2`] },
          { kind: 'thm', title: T('Linearità del valore atteso e varianza della somma', 'Linearity of expectation and variance of a sum'),
            text: "Il valore atteso è lineare per qualunque coppia di variabili. La varianza della somma è la somma delle varianze più il doppio della covarianza; se le variabili sono indipendenti (o solo incorrelate) è la somma delle varianze.",
            vars: r`X, Y|variabili aleatorie; a, b|costanti; \operatorname{Cov}|covarianza`,
            tex: r`E[aX+bY]=aE[X]+bE[Y],\qquad \operatorname{Var}(X+Y)=\operatorname{Var}X+\operatorname{Var}Y+2\operatorname{Cov}(X,Y)` },
          { kind: 'def', title: T('Covarianza e correlazione', 'Covariance and correlation'),
            text: "La covarianza misura la variazione congiunta di due variabili; il coefficiente di correlazione è la covarianza normalizzata e vale tra $-1$ e $1$. Variabili indipendenti sono incorrelate, ma il viceversa è falso.",
            vars: r`\rho_{XY}|coefficiente di correlazione; \sigma_X, \sigma_Y|deviazioni standard`,
            tex: r`\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y],\qquad \rho_{XY}=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}\in[-1,1]` },
          { kind: 'thm', title: T('Disuguaglianza di Markov', 'Markov inequality'),
            text: "Per una variabile non negativa $X$ e ogni $a>0$, la probabilità che superi $a$ non supera il valore atteso diviso $a$.",
            vars: r`X|variabile aleatoria non negativa; a|soglia positiva`,
            tex: r`P(X\ge a)\le\frac{E[X]}{a}` },
          { kind: 'thm', title: T('Disuguaglianza di Chebyshev', 'Chebyshev inequality'),
            text: "Per una variabile con media $\\mu$ e varianza $\\sigma^2$ finite e ogni $k>0$, la probabilità di scostarsi dalla media di almeno $k$ è limitata da $\\sigma^2/k^2$.",
            vars: r`\mu, \sigma^2|media e varianza di $X$; k|scostamento`,
            tex: r`P(|X-\mu|\ge k)\le\frac{\sigma^2}{k^2}` },
          { kind: 'thm', title: T('Legge dei grandi numeri', 'Law of large numbers'),
            text: "Se $X_1,X_2,\\dots$ sono variabili indipendenti e identicamente distribuite con media $\\mu$ finita, la media campionaria converge a $\\mu$ (in probabilità nella forma debole, quasi certamente nella forma forte).",
            vars: r`\bar X_n|media di $n$ osservazioni; \mu|media comune`,
            tex: r`\bar X_n=\frac1n\sum_{i=1}^nX_i\ \longrightarrow\ \mu\quad(n\to\infty)` },
          { kind: 'thm', title: T('Teorema del limite centrale', 'Central limit theorem'),
            text: "Se $X_1,X_2,\\dots$ sono indipendenti e identicamente distribuite con media $\\mu$ e varianza $\\sigma^2$ finite e positive, la media campionaria standardizzata converge in distribuzione a una normale standard. Per $n$ grande, $\\bar X_n$ è approssimativamente normale con media $\\mu$ e varianza $\\sigma^2/n$.",
            vars: r`\bar X_n|media campionaria; \mu, \sigma|media e deviazione standard; n|numero di osservazioni; \mathcal N(0,1)|normale standard`,
            tex: r`\frac{\bar X_n-\mu}{\sigma/\sqrt n}\ \xrightarrow{d}\ \mathcal N(0,1)` },
          { kind: 'def', title: T('Stimatore e correttezza', 'Estimator and unbiasedness'),
            text: "Uno stimatore è una funzione dei dati usata per stimare un parametro $\\theta$. È corretto (non distorto) se il suo valore atteso è $\\theta$, consistente se converge a $\\theta$ al crescere dei dati. La media campionaria è stimatore corretto di $\\mu$; la varianza campionaria con divisore $n-1$ è corretta per $\\sigma^2$.",
            vars: r`\hat\theta|stimatore; \theta|parametro da stimare`,
            tex: r`E[\hat\theta]=\theta\ \ (\text{corretto}),\qquad \hat\theta_n\to\theta\ \ (\text{consistente})` },
          { kind: 'def', title: T('Intervallo di confidenza', 'Confidence interval'),
            text: "Un intervallo di confidenza di livello $1-\\alpha$ per un parametro è un intervallo calcolato dai dati che, ripetendo l'esperimento, contiene il vero valore del parametro in una frazione $1-\\alpha$ dei casi (non è la probabilità che il parametro stia nell'intervallo osservato)." },
          { kind: 'def', title: T('Test di ipotesi', 'Hypothesis test'),
            text: "Un test confronta l'ipotesi nulla $H_0$ con l'alternativa $H_1$. L'errore di prima specie è rifiutare $H_0$ quando è vera (probabilità $\\alpha$, livello di significatività); l'errore di seconda specie è non rifiutarla quando è falsa. Il p-value è la probabilità, sotto $H_0$, di un risultato almeno estremo quanto quello osservato." },
          { kind: 'def', title: T('Processo stocastico stazionario', 'Stationary stochastic process'),
            text: "Un processo $x(t)$ è stazionario in senso lato se la media è costante e l'autocorrelazione dipende solo dalla differenza dei tempi. Allora ha densità spettrale di potenza $S_x(\\omega)$, trasformata di Fourier dell'autocorrelazione (teorema di Wiener-Khinchin).",
            vars: r`R_x(\tau)|autocorrelazione; S_x(\omega)|densità spettrale di potenza; \tau|ritardo`,
            tex: r`R_x(\tau)=E[x(t)\,x(t+\tau)],\qquad S_x(\omega)=\int_{-\infty}^\infty R_x(\tau)\,e^{-j\omega\tau}d\tau` }
        ]
      },
      {
        id: 'prob', title: T('Probabilità', 'Probability'),
        items: [
          { title: T('Unione e complementare', 'Union and complement'),
            vars: r`A, B|eventi; \bar A|complementare di $A$; P|probabilità`,
            tex: r`P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(\bar A)=1-P(A)` }
        ]
      },
      {
        id: 'va', title: T('Variabili aleatorie', 'Random variables'),
        items: [
          { title: T('Valore atteso e varianza', 'Expectation and variance'),
            vars: r`X|variabile aleatoria; x_i, p_i|valori e probabilità (caso discreto); f|densità (caso continuo); \mathrm{Var}|varianza; E|valore atteso`,
            tex: [r`E[X]=\sum_ix_ip_i=\int xf(x)\,dx`, r`\mathrm{Var}(X)=E[X^2]-E[X]^2,\qquad \sigma=\sqrt{\mathrm{Var}(X)}`] },
          { title: T('Trasformazioni lineari', 'Linear transformations'),
            vars: r`X|variabile aleatoria; a, b|costanti`,
            tex: r`E[aX+b]=aE[X]+b,\qquad \mathrm{Var}(aX+b)=a^2\mathrm{Var}(X)` },
          { title: T('Covarianza e correlazione', 'Covariance and correlation'),
            vars: r`X, Y|variabili aleatorie; \mathrm{Cov}|covarianza; \rho|coefficiente di correlazione ($-1\le\rho\le1$)`,
            tex: [r`\mathrm{Cov}(X,Y)=E[XY]-E[X]E[Y],\qquad \rho=\frac{\mathrm{Cov}(X,Y)}{\sigma_X\sigma_Y}\in[-1,1]`,
                  r`\mathrm{Var}(X+Y)=\mathrm{Var}(X)+\mathrm{Var}(Y)+2\,\mathrm{Cov}(X,Y)`] },
          { title: T('Funzione di ripartizione e densità', 'CDF and PDF'),
            vars: r`F(x)|funzione di ripartizione; f|densità di probabilità; X|variabile aleatoria`,
            tex: r`F(x)=P(X\le x)=\int_{-\infty}^xf(t)\,dt,\qquad f=F'` }
        ]
      },
      {
        id: 'distr', title: T('Distribuzioni', 'Distributions'),
        items: [
          { title: T('Bernoulli', 'Bernoulli'),
            vars: r`p|probabilità di successo; E|valore atteso; \mathrm{Var}|varianza`,
            tex: r`P(X=1)=p:\quad E=p,\ \ \mathrm{Var}=p(1-p)` },
          { title: T('Binomiale', 'Binomial'),
            vars: r`n|numero di prove; p|probabilità di successo; k|numero di successi`,
            fig: (function () {
  const n = 10, p = 0.3, C = (n, k) => { let c = 1; for (let i = 1; i <= k; i++) c = c * (n - k + i) / i; return c; };
  let s = '<line class="fg-axis" x1="24" y1="150" x2="226" y2="150"/><line class="fg-axis" x1="24" y1="150" x2="24" y2="14"/>';
  for (let k = 0; k <= n; k++) {
    const pk = C(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k), h = pk * 420, x = 32 + k * 17;
    s += '<rect class="fg-fill" x="' + x + '" y="' + (150 - h) + '" width="13" height="' + h + '"/><text x="' + (x + 2) + '" y="164">' + k + '</text>';
  }
  return FORMULARI.fig.svg(s + '<text x="30" y="20">P(X=k),  n=10, p=0,3</text>');
})(),
            tex: r`P(X=k)=\binom nkp^k(1-p)^{n-k}:\quad E=np,\ \ \mathrm{Var}=np(1-p)` },
          { title: T('Geometrica', 'Geometric'),
            vars: r`p|probabilità di successo; k|numero della prova del primo successo`,
            tex: r`P(X=k)=(1-p)^{k-1}p:\quad E=\frac1p,\ \ \mathrm{Var}=\frac{1-p}{p^2}` },
          { title: T('Poisson', 'Poisson'),
            vars: r`\lambda|tasso (media degli eventi); k|numero di eventi`,
            tex: r`P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}:\quad E=\mathrm{Var}=\lambda` },
          { title: T('Uniforme continua', 'Continuous uniform'),
            vars: r`a, b|estremi dell'intervallo; E|media; \mathrm{Var}|varianza`,
            tex: r`f=\frac{1}{b-a}\ \ (a\le x\le b):\quad E=\frac{a+b}{2},\ \ \mathrm{Var}=\frac{(b-a)^2}{12}` },
          { title: T('Esponenziale', 'Exponential'),
            vars: r`\lambda|tasso; x|tempo (o variabile); E|media; \mathrm{Var}|varianza`,
            fig: FORMULARI.fig.plot({ x: [0, 4], y: [0, 2.2], xl: 'x', yl: 'f',
  curves: [0.5, 1, 2].map((l, i) => ({ f: (x) => l * Math.exp(-l * x), cls: 'fg-c' + (i + 1) })),
  labels: [{ x: 2.4, y: 0.4, t: 'λ=0,5', cls: 't1' }, { x: 1.2, y: 0.55, t: 'λ=1', cls: 't2' }, { x: 0.6, y: 1.2, t: 'λ=2', cls: 't3' }] }),
            tex: r`f=\lambda e^{-\lambda x}\ (x\ge0):\quad E=\frac1\lambda,\ \ \mathrm{Var}=\frac{1}{\lambda^2},\ \ F=1-e^{-\lambda x}` },
          { title: T('Normale', 'Normal'),
            vars: r`\mu|media; \sigma|deviazione standard; x|variabile`,
            fig: (function () {
  const n = (s) => (x) => Math.exp(-x * x / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI));
  return FORMULARI.fig.plot({ x: [-4, 4], y: [0, 0.9], v: [0], xl: 'x', yl: 'f',
    curves: [{ f: n(0.5), cls: 'fg-c2' }, { f: n(1), cls: 'fg-c1' }, { f: n(2), cls: 'fg-c3' }],
    labels: [{ x: 0.6, y: 0.78, t: 'σ=0,5', cls: 't2' }, { x: 1.2, y: 0.38, t: 'σ=1', cls: 't1' }, { x: 2.1, y: 0.16, t: 'σ=2', cls: 't3' }] });
})(),
            tex: r`f(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}},\qquad Z=\frac{X-\mu}{\sigma}\sim\mathcal N(0,1)` },
          { title: T('Regola 68-95-99,7', '68-95-99.7 rule'),
            vars: r`X|variabile normale; \mu|media; \sigma|deviazione standard`,
            tex: r`P(|X-\mu|<\sigma)\approx0.683,\quad P(|X-\mu|<2\sigma)\approx0.954,\quad P(|X-\mu|<3\sigma)\approx0.997` }
        ]
      },
      {
        id: 'stat', title: T('Statistica', 'Statistics'),
        items: [
          { title: T('Media e varianza campionarie', 'Sample mean and variance'),
            vars: r`x_i|osservazioni; n|numero di osservazioni; \bar x|media campionaria; s^2|varianza campionaria (corretta)`,
            tex: r`\bar x=\frac1n\sum x_i,\qquad s^2=\frac{1}{n-1}\sum(x_i-\bar x)^2` },
          { title: T('Intervallo di confidenza per la media', 'Confidence interval for the mean'),
            vars: r`\bar x|media campionaria; z_{\alpha/2}|quantile della normale standard; \sigma|deviazione standard della popolazione; n|numerosità`,
            tex: r`\bar x\pm z_{\alpha/2}\,\frac{\sigma}{\sqrt n}\ \ (\sigma\ \text{nota}),\qquad \bar x\pm t_{\alpha/2,\,n-1}\frac{s}{\sqrt n}\ \ (\sigma\ \text{ignota})`,
            note: T('Per il 95%: $z_{\\alpha/2}\\approx1{,}96$.', 'For 95%: $z_{\\alpha/2}\\approx1.96$.') },
          { title: T('Regressione lineare ai minimi quadrati', 'Linear regression'),
            vars: r`m|pendenza; q|intercetta; x_i, y_i|dati; \bar x, \bar y|medie; \hat y|valore previsto`,
            tex: r`\hat y=mx+q,\quad m=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2},\quad q=\bar y-m\bar x` },
          { title: T('Coefficiente di correlazione campionario', 'Sample correlation'),
            vars: r`r|coefficiente di correlazione ($-1\le r\le1$); x_i, y_i|dati; \bar x, \bar y|medie`,
            tex: r`r=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sqrt{\sum(x_i-\bar x)^2\sum(y_i-\bar y)^2}}` }
        ]
      },
      {
        id: 'stocastici', title: T('Processi stocastici e segnali', 'Stochastic processes and signals'),
        items: [
          { title: T('Autocorrelazione', 'Autocorrelation'),
            vars: r`R_x(\tau)|autocorrelazione; x(t)|processo stocastico; \tau|ritardo; E|valore atteso`,
            tex: r`R_x(\tau)=E\big[x(t)\,x(t+\tau)\big],\qquad R_x(0)=E[x^2]` },
          { title: T('Rumore bianco', 'White noise'),
            vars: r`R_w(\tau)|autocorrelazione; S_w(\omega)|densità spettrale (piatta); \sigma^2|intensità; \delta|impulso di Dirac`,
            tex: r`R_w(\tau)=\sigma^2\delta(\tau),\qquad S_w(\omega)=\sigma^2` },
          { title: T('Filtraggio lineare', 'Linear filtering'),
            vars: r`S_u, S_y|densità spettrali dell'ingresso e dell'uscita; G(j\omega)|risposta in frequenza del filtro`,
            tex: r`S_y(\omega)=|G(j\omega)|^2\,S_u(\omega),\qquad E[y^2]=\frac1{2\pi}\int S_y\,d\omega` }
        ]
      }
    ]
  });
})();
