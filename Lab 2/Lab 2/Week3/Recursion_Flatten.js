function flatten(arr) {
  let result = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(...flatten(i)); // recursive call
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
