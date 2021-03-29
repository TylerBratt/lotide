const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
const tail = function (word) {
  let newArray = [];
  for (let i = 1; i < word.length; i++) {
    newArray.push(word[i]);
  }
  return newArray;
};

tail(words);
assertEqual(words.length, 3);
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
