/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

***********************************************************************/

// your code here

function flatten(arr) {
  let newArray = [];

  for (let val of Object.values(arr)) {
    if (Array.isArray(val)) {
      newArray = newArray.concat(flatten(val));
    } else {
      newArray.push(val);
    }
  }
  return newArray;
}

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
