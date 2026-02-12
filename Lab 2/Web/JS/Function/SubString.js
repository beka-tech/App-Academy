function isSubstring(searchString, subString) {
  return searchString.toUpperCase().indexOf(subString.toUpperCase()) !== -1;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "jooy")); // => false
