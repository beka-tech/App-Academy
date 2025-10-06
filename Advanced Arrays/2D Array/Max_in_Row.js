function maxRow(matrix) {
  // your code here...
  let max = [];
  for (let row = 0; row < matrix.length; row++) {
    let maxVal = matrix[row][0];
    for (let col = 1; col < matrix.length; col++) {
      if (matrix[row][col] > maxVal) {
        maxVal = matrix[row][col];
      }
    }
    max.push(maxVal);
  }
  return max;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxRow(matrix)); // [21, 19, 15]
