function maxColumn(matrix) {
  // your code here...
  let newarr = [];
  for (let i = 0; i < matrix.length; i++) {
    let max = -Infinity;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
    newarr.push(max);
  }
  return newarr;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
