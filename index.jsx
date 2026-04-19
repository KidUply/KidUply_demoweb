<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KidUply — Bolalar uchun AI ta'lim</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">

<style>
:root {
  --bg: #050c0a;
  --bg2: #071410;
  --green: #16a34a;
  --green-bright: #22c55e;
  --green-glow: #4ade80;
  --green-pale: #bbf7d0;
  --text: #e2fcea;
  --muted: #6b9c7b;
  --card: rgba(22, 163, 74, 0.06);
  --card-border: rgba(34, 197, 94, 0.15);
  --radius: 16px;
  --radius-sm: 10px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  overflow-x: hidden;
}

/* ── NOISE TEXTURE ── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}

/* ── LAYOUT ── */
section { position: relative; z-index: 1; padding: 64px 20px; }
.container { max-width: 480px; margin: 0 auto; }

/* ── NAVBAR ── */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(5, 12, 10, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--card-border);
}

.logo {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: var(--green-glow);
  letter-spacing: -0.5px;
}

.logo span { color: var(--text); }

.nav-badge {
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: var(--green-bright);
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.3px;
}

/* ── HERO ── */
#hero {
  padding: 80px 20px 60px;
  text-align: center;
  background: radial-gradient(ellipse 70% 40% at 50% 0%, rgba(22, 163, 74, 0.18) 0%, transparent 70%);
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--green-bright);
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  padding: 5px 12px;
  border-radius: 20px;
  margin-bottom: 24px;
}

.hero-eyebrow::before {
  content: '';
  width: 6px; height: 6px;
  background: var(--green-bright);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: clamp(30px, 8vw, 42px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1.5px;
  color: #fff;
  margin-bottom: 16px;
}

h1 em {
  font-style: normal;
  background: linear-gradient(135deg, var(--green-bright), var(--green-glow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 16px;
  color: var(--muted);
  max-width: 340px;
  margin: 0 auto 32px;
  font-weight: 300;
  line-height: 1.7;
}

.hero-sub strong { color: var(--text); font-weight: 500; }

.cta-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.btn-primary {
  background: var(--green);
  color: #fff;
  font-family: 'Sora', sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 32px;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  letter-spacing: -0.3px;
  transition: all 0.2s;
  box-shadow: 0 0 40px rgba(22, 163, 74, 0.35);
  text-decoration: none;
  display: block;
  text-align: center;
}

.btn-primary:hover {
  background: var(--green-bright);
  transform: translateY(-2px);
  box-shadow: 0 0 60px rgba(34, 197, 94, 0.5);
}

.btn-secondary {
  background: transparent;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  padding: 10px 24px;
  border: 1px solid var(--card-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  transition: all 0.2s;
  text-decoration: none;
  display: block;
  text-align: center;
}

.btn-secondary:hover { border-color: var(--green); color: var(--text); }

/* ── SECTION TITLE ── */
.section-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--green-bright);
  margin-bottom: 8px;
}

h2 {
  font-family: 'Sora', sans-serif;
  font-size: clamp(22px, 6vw, 30px);
  font-weight: 800;
  letter-spacing: -1px;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 12px;
}

h2 em {
  font-style: normal;
  color: var(--green-bright);
}

.section-desc {
  color: var(--muted);
  font-size: 14px;
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 32px;
}

/* ── PROBLEM / SOLUTION ── */
#problem {
  padding: 56px 20px;
}

.prob-sol {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 28px;
}

.prob-card {
  background: rgba(239, 68, 68, 0.06);
  border: 1px solid rgba(239, 68, 68, 0.18);
  border-radius: var(--radius);
  padding: 20px 16px;
}

.sol-card {
  background: rgba(22, 163, 74, 0.07);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius);
  padding: 20px 16px;
}

