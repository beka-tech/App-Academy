function doubler(array) {
  let doubled = [];

  for (let i = 0; i < array.length; i++) {
    num = array[i];
    doubled.push(num * 2);
  }
  return doubled;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
