const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return value;
    }
  }
};
const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};
console.log(Object.keys(bestTVShowsByGenre));

assertEqual(findKeyByValue(bestTVShowsByGenre, 'the Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
