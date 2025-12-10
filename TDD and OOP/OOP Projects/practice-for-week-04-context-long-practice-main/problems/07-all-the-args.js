function allTheArgs(func, ...args) {
  // Your code here

  return func.bind(null, ...args);
}
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

const onePlusTwo = allTheArgs(sum, 1, 2);

const onePlusTwoPlusThree = onePlusTwo(3);
const onePlusTwoPlusFour = onePlusTwo(4);

console.log(onePlusTwoPlusThree); // => 6
console.log(onePlusTwoPlusFour); // => 7

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
