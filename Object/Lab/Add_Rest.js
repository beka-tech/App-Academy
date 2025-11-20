function addNumbers(...nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  return sum;
}

console.log(addNumbers(1, 2, 3, 4)); // Total: 10
