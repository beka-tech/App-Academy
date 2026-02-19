const people = [
  { name: "Alex", age: 17 },
  { name: "Sam", age: 25 },
  { name: "Jamie", age: 19 },
];

people.forEach(function (person) {
  if (person.age > 18) {
    console.log(person.name);
  }
});
// Your code here
