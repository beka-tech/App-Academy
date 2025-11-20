let add = function (num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

let double = function (num) {
  return num * 2;
};
let negate = function (num) {
  return num - 1;
};

console.log(add(2, 3, double)); // 10
console.log(add(2, 9, negate)); // 10
