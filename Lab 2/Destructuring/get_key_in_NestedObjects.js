let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" },
];

const keysPerObject = objArray.map((o) => Object.keys(o));
console.log(keysPerObject.flat());
// -> [ ["name"], ["age"], ["planet","system"] ]
