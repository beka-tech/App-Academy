let car = {
  brand: "tesla",
  drive(speed) {
    console.log(`The ${this.brand} drove ${speed}Km`);
  },
};
car.brand = "BMW";
car.drive(180);
