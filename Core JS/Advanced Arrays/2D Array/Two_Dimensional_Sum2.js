// your code here
let twoDimensionalSum = function (array) {
  let sum = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
};

let arr1 = [[1, 3], [-4, 7, 10], [2]];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [[], [3, 1, 2]];
console.log(twoDimensionalSum(arr2)); // 6
