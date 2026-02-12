class Dog {
  constructor(name, isSitting) {
    this.name = name;
    this.isSitting = isSitting;
  }

  stand() {
    this.isSitting = false; // “this” refers to the dog using the method
  }
}

let dog = new Dog("Bowser", true);
console.log(dog.stand());
console.log(this.isSitting);
