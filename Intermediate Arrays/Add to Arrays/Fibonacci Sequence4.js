let fibonacciSequence = function (n) {
  let a = 0;
  let b = 1;
  let fib = [];
  let count = 0;

  while (count < n) {
    fib.push(b);
    let temp = b;
    b = a + b;
    a = temp;
    count++;
  }

  return fib;
};

console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0)); // [ ]
console.log(fibonacciSequence(1)); // [ 1 ]
console.log(fibonacciSequence(2)); // [ 1, 1 ]
