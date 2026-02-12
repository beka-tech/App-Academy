function flattenArray(arr) {
  let sum = [];
  return (sum += arr.reduce((acc, curr) => {
    // If the current element is an array, flatten it recursively
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    } else {
      // Otherwise, just add the element to the accumulator
      return acc.concat(curr);
    }
  }, []));
}

console.log(flattenArray([10, [20, [30, [40, 50]]]]));
// Output: [10, 20, 30, 40, 50]
