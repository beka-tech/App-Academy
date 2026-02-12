function maxColumn(matrix) {
  // your code here...
  let newArray = [];
  for (let col = 0; col < matrix.length; col++) {
    let maxcol = -Infinity;
    for (let row = 0; row < matrix[0].length; row++) {
      if (matrix[row][col] > maxcol) {
        maxcol = matrix[row][col];
      }
    }
    newArray.push(maxcol);
  }
  return newArray;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
