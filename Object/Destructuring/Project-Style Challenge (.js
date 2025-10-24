const user = {
  id: 91,
  name: "Sara",
  city: "Berlin",
  contact: {
    email: "sara@mail.com",
    phone: "555-888",
  },
  favorites: {
    food: ["pizza", "sushi"],
    color: "green",
  },
};

//"Sara from Berlin — email: sara@mail.com — likes pizza and sushi"

function summary({ name }) {
  // build and return string below
  console.log(name);

  // return name;
}
summary(user);
