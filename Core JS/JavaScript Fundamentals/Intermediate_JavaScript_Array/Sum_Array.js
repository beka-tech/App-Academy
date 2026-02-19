function sumArray(array) {
  // your code here...
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    sum *= element;
  }
  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
