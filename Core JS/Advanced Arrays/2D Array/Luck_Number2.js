function luckyNumbers(matrix) {
  let luckyNums = [];

  for (let row = 0; row < matrix.length; row++) {
    // find the minimum element in this row and its column index
    let minVal = matrix[row][0];
    let minColIdx = 0;

    for (let col = 1; col < matrix[row].length; col++) {
      if (matrix[row][col] < minVal) {
        minVal = matrix[row][col];
        minColIdx = col;
      }
    }

    // check if this minVal is also the maximum in its column
    let isMaxInCol = true;
    for (let r = 0; r < matrix.length; r++) {
      if (matrix[r][minColIdx] > minVal) {
        isMaxInCol = false;
        break;
      }
    }

    if (isMaxInCol) {
      luckyNums.push(minVal);
    }
  }

  return luckyNums;
}

let matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(luckyNumbers(matrix)); // [12]
