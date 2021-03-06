"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty(value) {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  insert(value) {
    if (this.isEmpty() === true) {
      let newNode = new Node(value);
      this.head = newNode;
      return value;
    } else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(current.value);
        return true;
      } else {
        current = current.next;
      }
      if (!current.next) {
        return false;
      }
    }
  }

  toString() {
    let listText = "";
    let listItem = this.head;
    while (listItem) {
      listText += `{${listItem.value}} -> `;
      listItem = listItem.next;
    }

    listText += "NULL";
    return listText;
  }

  append(value) {
    let current = this.head;
    while (current) {
      if (current.next !== null) {
        current = current.next;
      } else {
        current.next = new Node(value);
        break;
      }
    }
  }
  insertBefore(value, newVal) {
    let current = this.head;
    while (current) {
      if (current.next.value !== value) {
        current = current.next;
      } else {
        let newNode = new Node(newVal);
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
    }
  }
  insertAfter(value, newVal) {
    let current = this.head;
    while (current) {
      if (current.value !== value) {
        current = current.next;
      } else {
        let newNode = new Node(newVal);
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
    }
  }
  kToEnd(k) {
    let current = this.head;
    let lengthCount = 0;
    while (current) {
      current = current.next;
      lengthCount += 1;
    }
    if (lengthCount < k) {
      return "exception";
    } else if (k <= lengthCount) {
      let end = lengthCount - k;
      current = this.head;
      for (let i = 0; i < end - 1; i++) {
        current = current.next;
      }
      return current.value;
    }
  }
  palindrome() {
    let array = [];

    while (this.head) {
      let temp = this.head.value;
      array.push(temp);
      temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    }
    for (let i = array.length - 1; i > 0; i--){
        let j = 0; 
       if (array[j] === array[i]){
           console.log(array[j]);
           console.log(array[i]);
           j++;
       }
     
    }
   
    
}
}

module.exports = { LinkedList: LinkedList, Node: Node };
