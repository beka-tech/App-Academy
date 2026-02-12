function bindToAnArg(func, arg) {
  // Your code here
  return func.bind(null, arg);
}

function add(num1, num2) {
  return num1 + num2;
}

const addTwo = bindToAnArg(add, 2);
const addThree = bindToAnArg(add, 3);

const twoPlusSix = addTwo(6);
const twoPlusSeven = addTwo(7);
const threePlusSeven = addThree(7);
const threePlusEight = addThree(8);
console.log({
  twoPlusSix, // => 8
  twoPlusSeven, // => 9
  threePlusSeven, // => 10
  threePlusEight, // => 11
});

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
