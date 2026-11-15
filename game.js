/* Sound Hunt: Pioneers Learning Hub. Find everything in the scene that starts with the target sound.
   Usage: index.html?sound=s   (s, a, t, p)      © Pioneers Tutoring. Pictures: Twemoji CC-BY 4.0. Voice: ElevenLabs. */
(function () {
  const IMG = {
    sun:'2600', cloud:'2601', bird:'1f426', sailboat:'26f5', surfer:'1f3c4', seal:'1f9ad', swimmer:'1f3ca', whale:'1f433', dolphin:'1f42c',
    squid:'1f991', fish:'1f41f', snake:'1f40d', octopus:'1f419', crab:'1f980', sponge:'1f9fd', 'palm tree':'1f334', umbrella:'26f1',
    sunglasses:'1f576', sandwich:'1f96a',
    kite:'1fa81', apple:'1f34e', butterfly:'1f98b', ambulance:'1f691', car:'1f697', acrobat:'1f938', dog:'1f415', 'bow and arrow':'1f3f9',
    axe:'1fa93', duck:'1f986', anchor:'2693', avocado:'1f951', ant:'1f41c', cake:'1f382', rabbit:'1f430', bee:'1f41d',
    train:'1f686', teddy:'1f9f8', gift:'1f381', tooth:'1f9b7', book:'1f4d5', trumpet:'1f3ba', tomato:'1f345', taxi:'1f695', bus:'1f68c',
    tractor:'1f69c', tent:'26fa', cat:'1f431', tiger:'1f42f', turtle:'1f422', house:'1f3e0',
    parrot:'1f99c', pear:'1f350', pie:'1f967', horse:'1f434', cow:'1f404', peacock:'1f99a', chicken:'1f414', pig:'1f437', pumpkin:'1f383',
    potato:'1f954', carrot:'1f955', pineapple:'1f34d', sheep:'1f411', mouse:'1f42d'
  };
  // what the voice says for each picture (when it differs from the picture name)
  const SAY = { 'bow and arrow': 'arrow', snake: 'sea snake' };

  const BG = {
    beach: `<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%">
      <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd8f8"/><stop offset="1" stop-color="#d5f3ff"/></linearGradient>
      <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3db4e6"/><stop offset=".55" stop-color="#1c86c4"/><stop offset="1" stop-color="#145f95"/></linearGradient>
      <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
      <rect width="160" height="90" fill="url(#sky)"/>
      <rect y="19" width="160" height="71" fill="url(#sea)"/>
      <path d="M20 20 L10 75 L24 75 Z M60 20 L52 70 L64 70 Z M95 20 L92 68 L102 68 Z" fill="url(#ray)"/>
      <path d="M0 20 Q4 18.5 8 20 T16 20 T24 20 T32 20 T40 20 T48 20 T56 20 T64 20 T72 20 T80 20 T88 20 T96 20 T104 20 T112 20 T120 20" stroke="#fff" stroke-width=".7" fill="none" opacity=".85"/>
      <ellipse cx="59" cy="26" rx="9" ry="3.2" fill="#7f8c8d"/><ellipse cx="57" cy="25" rx="6" ry="1.6" fill="#95a5a6"/>
      <path d="M0 78 Q25 73 55 78 T118 77 L124 90 L0 90 Z" fill="#e9cc8e"/>
      <g fill="none" stroke-linecap="round" stroke-width="1.6"><path d="M6 80 q-2 -5 0 -10 q2 -5 0 -10" stroke="#2e8b57"/><path d="M9 81 q2 -5 0 -9 q-2 -4 0 -8" stroke="#3cb371"/>
      <path d="M68 79 q-2 -5 0 -10 q2 -5 0 -9" stroke="#2e8b57"/><path d="M104 79 q-2 -6 0 -12 q2 -5 0 -10" stroke="#3cb371"/><path d="M108 80 q2 -5 0 -9" stroke="#2e8b57"/></g>
      <g fill="#ff7aa2"><circle cx="88" cy="79" r="3"/><circle cx="92" cy="77" r="2.4"/><circle cx="85" cy="76.5" r="2"/></g>
      <ellipse cx="18" cy="83" rx="5" ry="2.2" fill="#8d8d8d"/><ellipse cx="44" cy="84" rx="3" ry="1.5" fill="#a0a0a0"/>
      <g fill="#fff" opacity=".6"><circle cx="26" cy="45" r=".9"/><circle cx="27" cy="41" r=".6"/><circle cx="80" cy="60" r=".8"/><circle cx="81" cy="56" r=".5"/></g>
      <path d="M116 19 Q126 45 120 90 L160 90 L160 19 Z" fill="#f6dda3"/><path d="M116 19 Q126 45 120 90" stroke="#fff" stroke-width=".8" fill="none" opacity=".8"/>
      <rect x="122" y="66" width="16" height="7" rx="1" fill="#e74c3c" opacity=".85"/><rect x="122" y="68" width="16" height="1.4" fill="#fff" opacity=".8"/></svg>`,
    park: `<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%">
      <defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ec6f5"/><stop offset="1" stop-color="#d9f4ff"/></linearGradient><linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd16b"/><stop offset="1" stop-color="#4f9a33"/></linearGradient><radialGradient id="tr" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#51cf66"/><stop offset="1" stop-color="#2b8a3e"/></radialGradient></defs><rect width="160" height="90" fill="url(#sk)"/>
      <path d="M0 30 Q30 20 60 27 T120 24 T160 27 V32 H0Z" fill="#a3d977"/>
      <rect y="30" width="160" height="9" fill="#7b8794"/><path d="M0 34.5 H160" stroke="#fff" stroke-width=".5" stroke-dasharray="5 4"/>
      <rect y="39" width="160" height="51" fill="url(#gr)"/>
      <path d="M0 52 Q50 46 100 52 T160 50 V90 H0Z" fill="#6dbb4b"/>
      <rect x="14" y="26" width="5" height="34" fill="#8b5a2b"/><circle cx="16" cy="24" r="14" fill="url(#tr)"/><circle cx="8" cy="30" r="8" fill="url(#tr)"/><circle cx="26" cy="30" r="8" fill="url(#tr)"/>
      <ellipse cx="136" cy="76" rx="26" ry="10" fill="#4dabf7"/><ellipse cx="136" cy="74" rx="20" ry="6" fill="#74c0fc" opacity=".6"/>
      <rect x="34" y="69" width="60" height="18" fill="#fff"/>
      <g fill="#e03131"><rect x="34" y="69" width="7.5" height="4.5"/><rect x="49" y="69" width="7.5" height="4.5"/><rect x="64" y="69" width="7.5" height="4.5"/><rect x="79" y="69" width="7.5" height="4.5"/>
      <rect x="41.5" y="73.5" width="7.5" height="4.5"/><rect x="56.5" y="73.5" width="7.5" height="4.5"/><rect x="71.5" y="73.5" width="7.5" height="4.5"/><rect x="86.5" y="73.5" width="7.5" height="4.5"/>
      <rect x="34" y="78" width="7.5" height="4.5"/><rect x="49" y="78" width="7.5" height="4.5"/><rect x="64" y="78" width="7.5" height="4.5"/><rect x="79" y="78" width="7.5" height="4.5"/>
      <rect x="41.5" y="82.5" width="7.5" height="4.5"/><rect x="56.5" y="82.5" width="7.5" height="4.5"/><rect x="71.5" y="82.5" width="7.5" height="4.5"/><rect x="86.5" y="82.5" width="7.5" height="4.5"/></g>
      <ellipse cx="10" cy="66" rx="7" ry="2.5" fill="#a0522d"/><rect x="5" y="62" width="10" height="4" fill="#8b5a2b"/>
      <g fill="#fff3bf"><circle cx="112" cy="48" r="1"/><circle cx="30" cy="56" r="1"/><circle cx="150" cy="55" r="1"/></g></svg>`,
    town: `<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%">
      <defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ec6f5"/><stop offset="1" stop-color="#d9f4ff"/></linearGradient><linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd16b"/><stop offset="1" stop-color="#4f9a33"/></linearGradient><radialGradient id="tr" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#51cf66"/><stop offset="1" stop-color="#2b8a3e"/></radialGradient></defs><rect width="160" height="90" fill="url(#sk)"/>
      <rect y="17" width="160" height="2.2" fill="#6c757d"/><g fill="#868e96"><rect x="10" y="19" width="3" height="5"/><rect x="50" y="19" width="3" height="5"/><rect x="90" y="19" width="3" height="5"/><rect x="130" y="19" width="3" height="5"/></g>
      <rect x="0" y="22" width="34" height="22" fill="#ffd8a8"/><rect x="34" y="22" width="30" height="22" fill="#d0ebff"/><rect x="64" y="22" width="34" height="22" fill="#e5dbff"/><rect x="98" y="22" width="30" height="22" fill="#d3f9d8"/><rect x="128" y="22" width="32" height="22" fill="#ffe3e3"/>
      <g fill="#fff" stroke="#adb5bd" stroke-width=".5"><rect x="5" y="25" width="25" height="12"/><rect x="38" y="25" width="22" height="12"/><rect x="104" y="25" width="20" height="12"/><rect x="133" y="25" width="22" height="12"/></g>
      <circle cx="75" cy="27" r="6" fill="#fff" stroke="#74c0fc" stroke-width=".8"/><rect x="80" y="35" width="10" height="9" fill="#845ef7"/>
      <rect y="44" width="160" height="7" fill="#dee2e6"/><rect x="50" y="41" width="14" height="5" fill="#f08c00"/><path d="M50 41 L57 38 L64 41Z" fill="#e8590c"/>
      <rect y="51" width="160" height="18" fill="#495057"/><path d="M0 60 H160" stroke="#fff" stroke-width=".8" stroke-dasharray="6 5"/>
      <rect y="69" width="160" height="21" fill="url(#gr)"/><ellipse cx="118" cy="82" rx="12" ry="4.5" fill="#4dabf7"/>
      <g fill="#2f9e44"><circle cx="64" cy="74" r="3"/><circle cx="150" cy="73" r="3"/></g></svg>`,
    farm: `<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%">
      <defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ec6f5"/><stop offset="1" stop-color="#d9f4ff"/></linearGradient><linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd16b"/><stop offset="1" stop-color="#4f9a33"/></linearGradient><radialGradient id="tr" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#51cf66"/><stop offset="1" stop-color="#2b8a3e"/></radialGradient></defs><rect width="160" height="90" fill="url(#sk)"/>
      <path d="M0 34 Q40 24 80 31 T160 28 V90 H0Z" fill="#b2dd7a"/><path d="M0 56 Q60 50 110 57 T160 55 V90 H0Z" fill="#94d06a"/>
      <rect x="20" y="22" width="5" height="34" fill="#8b5a2b"/><circle cx="22" cy="20" r="13" fill="url(#tr)"/><circle cx="12" cy="27" r="7" fill="url(#tr)"/><circle cx="33" cy="26" r="8" fill="url(#tr)"/>
      <rect x="116" y="18" width="34" height="24" fill="#f1f3f5"/><path d="M112 19 L133 6 L154 19Z" fill="#c92a2a"/><rect x="127" y="27" width="12" height="9" fill="#a5d8ff" stroke="#495057" stroke-width=".6"/><rect x="141" y="31" width="6" height="11" fill="#862e9c"/>
      <g stroke="#a0522d" stroke-width="1.2"><path d="M0 64 H46"/><path d="M0 68 H46"/></g><g stroke="#a0522d" stroke-width="1.5"><path d="M4 61 V74"/><path d="M18 61 V74"/><path d="M32 61 V74"/><path d="M46 61 V74"/></g>
      <ellipse cx="20" cy="76" rx="18" ry="7" fill="#8d6e63"/>
      <rect x="70" y="70" width="80" height="18" rx="2" fill="#a47148"/><g stroke="#7f5539" stroke-width="1"><path d="M70 75 H150"/><path d="M70 80 H150"/><path d="M70 85 H150"/></g></svg>`
  };

  const params = new URLSearchParams(location.search);
  const key = (params.get('sound') || 's').toLowerCase();
  const ALL = window.SOUND_HUNT_SCENES || {};
  const SD = window.SOUND_DATA;
  const S = SD ? Object.assign({ label: SD.label }, SD.hunt) : (ALL[key] || ALL.s);
  const RULE = { start: 'start with', end: 'end with', has: 'have' }[(SD && SD.rule) || 'start'];
  if (S.bgSvg) BG.custom = S.bgSvg, S.bg = 'custom';
  if (SD && SD.say) Object.assign(SAY, SD.say);
  const $ = id => document.getElementById(id);
  const scene = $('scene'), countEl = $('count'), toast = $('toast'), overlay = $('overlay');
  let found = 0, muted = params.get('mute') === '1';
  const total = S.items.filter(i => i.t).length;
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const word = w => SAY[w] || w;

  // ---- voice: recorded ElevenLabs clips, with the browser voice as a fallback ----
  let current = null, queue = [];
  function speak(t) {
    if (muted || !t || !('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(t); u.rate = 0.75;
    const vs = speechSynthesis.getVoices();
    const v = vs.find(v => /en-AU/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  }
  function playClips(names, fallbackText) {
    if (muted) return;
    if (current) { current.pause(); current = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    queue = names.slice();
    const next = () => {
      if (!queue.length) return;
      const a = new Audio('voice-au/' + queue.shift() + '.mp3');
      current = a;
      a.onended = next;
      a.onerror = () => { queue = []; speak(fallbackText); };
      const p = a.play(); if (p && p.catch) p.catch(() => {});
    };
    next();
  }

  let toastTimer;
  function showToast(t) { toast.textContent = t; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 1800); }
  function updateCount() { countEl.textContent = found + ' / ' + total; }

  function build() {
    found = 0; updateCount();
    scene.innerHTML = BG[S.bg];
    S.items.forEach(it => {
      const b = document.createElement('button');
      b.className = 'item';
      b.style.left = it.x + '%'; b.style.top = it.y + '%'; b.style.width = (it.s || 7) + '%';
      b.dataset.target = it.t ? '1' : '0';
      b.setAttribute('aria-label', word(it.w));
      b.innerHTML = `<img src="img3d/${slug(it.w)}.png" alt="${word(it.w)}"${it.flip ? ' style="transform:scaleX(-1)"' : ''}><img class="star" src="img3d/star.png" alt="">`;
      b.onclick = () => {
        if (b.classList.contains('found')) return;
        if (it.t) {
          b.classList.add('found'); found++; updateCount();
          playClips(['w-' + slug(word(it.w))], word(it.w));
          showToast('⭐ ' + word(it.w));
          if (found === total) setTimeout(finish, 1300);
        } else {
          b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong');
          playClips(['w-' + slug(word(it.w)), 'try-again'], word(it.w) + '. Try again!');
          showToast(word(it.w) + ' – try again');
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
  const introText = `Find all the things that ${RULE} ${S.label}. Like ${S.hint}!`;
  function start() { overlay.style.display = 'none'; build(); playClips(['intro-' + key], introText); }
  function finish() {
    confetti(); playClips(['well-done'], 'Well done! You found them all!');
    card(`<div class="big">${S.label}</div><h1>Well done!</h1><p>You found all ${total} things that ${RULE} <b>${S.label}</b>.</p><button class="btn" id="again">Play again</button>`);
    $('again').onclick = start;
  }

  $('badge').textContent = S.label;
  $('badge').onclick = () => playClips(['intro-' + key], introText);
  $('mute').textContent = muted ? '🔇' : '🔊';
  $('mute').onclick = () => { muted = !muted; $('mute').textContent = muted ? '🔇' : '🔊'; if (muted) { if (current) current.pause(); if ('speechSynthesis' in window) speechSynthesis.cancel(); } };
  updateCount();
  scene.innerHTML = BG[S.bg];
  card(`<div class="big">${S.label}</div><h1>Sound Hunt</h1><p>${S.title}: find all <b>${total}</b> things that ${RULE} <b>${S.label}</b>.<br>Tap each one you find!</p><button class="btn" id="go">Start</button>`);
  $('go').onclick = start;
  if (params.get('autostart') === '1') {          // for direct links and screenshots
    start();
    const demo = parseInt(params.get('demo') || '0', 10);
    if (demo) Array.from(document.querySelectorAll('.item[data-target="1"]')).slice(0, demo).forEach(b => b.click());
  }
})();
