const obj = {
  value: 10,
  met: () => console.log(this.value),
};

obj.met();
