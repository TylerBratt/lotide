const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
assertEqual(words.length, 3);
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');