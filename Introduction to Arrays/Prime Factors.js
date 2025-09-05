let isPrime = function (n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return true;
    }
  }

  return false;
};

let primeFactors = function (num) {
  let i = num;
  while (true) {
    i--;
    if (isPrime(i)) {
      return i;
    }
  }
};

console.log(primeFactors(12)); // [2, 3]
console.log(primeFactors(7)); // [7]
console.log(primeFactors(16)); // [2]
console.log(primeFactors(30)); // [2, 3, 5]
console.log(primeFactors(35)); // [5, 7]
console.log(primeFactors(49)); // [7]
console.log(primeFactors(128)); // [2]
