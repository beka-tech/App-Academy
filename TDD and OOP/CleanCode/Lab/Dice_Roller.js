let wins = 0;
let losses = 0;

function rollDie() {
  const user = Math.floor(Math.random() * 6) + 1;
  const cpu = Math.floor(Math.random() * 6) + 1;
  return { user, cpu };
}

function getWinner(user, cpu) {
  if (user > cpu) return `win`;
  if (user < cpu) return `loss`;
  return `It's a tie`;
}

function updateScore(result) {
  if (result === "win") return (wins += 1);
  if (result === "loss") return (losses += 1);
}
function printRound(user, cpu, result) {
  console.log("You rolled", user);
  console.log("CPU rolled", cpu);
  if (result === "win") console.log("You win!");
  else if (result === "loss") console.log("You lose...");
  else console.log("It's a tie.");

  console.log(`Score: ${wins} wins, ${losses} losses`);
}

function play() {
  const { user, cpu } = rollDie();

  const result = getWinner(user, cpu);
  updateScore(result);

  printRound(user, cpu, result);
}

play();
