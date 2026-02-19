// Your code here
function firstAndLast(nums) {
  if (nums.length % 2 === 0) {
    return nums[0] + nums[nums.length - 1];
  } else {
    return nums[0] - nums[nums.length - 1];
  }
}

console.log(firstAndLast([1, 2, 3, 4])); // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5])); // 17
console.log(firstAndLast([12])); // 0
console.log(firstAndLast([7, 11, 3])); // 4
