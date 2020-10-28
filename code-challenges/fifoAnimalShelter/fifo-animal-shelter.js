"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(value, animal) {
      if(!this.front.top){
          let temp = this.front.value;
        //   temp.next = this.front;
          this.front.top = value;
          temp.next = null;
          return this.front.top.value;
      }
    }

  dequeue() {
    this.front.pop;
  }

}
class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.top.value;
    }
  }
}

// class Dog {
//   constructor() {
//     this.top = null
//   }
//   push(value) {
//     const node = new Node(value);
//     node.next = this.top;
//     this.top = node;
//   }
//   pop() {
//     let temp = this.top;
//     this.top = temp.next;
//     temp.next = null;
//     return temp.value;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.top.value
//     }
//   }
// }

module.exports = {
  Node: Node,
  Stack: Stack,
  AnimalShelter: AnimalShelter

}
