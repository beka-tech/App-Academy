// your code here
function addToTwelve(arr) {
  if (arr.length < 2) {
    return false;
  }
  if (arr[0] + arr[1] == 12) {
    return true;
  }

  return addToTwelve(arr.slice(1));
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([6, 6])); //true
