// your code here
function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char === target) {
      return i;
    }
  }
  return -1;
}

console.log(myIncludes(["a", "b", "c", "e"], "c")); // true
console.log(myIncludes(["a", "b", "c", "e"], "e")); // true
console.log(myIncludes(["a", "b", "c", "e"], "z")); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
