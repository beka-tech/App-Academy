class Iseven {
  constructor(num) {
    this.num = num;
  }
  Even(num) {
    return num % 2 == 0;
  }
}

const newNum = new Iseven(2);

console.log(newNum.Even());
