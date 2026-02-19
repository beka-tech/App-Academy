// your code here
let reverseString = function (string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
};

console.log(reverseString("fish")); // 'hsif'
console.log(reverseString("marathon")); // 'nohtaram'
