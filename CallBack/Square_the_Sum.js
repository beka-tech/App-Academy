let add = function (num1, num2, callback) {
  let sum = num1 + num2;
  return callback(sum);
};

let square = (num) => num * num;
console.log(add(3, 4, square));
