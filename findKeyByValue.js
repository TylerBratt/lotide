const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  // an array of the ojects keys
  let keysArray = Object.keys(object);
  // console.log(keysArray);
  // loop through each key in that array
  for (let key of keysArray) {
    // if the objects is equal to the value
    if (object[key] === value) {
      // console.log(key);
      return key;
    }
  }
};
const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};
// console.log(Object.keys(bestTVShowsByGenre));

findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy';
findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined;
