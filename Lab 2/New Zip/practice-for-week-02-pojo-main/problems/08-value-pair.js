/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string).
 The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here
  let obj1_2key = [];
  for (let keys in obj1) {
    if (keys === key) obj1_2key.push(obj1[keys]);
  }

  for (let keys in obj2) {
    if (keys === key) obj1_2key.push(obj2[keys]);
  }
  return obj1_2key;
}

let object1 = { name: "One", location: "NY", age: 3 };
let object2 = { name: "Two", location: "SF" };
console.log(valuePair(object1, object2, "location")); // => [ 'NY', 'SF' ]
console.log(valuePair(object1, object2, "name")); // => [ 'One', 'Two' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
