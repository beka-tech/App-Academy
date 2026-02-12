function exponent(b, n) {
  // your code here
  if (n === 0) {
    return 1;
  }
  return b * exponent(b, n - 1);
}

console.log(exponent(3, 2));
console.log(exponent(4, 3));
