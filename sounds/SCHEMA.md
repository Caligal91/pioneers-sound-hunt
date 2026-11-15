# Game data for one sound: sounds/<key>.js   (used by index.html Sound Hunt, listen.html, spot.html via ?sound=<key>)
window.SOUND_DATA = {
  key: 'i', label: 'i',
  rule: 'start',                  // start | end | has   (Sound Hunt + Listen wording: "start with" / "end with" / "have")
  say: { 'bow and arrow': 'arrow' },   // optional: what the voice says for a picture when it differs from the picture name
  hunt: { title: 'In the snow', bg: 'beach'|'park'|'town'|'farm', hint: 'igloo',
          // optional bgSvg: '<svg viewBox="0 0 160 90" preserveAspectRatio="none" width="100%" height="100%">...</svg>' for a custom scene
          items: [ { w: 'igloo', x: 30, y: 60, s: 9, t: 1, flip: 0 }, ... ] },   // x,y = centre in %, s = width %, t:1 = target. 8-10 targets + 6-9 others, placed where they belong
  listen: { words: [8 words with the sound], other: 'cat' },       // pictures img3d/<word>.png
  spot: { letters: 'i', pos1: 'start', pos2: 'middle',             // pos: start | middle | end
          first: [>=6 words with letters at pos1], second: [>=4 at pos2], other: [>=10 words with the letters at neither place] }
};
// Files needed: img3d/<slug>.png for every picture (tools/fluent.py), voice-au clips (tools/clips.py):
//   w-<slug> for every hunt picture (or its say-name), listen word and spot word; f-<slug> "Find the X." for listen words;
//   intro-<key> "Find all the things that start with the letter I. Like igloo!"; q-start-<key> / q-mid-<key> / q-end-<key>
//   e.g. "Which word starts with the letter I?"  "Which word has the letters E E in the middle?"
// Spot words must be decodable for the child at that point where possible (CVC words) and every word needs a w- clip that passed STT.
