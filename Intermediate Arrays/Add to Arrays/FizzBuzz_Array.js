// your code here
function fizzBuzz(num1) {
  let num = [];
  for (let i = 0; i < num1; i++) {
    if ((i % 3 === 0) ^ (i % 5 === 0)) {
      num.push(i);
    }
  }
  return num;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
