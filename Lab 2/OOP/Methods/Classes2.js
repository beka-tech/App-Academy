class Vehicle {
  constructor(color, fuelLevel) {
    this.color = color; // property
    this.fuelLevel = fuelLevel;
  }

  drive() {
    // method
    console.log("Driving...");
  }
}

const car = new Vehicle("Red", 80); // instance
car.drive();

console.log(car.color);
