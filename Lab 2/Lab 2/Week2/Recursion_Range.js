function range(a, b, arr = []) {
  if (a >= b) {
    return arr;
  }
  arr.push(a);
  return range(a + 1, b, arr);
}

console.log(range(1, 5)); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
