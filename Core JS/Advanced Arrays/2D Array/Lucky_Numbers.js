function luckyNumbers(matrix) {
  // your code here...
  let cols = [];
  for (let row = 0; row < matrix.length; row++) {
    let minrow = matrix[row][0];
    if (matrix[row] < minrow) {
      minrow = matrix[row];
    }
    cols.push(minrow);
  }

  return cols;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(luckyNumbers(matrix)); // [12]