.card-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.prob-card .card-tag { color: #f87171; }
.sol-card .card-tag { color: var(--green-bright); }

.prob-card p, .sol-card p {
  font-size: 13px;
  line-height: 1.6;
  color: #c4d9cc;
}

.prob-card strong { color: #fca5a5; }
.sol-card strong { color: var(--green-pale); }

/* ── HOW IT WORKS ── */
#how {
  background: linear-gradient(180deg, transparent, rgba(22,163,74,0.04) 50%, transparent);
}

.steps { display: flex; flex-direction: column; gap: 4px; }

.step {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;
}

.step.visible { opacity: 1; transform: translateY(0); }

.step-num {
  width: 36px;
  height: 36px;
  min-width: 36px;
  background: linear-gradient(135deg, rgba(22,163,74,0.3), rgba(34,197,94,0.15));
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: var(--green-bright);
}

.step-content h4 {
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
  letter-spacing: -0.3px;
}

.step-content p {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.55;
}

/* ── PRODUCT ── */
#product {}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 28px;
}

.prod-card {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 20px 16px;
  transition: border-color 0.2s, background 0.2s;
}

.prod-card:hover {
  border-color: rgba(34, 197, 94, 0.4);
  background: rgba(22, 163, 74, 0.1);
}

.prod-icon {
  font-size: 24px;
  margin-bottom: 10px;
  display: block;
}

.prod-card h3 {
  font-family: 'Sora', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--green-pale);
  letter-spacing: -0.3px;
  margin-bottom: 8px;
}

.prod-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.prod-card ul li {
  font-size: 12px;
  color: var(--muted);
  padding-left: 12px;
  position: relative;
  line-height: 1.5;
}

.prod-card ul li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--green);
}

/* ── WHY DIFFERENT ── */
#why {
  background: linear-gradient(180deg, transparent, rgba(22,163,74,0.03) 50%, transparent);
}

.diff-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 28px;
}

.diff-item {
  padding: 18px 14px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.diff-icon { font-size: 20px; }

.diff-item h4 {
  font-family: 'Sora', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.3px;
}

.diff-item p {
  font-size: 11.5px;
  color: var(--muted);
  line-height: 1.5;
}

/* ── STATUS ── */
#status {
  padding: 48px 20px;
}

.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 24px;
}

.stat-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  background: rgba(22, 163, 74, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.18);
  border-radius: var(--radius-sm);
}

.stat-dot {
  width: 7px; height: 7px;
  min-width: 7px;
  background: var(--green-bright);
  border-radius: 50%;
}

.stat-chip span {
  font-size: 12px;
  color: var(--text);
  font-weight: 500;
  line-height: 1.3;
}

/* ── FOUNDER ── */
#founder {
  padding: 40px 20px 56px;
}

.founder-card {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
}

.founder-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--green-bright), transparent);
}

.founder-avatar {
  width: 52px; height: 52px;
  background: linear-gradient(135deg, var(--green), #052e16);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 16px;
  border: 1px solid rgba(34,197,94,0.3);
}

.founder-name {
  font-family: 'Sora', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.5px;
  margin-bottom: 4px;
}

.founder-title {
  font-size: 12px;
  color: var(--green-bright);
  font-weight: 600;
  letter-spacing: 0.3px;
  margin-bottom: 16px;
}

.founder-bio {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.65;
}

.founder-bio strong { color: var(--text); }

.founder-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}

.tag {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(22, 163, 74, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.2);
  color: var(--green-bright);
}

/* ── DEMO ── */
#demo {
  padding: 48px 20px;
  background: linear-gradient(180deg, transparent, rgba(22,163,74,0.04) 50%, transparent);
}

.video-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, rgba(22,163,74,0.08), rgba(5,46,22,0.4));
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 24px 0 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.video-placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 20px,
    rgba(22,163,74,0.03) 20px,
    rgba(22,163,74,0.03) 40px
  );
}

.play-btn {
  width: 52px; height: 52px;
  background: var(--green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: 0 0 40px rgba(22,163,74,0.5);
  position: relative;
  z-index: 1;
  transition: transform 0.2s;
}

.video-placeholder:hover .play-btn { transform: scale(1.1); }

.video-label {
  font-size: 13px;
  color: var(--muted);
  position: relative;
  z-index: 1;
}

.demo-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.demo-link-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: all 0.2s;
}

