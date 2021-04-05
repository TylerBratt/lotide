const assertEqual = require('./assertEqual');

const head = function(actual) {
  for (let i = 0; i < actual.length - 1; i++) {
    return actual[0];
  }
};

module.exports = head;
