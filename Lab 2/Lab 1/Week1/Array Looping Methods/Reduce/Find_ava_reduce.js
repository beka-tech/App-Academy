const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 88 },
];

// Your code here
const total = students.reduce((acc, item) => acc + item.grade, 0);
console.log(total / students.length);
