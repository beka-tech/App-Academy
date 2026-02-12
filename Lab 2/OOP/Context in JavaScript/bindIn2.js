const student = {
  name: "alex",
  grade: 10,
  intro() {
    console.log(this.name + "is in Grade " + this.grade);
  },
};

const student2 = {
  name: "beka",
  grade: 11,
};
student.intro.call(student2);
student.intro.apply([student2]);

// std2();
