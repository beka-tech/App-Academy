let scoreKeeper = (num_S) => {
  return function (num) {
    console.log(num == num_S ? true : false);
  };
};

let gameScore = scoreKeeper(10);
gameScore(5); // ➜ 5
gameScore(10); // ➜ 15
gameScore(10); // ➜ 15
gameScore(13); // ➜ 15
