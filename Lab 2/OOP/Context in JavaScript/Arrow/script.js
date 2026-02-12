const obj = {
  value: 42,
  regular: function () {
    console.log(this.value); // 42
  },
  arrow: () => {
    this.value;
    console.log(this.value); //
  },
};

obj.regular();
obj.arrow();
