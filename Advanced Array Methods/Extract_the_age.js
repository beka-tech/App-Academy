const people = [
  { name: "Liam", age: 22 },
  { name: "Olivia", age: 19 },
  { name: "Noah", age: 25 },
];

const persons = people.map(function (person) {
  return person.age;
});
console.log(persons);
