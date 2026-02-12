function sumRange(a, b) {
  if (a >= b) {
    return null;
  }
  return a + sumRange(a + 1, b);
}

sumRange(1, 5); // 1 + 2 + 3 + 4 = 10

console.log(sumRange(1, 5));
console.log(sumRange(3, 2));
