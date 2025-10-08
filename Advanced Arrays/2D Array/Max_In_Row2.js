function maxrow(matrix) {
  // your code here...
  let newval = [];
  for (let row = 0; row < matrix.length; row++) {
    let maxVal = matrix[row][0];
    for (let col = 1; col < matrix[row].length; col++) {
      if (matrix[row][col] > maxVal) {
        maxVal = matrix[row][col];
      }
    }
    newval.push(maxVal);
  }
  return newval;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxrow(matrix)); // [21,19,15]
