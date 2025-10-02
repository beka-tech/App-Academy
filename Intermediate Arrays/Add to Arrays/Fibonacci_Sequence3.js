// Your code here

let fibonacciSequence = function (nums) {
  let seq = [];

  if (nums <= 0) return [];
  if (nums === 1) return [1];

  for (let i = 2; i < nums; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
};

console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0)); // [ ]
console.log(fibonacciSequence(1)); // [ 1 ]
console.log(fibonacciSequence(2)); // [ 1, 1 ]
