let facto = [];
function factorail(n) {
  if (n == 1) {
    facto.push(1);
    return 1;
  }
  let result = n * factorail(n - 1);
  facto.push(result);
  return facto;
}

console.log(factorail(4));
