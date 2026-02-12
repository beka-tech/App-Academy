function countNested(arr) {
  let count = 0;
  for (let i of arr) {
    if (Array.isArray(i)) {
      count += 1;
    } else {
      count += 1;
    }
  }
  return count;
}

console.log(countNested([1, [2, [3, 4]], 5])); // 5
countNested([]); // 0
