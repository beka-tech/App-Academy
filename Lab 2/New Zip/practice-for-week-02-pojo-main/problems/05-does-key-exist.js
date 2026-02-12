/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

***********************************************************************/

function doesKeyExist(obj, key) {
  // Your code here
  let foundKey = "";
  for (let keys in obj) {
    foundKey = keys;
  }
  return key.includes(foundKey);
}

let obj1 = { bootcamp: "App Academy", course: "Bootcamp Prep" };
console.log(doesKeyExist(obj1, "course")); // => true
console.log(doesKeyExist(obj1, "name")); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
