// your code here

let reverseString = function (str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let string = str[i];
    reversed += string;
  }

  return reversed;
};

console.log(reverseString("fish")); // 'hsif'
console.log(reverseString("marathon")); // 'nohtaram'
