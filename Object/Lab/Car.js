let car = {
  color: "Red",
  Seat: 4,
};

car.speed = 120;

console.log(car);

for (let key in car) {
  console.log(car[key]);
}
