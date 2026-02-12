class Person {
  introduce() {
    return `Hi I'm a Person`;
  }
}

class Student extends Person {
  introduce() {
    return `Hi I'm a Student`;
  }
}

class Teacher extends Person {
  introduce() {
    return `Hi I'm a Teacher`;
  }
}

const newS = new Student();

console.log(newS.introduce());

console.log(typeof Person);
console.log(typeof Student);
