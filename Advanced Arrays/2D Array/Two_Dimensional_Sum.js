// your code here
let twoDimensionalSum = function (arr1) {
  let new_sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      new_sum += arr1[i][j];
    }
  }
  return new_sum;
};

let arr1 = [[1, 3], [-4, 7, 10], [2]];
console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [[], [3, 1, 2]];
// console.log(twoDimensionalSum(arr2)); // 6
