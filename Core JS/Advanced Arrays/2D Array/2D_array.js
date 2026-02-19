let array = [
  ["a", "b", "c"],
  ["d", "e"],
  ["f", "g", "h"],
];

for (let i = 0; i < array.length; i++) {
  let subArray = array[i];
  console.log(subArray);

  for (let j = 0; j < subArray.length; j++) {
    console.log(subArray[j]);
  }
}
