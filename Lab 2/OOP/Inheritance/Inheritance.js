class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Can Speak${this.name} Make a Sound.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks loundly`);
  }
}

class Cow extends Animal {
  moo() {
    console.log(`${this.name} moo loudly`);
  }
}

const myDog = new Dog("jack");
const myCow = new Cow("lameye");

myDog.bark();
myDog.speak();

myCow.speak();
myCow.moo();
