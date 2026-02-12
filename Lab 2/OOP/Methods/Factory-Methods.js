class User {
  // constructor(name, role) {
  //   this.name = name;
  //   this.role = role;
  // }

  static guest(n, r) {
    return `${n} ,${r}`;
  }
}

console.log(User.guest("Beka", "broker"));