.demo-link-btn:hover {
  border-color: var(--green);
  background: rgba(22,163,74,0.1);
}

.demo-link-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-link-icon { font-size: 18px; }

.demo-link-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.demo-link-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  font-family: 'Sora', sans-serif;
}

.demo-link-sub {
  font-size: 11px;
  color: var(--muted);
}

.demo-link-arrow {
  color: var(--green-bright);
  font-size: 16px;
}

/* ── FINAL CTA ── */
#cta {
  padding: 64px 20px 80px;
  text-align: center;
  background: radial-gradient(ellipse 80% 50% at 50% 100%, rgba(22, 163, 74, 0.15) 0%, transparent 70%);
}

#cta h2 { margin-bottom: 12px; }

#cta .section-desc { margin-bottom: 28px; }

.cta-note {
  margin-top: 16px;
  font-size: 12px;
  color: var(--muted);
  opacity: 0.7;
}

/* ── FOOTER ── */
footer {
  padding: 20px;
  text-align: center;
  border-top: 1px solid var(--card-border);
  font-size: 12px;
  color: var(--muted);
  opacity: 0.6;
}

/* ── ANIMATIONS ── */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.anim { animation: fadeIn 0.7s ease forwards; }
.delay-1 { animation-delay: 0.1s; opacity: 0; }
.delay-2 { animation-delay: 0.2s; opacity: 0; }
.delay-3 { animation-delay: 0.35s; opacity: 0; }
.delay-4 { animation-delay: 0.5s; opacity: 0; }

/* ── DIVIDER ── */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--card-border), transparent);
  margin: 0 20px;
}

/* ── HIGHLIGHT STAT ── */
.inline-stat {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
}

.inline-stat .num {
  font-family: 'Sora', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: var(--green-bright);
  letter-spacing: -1px;
}

.inline-stat .label {
  font-size: 12px;
  color: var(--muted);
}

.stats-row {
  display: flex;
  justify-content: space-around;
  padding: 24px 0;
  border-top: 1px solid var(--card-border);
  border-bottom: 1px solid var(--card-border);
  margin: 28px 0;
}

</style>
</head>
<body>

<!-- NAVBAR -->
<nav>
  <div class="logo">Kid<span>Uply</span></div>
  <div class="nav-badge">Beta — Tez orada</div>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="container">
    <div class="hero-eyebrow anim delay-1">AI-powered · 4–10 yosh</div>
    <h1 class="anim delay-2">Screen time — <em>o'rganish vaqti</em></h1>
    <p class="hero-sub anim delay-3">
      Bolalar telefon ekranini yaxshi ko'radi.<br>
      <strong>KidUply</strong> bu vaqtni matematik, til va mantiqqa aylantiradi — AI orqali, o'yin shaklida.
    </p>
    <div class="cta-group anim delay-4">
      <a href="#demo" class="btn-primary">Demo ko'rish →</a>
      <a href="#how" class="btn-secondary">Qanday ishlaydi?</a>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- PROBLEM / SOLUTION -->
<section id="problem">
  <div class="container">
    <div class="section-label">Muammo → Yechim</div>
    <h2>Ta'lim yoqimsiz emas — <em>noto'g'ri format</em></h2>
    <div class="prob-sol">
      <div class="prob-card">
        <div class="card-tag">Muammo</div>
        <p>Darsliklar <strong>zeriktiriladi</strong>. Bola telefonni tanlaydi — va bu tabiiy.</p>
      </div>
      <div class="sol-card">
        <div class="card-tag">Yechim</div>
        <p>Telefon <strong>o'quv platformasiga</strong> aylanadi. O'yin orqali, AI bilan.</p>
      </div>
    </div>

    <div class="stats-row">
      <div class="inline-stat">
        <span class="num">600+</span>
        <span class="label">dars</span>
      </div>
      <div class="inline-stat">
        <span class="num">6</span>
        <span class="label">o'yin</span>
      </div>
      <div class="inline-stat">
        <span class="num">3</span>
        <span class="label">til</span>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- HOW IT WORKS -->
