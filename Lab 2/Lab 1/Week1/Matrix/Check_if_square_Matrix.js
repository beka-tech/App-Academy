function isSquare(matrix) {
  // your code here...
  return matrix[0].length === matrix.length;
}

let matrix10 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(isSquare(matrix10)); // true
