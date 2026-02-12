class user {
  #password;

  constructor(password) {
    this.#password = password;
  }

  setPassword(newPass) {
    if (newPass.length < 6) {
      console.log("too short");
      return;
    }
    this.#password = newPass;
  }
  checkPassword(input) {
    return input === this.#password;
  }
}

const u = new user("444444");

console.log(u.checkPassword("888888"));
