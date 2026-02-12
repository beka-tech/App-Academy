const toys = [
  "Red Ball",
  "Pink Elephant",
  "Clown with Red Nose",
  "Teddy Bear (Brown)",
  "Firefighter Hat (Red)",
];

// Loop to get only the red toys
const redToys = toys.filter(function (toy) {
  return toy.toLowerCase().includes("red");
});

// Output to console
console.log(redToys);
