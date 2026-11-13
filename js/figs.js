/* Generatore di figure SVG per i formulari.
 *
 * Uso nei file dati:   { title, tex, fig: FORMULARI.fig.plot({...}) }
 * `fig` può essere una stringa SVG (anche scritta a mano) o un array di stringhe (affiancate).
 * Colori: classi CSS .fg-c1 .fg-c2 .fg-c3 (curve), .fg-axis, .fg-dash, .fg-fill (vedi style.css).
 */
(function () {
  const W = 240, H = 180, M = 22;           // dimensioni viewBox e margine
  const f2 = (n) => (Math.round(n * 100) / 100);
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

  /* plot({ x:[xmin,xmax], y:[ymin,ymax],
   *        curves:[{ f:x=>..., cls:'fg-c1' } | { xy:t=>[x,y], t:[a,b], cls }],
   *        h:[y...], v:[x...]            linee tratteggiate
   *        pts:[[x,y]...]                punti
   *        labels:[{x,y,t,dx,dy}]        testi (coordinate dati)
   *        xl:'t', yl:'y'                nomi degli assi
   *        arrows:true                   freccia a metà curva parametrica }) */
  function plot(o) {
    const [x0, x1] = o.x, [y0, y1] = o.y;
    const sx = (x) => M + (x - x0) / (x1 - x0) * (W - 2 * M);
    const sy = (y) => H - M - (y - y0) / (y1 - y0) * (H - 2 * M);
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" xmlns="http://www.w3.org/2000/svg">`;
    // assi
    const ax = (y0 <= 0 && y1 >= 0) ? sy(0) : H - M;
    const ay = (x0 <= 0 && x1 >= 0) ? sx(0) : M;
    s += `<line class="fg-axis" x1="${M - 6}" y1="${f2(ax)}" x2="${W - M + 8}" y2="${f2(ax)}"/>`;
    s += `<line class="fg-axis" x1="${f2(ay)}" y1="${H - M + 6}" x2="${f2(ay)}" y2="${M - 8}"/>`;
    s += `<path class="fg-axis" d="M${W - M + 8} ${f2(ax)}l-5 -3m5 3l-5 3M${f2(ay)} ${M - 8}l-3 5m3 -5l3 5"/>`;
    if (o.xl) s += `<text x="${W - M + 6}" y="${f2(ax) + 14}" text-anchor="end">${esc(o.xl)}</text>`;
    if (o.yl) s += `<text x="${f2(ay) + 6}" y="${M - 8}">${esc(o.yl)}</text>`;
    (o.h || []).forEach((y) => { s += `<line class="fg-dash" x1="${M}" x2="${W - M}" y1="${f2(sy(y))}" y2="${f2(sy(y))}"/>`; });
    (o.v || []).forEach((x) => { s += `<line class="fg-dash" y1="${M}" y2="${H - M}" x1="${f2(sx(x))}" x2="${f2(sx(x))}"/>`; });
    // curve
    (o.curves || []).forEach((c, i) => {
      const N = 240; let d = '', pen = false;
      for (let k = 0; k <= N; k++) {
        let x, y;
        if (c.f) { x = x0 + (x1 - x0) * k / N; y = c.f(x); }
        else { const t = c.t[0] + (c.t[1] - c.t[0]) * k / N; [x, y] = c.xy(t); }
        const out = !isFinite(y) || y > y1 + (y1 - y0) || y < y0 - (y1 - y0) ||
                    x > x1 + (x1 - x0) || x < x0 - (x1 - x0);
        if (out) { pen = false; continue; }
        d += (pen ? 'L' : 'M') + f2(sx(x)) + ' ' + f2(sy(y));
        pen = true;
      }
      s += `<path class="fg-curve ${c.cls || 'fg-c' + (i % 3 + 1)}" d="${d}" clip-path="url(#cp)"/>`;
      if (c.xy && c.arrow !== false) {            // freccia di direzione a 55% del percorso
        const tt = (k) => c.t[0] + (c.t[1] - c.t[0]) * k;
        const [ax1, ay1] = c.xy(tt(0.55)), [ax2, ay2] = c.xy(tt(0.56));
        const px = sx(ax1), py = sy(ay1), a = Math.atan2(sy(ay2) - py, sx(ax2) - px);
        const ar = (da) => `${f2(px - 7 * Math.cos(a + da))} ${f2(py - 7 * Math.sin(a + da))}`;
        s += `<path class="fg-curve ${c.cls || 'fg-c' + (i % 3 + 1)}" d="M${ar(0.4)}L${f2(px)} ${f2(py)}L${ar(-0.4)}"/>`;
      }
    });
    (o.pts || []).forEach((p) => { s += `<circle class="fg-pt" cx="${f2(sx(p[0]))}" cy="${f2(sy(p[1]))}" r="3"/>`; });
    (o.labels || []).forEach((l) => {
      s += `<text x="${f2(sx(l.x) + (l.dx || 0))}" y="${f2(sy(l.y) + (l.dy || 0))}"` +
           (l.cls ? ` class="${l.cls}"` : '') + `>${esc(l.t)}</text>`;
    });
    s += `<defs><clipPath id="cp"><rect x="${M - 8}" y="${M - 10}" width="${W - 2 * M + 18}" height="${H - 2 * M + 20}"/></clipPath></defs>`;
    return s + '</svg>';
  }

  /* svg(inner) — contenitore per figure disegnate a mano, coordinate 0..240 × 0..180 */
  const svg = (inner) => `<svg viewBox="0 0 ${W} ${H}" role="img" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  /* mesh3d({ P:(u,v)=>[x,y,z] | f:(x,y)=>z, u:[a,b], v:[c,d], nu, nv, axes, labels })
   * Superficie a reticolo (wireframe) in proiezione assonometrica: x verso destra-basso, y verso sinistra-basso, z in alto.
   * Con `f` il dominio è (x,y)=(u,v). Le linee sono disegnate senza eliminazione delle parti nascoste. */
  function mesh3d(o) {
    const P = o.P || ((u, v) => [u, v, o.f(u, v)]);
    const nu = o.nu || 14, nv = o.nv || 14, K = 0.866;
    const proj = (p) => [(p[0] - p[1]) * K, p[2] - (p[0] + p[1]) * 0.5];   // y verso l'alto
    const lines = [];
    for (let i = 0; i <= nu; i++) {
      const u = o.u[0] + (o.u[1] - o.u[0]) * i / nu, ln = [];
      for (let j = 0; j <= 40; j++) ln.push(P(u, o.v[0] + (o.v[1] - o.v[0]) * j / 40));
      lines.push(ln);
    }
    for (let j = 0; j <= nv; j++) {
      const v = o.v[0] + (o.v[1] - o.v[0]) * j / nv, ln = [];
      for (let i = 0; i <= 40; i++) ln.push(P(o.u[0] + (o.u[1] - o.u[0]) * i / 40, v));
      lines.push(ln);
    }
    const ax = o.axes === false ? [] : [[[0, 0, 0], [o.ax || 1.3, 0, 0], 'x'], [[0, 0, 0], [0, o.ay || 1.3, 0], 'y'], [[0, 0, 0], [0, 0, o.az || 1.3], 'z']];
    const pts = lines.flat().map(proj).concat(ax.map((a) => proj(a[1])));
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const sc = Math.min((W - 30) / (x1 - x0 || 1), (H - 26) / (y1 - y0 || 1));
    const T = (p) => { const q = proj(p); return [f2(W / 2 + (q[0] - (x0 + x1) / 2) * sc), f2(H / 2 - (q[1] - (y0 + y1) / 2) * sc)]; };
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" xmlns="http://www.w3.org/2000/svg">`;
    ax.forEach((a) => {
      const p = T(a[0]), q = T(a[1]);
      s += `<line class="fg-axis" x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}"/><text x="${q[0] + 3}" y="${q[1] - 3}">${a[2]}</text>`;
    });
    lines.forEach((ln) => {
      const d = ln.map((p, k) => (k ? 'L' : 'M') + T(p).join(' ')).join('');
      s += `<path class="fg-curve fg-c1" d="${d}" style="stroke-width:1;opacity:.8"/>`;
    });
    (o.labels || []).forEach((l) => { const p = T(l.p); s += `<text x="${p[0]}" y="${p[1]}"${l.cls ? ` class="${l.cls}"` : ''}>${esc(l.t)}</text>`; });
    return s + '</svg>';
  }

  /* wire3d({ V:[[x,y,z]…], E:[[i,j]…] spigoli visibili, H:[[i,j]…] spigoli nascosti (tratteggiati),
   *          D:[[p,q,'cls']…] segmenti extra tra punti 3D (es. diagonale, altezza), labels:[{p:[x,y,z],t,dx,dy,cls}] })
   * Stessa proiezione di mesh3d: il vertice più lontano è quello con x,y,z minori. */
  function wire3d(o) {
    const K = 0.866, proj = (p) => [(p[0] - p[1]) * K, p[2] - (p[0] + p[1]) * 0.5];
    const all = o.V.map(proj).concat((o.D || []).flatMap((d) => [proj(d[0]), proj(d[1])]));
    const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const sc = Math.min((W - 50) / (x1 - x0 || 1), (H - 40) / (y1 - y0 || 1));
    const T = (p) => { const q = proj(p); return [f2(W / 2 + (q[0] - (x0 + x1) / 2) * sc), f2(H / 2 - (q[1] - (y0 + y1) / 2) * sc)]; };
    const seg = (p, q, cls) => { const a = T(p), b = T(q); return `<line class="${cls}" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`; };
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" xmlns="http://www.w3.org/2000/svg">`;
    (o.H || []).forEach((e) => { s += seg(o.V[e[0]], o.V[e[1]], 'fg-dash'); });
    (o.E || []).forEach((e) => { s += seg(o.V[e[0]], o.V[e[1]], 'fg-line'); });
    (o.D || []).forEach((d) => { s += seg(d[0], d[1], 'fg-curve ' + (d[2] || 'fg-c2')); });
    (o.labels || []).forEach((l) => { const p = T(l.p); s += `<text x="${f2(p[0] + (l.dx || 0))}" y="${f2(p[1] + (l.dy || 0))}"${l.cls ? ` class="${l.cls}"` : ''}>${esc(l.t)}</text>`; });
    return s + '</svg>';
  }

  FORMULARI.fig = { plot, svg, mesh3d, wire3d, W, H };
})();
