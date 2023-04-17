const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  getUnderlyingList() {
    return this.start;
  }

  enqueue(data) {
    this.start = addData(this.start, data);
    function addData(node, data) {
      if (!node) {
        return new Node(data);
      } else {
        node.next = addData(node.next, data);
      }
      return node;
    }
  }

  dequeue() {
    const data = this.start.value;
    this.start = this.start.next;

    return data;
  }
}

module.exports = {
  Queue,
};
