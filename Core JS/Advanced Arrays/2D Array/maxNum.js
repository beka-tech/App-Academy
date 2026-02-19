let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    max = matrix[0][0];
    if (matrix[i][j] > max) {
      max = matrix[i][j];
    }
  }
}
console.log(max);
