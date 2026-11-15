/* e: short e in the word (egg, bed, pen). Pioneers Tutoring. */
window.SOUND_DATA = {
  key: 'e', label: 'e', rule: 'has',
  hunt: { title: 'At home', hint: 'egg',
    bgSvg: '<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%"><defs><linearGradient id="wl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6e0"/><stop offset="1" stop-color="#fbe2b6"/></linearGradient><linearGradient id="fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9a873"/><stop offset="1" stop-color="#a8714a"/></linearGradient><linearGradient id="wsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc8f2"/><stop offset="1" stop-color="#d4f1ff"/></linearGradient></defs>'
      + '<rect width="160" height="62" fill="url(#wl)"/><rect y="62" width="160" height="28" fill="url(#fl)"/><g stroke="#8d5b3a" stroke-width=".35" opacity=".55"><path d="M0 69 H160 M0 77 H160 M0 85 H160 M20 62 V69 M70 69 V77 M120 62 V69 M40 77 V85 M100 77 V85 M140 85 V90"/></g><rect y="60.5" width="160" height="2" fill="#e9c46a"/>'
      + '<rect x="30" y="8" width="30" height="24" fill="url(#wsk)" stroke="#fff" stroke-width="1.6"/><path d="M45 8 V32 M30 20 H60" stroke="#fff" stroke-width="1"/><path d="M26 6 h7 v28 q-3.5 2 -7 0z" fill="#f28482"/><path d="M57 6 h7 v28 q-3.5 2 -7 0z" fill="#f28482"/><rect x="25" y="5" width="40" height="1.4" rx=".7" fill="#8b5a2b"/>'
      + '<circle cx="14" cy="22" r=".9" fill="#8b5a2b"/>'
      + '<rect x="66" y="27" width="32" height="1.8" fill="#8b5a2b"/><path d="M68 28.8 l1.5 3 M96 28.8 l-1.5 3" stroke="#8b5a2b" stroke-width=".8"/>'
      + '<rect x="58" y="55" width="34" height="2.2" fill="#8b5a2b"/><rect x="60" y="57" width="2" height="15" fill="#7f5539"/><rect x="88" y="57" width="2" height="15" fill="#7f5539"/>'
      + '<rect x="108" y="6" width="48" height="18" fill="#f1f3f5" stroke="#ced4da" stroke-width=".5"/><path d="M124 6 V24 M140 6 V24" stroke="#ced4da" stroke-width=".5"/><g fill="#adb5bd"><rect x="121" y="19" width="1.5" height="3"/><rect x="126" y="19" width="1.5" height="3"/><rect x="137" y="19" width="1.5" height="3"/><rect x="142" y="19" width="1.5" height="3"/></g>'
      + '<rect x="104" y="44" width="56" height="3" fill="#adb5bd"/><rect x="104" y="47" width="56" height="25" fill="#f8f9fa" stroke="#ced4da" stroke-width=".5"/><path d="M118 47 V72 M132 47 V72 M146 47 V72" stroke="#ced4da" stroke-width=".5"/><g fill="#adb5bd"><rect x="115" y="56" width="1.5" height="4"/><rect x="120" y="56" width="1.5" height="4"/><rect x="143" y="56" width="1.5" height="4"/><rect x="148" y="56" width="1.5" height="4"/></g>'
      + '<ellipse cx="68" cy="82" rx="20" ry="5.5" fill="#90be6d"/><ellipse cx="68" cy="82" rx="15" ry="3.8" fill="none" stroke="#f9f7f3" stroke-width=".6" stroke-dasharray="2 1.5"/></svg>',
    items: [
      { w: 'sun', x: 23, y: 14, s: 5 },
      { w: 'bird', x: 32, y: 24, s: 4 },
      { w: 'dress', x: 9, y: 33, s: 7, t: 1 },
      { w: 'elephant', x: 45, y: 25.5, s: 5, t: 1 },
      { w: 'book', x: 52, y: 25.5, s: 4.5 },
      { w: 'clock', x: 58, y: 25.5, s: 4.5 },
      { w: 'bed', x: 18, y: 76, s: 20, t: 1 },
      { w: 'teddy', x: 21, y: 71, s: 6, t: 1 },
      { w: 'socks', x: 36, y: 90, s: 5 },
      { w: 'pen', x: 42, y: 57.5, s: 4, t: 1 },
      { w: 'envelope', x: 51, y: 56.5, s: 5.5, t: 1 },
      { w: 'cat', x: 44, y: 86, s: 7 },
      { w: 'egg', x: 68, y: 44.5, s: 5, t: 1 },
      { w: 'eggplant', x: 74.5, y: 43.7, s: 6, t: 1 },
      { w: 'lemon', x: 81, y: 45, s: 4.5, t: 1 },
      { w: 'melon', x: 88, y: 43.2, s: 6.5, t: 1 },
      { w: 'banana', x: 95.5, y: 45.5, s: 4 }
    ] },
  listen: { words: ['egg', 'elephant', 'envelope', 'bed', 'pen', 'teddy', 'lemon', 'melon'], other: 'dog' },
  spot: { letters: 'e', pos1: 'middle', pos2: 'start',
    first: ['bed', 'hen', 'pet', 'ten', 'net', 'red', 'leg', 'peg', 'pen', 'men', 'wet', 'get'],
    second: ['egg', 'end', 'elf', 'elk'],
    other: ['cat', 'dog', 'pig', 'sun', 'map', 'cup', 'mud', 'log', 'top', 'tin', 'rug', 'fan', 'hat', 'pot', 'bus'] }
};
