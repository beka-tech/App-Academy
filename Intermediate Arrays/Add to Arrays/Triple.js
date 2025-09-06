// your code here
let tripler = function (numbers) {
  let num = [];
  let i = 0;
  while (i < numbers.length) {
    let number = numbers[i];
    number *= 3;
    num.push(number);
    i++;
  }
  return num;
};

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
