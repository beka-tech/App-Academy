const person = {
  firstName: "Beka",
  lastName: "Aman",
  age: 50,
};

let fullName = ({ firstName, lastName } = person);

console.log(fullName);
