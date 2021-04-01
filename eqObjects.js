const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  // set keys of object1 to array
  const firstArray = Object.keys(object1);
  // set keys of object2 to array
  const secondArray = Object.keys(object2);
  // compare lengths of arrays, if they're not the same return false
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  // Loop throught the array keys
  for (let key of firstArray) {
    // if the key is in the first array and in the second array
    if (Array.isArray(firstArray[key]) && Array.isArray(secondArray[key])) {
      // If the arrays are not equal return false
      if (!eqArrays(firstArray[key], secondArray[key])) {
        return false;
      }
    }
  }
  return true;
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

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(assertEqual(eqObjects(ab, ba), true));
const abc = { a: '1', b: '2', c: '3' };
console.log(assertEqual(eqObjects(ab, abc), false));
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
console.log(assertEqual(eqObjects(cd, dc), true));
const cd2 = { c: '1', d: ['2', 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false));
