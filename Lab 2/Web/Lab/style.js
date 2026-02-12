function isSubstring(searchString, subString) {
  // your code here...
  let search = searchString.toLowerCase();
  let sub = subString.toLowerCase();
  if (search.search(sub) === -1) {
    return false;
  }
  return true;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "for  joys for")); // => false