<section id="how">
  <div class="container">
    <div class="section-label">Qanday ishlaydi</div>
    <h2>4 qadam, <em>haqiqiy natija</em></h2>
    <p class="section-desc">Har bir dars — qisqa, aniq, va darhol amaliy.</p>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>Qisqa video dars</h4>
          <p>5–10 daqiqa. Aniq mavzu: fraksiya, so'z, mantiq.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>O'yin orqali amaliyot</h4>
          <p>Fraksiyalar → Pizza Adventure. Bilim o'yinda sinaladi.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>AI darajani moslashtiradi</h4>
          <p>Gemini AI har bolaning tezligiga qarab savolni qiyinlashtiradi yoki yengillashtiradi.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <h4>Ota-ona real vaqt ko'radi</h4>
          <p>Progress + AI chat: "Bugun farzandim nima o'rgandi?"</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- PRODUCT -->
<section id="product">
  <div class="container">
    <div class="section-label">Mahsulot</div>
    <h2>To'liq <em>ekosistema</em></h2>

    <div class="product-grid">
      <div class="prod-card">
        <span class="prod-icon">📚</span>
        <h3>Learn</h3>
        <ul>
          <li>Matematika</li>
          <li>Tabiat</li>
          <li>Til</li>
          <li>Hayot ko'nikmalari</li>
        </ul>
      </div>

      <div class="prod-card">
        <span class="prod-icon">🎮</span>
        <h3>Play</h3>
        <ul>
          <li>Pizza Adventure</li>
          <li>Math Quest</li>
          <li>Spelling Challenge</li>
          <li>Logic Puzzle</li>
          <li>Nature Explorer</li>
        </ul>
      </div>

      <div class="prod-card">
        <span class="prod-icon">🏆</span>
        <h3>Connect</h3>
        <ul>
          <li>Do'stlar challenge</li>
          <li>Haftalik musobaqa</li>
          <li>Sinf kodi</li>
        </ul>
      </div>

      <div class="prod-card">
        <span class="prod-icon">👨‍👩‍👧</span>
        <h3>Parents</h3>
        <ul>
          <li>PIN himoya</li>
          <li>AI tahlil</li>
          <li>AI chat</li>
          <li>Haftalik report</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- WHY DIFFERENT -->
<section id="why">
  <div class="container">
    <div class="section-label">Farqi nima</div>
    <h2>Boshqalardan <em>farq</em></h2>

    <div class="diff-grid">
      <div class="diff-item">
        <div class="diff-icon">🧠</div>
        <h4>AI personalizatsiya</h4>
        <p>Har bola uchun alohida qiyinlik darajasi</p>
      </div>
      <div class="diff-item">
        <div class="diff-icon">⚡</div>
        <h4>Learn + Play</h4>
        <p>Bitta joyda — dars va o'yin birlashgan</p>
      </div>
      <div class="diff-item">
        <div class="diff-icon">🌍</div>
        <h4>3 til</h4>
        <p>O'zbek · Rus · Ingliz</p>
      </div>
      <div class="diff-item">
        <div class="diff-icon">💬</div>
        <h4>Parent AI Chat</h4>
        <p>"Bugun nima o'rgandi?" — AI javob beradi</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- STATUS -->
