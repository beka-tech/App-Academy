let nameObj = {
  name: "Tony",
};

let printName = {
  name: "Beka",
  say: function () {
    return this.name;
  },
};

let hi = printName.say.bind(nameObj);

console.log(hi());
