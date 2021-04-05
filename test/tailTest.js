// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');
const result = tail(['Hello', 'Lighthouse', 'Labs']);

describe('#tail', () => {
  it('should return 3 for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), 3);
  });
  it('should return Labs for result', () => {
    assert.deepEqual(tail[result]), ['Labs'];
  });
});
