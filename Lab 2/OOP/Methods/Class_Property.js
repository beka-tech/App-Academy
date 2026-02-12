class Person {
  constructor(name, age) {
    this.name = name; // instance property
    this.age = age; // instance property
  }

  sayHello() {
    // instance method
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p1 = new Person("Alice", 25);

console.log(p1.name, p1.age);
const { name, age } = p1;
console.log(name, age);
