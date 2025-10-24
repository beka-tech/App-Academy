let dog = {
  name: "Fido",
  bark: function (str) {
    return "Bark Bark !" + str;
  },
};
let dog2 = {};
let has = dog.hasOwnProperty("Fido");

if (Object.keys(dog2).length === 0) {
  console.log("It Is Empty");
}

console.log(has);

console.log(dog.name);

console.log(dog.bark("Beka"));
