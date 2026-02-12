let count = 0;
function gfg() {
  count++;
  console.log("GFG");
  console.log(count);
  if (count === 5) {
    clearInterval(gfg2);
  }
}
let gfg2 = setInterval(gfg, 500);
