// your code here

function minValue(nums) {
  let min = null;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (min === null || num < min) {
      min = num;
    }
  }
  return min;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null
