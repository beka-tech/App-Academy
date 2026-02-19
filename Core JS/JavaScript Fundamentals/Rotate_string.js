let str = "ABCD";
let rotated = str.slice(1) + str[0];
console.log(rotated); // Output: "BCDA"

let str2 = "ABCD"; // CDAB
let rotated2 = str2.slice(2) + str2.slice(0, 2);
console.log(rotated2); // Output: "CDAB"
