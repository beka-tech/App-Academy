function a() {
  setTimeout(() => {
    console.log("A");
  });
}
function b() {
  a();
  console.log("B");
}
b();
