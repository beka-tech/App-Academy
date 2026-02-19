// Your code here

let alternatingWords = function (words1) {
  for (let i = 0; i < words1.length; i++) {
    let word = words1[i].toUpperCase();
    let word1 = words1[i + 1].toLowerCase();
    return `${word} ${word1} `;
  }
};

let words1 = ["Belka", "STRELKA", "laika", "DEZIK", "Tsygan"];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ["Yellowstone", "Yosemite", "Zion", "Acadia"];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
