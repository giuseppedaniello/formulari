(function () {
  const r = String.raw;
  const T = (it, en) => ({ it, en });

  FORMULARI.register({
    id: 'geometria-solida', area: 'math', order: 25, icon: 'bi-box',
    title: T('Geometria solida', 'Solid geometry'),
    sections: [
      {
        id: 'def-gs', title: T('Definizioni e teoremi', 'Definitions and theorems'),
        items: [
          { kind: 'def', title: T('Poliedro', 'Polyhedron'),
            text: "Un poliedro è un solido limitato da un numero finito di poligoni, le facce, a due a due condivisi lungo gli spigoli. È convesso se ogni segmento che congiunge due suoi punti sta nel poliedro. Prismi e piramidi sono poliedri." },
          { kind: 'thm', title: T('Poliedri regolari (solidi platonici)', 'Regular polyhedra (Platonic solids)'),
            text: "Esistono esattamente cinque poliedri regolari convessi, con facce poligoni regolari tutti uguali e lo stesso numero di facce in ogni vertice: tetraedro (4 facce triangolari), cubo (6 quadrate), ottaedro (8 triangolari), dodecaedro (12 pentagonali), icosaedro (20 triangolari)." },
          { kind: 'thm', title: T('Relazione di Eulero', 'Euler formula'),
            text: "In ogni poliedro convesso il numero di vertici meno il numero di spigoli più il numero di facce è uguale a $2$. La relazione vale anche per i poliedri omeomorfi a una sfera.",
            vars: r`V|numero di vertici; S|numero di spigoli; F|numero di facce`,
            tex: r`V-S+F=2` },
          { kind: 'thm', title: T('Principio di Cavalieri', 'Cavalieri principle'),
            text: "Due solidi compresi tra due piani paralleli, tali che ogni piano parallelo ai due dati li seghi in sezioni di uguale area, hanno lo stesso volume." },
          { kind: 'thm', title: T('Teorema delle tre perpendicolari', 'Three perpendiculars theorem'),
            text: "Sia $r$ una retta di un piano $\\alpha$, $P$ un punto fuori da $\\alpha$ con proiezione ortogonale $H$ su $\\alpha$, e $K$ il punto di $r$ tale che $HK\\perp r$. Allora $PK\\perp r$." },
          { kind: 'thm', title: T('Solidi simili', 'Similar solids'),
            text: "Se due solidi sono simili con rapporto di similitudine $k$, il rapporto delle superfici è $k^2$ e il rapporto dei volumi è $k^3$.",
            vars: r`k|rapporto di similitudine; S, S'|superfici; V, V'|volumi`,
            tex: r`\frac{S'}{S}=k^2,\qquad \frac{V'}{V}=k^3` }
        ]
      },
      {
        id: 'poliedri', title: T('Poliedri', 'Polyhedra'),
        items: [
          { title: T('Prisma', 'Prism'),
            vars: r`V|volume; A_b|area di base; h|altezza; S_{\text{lat}}|superficie laterale; S_{\text{tot}}|superficie totale; P_b|perimetro di base`,
            fig: FORMULARI.fig.wire3d({
  V: [[0,0,0],[1.6,0,0],[0.5,1.4,0],[0,0,1.5],[1.6,0,1.5],[0.5,1.4,1.5]],
  E: [[1,2],[3,4],[4,5],[5,3],[1,4],[2,5]],
  H: [[0,1],[0,2],[0,3]],
  D: [[[0.7,0.45,0],[0.7,0.45,1.5],'fg-c2']],
  labels: [{ p: [0.7, 0.45, 0.75], t: 'h', dx: 6, dy: 4, cls: 't2' }, { p: [0.7, 0.45, 0], t: 'A_b', dx: -4, dy: 16, cls: 't1' }]
}),
            tex: r`V=A_b\,h,\qquad S_{\text{lat}}=P_b\,h,\qquad S_{\text{tot}}=S_{\text{lat}}+2A_b` },
          { title: T('Parallelepipedo rettangolo', 'Rectangular box'),
            vars: r`a, b, c|spigoli; V|volume; S|superficie; d|diagonale`,
            fig: FORMULARI.fig.wire3d({
  V: [[0,0,0],[1.6,0,0],[1.6,1,0],[0,1,0],[0,0,1],[1.6,0,1],[1.6,1,1],[0,1,1]],
  E: [[1,2],[2,3],[4,5],[5,6],[6,7],[7,4],[1,5],[2,6],[3,7]],
  H: [[0,1],[0,3],[0,4]],
  D: [[[0,0,0],[1.6,1,1],'fg-c2']],
  labels: [{ p: [1.6, 0.5, 0], t: 'b', dx: 8, dy: 14, cls: 't2' }, { p: [0.8, 0, 0], t: 'a', dx: -14, dy: 16, cls: 't1' }, { p: [1.6, 1, 0.5], t: 'c', dx: 8, dy: 4, cls: 't3' }, { p: [0.8, 0.5, 0.5], t: 'd', dx: 6, dy: -8, cls: 't2' }]
}),
            tex: [r`V=abc,\qquad S=2(ab+bc+ca)`, r`d=\sqrt{a^2+b^2+c^2}`] },
          { title: T('Cubo', 'Cube'),
            vars: r`l|spigolo; V|volume; S|superficie; d|diagonale`,
            fig: FORMULARI.fig.wire3d({
  V: [[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],
  E: [[1,2],[2,3],[4,5],[5,6],[6,7],[7,4],[1,5],[2,6],[3,7]],
  H: [[0,1],[0,3],[0,4]],
  D: [[[0,0,0],[1,1,1],'fg-c2']],
  labels: [{ p: [1, 0.5, 0], t: 'l', dx: 8, dy: 14, cls: 't1' }, { p: [0.5, 0.5, 0.5], t: 'd', dx: 6, dy: -6, cls: 't2' }]
}),
            tex: r`V=l^3,\qquad S=6l^2,\qquad d=l\sqrt3` },
          { title: T('Piramide', 'Pyramid'),
            vars: r`V|volume; A_b|area di base; h|altezza; S_{\text{lat}}|superficie laterale; P_b|perimetro di base; a|apotema (altezza delle facce laterali)`,
            fig: FORMULARI.fig.wire3d({
  V: [[0,0,0],[1.6,0,0],[1.6,1.6,0],[0,1.6,0],[0.8,0.8,1.8]],
  E: [[1,2],[2,3],[1,4],[2,4],[3,4]],
  H: [[0,1],[0,3],[0,4]],
  D: [[[0.8,0.8,0],[0.8,0.8,1.8],'fg-c2'], [[0.8,1.6,0],[0.8,0.8,1.8],'fg-c3']],
  labels: [{ p: [0.8, 0.8, 0.9], t: 'h', dx: 6, dy: 2, cls: 't2' }, { p: [0.8, 1.2, 0.9], t: 'a', dx: 8, dy: 6, cls: 't3' }, { p: [0.8, 0.8, 0], t: 'A_b', dx: -4, dy: 14, cls: 't1' }]
}),
            tex: r`V=\frac13A_b\,h,\qquad S_{\text{lat}}=\frac{P_b\,a}{2}`,
            note: T('Piramide retta regolare, $a$ apotema.', 'Regular right pyramid, $a$ slant height.') }
        ]
      },
      {
        id: 'rotondi', title: T('Solidi di rotazione', 'Solids of revolution'),
        items: [
          { title: T('Cilindro', 'Cylinder'),
            vars: r`V|volume; r|raggio di base; h|altezza; S_{\text{lat}}, S_{\text{tot}}|superficie laterale e totale`,
            fig: FORMULARI.fig.svg(`
  <path class="fg-fill" d="M65 40 L65 140 A55 14 0 0 0 175 140 L175 40 Z"/><ellipse class="fg-line" cx="120" cy="40" rx="55" ry="14"/>
  <path class="fg-line" d="M65 140 A55 14 0 0 1 175 140" style="stroke-dasharray:4 3"/>
  <path class="fg-dash" d="M120 40 L175 40"/><path class="fg-dash" d="M185 40 L185 140"/>
  <text x="144" y="36" class="t2">r</text><text x="190" y="96" class="t1">h</text>`),
            tex: [r`V=\pi r^2h`, r`S_{\text{lat}}=2\pi rh,\qquad S_{\text{tot}}=2\pi r(r+h)`] },
          { title: T('Cono', 'Cone'),
            vars: r`V|volume; r|raggio di base; h|altezza; a|apotema (generatrice); S_{\text{lat}}, S_{\text{tot}}|superficie laterale e totale`,
            fig: FORMULARI.fig.svg(`
  <path class="fg-fill" d="M120 20 L50 150 A70 14 0 0 0 190 150 Z"/><path class="fg-line" d="M50 150 A70 14 0 0 1 190 150" style="stroke-dasharray:4 3"/>
  <path class="fg-dash" d="M120 20 L120 150 L190 150"/>
  <text x="124" y="90" class="t1">h</text><text x="150" y="168" class="t2">r</text><text x="166" y="80" class="t3">a</text>`),
            tex: [r`V=\frac13\pi r^2h,\qquad a=\sqrt{r^2+h^2}`, r`S_{\text{lat}}=\pi ra,\qquad S_{\text{tot}}=\pi r(r+a)`] },
          { title: T('Tronco di cono', 'Frustum'),
            vars: r`V|volume; R, r|raggi delle basi maggiore e minore; h|altezza`,
            fig: FORMULARI.fig.mesh3d({ P: (u, v) => [(1 - 0.5 * v) * Math.cos(u), (1 - 0.5 * v) * Math.sin(u), 1.4 * v], u: [0, 2 * Math.PI], v: [0, 1], nu: 20, nv: 1, ax: 1.5, ay: 1.5, az: 1.7,
  labels: [{ p: [1, 0, 0], t: 'R', cls: 't1' }, { p: [0.5, 0, 1.4], t: 'r', cls: 't2' }, { p: [0, 0, 0.7], t: 'h', cls: 't3' }] }),
            tex: r`V=\frac{\pi h}{3}\left(R^2+Rr+r^2\right)` },
          { title: T('Sfera', 'Sphere'),
            vars: r`V|volume; S|superficie; r|raggio`,
            fig: FORMULARI.fig.mesh3d({ P: (u, v) => [Math.sin(v) * Math.cos(u), Math.sin(v) * Math.sin(u), Math.cos(v)], u: [0, 2 * Math.PI], v: [0, Math.PI], nu: 18, nv: 10, ax: 1.5, ay: 1.5, az: 1.5,
  labels: [{ p: [1, 0, 0], t: 'r', cls: 't2' }] }),
            tex: r`V=\frac43\pi r^3,\qquad S=4\pi r^2` },
          { title: T('Calotta sferica', 'Spherical cap'),
            vars: r`V|volume; S_{\text{calotta}}|superficie; r|raggio della sfera; h|altezza della calotta`,
            fig: FORMULARI.fig.mesh3d({ P: (u, v) => [Math.sin(v) * Math.cos(u), Math.sin(v) * Math.sin(u), Math.cos(v)], u: [0, 2 * Math.PI], v: [0, 1.0], nu: 18, nv: 6, ax: 1.4, ay: 1.4, az: 1.3,
  labels: [{ p: [0, 0, 1], t: 'h', cls: 't2' }] }),
            tex: r`V=\frac{\pi h^2}{3}(3r-h),\qquad S_{\text{calotta}}=2\pi rh` },
          { title: T('Toro', 'Torus'),
            vars: r`V|volume; S|superficie; R|raggio maggiore (centro del tubo); r|raggio del tubo`,
            fig: FORMULARI.fig.mesh3d({ P: (u, v) => [(1.2 + 0.45 * Math.cos(v)) * Math.cos(u), (1.2 + 0.45 * Math.cos(v)) * Math.sin(u), 0.45 * Math.sin(v)], u: [0, 2 * Math.PI], v: [0, 2 * Math.PI], nu: 24, nv: 10, ax: 2, ay: 2, az: 0.9,
  labels: [{ p: [1.2, 0, 0], t: 'R', cls: 't1' }, { p: [1.65, 0, 0], t: 'r', cls: 't2' }] }),
            tex: r`V=2\pi^2Rr^2,\qquad S=4\pi^2Rr` },
          { title: T('Teoremi di Guldino', 'Pappus\'s theorems'),
            vars: r`S|superficie di rotazione; V|volume di rotazione; d_G|distanza del baricentro dall'asse; \ell|lunghezza della curva generatrice; A|area della figura piana`,
            tex: [r`S=2\pi\,d_G\,\ell`, r`V=2\pi\,d_G\,A`],
            note: T('$d_G$ distanza del baricentro dall\'asse, $\\ell$ lunghezza della curva, $A$ area della figura.', '$d_G$ distance of the centroid from the axis, $\\ell$ curve length, $A$ area of the figure.') }
        ]
      }
    ]
  });
})();
