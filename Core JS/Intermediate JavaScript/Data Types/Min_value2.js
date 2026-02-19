// your code here

function minValue(nums) {
  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null
