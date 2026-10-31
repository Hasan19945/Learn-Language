interface Particle {
  x: number; y: number; vx: number; vy: number; r: number; vr: number;
  w: number; h: number; c: string; round: boolean; life: number;
}

interface Ring {
  x: number; y: number; t: number;
}

const TAU = Math.PI * 2;

export function celebrate(big: boolean, anchor: Element | null) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = document.createElement("canvas"), ctx = cv.getContext("2d");
  if (!ctx) return;
  const dpr = devicePixelRatio || 1, vw = innerWidth, vh = innerHeight;
  cv.className = "party";
  cv.setAttribute("aria-hidden", "true");
  cv.width = vw * dpr;
  cv.height = vh * dpr;
  ctx.scale(dpr, dpr);
  document.body.append(cv);

  const cs = getComputedStyle(document.documentElement);
  const cols = ["--ei", "--en", "--et", "--accent"].map(k => cs.getPropertyValue(k).trim()).concat("#f5b301", "#ff8a3d");
  const box = anchor?.getBoundingClientRect();
  const o = box ? [box.left + box.width / 2, box.top + box.height / 2] : [vw / 2, vh * .35];
  const ps: Particle[] = [], rings: Ring[] = [], balloon = { t: 0, popped: false };

  const burst = (x: number, y: number, n: number, dir?: number, k = 1) => {
    rings.push({ x, y, t: 0 });
    for (let i = 0; i < n; i++) {
      const ang = dir == null ? Math.random() * TAU : dir + (Math.random() - .5) * 1.1, sp = (4 + Math.random() * 9) * k;
      ps.push({
        x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 3, r: Math.random() * 6.28, vr: (Math.random() - .5) * .3,
        w: 6 + Math.random() * 6, h: 4 + Math.random() * 6, c: cols[Math.random() * cols.length | 0], round: Math.random() < .3, life: 0
      });
    }
  };

  const drawBalloon = (k: number) => {
    const ry = 16 + k * 30, rx = ry * .84, wob = Math.sin(balloon.t * .6) * .06;
    ctx.save();
    ctx.translate(o[0], o[1]);
    ctx.rotate(wob);
    ctx.strokeStyle = cs.getPropertyValue("--muted").trim();
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, ry + 4); ctx.quadraticCurveTo(8, ry + 22, 0, ry + 40); ctx.stroke();
    ctx.fillStyle = cols[0];
    ctx.beginPath(); ctx.moveTo(-5, ry + 6); ctx.lineTo(5, ry + 6); ctx.lineTo(0, ry - 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, TAU); ctx.fill();
    ctx.globalAlpha = .35;
    ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.ellipse(-rx * .35, -ry * .4, rx * .18, ry * .28, -.5, 0, TAU); ctx.fill();
    ctx.restore();
  };

  let last = performance.now();
  const start = last;
  const tick = (now: number) => {
    const dt = Math.min((now - last) / 16.7, 3);
    last = now;
    ctx.clearRect(0, 0, vw, vh);
    if (!balloon.popped) {
      balloon.t += dt;
      drawBalloon(Math.min(balloon.t / 22, 1));
      if (balloon.t >= 22) {
        balloon.popped = true;
        burst(o[0], o[1], big ? 170 : 120);
        if (big) setTimeout(() => { burst(0, vh, 90, -Math.PI / 3, 1.7); burst(vw, vh, 90, -Math.PI * 2 / 3, 1.7); }, 250);
      }
    }
    for (const g of rings) {
      g.t += dt;
      if (g.t > 18) continue;
      const p = g.t / 18;
      ctx.globalAlpha = 1 - p;
      ctx.strokeStyle = cols[0];
      ctx.lineWidth = 6 * (1 - p) + 1;
      ctx.beginPath(); ctx.arc(g.x, g.y, 12 + p * 90, 0, TAU); ctx.stroke();
    }
    for (const p of ps) {
      p.life += dt;
      p.vx *= Math.pow(.985, dt);
      p.vy = p.vy * Math.pow(.985, dt) + .22 * dt;
      p.x += (p.vx + Math.sin(p.life * .1 + p.r) * .6) * dt;
      p.y += p.vy * dt;
      p.r += p.vr * dt;
      ctx.globalAlpha = Math.max(0, Math.min(1, (200 - p.life) / 40));
      ctx.fillStyle = p.c;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.h / 2, 0, TAU); ctx.fill(); }
      else { ctx.scale(1, Math.cos(p.life * .15 + p.r)); ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
      ctx.restore();
    }
    ctx.globalAlpha = 1;
    if (now - start < 5000 && (!balloon.popped || ps.some(p => p.y < vh + 20 && p.life < 200))) requestAnimationFrame(tick);
    else cv.remove();
  };
  requestAnimationFrame(tick);
}
