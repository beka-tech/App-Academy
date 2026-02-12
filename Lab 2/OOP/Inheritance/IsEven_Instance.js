class Iseven {
  constructor(num) {
    this.num = num;
  }
  Even() {
    return this.num % 2 == 0;
  }
}

const newNum = new Iseven(9);

console.log(newNum.Even());
