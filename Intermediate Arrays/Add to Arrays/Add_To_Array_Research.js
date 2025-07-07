function addToArray(location, element, arr) {
  // Your code here

  if (location === "FRONT") {
    arr.unshift(element);
  } else if (location === "BACK") {
    arr.push(element);
  } else {
    console.log("ERROR");
  }
}

testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);
console.log(testArray); // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [0,1,2,3,4]
