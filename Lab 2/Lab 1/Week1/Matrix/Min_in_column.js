function minColumn(matrix) {
  // your code here...
  let minCol = [];
  for (let col = 0; col < matrix[0].length; col++) {
    // let minval = matrix[0][col];
    let minval = Infinity;
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col] < minval) {
        minval = matrix[row][col];
      }
    }
    minCol.push(minval);
  }
  return minCol;
}

let matrix1 = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(minColumn(matrix1)); // [5, 9, 6]
