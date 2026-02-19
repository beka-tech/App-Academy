function FindMax(number) {
  let max = number[0]; // Start with the first number as the maximum

  for (let i = 1; i < number.length; i++) {
    if (number[i] > max) {
      max = number[i];
    }
  }
  return max;
}

console.log(FindMax([3, 9, 20, 20, 4])); // Output: 20
