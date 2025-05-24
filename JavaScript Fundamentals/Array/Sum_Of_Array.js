function Sum_Of_Array(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum); // Optional: logs running total

  //return sum;
}

console.log(Sum_Of_Array([1, 2, 3, 4, 5]));
