let rotateRight = function (arr, num) {
  // let num = arr.length;
  let filterArray = [];

  for (let i = 0; i < num; i++) {
    let element = arr.pop();
    filterArray.push(element);
  }
  return `${filterArray} +${arr} `;
};

let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
