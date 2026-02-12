let arr = [1, [[[2]]], [2, 3], 4, [4, [[5]]]];

let flatArr = arr.flat(Infinity); // Default depth = 1
console.log(flatArr); // [1, 2, 3, 4]
