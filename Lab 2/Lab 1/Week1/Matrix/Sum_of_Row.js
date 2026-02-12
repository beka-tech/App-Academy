function sumRow(matrix) {
  // your code here...
  let sum = [];
  for (let row = 0; row < matrix.length; row++) {
    let rowsum = 0;
    for (let col = 0; col < matrix.length; col++) {
      rowsum += matrix[row][col];
    }
    sum.push(rowsum);
  }
  return sum;
}

let matrix4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sumRow(matrix4)); // [6, 15, 24]
