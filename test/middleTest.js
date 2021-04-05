const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe('#middle', () => {
  it('should return 2 for [1, 2, 3]', () => {
    assertArraysEqual(middle([1, 2, 3]), 2);
  });
  it('should return 3, 4 for [1, 2, 3, 4, 5, 6]', () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), 3, 4);
  });
});

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);