/* Sound Hunt: Pioneers Learning Hub. Find everything in the scene that starts with the target sound.
   Usage: index.html?sound=s   (s, a, t, p available)            © Pioneers Tutoring. Pictures: Twemoji CC-BY 4.0 */
(function () {
  const IMG = {
    sun:'2600', sailboat:'26f5', seal:'1f9ad', surfer:'1f3c4', sunglasses:'1f576', sandwich:'1f96a', sock:'1f9e6', squid:'1f991', snake:'1f40d', strawberry:'1f353',
    apple:'1f34e', ant:'1f41c', ambulance:'1f691', astronaut:'1f9d1-200d-1f680', axe:'1fa93', acrobat:'1f938', anchor:'2693', abacus:'1f9ee', avocado:'1f951',
    tiger:'1f42f', tent:'26fa', tomato:'1f345', turtle:'1f422', teddy:'1f9f8', train:'1f686', tooth:'1f9b7', tractor:'1f69c', trumpet:'1f3ba', taxi:'1f695',
    pig:'1f437', penguin:'1f427', pizza:'1f355', panda:'1f43c', pear:'1f350', popcorn:'1f37f', parrot:'1f99c', pineapple:'1f34d', pumpkin:'1f383', piano:'1f3b9',
    crab:'1f980', fish:'1f41f', dolphin:'1f42c', whale:'1f433', octopus:'1f419', umbrella:'26f1', ball:'1f3d0', 'palm tree':'1f334',
    cat:'1f431', dog:'1f415', duck:'1f986', egg:'1f95a', bus:'1f68c', moon:'1f319', hat:'1f3a9', bed:'1f6cf', 'soccer ball':'26bd', car:'1f697', house:'1f3e0',
    frog:'1f438', lion:'1f981', kite:'1fa81', rabbit:'1f430', horse:'1f434', cake:'1f382', book:'1f4d5', mouse:'1f42d', banana:'1f34c', grapes:'1f347',
    carrot:'1f955', key:'1f511', gift:'1f381', flower:'1f338', butterfly:'1f98b', bee:'1f41d', tree:'1f333', cloud:'2601'
  };
  const SCENES = {
    s: { label:'s', hint:'sun', bg:'beach',
         targets:['sun','sailboat','seal','surfer','sunglasses','sandwich','sock','squid','snake','strawberry'],
         others:['crab','fish','dolphin','whale','octopus','umbrella','ball','palm tree'] },
    a: { label:'a', hint:'apple', bg:'park',
         targets:['apple','ant','ambulance','astronaut','axe','acrobat','anchor','abacus','avocado'],
         others:['dog','duck','kite','rabbit','butterfly','bee','frog','cake','tree'] },
    t: { label:'t', hint:'tiger', bg:'town',
         targets:['tiger','tent','tomato','turtle','teddy','train','tooth','tractor','trumpet','taxi'],
         others:['car','house','bus','dog','cat','book','key','gift'] },
    p: { label:'p', hint:'pig', bg:'farm',
         targets:['pig','penguin','pizza','panda','pear','popcorn','parrot','pineapple','pumpkin','piano'],
         others:['horse','duck','egg','carrot','banana','grapes','mouse','lion'] }
  };
  const BG = {
    beach:`<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd3f7"/><stop offset="1" stop-color="#c9f0ff"/></linearGradient><linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2fa4d9"/><stop offset="1" stop-color="#1d7fb8"/></linearGradient></defs><rect width="160" height="90" fill="url(#sky)"/><rect y="30" width="160" height="30" fill="url(#sea)"/><path d="M0 33 Q10 31 20 33 T40 33 T60 33 T80 33 T100 33 T120 33 T140 33 T160 33" stroke="#fff" stroke-width=".6" fill="none" opacity=".7"/><path d="M0 58 Q40 52 80 57 T160 55 V90 H0Z" fill="#f4d9a0"/><path d="M0 64 Q40 59 80 63 T160 61" stroke="#e8c47e" stroke-width=".8" fill="none"/></svg>`,
    park:`<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%"><rect width="160" height="90" fill="#bfe8ff"/><path d="M0 35 Q40 25 80 33 T160 30 V90 H0Z" fill="#8fd16b"/><path d="M0 50 Q50 42 100 50 T160 47 V90 H0Z" fill="#6fbf4a"/><path d="M60 90 Q75 60 95 45" stroke="#d9c49a" stroke-width="7" fill="none"/></svg>`,
    town:`<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%"><rect width="160" height="90" fill="#cdeeff"/><g fill="#b9c4d6"><rect x="5" y="14" width="18" height="30"/><rect x="27" y="8" width="14" height="36"/><rect x="118" y="12" width="16" height="32"/><rect x="138" y="18" width="18" height="26"/></g><rect y="44" width="160" height="46" fill="#9fd47c"/><rect y="60" width="160" height="14" fill="#6b7280"/><path d="M0 67 H160" stroke="#fff" stroke-width=".8" stroke-dasharray="6 5"/></svg>`,
    farm:`<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%"><rect width="160" height="90" fill="#bde6ff"/><path d="M0 38 Q50 28 100 36 T160 33 V90 H0Z" fill="#a8d672"/><rect x="118" y="16" width="26" height="22" fill="#c0392b"/><path d="M115 17 L131 6 L147 17Z" fill="#922b21"/><rect x="127" y="27" width="8" height="11" fill="#fff"/><g stroke="#b07d48" stroke-width="1.2"><path d="M0 52 H80"/><path d="M0 56 H80"/></g><g stroke="#b07d48" stroke-width="1.5"><path d="M6 49 V60"/><path d="M26 49 V60"/><path d="M46 49 V60"/><path d="M66 49 V60"/></g></svg>`
  };

  const params = new URLSearchParams(location.search);
  const key = (params.get('sound') || 's').toLowerCase();
  const S = SCENES[key] || SCENES.s;
  const $ = id => document.getElementById(id);
  const scene = $('scene'), countEl = $('count'), toast = $('toast'), overlay = $('overlay');
  let found = 0, muted = params.get('mute') === '1', voice = null;
  const total = S.targets.length;

  function pickVoice() {
    const vs = speechSynthesis.getVoices();
    voice = vs.find(v => /en-AU/i.test(v.lang)) || vs.find(v => /en-GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function say(t) {
    if (muted || !('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t); u.rate = 0.9; u.pitch = 1.05; if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }
  let toastTimer;
  function showToast(t) { toast.textContent = t; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 1600); }
  function updateCount() { countEl.textContent = found + ' / ' + total; }

  function layout(n) {   // grid with a little jitter, so pictures never overlap
    const rows = 3, cols = Math.ceil(n / rows), pts = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      pts.push({ x: 8 + (84 / (cols - 1)) * c + (Math.random() * 5 - 2.5), y: 33 + 26 * r + (Math.random() * 6 - 3) });
    }
    return pts.sort(() => Math.random() - 0.5).slice(0, n);
  }

  function build() {
    found = 0; updateCount();
    scene.innerHTML = BG[S.bg];
    const items = S.targets.map(w => ({ w, t: true })).concat(S.others.map(w => ({ w, t: false })));
    items.sort(() => Math.random() - 0.5);
    const pts = layout(items.length);
    items.forEach((it, i) => {
      const b = document.createElement('button');
      b.className = 'item'; b.style.left = pts[i].x + '%'; b.style.top = pts[i].y + '%';
      b.setAttribute('aria-label', it.w);
      b.innerHTML = `<img src="img/${IMG[it.w]}.svg" alt="${it.w}"><img class="star" src="img/2b50.svg" alt="" onerror="this.remove()">`;
      b.onclick = () => {
        if (b.classList.contains('found')) return;
        if (it.t) {
          b.classList.add('found'); found++; updateCount();
          say(it.w + '!'); showToast('⭐ ' + it.w);
          if (found === total) setTimeout(finish, 900);
        } else {
          b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong');
          say(it.w + '. Try again!'); showToast(it.w + ' — try again');
        }
      };
      scene.appendChild(b);
    });
  }

  function confetti() {
    const cols = ['#ef7d22', '#ffd34d', '#2ecc71', '#3498db', '#e84393'];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement('div'); c.className = 'confetti';
      c.style.left = Math.random() * 100 + '%'; c.style.background = cols[i % cols.length];
      c.style.animationDuration = (1.8 + Math.random() * 1.6) + 's'; c.style.animationDelay = Math.random() * .6 + 's';
      $('wrap').appendChild(c); setTimeout(() => c.remove(), 4500);
    }
  }
  function card(html) { overlay.innerHTML = '<div class="card">' + html + '</div>'; overlay.style.display = 'flex'; }
  function start() { overlay.style.display = 'none'; build(); say(`Find ${total} things that start with the letter ${S.label}. Like ${S.hint}!`); }
  function finish() {
    confetti(); say(`Well done! You found all ${total} things that start with ${S.label}!`);
    card(`<div class="big">${S.label}</div><h1>Well done!</h1><p>You found all ${total} things that start with <b>${S.label}</b>.</p><button class="btn" id="again">Play again</button>`);
    $('again').onclick = start;
  }

  $('badge').textContent = S.label;
  $('badge').onclick = () => say(`Find things that start with the letter ${S.label}. Like ${S.hint}.`);
  $('mute').textContent = muted ? '🔇' : '🔊';
  $('mute').onclick = () => { muted = !muted; $('mute').textContent = muted ? '🔇' : '🔊'; if (muted) speechSynthesis.cancel(); };
  updateCount();
  scene.innerHTML = BG[S.bg];
  card(`<div class="big">${S.label}</div><h1>Sound Hunt</h1><p>Find all <b>${total}</b> things that start with <b>${S.label}</b>.<br>Tap each one you find!</p><button class="btn" id="go">Start</button>`);
  $('go').onclick = start;
  if (params.get('autostart') === '1') {          // for tutors' direct links and screenshots
    start();
    const demo = parseInt(params.get('demo') || '0', 10);
    if (demo) Array.from(document.querySelectorAll('.item')).filter(b => S.targets.includes(b.getAttribute('aria-label'))).slice(0, demo).forEach(b => b.click());
  }
})();
