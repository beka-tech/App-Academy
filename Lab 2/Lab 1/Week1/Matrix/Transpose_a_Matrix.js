function transpose(matrix) {
  // your code here...
  let newArray = [];

  for (let col = 0; col < matrix.length; col++) {
    let rowelm = [];
    for (let row = 0; row < matrix.length; row++) {
      rowelm.push(matrix[row][col]);
    }
    newArray.push(rowelm);
  }
  return newArray;
}

let matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transpose(matrix3x3));
// Expected output: [[1,4,7],[2,5,8],[3,6,9]]
