/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

***********************************************************************/

// your code here

function range(a, b, arr = []) {
  if (a >= b) {
    return arr;
  }
  arr.push(a);

  return range(a + 1, b, arr);
}

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
