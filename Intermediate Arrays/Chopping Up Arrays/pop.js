let rotateRight = function (arr) {
  let num = arr.length;
  let filterArray = [];

  for (let i = 0; i < num; i++) {
    let element = arr.pop();
    filterArray.push(element);
  }
  return filterArray;
};

let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr)); // [ 'd', 'e', 'a', 'b', 'c' ]
