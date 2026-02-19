// your code here

let initials = function (word) {
  let str = word.split(" ");
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    newStr.push(str[i][0]);
  }
  return newStr.join("").toUpperCase();
};

console.log(initials("anna paschall")); // 'AP'
console.log(initials("Mary La Grange")); // 'MLG'
console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'
