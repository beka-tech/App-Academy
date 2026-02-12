function multiplier(factor) {
  let n = factor;
  return (x) => x * n; // correct multiplication
}

let twice = multiplier(2);
console.log(twice(5));
console.log(twice(5));
