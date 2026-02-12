class Fruit {
  constructor(color, taste) {
    this.color = color;
    this.taste = taste;
  }

  eat() {
    console.log(`You ate a ${this.constructor.name}.`);
  }
}

class Apple extends Fruit {
  constructor() {
    super("red", "sweet");
  }
}

const apple = new Apple();

Apple.color();
