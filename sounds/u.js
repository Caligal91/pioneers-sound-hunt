/* u: short u in the word (up, bus, sun). Pioneers Tutoring. */
window.SOUND_DATA = {
  key: 'u', label: 'u', rule: 'has',
  hunt: { title: 'In town', bg: 'town', hint: 'umbrella',
    items: [
      { w: 'sun', x: 32, y: 8, s: 7, t: 1 },
      { w: 'cloud', x: 48, y: 7, s: 8 },
      { w: 'train', x: 66, y: 15, s: 10 },
      { w: 'drum', x: 11, y: 33, s: 6, t: 1 },
      { w: 'book', x: 30, y: 33, s: 5 },
      { w: 'gift', x: 71, y: 33, s: 5 },
      { w: 'mug', x: 90, y: 34, s: 5, t: 1 },
      { w: 'bike', x: 22, y: 50, s: 6 },
      { w: 'umbrella', x: 40, y: 48, s: 6, t: 1 },
      { w: 'dog', x: 58, y: 50, s: 6 },
      { w: 'bus', x: 25, y: 66, s: 10, t: 1 },
      { w: 'car', x: 50, y: 66, s: 8 },
      { w: 'truck', x: 76, y: 66, s: 10, t: 1, flip: 1 },
      { w: 'mushroom', x: 10, y: 87, s: 5, t: 1 },
      { w: 'cat', x: 25, y: 88, s: 6 },
      { w: 'bug', x: 40, y: 88, s: 4, t: 1 },
      { w: 'bucket', x: 56, y: 88, s: 5, t: 1 },
      { w: 'duck', x: 74, y: 90, s: 6, t: 1 }
    ] },
  listen: { words: ['bus', 'sun', 'duck', 'truck', 'umbrella', 'drum', 'bug', 'mushroom'], other: 'cat' },
  spot: { letters: 'u', pos1: 'middle', pos2: 'start',
    first: ['bus', 'cup', 'mud', 'sun', 'nut', 'bug', 'rug', 'hug', 'mug', 'cut', 'gum', 'tub'],
    second: ['up', 'upset', 'unpack', 'until', 'under'],
    other: ['cat', 'dog', 'pig', 'map', 'bed', 'hen', 'top', 'tin', 'pot', 'fan', 'hat', 'log', 'red', 'pen', 'net'] }
};
