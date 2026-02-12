class Fruit {
  constructor(name) {
    this.name = name;
  }

  eat = () => {
    console.log(`${this.name} has a bite mark`);
  };
}

const apple = new Fruit("apple");
const eat = apple.eat;
setTimeout(eat, 1000);
