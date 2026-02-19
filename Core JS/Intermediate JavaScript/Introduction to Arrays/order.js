function moveZeroes(nums) {
  // 1. Set a pointer to the last element in the array.
  let last = nums.length - 1;

  // 2. Walk through each element of the array.
  for (let i = 0; i < last; i++) {
    // 3. If the element is zero,
    if (nums[i] == 0) {
      // swap its position with the element at the pointer
      [nums[i], nums[last]] = [nums[last], nums[i]];

      // then decrement the pointer.
      last--;
    }
  }

  return nums;
}

console.log(moveZeroes[(0, 1, 0, 3, 12)]);
