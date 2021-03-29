const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (actual) {
  for (let i = 0; i < actual.length - 1; i++) {
    return actual[0];
  }
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'lighthouse', 'labs']), 'Hello');
assertEqual(head(['cat', 'dog', 'bird']), 'bird');
