class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `name ${this.name},age ${this.age} `;
  }
  makeSound() {
    return `${this.name} make a sound`;
  }
  eat() {
    return `${this.name}is Eating`;
  }
}

class Lion extends Animal {
  constructor(name, age, prideSize) {
    super(name, age);
    this.prideSize = prideSize;
  }
  makeSound() {
    return `${this.name} Roars`;
  }
}

class Elephant extends Animal {
  constructor(name, age, weight) {
    super(name, age);
    this.weight = weight;
  }
  makeSound() {
    return `${this.name} trumpets`;
  }
}

class Monkey extends Animal {
  constructor(name, age, favoriteFood) {
    super(name, age);
    this.favoriteFood = favoriteFood;
  }

  makeSound() {
    return `${this.name} Screeches`;
  }

  eat() {
    return `${this.name} is Eating ${this.favoriteFood}`;
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added: ${animal.name} to the Zoo`);
  }

  listAnimals() {
    console.log("\n Animals in the Zoo");
    if (this.animals.length === 0) {
      console.log("No Animals Yet .");
      return;
    }
    this.animals.forEach((a) => {
      console.log(a.getInfo());
    });
  }

  makeAllSound() {
    console.log("\n Animal Sounds");
    this.animals.forEach((a) => {
      console.log(a.makeSound());
    });
  }

  feedAll() {
    console.log("\n Feeding Animals");
    this.animals.forEach((a) => {
      console.log(a.eat());
    });
  }
}

const zoo = new Zoo();

const simba = new Lion("simba", 5, 12);
const mky = new Monkey("mkyoo", 6, "Banana");

zoo.addAnimal(mky);
zoo.addAnimal(simba);
zoo.listAnimals();
zoo.makeAllSound();
zoo.feedAll();
