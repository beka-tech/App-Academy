let num = 1;
function show() {
  console.log(num);
  num++;
  show();
}

show();
