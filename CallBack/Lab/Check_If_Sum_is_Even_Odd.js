let add = function (num1, num2, callback) {
  let sum = num1 + num2;
  return callback(sum);
};

let isEven = (n) => (n % 2 === 0 ? "even" : "odd");
console.log(add(5, 6, isEven));
console.log(add(4, 6, isEven));
console.log(add(7, 6, isEven));
