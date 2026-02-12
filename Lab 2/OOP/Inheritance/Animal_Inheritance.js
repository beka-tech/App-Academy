class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} Bark!`);
  }
}

const dog = new Dog("dogg");

dog.bark();
