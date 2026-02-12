function whodis() {
  console.log(this.name);
}
const jeff = {
  name: "beka",
  whodis,
};

const neww = jeff.whodis();
