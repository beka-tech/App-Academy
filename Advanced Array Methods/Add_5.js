const nums = [10, 20, 30, 40];

const num = nums.map(function (num) {
  return num + 5;
});

// OR

const num2 = nums.map((num) => num + 4);

console.log(num2);

console.log(num);
