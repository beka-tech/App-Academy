class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);
    if (this.data[index === null]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
      return;
    }

    let current = this.data[index];
    let prev = null;

    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      prev = current;
      current = current.next;
    }

    const newpair = new KeyValuePair(key, value);
    newpair.next = this.data[index];
    this.data[index] = newpair;
    this.count++;
  }

  read(key) {
    // Your code here
    const index = this.hashMod(key);
    let current = this.data[index];

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
  }

  resize() {
    // Your code here
  }

  delete(key) {
    // Your code here
  }
}

module.exports = HashTable;
