function palandrom(str) {
  let split = str.split("");
  let revers = split.reverse();
  let join = revers.join("");

  //console.log(join);

  if (str.indexOf(join) !== -1) {
    console.log("It Is Palandrome");
  } else {
    console.log("It Is Not Palandrome");
  }
}
palandrom("boob");
