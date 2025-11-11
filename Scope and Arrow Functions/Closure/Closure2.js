function multiplier(factor) {
  let n = factor;
  return () => Number * n;
}
let twice = multiplier(2);
console.log(twice(5));
console.log(twice(5));
