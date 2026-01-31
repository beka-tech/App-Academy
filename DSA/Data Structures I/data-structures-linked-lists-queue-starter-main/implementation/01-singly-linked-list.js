// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Time complexity: O(1)

    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  addToTail(val) {
    // Time complexity: O(n)

    const newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;
    return this;
  }

  removeFromHead() {
    // Time complexity: O(1)

    if (!this.head) return undefined;

    const removedNode = this.head;
    this.head = removedNode.next;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  removeFromTail() {
    // Time complexity: O(n)

    if (!this.head) return undefined;

    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.length--;
      return removedNode;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.length--;
    return current; //
  }

  peekAtHead() {
    // Time complexity: O(1)

    if (!this.head) return undefined;
    return this.head.value;
  }

  print() {
    // Time complexity: O(n)

    if (!this.head) return;

    let current = this.head;
    let output = [];

    while (current) {
      output.push(current.value);
      current = current.next;
    }

    console.log(output.join(" "));
  }
}

// Example usage
const list = new SinglyLinkedList();
list.addToHead("B");
list.addToHead("A");
list.addToTail("C");
list.addToTail("D");

list.print(); // A B C D
console.log(list.length); // 4

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
