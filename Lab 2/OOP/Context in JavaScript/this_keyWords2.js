const person = {
  name: "Alice",
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();

const person2 = {
  name: "beka",
};

person2.greet().call();
