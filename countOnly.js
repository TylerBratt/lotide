const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let results = {};
  // Loops through every index of allItems
  for (let item of allItems) {
    // console.log(item);
    // if itesmToCount has the same item push to results
    if (itemsToCount[item]) {
      // console.log(itemsToCount[item]);
      //if the index exsists in the object add one instance
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  // console.log(results);
  return results;
};

const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

console.log(countOnly(firstNames, result1));
