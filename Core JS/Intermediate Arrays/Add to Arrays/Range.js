// your code here
let evenNumbers = function (nums) {
  let num = [];
  for (let i = 1; i < nums; i++) {
    if (i % 2 === 0) {
      num.push(i);
    }
  }
  return num;
};

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
