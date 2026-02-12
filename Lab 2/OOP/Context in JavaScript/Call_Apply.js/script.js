class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  purrNTimes(n) {
    for (let i = 0; i < n; i++) {
      console.log(`${this.name} says: meow`);
    }
  }
}

let dog = new Dog("Fido");
let cat = new Cat("Meowser");

// Using call
// cat.purrNTimes.call(dog, 5);

// Using apply
cat.purrNTimes.apply(dog, [5]);
