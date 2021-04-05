const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'lighthouse', 'labs']), 'Hello');
assertEqual(head(['cat', 'dog', 'bird']), 'bird');