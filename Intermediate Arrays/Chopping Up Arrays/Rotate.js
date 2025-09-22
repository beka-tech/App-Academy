let rotate = function (array, num) {
  let nums = array.length;
  for (let i = 0; i < nums; i++) {
    let el = array.pop();
    array.unshift(el);
  }
  return array;
};

let animals = ["wombat", "koala", "opossum", "kangaroo"];
rotate(animals, 2);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
