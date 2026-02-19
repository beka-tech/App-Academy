// Your code here
function dynamicFizzBuzz(max, num1, num2) {
  for (let i = num1; i < max; i++) {
    if ((i % num1 === 0) ^ (i % num2 === 0)) {
      console.log(i);
    }
  }
  return " _ ";
}

console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]
