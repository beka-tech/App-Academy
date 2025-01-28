function doubler(array) {
  // your code here...
  let i = 0;
  while (i < array.length) {
    console.log(2 * array[i]);
    i++;
  }
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]

function doubler2(array2) {
  for (let i = 0; i < array2.length; i++) {
    console.log(2 * array2[i]);
  }
}

console.log(doubler2([7, 1, 8])); // => [14, 2, 16]
