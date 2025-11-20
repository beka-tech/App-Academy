let numArray = [12, 20, 30];

console.log(([f, _] = numArray));

let obj = { name: "Crystal", traits: ["mammal", "dog"] };
let { traits, name } = obj;

console.log(traits);

let obj2 = { color: "Red", fruit: "tomato" };
let { apple } = obj;

console.log(apple); // => ???
