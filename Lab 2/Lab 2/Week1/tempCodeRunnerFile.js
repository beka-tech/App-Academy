function vault(password) {
  return function (pass) {
    if (pass == password) {
      return `Access Granted"`;
    } else {
      return `Access Denied`;
    }
  };
}

let checkPassword = vault("secret");
console.log(checkPassword("guess")); // ➜ "Access Denied"
console.log(checkPassword("secret")); // ➜ "Access Granted"
console.log(checkPassword("90090")); // ➜ "Access Denied"

let checkPassword2 = vault("beka");
console.log(checkPassword2("beka")); // ➜ "Access Granted"
console.log(checkPassword("90090")); // ➜ "Access Denied"
