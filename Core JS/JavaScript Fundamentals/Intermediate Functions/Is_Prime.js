// your code here
let isPrime = function (num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let choosePrimes = function (number) {
  let Prime = [];
  for (let i = 0; i < number.length; i++) {
    let num = number[i];
    if (isPrime(num)) {
      Prime.push(num);
    }
  }
  return Prime;
};

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
