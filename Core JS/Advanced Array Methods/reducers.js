const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum); // Output: 15
