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
  shift() {}
}

const arr = new DynamicArray(4);

// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.pop();
arr.unshift(10);
arr.unshift(20);
arr.unshift(30);

console.log(arr.read(1));
console.log(arr.read(2));
console.log(arr.read(3));

module.exports = DynamicArray;
