function atMost(arr, count, cb) {
  let countR = 0;
  for (let i in arr) {
    let el = arr[i];
    if (cb(el) == true) {
      countR++;
      if (countR > count) return false;
    }
  }
  return true;
}

function isPositive(n) {
  return n > 0;
}
function startsWithA(s) {
  return s[0].toUpperCase() === "A";
}

console.log(atMost([6, -2, 4, -1], 3, isPositive)); // true
console.log(atMost([6, -2, 4, 1], 3, isPositive)); // true
console.log(atMost([6, 2, 4, 1], 3, isPositive)); // false
console.log(atMost(["boat", "cat", "car"], 1, startsWithA)); // true
console.log(atMost(["boat", "cat", "car", "academy"], 1, startsWithA)); // true
console.log(atMost(["boat", "arc", "cat", "car", "academy"], 1, startsWithA)); // false
