class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize; // fixed storage
    this.length = 0; // current number of items
    this.data = new Array(this.capacity); // actual storage
  }

  read(index) {
    const Nindex = index - 1;
    if (Nindex < 0 || Nindex >= this.length) return `Index out of bounds `;
    return this.data[Nindex];
  }

  unshift(val) {
    // If array is full, do nothing (or throw error)
    if (this.length === this.capacity) {
      return; // or: throw new Error("Array is full");
    }
    // shift items right
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    // insert at the beginning
    this.data[0] = val;
    this.length++;
  }

  push(val) {
    if (this.length === this.capacity) {
      return;
    }

    this.data[this.length] = val;
    this.length++;
  }
  pop() {
    if (this.length === 0) return `Empty Array`; // nothing to pop

    const removed = this.data[this.length - 1]; // last element
    this.data[this.length - 1] = undefined; // optional cleanup
    this.length--;

    return removed;
  }
  shift() {
    if (this.length === 0) return `Empty Array`;
    const removed = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.data[this.length - 1];
    this.length--;
    return removed;
  }
}

const arr = new DynamicArray(4);

arr.push(1);
arr.shift();
arr.push(2);
arr.push(3);
arr.unshift(4);
arr.pop();

console.log(arr.read(1));
console.log(arr.read(2));
console.log(arr.read(3));

module.exports = DynamicArray;
