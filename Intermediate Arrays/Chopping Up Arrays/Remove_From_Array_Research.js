function removeFromArray(location, arr) {
  // Your code here
  if (location === "FRONT") {
    arr.shift();
  }
  if (location === "BACK") {
    arr.pop();
  }
}

testArray = [0, 1, 2, 3, 4];

removeFromArray("FRONT", testArray);
console.log(testArray); // [1,2,3,4]

removeFromArray("BACK", testArray);
console.log(testArray); // [1,2,3]

removeFromArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [1,2,3]
