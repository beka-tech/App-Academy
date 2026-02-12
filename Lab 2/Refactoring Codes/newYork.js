const checkOddElements = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] % 2 === 1 ? true : false);
  }

  return result;
};
console.log(checkOddElements([5, 2, 3, 6, 4, 1]));
