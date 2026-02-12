function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish("Nemo");

// eat();

// nemo.eat = eat;
// console.log((nemo.eat = eat));
const swim = nemo.swim;
swim();
