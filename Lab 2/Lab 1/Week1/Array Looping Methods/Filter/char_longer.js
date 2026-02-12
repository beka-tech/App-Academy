const names = ["Bob", "Charlie", "Tom", "Samantha"];

const nameFilterd = names.filter(function (name) {
  return name.length > 4;
});

console.log(nameFilterd);

const nameFilterd2 = names.filter((name) => name.length > 4);
console.log(nameFilterd2);
