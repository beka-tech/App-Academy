let greatResult = function (num, callback1, callback2) {
  let result = callback1(num);
  let result2 = callback2(num);
  return `${result} ${result2}`;
};

let doubler = function (n) {
  return n * 2;
};

let squarer = function (n) {
  return n * n;
};

console.log(greatResult(5, doubler, squarer));
console.log(greatResult(4, doubler, squarer));
