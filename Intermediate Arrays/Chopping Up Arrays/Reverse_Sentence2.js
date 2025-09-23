let rotateRight = function (array, num) {
  let copy = array.slice();
  let num = array.length;

  for (let i = 0; i < num; i++) {
    let el = copy.pop();
    copy.unshift(el);
  }

  return copy;
};

let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotateRight(animals)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
