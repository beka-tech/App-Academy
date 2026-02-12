class Animal {
  constructor(species) {
    this.species = species;
  }
  sleep() {
    console.log(`Sleeps For 8hr${this.species}`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`Cat meow Loudly`);
  }
}

const newCat = new Cat("Ethiopian");

newCat.sleep();
newCat.meow();
