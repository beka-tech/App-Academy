// your code here
let maxValue = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > max) {
      max = num;
    }
  }
  return max;
};

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null
