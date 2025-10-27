/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
***********************************************************************/

function getFullName(person) {
  // Your code here

  const { firstName, lastName } = person;
  return firstName + " " + lastName;

  // return;
}

let p1 = { firstName: "John", lastName: "Doe" };
console.log(getFullName(p1)); // => 'John Doe'
let p2 = { firstName: "Charlie", lastName: "Brown", age: 9 };
console.log(getFullName(p2)); // => 'Charlie Brown'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
