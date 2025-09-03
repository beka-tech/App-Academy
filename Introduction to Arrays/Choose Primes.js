// your code here
function choosePrimes(arrays) {
  let isPrime = function (nums) {
    for (let i = 2; i < nums.length; i++) {
      let num = nums[i];

      if (num % i === 0) {
        return false;
      }
      return true;
    }
  };
  let prime = [];
  for (let i = 0; i < arrays.length; i++) {
    let nums = arrays[i];

    if (isPrime(nums)) {
      prime.push(nums);
    }
  }
  return prime;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
