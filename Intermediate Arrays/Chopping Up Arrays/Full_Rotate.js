let rotate = function (arr) {
  let newArray = [];
  for (let i = arr.length; i > 0; i--) {
    let el = arr.pop();
    newArray.push(el);
  }
  return newArray;
};

let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotate(animals));
