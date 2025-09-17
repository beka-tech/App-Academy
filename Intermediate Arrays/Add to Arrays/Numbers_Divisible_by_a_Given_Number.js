// Example function
function divisibleBy(numbers, divisor) {
  // Your code here
  let filteredNumber = [];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % divisor == 0) {
      filteredNumber.push(number);
    }
  }
  return filteredNumber;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
// [2, 4, 6]

console.log(divisibleBy([10, 15, 20, 25], 5));
// [10, 15, 20, 25]
