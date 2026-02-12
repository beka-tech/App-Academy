class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} Make a Sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks loudly`);
  }
}

const myDog = new Dog("Buddy");

myDog.bark();
