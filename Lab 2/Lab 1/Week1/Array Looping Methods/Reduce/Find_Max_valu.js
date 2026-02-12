const nums = [5, 8, 2, 10, 3];

const maxNum = nums.reduce(function (acc, current) {
  return current > acc ? current : acc;
}, -Infinity);

console.log(maxNum); // Output: 10
