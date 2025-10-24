const user = { name: "Ann", age: 22, city: "Paris" };
// TODO: print only keys
Object.entries(user).forEach(([key, value]) => {
  console.log(key, ": " + value);

  // console.log(value);
});
