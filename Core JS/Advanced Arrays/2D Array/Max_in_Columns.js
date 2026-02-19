function maxColumn(matrix) {
  let result = [];

  // number of columns is matrix[0].length
  for (let col = 0; col < matrix[0].length; col++) {
    let maxVal = matrix[0][col]; // start with first row in this column
    for (let row = 1; row < matrix.length; row++) {
      if (matrix[row][col] > maxVal) {
        maxVal = matrix[row][col];
      }
    }
    result.push(maxVal);
  }

  return result;
}

let matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
