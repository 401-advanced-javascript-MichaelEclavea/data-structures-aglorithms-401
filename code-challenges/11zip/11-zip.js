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
}

function zipList(list1, list2) {
  let newList = new LinkedList();
  let current1 = list1.head.value;
  let current2 = list2.head.value;

  let a = 0;
  let b = 0;
  while (current1) {
    current1 = current1.next;
    a += 1;
  }
  while (current2) {
    current2 = current2.next;
    b += 1;
  }
  current1 = list1.head.value;
  current2 = list2.head.value;
  //    newList.head = current1;
  current1 = list1.head.next.value;
  console.log(current1, current2);

  let z = a + b;
  for (let i = 0; i < z + 1; i++) {
    if (current1) {
      newList.insert(current1.value);
      current1 = list1.next;

      console.log(current1);
    }
    if (current2) {
      newList.insert(current2);
      current2 = list2.next.value;
      console.log(current2);
    } else {
      console.log("There was an error in for loop");
    }
  }
  return newList.value;
}

module.exports = { LinkedList: LinkedList, Node: Node, zipList: zipList };
