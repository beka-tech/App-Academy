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

    if (this.length === this.capacity) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    // Your code here
    if (this.length === 0) return;
    const removed = this.data[this.length - 1];
    this.data[this.length - 1] = null;
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
    if (this.length === this.capacity) {
      this.resize();
    }
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
    let newCapacity = this.capacity * 2;
    let newData = new Array(newCapacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.capacity = newCapacity;
  }
}

const arr = new DynamicArray(4);
arr.resize();
arr.push(0);
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);

arr.shift();
arr.unshift();
arr.read();
arr.indexOf(1);
console.log(arr.read(5));

module.exports = DynamicArray;
