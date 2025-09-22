let rotate = function (array, num) {
  let nums = num % array.length;
  for (let i = 0; i < nums; i++) {
    let el = array.pop();
    array.unshift(el);
  }
  return array;
};

let animals = ["wombat", "koala", "opossum", "kangaroo"];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
