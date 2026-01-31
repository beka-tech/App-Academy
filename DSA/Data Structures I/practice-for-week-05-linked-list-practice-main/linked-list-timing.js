const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const NUM_OPERATIONS = 100000;

// ---------- Singly Linked List ----------
const sll = new LinkedList();

console.time("Singly Linked List - addToHead");
for (let i = 0; i < NUM_OPERATIONS; i++) {
  sll.addToHead(i);
}
console.timeEnd("Singly Linked List - addToHead");

console.time("Singly Linked List - addToTail");
for (let i = 0; i < NUM_OPERATIONS; i++) {
  sll.addToTail(i);
}
console.timeEnd("Singly Linked List - addToTail");

// ---------- Doubly Linked List ----------
const dll = new DoublyLinkedList();

console.time("Doubly Linked List - addToHead");
for (let i = 0; i < NUM_OPERATIONS; i++) {
  dll.addToHead(i);
}
console.timeEnd("Doubly Linked List - addToHead");

console.time("Doubly Linked List - addToTail");
for (let i = 0; i < NUM_OPERATIONS; i++) {
  dll.addToTail(i);
}
console.timeEnd("Doubly Linked List - addToTail");
