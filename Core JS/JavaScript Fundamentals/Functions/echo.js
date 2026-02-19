function echo(string) {
  // your code here...
  let msg =
    string.toUpperCase() + " ..." + string + " ..." + string.toLowerCase();
  console.log(msg);
  return;
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
