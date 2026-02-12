const student = {
  name: "beka",
  sayName() {
    console.log(this.name);
  },
};

student.sayName();
console.log(student.name);
