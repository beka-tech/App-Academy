// Use filter() to keep numbers greater than 10.

// Then use map() to multiply them by 2.

const numbers = [3, 7, 10, 15, 20];

let maxNums = numbers.filter((num) => num > 10);

let multiplyNums = maxNums.map(function (nums) {
  return nums * 2;
});

console.log(multiplyNums);
