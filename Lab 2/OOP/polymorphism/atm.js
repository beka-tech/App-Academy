class ATM {
  #balance = 100;

  #log(message) {
    console.log("[log]", message);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      this.#log("Not Enough money");
      return;
    }
    this.#balance -= amount;
    this.#log(`withdrew ${amount}`);
  }
  deposite(amount) {
    if (amount < 0) {
      this.#log("Please Enter non zero number");
      return;
    }
    this.#balance += amount;
    this.#log(`You deopsite ${amount}`);
  }
  getBalance() {
    return this.#balance;
  }
}

const atm = new ATM();

atm.deposite(50);
atm.withdraw(80);

console.log(atm.getBalance());
