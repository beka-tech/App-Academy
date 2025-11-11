let name = "global";

function test() {
  let name = "Local";

  console.log(name);
}
test();
console.log(name);
