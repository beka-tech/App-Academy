const arr = [5, 1, 3, 2, 6];

let red = arr.reduce((acc, curr) => {
  if (acc > curr) {
    acc = curr;
  }
  return acc;
}, Infinity);

console.log(red);
