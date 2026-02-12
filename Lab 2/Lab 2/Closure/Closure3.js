function count() {
  let score = 0;

  function countScore() {
    score += 1;
    console.log(score);
  }
  return countScore;
}

let socore1 = count();
socore1();
socore1();
