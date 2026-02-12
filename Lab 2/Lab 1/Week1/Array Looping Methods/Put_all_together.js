// A list of friends stored as an array of objects
const myFriends = [
  { firstname: "Isma", lastname: "Kirby", age: 27 },
  { firstname: "Aaliya", lastname: "Becker", age: 35 },
  { firstname: "Adnaan", lastname: "Tang", age: 22 },
  { firstname: "Rafi", lastname: "Pearson", age: 29 },
  { firstname: "Eshaal", lastname: "Gould", age: 29 },
  { firstname: "Scarlett", lastname: "Whitehead", age: 45 },
  { firstname: "Arslan", lastname: "Esparza", age: 38 },
  { firstname: "Isla-Mae", lastname: "Hastings", age: 46 },
  { firstname: "Eamonn", lastname: "Vang", age: 21 },
  { firstname: "Haya", lastname: "Mcdougall", age: 31 },
];

// Loop 1
let total = 0;
myFriends.forEach(function (person) {
  const firstInitial = person.firstname.substring(0, 1);
  const lastInitial = person.lastname.substring(0, 1);
  person.initials = firstInitial + lastInitial;
  total += person.age;
});

// Loop 2
const average = total / myFriends.length;
const myOlderFriends = myFriends.filter(function (person) {
  return person.age > average;
});

// Loop 3
const report = myOlderFriends.map(function (person) {
  return person.initials + ": " + person.age;
});

// Output to log
console.log(report);
