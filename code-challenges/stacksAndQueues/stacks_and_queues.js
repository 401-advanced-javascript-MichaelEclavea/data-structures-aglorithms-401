'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    push(value){
        const item = new Node(value);
        item.next = this.top;
        this.top = item;
    }

    pop(item){
      if(item){
        let temp = this.top;
        this.top = item;
        temp.next = null;
        return temp.value;
      }
      else{
        return undefined;
      }

    }

    peek() {
        if (!this.isEmpty()) {
            return this.top.value;
        }
    }

    isEmpty() {
        if (this.top === null){
            return true; 
        }
        else {
            false; 
        }
    }
}

class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
    enqueue(value) {
  
      const newNode = new Node(value);
  
      if (this.rear) {
        this.rear.next = newNode; // we would get a typeError => 
      }
      this.rear = newNode;
  
      if (!this.front) {
        this.front = this.rear;
      }
    }
  
    dequeue() {
  
      const temp = this.front;
  
      this.front = this.front.next;
      temp.next = null; // other languages need to manage their resources more closely, not JS tho.
  
      if (this.isEmpty()) {
        this.rear = null;
      }
      return temp.value;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.front.value
      }
      else{
        return undefined;
      }
    }
  
    isEmpty() {
      if (this.front === null) {
        return true;
      } else {
        false;
      }
    }
  }

  module.exports = { Node: Node, Stack: Stack, Queue: Queue };