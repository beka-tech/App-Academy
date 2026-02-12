function isValidUserName(username) {
  let hasLetterAt0 = true;
  let hasLengthBetween5And15 = true;
  let hasOnlyLettersOrDigits = true;

  // check first character is a letter
  if (!/[A-Za-z]/.test(username[0])) {
    hasLetterAt0 = false;
  }

  // check length between 5 and 15
  if (username.length < 5 || username.length > 15) {
    hasLengthBetween5And15 = false;
  }

  // check all characters are letters or digits
  for (const c of username) {
    if (!/[A-Za-z0-9]/.test(c)) {
      hasOnlyLettersOrDigits = false;
      break;
    }
  }

  return hasLetterAt0 && hasLengthBetween5And15 && hasOnlyLettersOrDigits;
}

console.log(isValidUserName("john123")); // true
console.log(isValidUserName("john12!")); // false
console.log(isValidUserName("a"));
