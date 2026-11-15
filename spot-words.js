/* Spot the letter: word lists (Pioneers' own). For each letter:
   first = words that start with the letter, second = words with it at the end (or middle for a),
   other = words that have the letter nowhere at that place (used as wrong answers). © Pioneers Tutoring */
window.SPOT_WORDS = {
  s: { pos2: 'end',
       first:  ['sat', 'sad', 'sun', 'sit', 'set', 'sip', 'six', 'sock', 'sap', 'sum'],
       second: ['bus', 'yes', 'has', 'his', 'gas', 'kiss', 'mess', 'dress'],
       other:  ['pot', 'tap', 'bag', 'dad', 'fat', 'pig', 'peg', 'tub', 'pin', 'mat', 'ten', 'cap', 'map', 'dog', 'hen', 'cup', 'top', 'net', 'rat', 'bed', 'log', 'pan', 'tin'] },
  a: { pos2: 'middle',
       first:  ['at', 'and', 'ant', 'as', 'ask', 'add', 'apple'],
       second: ['cat', 'hat', 'mat', 'pan', 'tap', 'bag', 'dad', 'jam', 'ran', 'map', 'sat', 'fan'],
       other:  ['pot', 'sun', 'tip', 'pig', 'hen', 'cup', 'dog', 'bed', 'top', 'net', 'sit', 'mop', 'bus', 'log', 'tin', 'peg', 'ten'] },
  t: { pos2: 'end',
       first:  ['tap', 'tip', 'ten', 'tin', 'top', 'tub', 'tug', 'tag', 'tan'],
       second: ['cat', 'hat', 'sat', 'pet', 'sit', 'pot', 'net', 'hot', 'mat', 'pit', 'cut'],
       other:  ['sun', 'pig', 'bag', 'dog', 'hen', 'cup', 'map', 'bed', 'mop', 'pan', 'bus', 'log', 'jam', 'sip', 'dad', 'peg', 'fan', 'rub'] },
  p: { pos2: 'end',
       first:  ['pig', 'pan', 'pat', 'pen', 'pin', 'pot', 'peg', 'pet'],
       second: ['tap', 'cap', 'map', 'cup', 'top', 'mop', 'sip', 'hop', 'lip', 'dip'],
       other:  ['sun', 'cat', 'dog', 'hen', 'bed', 'bus', 'log', 'tin', 'hat', 'net', 'bag', 'jam', 'rat', 'fan', 'sit', 'ten', 'mud', 'red'] }
};
