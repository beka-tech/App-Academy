const user = { name: "Ann", age: 22, city: "Paris" };
// TODO: print only keys

for (let [key, value] of Object.entries(user)) {
  console.log(value);
}
