function maxRow(matrix) {
  let max = [];

  for (let row = 0; row < matrix.length; row++) {
    let maxVal = matrix[row][0]; // start with first element in the row

    for (let col = 1; col < matrix[row].length; col++) {
      if (matrix[row][col] > maxVal) {
        maxVal = matrix[row][col];
      }
    }

    max.push(maxVal); // store biggest value from this row
  }

  return max;
}

let matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxRow(matrix)); // [21, 19, 15]
