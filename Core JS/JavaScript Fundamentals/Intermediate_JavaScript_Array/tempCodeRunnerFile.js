let isPrime = function (num) {
  if (num < 2) return false;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let Prime = function (numbers) {
  let primes = [];
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
};

console.log(Prime([36, 48, 9, 13, 19])); // [13, 19]
console.log(Prime([5, 6, 4, 11, 2017])); // [5, 11, 2017]
