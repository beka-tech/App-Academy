function flatten(arr) {
  return arr.flat(Infinity);
}

flatten([]); // []
flatten([1, 2]); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
