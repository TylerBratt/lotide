const assertArrayEqual = function (array1, array2) {
  if (array1 === array2) {
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

const middle = function (array1) {
  let middleNumber = Math.floor(array1.length / 2);
  if (array1.length <= 2) {
    console.log([]);
  } else if (array1.length % 2 === 0) {
    console.log(`${array1[middleNumber - 1]} ${array1[middleNumber]}`);
  } else {
    console.log(array1[middleNumber]);
  }
};

middle([1, 2]);
