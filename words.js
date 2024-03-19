let dictionary = new Map();
dictionary.set('partner', 'pardner');
dictionary.set('hi', 'howdy');
dictionary.set('hello', 'howdy');
dictionary.set('man', 'cowboy');
dictionary.set('woman', 'cowgirl');
dictionary.set('dude', 'pilgrim');
dictionary.set('cranky', 'ornery');
dictionary.set('food', 'grub');
dictionary.set('horse', 'Bluster the Gigantic Horse');
dictionary.set('historically', "howdystorically");
dictionary.set('hat', 'cowboy hat')

let tempArray = Array.from(dictionary);
tempArray.sort((pair1, pair2) => {
  // Each pair is an array with two entries: a word, and its emoji.
  // Ex: ['woman', '👩']
  const firstWord = pair1[0];
  const secondWord = pair2[0];

  if (firstWord.length > secondWord.length) {
    // The first word should come before the second word.
    return -1;
  }
  if (secondWord.length > firstWord.length) {
    // The second word should come before the first word.
    return 1;
  }

  // The words have the same length, it doesn't matter which comes first.
  return 0;
});

// Now that the entries are sorted, put them back into a Map.
let sortedWords = new Map(tempArray);