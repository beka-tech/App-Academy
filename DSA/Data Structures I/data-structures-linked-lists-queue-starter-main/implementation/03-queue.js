const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)
    // Write your hypothesis on the time complexity of this method here
    const newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return null;

    const removedValue = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }

    // Time Complexity: O(1)
    return removedValue;
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
