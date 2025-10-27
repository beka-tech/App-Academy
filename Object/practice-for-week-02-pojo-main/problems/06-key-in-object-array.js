/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` 
that takes in an array of objects as the first parameter and a string as the second. 
The `keyInObjectArray` will return `true` if any of the objects contains the `keyString` as a key within them,
 and `false` if not.


Examples:

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // Your code here

  let newKey = objArray.map((obj) => Object.keys(obj));
  // console.log(newKey.flat());

  return newKey.flat().includes(keyString);
}
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" },
];

console.log(keyInObjectArray(objArray, "planet")); // => true
console.log(keyInObjectArray(objArray, "age")); // => true
console.log(keyInObjectArray(objArray, "food")); // => false
console.log(keyInObjectArray(objArray, "animal")); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
