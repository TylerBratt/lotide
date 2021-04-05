const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays([1, 2, 3], [1, 7, 3]), true); // => true)
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);