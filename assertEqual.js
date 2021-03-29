/* eslint-disable space-before-function-paren */
//FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('🍀🍀🍀 Assertion Passed:' + `${actual}` + ' === ' + `${expected}`);
  } else {
    console.log('🤬🤬🤬 Assertion Failed:' + `${actual}` + ' !== ' + `${expected}`);
  }
};

//TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual('Cat', 'Cat');
assertEqual(1, 1);
assertEqual(1, 3);
