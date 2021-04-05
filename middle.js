
const middle = function(array1) {
  let middleNumber = Math.floor(array1.length / 2);
  if (array1.length < 3) {
    return [];
  } else if (array1.length % 2 !== 0) {
    return [array1[middleNumber]];
  } else {
    return [array1[middleNumber - 1], array1[middleNumber]];
  }
};

module.exports = middle;
