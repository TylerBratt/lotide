const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  // set empty object
  let result = {};
  // Loop through each letter of the string
  for (let letter of string) {
    // if the letter index is a space, don't count it
    if (letter !== ' ') {
      // if the letter exist in the object add 1 to it
      if (result[letter]) {
        result[letter]++;
        // if not, set letter equal to 1
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters('gargantuan purple platypus'));
