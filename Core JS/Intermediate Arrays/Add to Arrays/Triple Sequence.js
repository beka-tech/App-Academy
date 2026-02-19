function tripleSequence(start, length) {
  // your code here
  let nums = [];
  for (let i = 0; i < length; i++) {
    nums.push(start);
    start *= 3;
  }
  return nums;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
