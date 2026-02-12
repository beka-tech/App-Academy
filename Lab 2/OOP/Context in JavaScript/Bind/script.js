class Cat {
  purr() {
    console.log("meow");
  }
  purrMore() {
    this.purr();
  }
}

let cat = new Cat();
let sayMeow = cat.purrMore;

let sayMeow2 = cat.purrMore;

sayMeow(); // ❌ this.purr is undefined
