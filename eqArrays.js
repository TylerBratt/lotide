
//Crreate a function that passes 2 args
const eqArrays = function(array1, array2) {
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
module.exports = eqArrays;
