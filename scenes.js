/* Sound Hunt scenes: each picture is placed where it belongs in the scene.
   x/y = centre position in % of the scene, w = width in % of the scene width, t = 1 for a target (starts with the sound).
   flip = mirror the picture. © Pioneers Tutoring */
window.SOUND_HUNT_SCENES = {
  s: {
    label: 's', hint: 'sun', title: 'At the beach',
    bg: 'beach',
    items: [
      // sky
      { w: 'sun', x: 47, y: 8, s: 8, t: 1 },
      { w: 'cloud', x: 27, y: 7, s: 8 },
      { w: 'bird', x: 66, y: 9, s: 5 },
      // on the water
      { w: 'sailboat', x: 18, y: 18, s: 9, t: 1 },
      { w: 'surfer', x: 58, y: 20, s: 8, t: 1 },
      { w: 'seal', x: 37, y: 25, s: 8, t: 1 },
      // in the water
      { w: 'swimmer', x: 68, y: 33, s: 8, t: 1 },
      { w: 'whale', x: 14, y: 40, s: 12, flip: 1 },
      { w: 'dolphin', x: 48, y: 42, s: 8 },
      { w: 'squid', x: 30, y: 55, s: 7, t: 1 },
      { w: 'fish', x: 63, y: 54, s: 6, flip: 1 },
      { w: 'snake', x: 47, y: 66, s: 7, t: 1 },
      { w: 'octopus', x: 12, y: 72, s: 8 },
      // sea floor
      { w: 'crab', x: 27, y: 87, s: 7 },
      { w: 'sponge', x: 45, y: 88, s: 6, t: 1 },
      // the beach (right side)
      { w: 'palm tree', x: 91, y: 27, s: 10 },
      { w: 'umbrella', x: 84, y: 51, s: 9 },
      { w: 'sunglasses', x: 79, y: 72, s: 6, t: 1 },
      { w: 'sandwich', x: 92, y: 74, s: 6, t: 1 }
    ]
  },
  a: {
    label: 'a', hint: 'apple', title: 'In the park',
    bg: 'park',
    items: [
      { w: 'cloud', x: 30, y: 8, s: 8 },
      { w: 'kite', x: 68, y: 14, s: 7 },
      { w: 'bird', x: 80, y: 12, s: 5 },
      // apple tree (left)
      { w: 'apple', x: 11, y: 30, s: 5, t: 1 },
      { w: 'butterfly', x: 26, y: 33, s: 5 },
      // road at the back
      { w: 'ambulance', x: 70, y: 38, s: 9, t: 1 },
      { w: 'car', x: 45, y: 39, s: 8, flip: 1 },
      // grass
      { w: 'acrobat', x: 38, y: 58, s: 8, t: 1 },
      { w: 'dog', x: 57, y: 58, s: 8 },
      { w: 'bow and arrow', x: 88, y: 58, s: 7, t: 1 },
      { w: 'axe', x: 9, y: 70, s: 6, t: 1 },
      // pond (right)
      { w: 'duck', x: 78, y: 79, s: 6 },
      { w: 'anchor', x: 90, y: 84, s: 5, t: 1 },
      // picnic blanket (centre front)
      { w: 'avocado', x: 37, y: 83, s: 6, t: 1 },
      { w: 'ant', x: 47, y: 89, s: 5, t: 1 },
      { w: 'cake', x: 26, y: 84, s: 6 },
      { w: 'rabbit', x: 62, y: 84, s: 6 },
      { w: 'bee', x: 19, y: 52, s: 4 }
    ]
  },
  t: {
    label: 't', hint: 'tiger', title: 'In town',
    bg: 'town',
    items: [
      { w: 'cloud', x: 40, y: 7, s: 8 },
      // train on the bridge
      { w: 'train', x: 70, y: 15, s: 10, t: 1 },
      // shop windows / signs
      { w: 'teddy', x: 14, y: 33, s: 6, t: 1 },
      { w: 'gift', x: 25, y: 34, s: 5 },
      { w: 'tooth', x: 47, y: 30, s: 5, t: 1 },
      { w: 'book', x: 82, y: 33, s: 5 },
      // footpath
      { w: 'trumpet', x: 60, y: 49, s: 6, t: 1 },
      { w: 'tomato', x: 36, y: 49, s: 5, t: 1 },
      { w: 'dog', x: 90, y: 50, s: 7 },
      // road
      { w: 'taxi', x: 22, y: 66, s: 9, t: 1 },
      { w: 'bus', x: 52, y: 66, s: 10 },
      { w: 'tractor', x: 82, y: 66, s: 9, t: 1, flip: 1 },
      // park in front
      { w: 'tent', x: 12, y: 87, s: 9, t: 1 },
      { w: 'cat', x: 31, y: 88, s: 6 },
      { w: 'tiger', x: 52, y: 87, s: 7, t: 1 },
      { w: 'turtle', x: 74, y: 89, s: 6, t: 1 },
      { w: 'house', x: 90, y: 85, s: 7 }
    ]
  },
  p: {
    label: 'p', hint: 'pig', title: 'On the farm',
    bg: 'farm',
    items: [
      { w: 'cloud', x: 33, y: 8, s: 8 },
      { w: 'bird', x: 55, y: 10, s: 5 },
      // tree (left) with parrot and pears
      { w: 'parrot', x: 18, y: 20, s: 6, t: 1 },
      { w: 'pear', x: 8, y: 33, s: 5, t: 1 },
      // farmhouse window
      { w: 'pie', x: 83, y: 35, s: 5, t: 1 },
      // field
      { w: 'horse', x: 40, y: 45, s: 9 },
      { w: 'cow', x: 60, y: 47, s: 9 },
      { w: 'peacock', x: 22, y: 55, s: 8, t: 1 },
      { w: 'chicken', x: 77, y: 58, s: 6 },
      // pig pen (front left)
      { w: 'pig', x: 12, y: 79, s: 8, t: 1 },
      { w: 'duck', x: 28, y: 85, s: 6 },
      // vegie patch (front right)
      { w: 'pumpkin', x: 50, y: 83, s: 7, t: 1 },
      { w: 'potato', x: 63, y: 87, s: 5, t: 1 },
      { w: 'carrot', x: 73, y: 85, s: 5 },
      { w: 'pineapple', x: 85, y: 82, s: 6, t: 1 },
      { w: 'sheep', x: 93, y: 62, s: 7 },
      { w: 'mouse', x: 39, y: 90, s: 4 }
    ]
  }
};
