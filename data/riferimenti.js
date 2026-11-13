(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'riferimenti', area: 'ref', order: 10, icon: 'bi-bookmark-star',
    title: T('Costanti, unità e tabelle', 'Constants, units & tables'),
    sections: [
      {
        id: 'costanti-fis', title: T('Costanti fisiche', 'Physical constants'),
        items: [
          { title: T('Velocità della luce', 'Speed of light'),
            vars: r`c|velocità della luce nel vuoto`,
            tex: r`c=2.998\times10^{8}\ \mathrm{m/s}` },
          { title: T('Gravità', 'Gravity'),
            vars: r`g|accelerazione di gravità; G|costante di gravitazione universale`,
            tex: r`g=9.81\ \mathrm{m/s^2},\qquad G=6.674\times10^{-11}\ \mathrm{N\,m^2/kg^2}` },
          { title: T('Costanti elettromagnetiche', 'Electromagnetic constants'),
            vars: r`\varepsilon_0|permittività del vuoto; \mu_0|permeabilità del vuoto`,
            tex: r`\varepsilon_0=8.854\times10^{-12}\ \mathrm{F/m},\qquad \mu_0=4\pi\times10^{-7}\ \mathrm{H/m}` },
          { title: T('Carica e massa dell\'elettrone', 'Electron charge and mass'),
            vars: r`e|carica elementare; m_e|massa dell'elettrone`,
            tex: r`e=1.602\times10^{-19}\ \mathrm C,\qquad m_e=9.109\times10^{-31}\ \mathrm{kg}` },
          { title: T('Termodinamica', 'Thermodynamics'),
            vars: r`k_B|costante di Boltzmann; N_A|numero di Avogadro; R|costante dei gas`,
            tex: r`k_B=1.381\times10^{-23}\ \mathrm{J/K},\quad N_A=6.022\times10^{23}\ \mathrm{mol^{-1}},\quad R=8.314\ \mathrm{J/(mol\,K)}` },
          { title: T('Costante di Planck', 'Planck constant'),
            vars: r`h|costante di Planck`,
            tex: r`h=6.626\times10^{-34}\ \mathrm{J\,s}` }
        ]
      },
      {
        id: 'costanti-mat', title: T('Costanti matematiche', 'Mathematical constants'),
        items: [
          { title: T('Valori', 'Values'),
            tex: r`\pi\approx3.14159,\quad e\approx2.71828,\quad \sqrt2\approx1.41421,\quad \sqrt3\approx1.73205` },
          { title: T('Logaritmi e sezione aurea', 'Logarithms and golden ratio'),
            tex: r`\ln2\approx0.6931,\quad \ln10\approx2.3026,\quad \log_{10}2\approx0.3010,\quad \varphi=\frac{1+\sqrt5}{2}\approx1.618` },
          { title: T('Angoli notevoli', 'Special angles'),
            tex: r`\begin{array}{c|ccccc}\theta&0&30^\circ&45^\circ&60^\circ&90^\circ\\\hline\sin&0&\frac12&\frac{\sqrt2}{2}&\frac{\sqrt3}{2}&1\\\cos&1&\frac{\sqrt3}{2}&\frac{\sqrt2}{2}&\frac12&0\\\tan&0&\frac{\sqrt3}{3}&1&\sqrt3&\infty\end{array}` }
        ]
      },
      {
        id: 'unita', title: T('Unità SI e prefissi', 'SI units and prefixes'),
        items: [
          { title: T('Prefissi', 'Prefixes'),
            tex: [r`\mathrm{T}=10^{12},\ \mathrm G=10^9,\ \mathrm M=10^6,\ \mathrm k=10^3,\ \mathrm h=10^2,\ \mathrm{da}=10`,
                  r`\mathrm d=10^{-1},\ \mathrm c=10^{-2},\ \mathrm m=10^{-3},\ \mu=10^{-6},\ \mathrm n=10^{-9},\ \mathrm p=10^{-12},\ \mathrm f=10^{-15}`] },
          { title: T('Unità meccaniche', 'Mechanical units'),
            tex: r`\mathrm N=\mathrm{kg\,m/s^2},\quad \mathrm{Pa}=\mathrm{N/m^2},\quad \mathrm J=\mathrm{N\,m},\quad \mathrm W=\mathrm{J/s}` },
          { title: T('Unità elettriche', 'Electrical units'),
            tex: r`\mathrm C=\mathrm{A\,s},\quad \mathrm V=\mathrm{W/A},\quad \Omega=\mathrm{V/A},\quad \mathrm S=\Omega^{-1},\quad \mathrm F=\mathrm{C/V},\quad \mathrm H=\mathrm{Wb/A}` },
          { title: T('Unità magnetiche', 'Magnetic units'),
            tex: r`\mathrm{Wb}=\mathrm{V\,s},\qquad \mathrm T=\mathrm{Wb/m^2}` },
          { title: T('Conversioni utili', 'Useful conversions'),
            tex: [r`\omega=2\pi f,\qquad 1\ \mathrm{rpm}=\frac{2\pi}{60}\ \mathrm{rad/s}`,
                  r`1\ \mathrm{kWh}=3.6\ \mathrm{MJ},\qquad 1\ \mathrm{cal}=4.186\ \mathrm J,\qquad T[\mathrm K]=T[^\circ\mathrm C]+273.15`] }
        ]
      },
      {
        id: 'db', title: T('Decibel', 'Decibels'),
        items: [
          { title: T('Definizione', 'Definition'),
            vars: r`G_{dB}|guadagno in decibel; P_1, P_2|potenze; V_1, V_2|tensioni (o ampiezze)`,
            tex: r`G_{dB}=10\log_{10}\frac{P_2}{P_1}=20\log_{10}\frac{V_2}{V_1}` },
          { title: T('Valori da ricordare', 'Values to remember'),
            tex: r`3\ \mathrm{dB}\leftrightarrow\sqrt2\ (\text{ampiezza}),\quad 6\ \mathrm{dB}\leftrightarrow2,\quad 20\ \mathrm{dB}\leftrightarrow10,\quad 40\ \mathrm{dB}\leftrightarrow100` },
          { title: T('Livelli assoluti', 'Absolute levels'),
            vars: r`dBm|decibel riferiti a $1\,\mathrm{mW}$; dBV|decibel riferiti a $1\,\mathrm V$`,
            tex: r`\mathrm{dBm}=10\log_{10}\frac{P}{1\ \mathrm{mW}},\qquad \mathrm{dBV}=20\log_{10}\frac{V}{1\ \mathrm V}` },
          { title: T('Pendenze di Bode', 'Bode slopes'),
            tex: r`20\ \mathrm{dB/dec}\approx6\ \mathrm{dB/ott}` }
        ]
      },
      {
        id: 'greco', title: T('Alfabeto greco', 'Greek alphabet'),
        items: [
          { title: T('Minuscole', 'Lowercase'),
            tex: r`\alpha\ \beta\ \gamma\ \delta\ \varepsilon\ \zeta\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi\ o\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \varphi\ \chi\ \psi\ \omega` },
          { title: T('Maiuscole', 'Uppercase'),
            tex: r`\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega` }
        ]
      }
    ]
  });
})();
