function isSubstring(searchString, subString) {
  // your code here...

  if (searchString.toLowerCase().includes(subString.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
