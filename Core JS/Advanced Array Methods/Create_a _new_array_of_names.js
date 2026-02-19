const students = [
  { name: "Liam", grade: "A" },
  { name: "Olivia", grade: "B" },
  { name: "Noah", grade: "A" },
];

let newarr = [];

students.forEach(function (student) {
  newarr.push(student.name + "  " + student.grade);
});

console.log(newarr);

// Your code here
