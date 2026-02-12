var n = 2;

function square(num) {
  var answer = num * num;
  return answer;
}

var square2 = square(n);
var square4 = square(square2);

console.log(square2);
console.log(square4);
