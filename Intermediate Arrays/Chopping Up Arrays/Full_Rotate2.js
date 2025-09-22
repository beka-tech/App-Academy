let rotateRightK = function (arr) {
  k = arr.length - 1; // handle if k > length
  for (let i = 0; i < k; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  return arr;
};

let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotateRightK(animals));
// ["opossum", "kangaroo", "wombat", "koala"]
