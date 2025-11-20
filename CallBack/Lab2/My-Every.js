function myEvery(arr, cb) {
  for (let el of arr) {
    if (!cb(el)) {
      // if callback result is false
      return false; // stop early
    }
  }
  return true;
}

console.log(myEvery([2, 4, 6], (n) => n % 2 === 0)); //
console.log(myEvery([2, 3, 6], (n) => n % 2 === 0)); //
console.log(myEvery([3, 3, 3], (n) => n % 2 === 0)); //
console.log(myEvery([2, 2, 2], (n) => n % 2 === 0)); //
