const assertArrayEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  console.log('string...', array2);
  //if the arrays are of different length - this cannot be true
  if (array1.length !== array2.length) {
    return false;
  }
  //Loop through the arrays' length
  for (let i = 0; i < array1.length; i++) {
    //If an indexed value is not the same in the other array - this cannot be true
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //if all other tests fail - the arrays must be equal
  return true;
};

const without = function (source, itemsToRemove) {
  let newArray = [];
  //loop through source array
  for (let i = 0; i < source.length; i++) {
    //reads itemsToRemove[i] to see if it's included in the source array.
    if (!itemsToRemove.includes(source[i])) {
      //adding unique [i] to newArray
      newArray.push(source[i]);
    }
  }
  return newArray;
};
const words = ['flowers', 'car', 'stereo'];
// console.log(without(words, ['flowers']));
console.log(assertArrayEqual(words, ['flowers', 'car', 'stereo']));
console.log(without([1, 2, 3], [2, 3]));