<section id="status">
  <div class="container">
    <div class="section-label">Hozirgi holat</div>
    <h2>Bu real, <em>qurilgan</em> mahsulot</h2>
    <p class="section-desc">Taxmin emas — ishlaydigan MVP.</p>

    <div class="status-grid">
      <div class="stat-chip">
        <div class="stat-dot"></div>
        <span>React Native MVP tayyor</span>
      </div>
      <div class="stat-chip">
        <div class="stat-dot"></div>
        <span>600+ dars tuzilmasi</span>
      </div>
      <div class="stat-chip">
        <div class="stat-dot"></div>
        <span>Gemini AI integratsiya</span>
      </div>
      <div class="stat-chip">
        <div class="stat-dot"></div>
        <span>Beta — 2–3 hafta ichida</span>
      </div>
      <div class="stat-chip">
        <div class="stat-dot"></div>
        <span>Play Store & App Store</span>
      </div>
      <div class="stat-chip">
        <div class="stat-dot"></div>
        <span>6 o'yin ishlamoqda</span>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- FOUNDER -->
<section id="founder">
  <div class="container">
    <div class="section-label">Asoschisi</div>
    <div class="founder-card">
      <div class="founder-avatar">👨‍💻</div>
      <div class="founder-name">Muhammadyusuf</div>
      <div class="founder-title">Solo Developer · Founder</div>
      <p class="founder-bio">
        <strong>15 yoshida</strong> — KidUplyni noldan, yolg'iz qurdi.<br>
        React Native, Supabase, Gemini AI — hammasini o'zi.
        <br><br>
        <strong>1517 USA Fund</strong> jamiyati a'zosi. AI, mahsulot va mobile dasturlashga ihtisoslashgan.
      </p>
      <div class="founder-tags">
        <span class="tag">AI</span>
        <span class="tag">Mobile Dev</span>
        <span class="tag">EdTech</span>
        <span class="tag">1517 Fund</span>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- DEMO -->
<section id="demo">
  <div class="container">
    <div class="section-label">Demo</div>
    <h2>Ko'ring, <em>sinab</em> ko'ring</h2>
    <p class="section-desc">Ishlaydigan MVP — o'yin, dars va parent paneli tayyor.</p>

    <div class="video-placeholder" onclick="this.style.opacity='0.7'">
      <div class="play-btn">▶</div>
      <div class="video-label">Demo video — tez orada</div>
    </div>

    <div class="demo-links">
      <a href="#" class="demo-link-btn">
        <div class="demo-link-left">
          <div class="demo-link-icon">📱</div>
          <div class="demo-link-text">
            <span class="demo-link-title">Prototype ko'rish</span>
            <span class="demo-link-sub">Figma / interaktiv prototip</span>
          </div>
        </div>
        <span class="demo-link-arrow">→</span>
      </a>
      <a href="#" class="demo-link-btn">
        <div class="demo-link-left">
          <div class="demo-link-icon">🛒</div>
          <div class="demo-link-text">
            <span class="demo-link-title">Beta ro'yxatiga kirish</span>
            <span class="demo-link-sub">Play Store · App Store</span>
          </div>
        </div>
        <span class="demo-link-arrow">→</span>
      </a>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- FINAL CTA -->
<section id="cta">
  <div class="container">
    <div class="section-label">Qo'shiling</div>
    <h2>Bolangiz <em>o'ynab</em>, o'rgansin</h2>
    <p class="section-desc">
      KidUply beta uchun ro'yxatga oling.<br>
      Birinchilar orasida bo'ling.
    </p>
    <a href="#" class="btn-primary" style="margin: 0 auto; display: block; max-width: 300px;">
      Beta ro'yxatiga kirish →
    </a>
    <p class="cta-note">Bepul · Hech qanday kredit karta kerak emas</p>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <p>© 2025 KidUply · Muhammadyusuf tomonidan qurildi · 🇺🇿</p>
</footer>

<script>
// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.transitionDelay = `${i * 0.08}s`;
      el.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.step').forEach(el => observer.observe(el));

// Smooth entrance for section elements
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.prod-card, .diff-item, .stat-chip, .prob-card, .sol-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});

// Add stagger delays to grids
document.querySelectorAll('.product-grid, .diff-grid, .status-grid, .prob-sol').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.08}s`;
  });
});
</script>
</body>
</html>
