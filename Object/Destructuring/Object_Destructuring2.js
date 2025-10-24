const user = {
  name: "Alex",
};

user.age = 18;

const { age = 19 } = user;

console.log(age);

console.log(user);
