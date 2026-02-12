function adder(...num1) {
  let sum = 0;

  for (let n of num1) {
    sum += n;
  }
  return sum;
}

console.log(adder(2, 3, 4));
console.log(adder(1, 5, 19, 100, 13));
