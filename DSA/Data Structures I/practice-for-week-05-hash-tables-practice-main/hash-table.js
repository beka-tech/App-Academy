const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.capacity = numBuckets;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    const hex = sha256(key);
    const first8 = hex.slice(0, 8);
    return parseInt(first8, 16);
  }

  hashMod(key) {
    const hashValue = this.hash(key);
    return hashValue % this.capacity;
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);
    if (this.data[index] !== null) {
      throw new Error("hash collision or same key/value pair already exists!");
    }

    this.data[index] = new KeyValuePair(key, value);
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    const index = this.hashMod(key);

    // Create new pair
    const newPair = new KeyValuePair(key, value);

    // If bucket is empty, set as first element
    if (this.data[index] === null) {
      this.data[index] = newPair;
    } else {
      // Add to the front of the chain
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }

    this.count++;
  }

  insert(key, value) {
    const index = this.hashMod(key);

    // If bucket is empty, create new pair
    if (this.data[index] === null) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
      return;
    }

    // Traverse the linked list to check for existing key
    let current = this.data[index];
    let prev = null;

    while (current) {
      if (current.key === key) {
        // Update value if key exists
        current.value = value;
        return;
      }
      prev = current;
      current = current.next;
    }

    // Key doesn't exist, add to the front of the chain

    const newPair = new KeyValuePair(key, value);
    newPair.next = this.data[index];
    this.data[index] = newPair;
    this.count++;
  }
}

module.exports = HashTable;
