const assertArrayEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🍀🍀🍀 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function (array1, array2) {
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

const takeUntil = function (array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};
const players = [3, 8, 11, 16, 34, 44, 65, 88, 91];
const result1 = takeUntil(players, (player) => player < 50);
// assertArrayEqual(result1, [65, 88, 91]);
console.log(result1);

console.log('-----');

const words = ['Great', '!', "I'd", 'like', 'your', '$8-est', 'bottle', 'of', 'wine', ',', 'please.'];
const result2 = takeUntil(words, (word) => word === 'wine');
// assertArrayEqual(result2, ['Great', '!', "I'd", 'like', 'your', '$8-est', 'bottle', 'of']);
console.log(result2);
