const tail = function(word) {
  let newArray = [];
  for (let i = 1; i < word.length; i++) {
    newArray.push(word[i]);
  }
  return newArray;
};

module.exports = tail;
