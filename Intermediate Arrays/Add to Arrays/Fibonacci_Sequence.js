// Your code here
let fibonacciSequence = function (n) {
  let a = 1;
  let b = 1;
  let c = 0;
  let fib = [];

  while (c < n) {
    fib.push(a);
    let temp = b;
    b = b + a;
    a = temp;
    c += 1;
  }
  return fib;
};

console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0)); // [ ]
console.log(fibonacciSequence(1)); // [ 1 ]
console.log(fibonacciSequence(2)); // [ 1, 1 ]
