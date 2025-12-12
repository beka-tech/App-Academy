class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
    // Your code here
  }

  read(index) {
    // Your code here
    if (index < 0 || index >= this.length) return;
    return this.data[index];
  }

  push(val) {
    // Your code here
    if (this.length == this.capacity) {
      return;
    }
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    // Your code here
    if (this.length === 0) return;
    const removed = this.data[this.length - 1];
    this.data[this.length - 1];
    this.length--;
    return removed;
  }

  shift() {
    // Your code here
    if (this.length === 0) return;
    const removed = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.data[this.length - 1];
    this.length--;
    return removed;
  }

  unshift(val) {
    // Your code here
    if (this.data === this.capacity) return;
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    // Your code here
    if (this.length < 0) return;
    for (let i = 0; i < this.length; i++) {
      if (val == this.data[i]) return i;
    }
    return -1;
  }

  resize() {
    // Your code here
  }
}

const arr = new DynamicArray(4);
arr.push(1);
arr.push(2);

arr.shift();
arr.unshift();
arr.read();
arr.indexOf(1);
console.log(arr.read(1));

module.exports = DynamicArray;
