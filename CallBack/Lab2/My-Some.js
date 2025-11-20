function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (cb(el)) {
      return true;
    }
  }
  return false;
}

console.log(mySome([1, 3, 5, 8], (num) => num % 2 === 0)); // true
console.log(mySome([1, 3, 5], (num) => num % 2 === 0)); // false
