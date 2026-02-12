/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.

Examples:

*******************************************************************************/

let myFilter = function (array, cb) {
  let newVal = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i]) == true) {
      newVal.push(array[i]);
    }
  }
  return newVal;
};

function ForResult1(n) {
  return n % 2 === 0;
}

let result1 = myFilter([5, 7, 4, 3, 8], ForResult1);
console.log(result1); // [ 4, 8 ]

let result2 = myFilter(["choose", "big", "words", "only"], function (s) {
  return s.length > 3;
});
console.log(result2); // ['choose', 'words', 'only']

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myFilter;
