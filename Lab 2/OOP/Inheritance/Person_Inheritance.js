class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`my Name is${this.name}I am${this.age}old`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    console.log(`I teach ${this.subject}`);
  }
}

const newTeacher = new Teacher("Beka", 30, "Pyhsics ");

newTeacher.teach();
