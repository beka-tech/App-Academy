class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  static compare(a, b) {
    return a.score > b.score;
  }
}

const player1 = new Player("beka", 45);
const player2 = new Player("aman", 35);

console.log(`Player1 winner`, Player.compare(player1, player2));
