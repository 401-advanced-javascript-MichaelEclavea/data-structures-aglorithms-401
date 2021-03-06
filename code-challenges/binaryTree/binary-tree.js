'use strict';
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder(root) {
    let orderedArray = [];
    traverse(root);
    function traverse(root) {
      let currentNode = root;
      if (currentNode) {
        orderedArray.push(currentNode.value);
      }
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      return orderedArray;
    }
    return orderedArray;
  }
  postOrder(root) {
    let orderedArray = [];
    traverse(root);
    function traverse(root) {
      let currentNode = root;
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      if (currentNode) {
        orderedArray.push(currentNode.value);
      }
      return orderedArray;
    }
    return orderedArray;
  }
  inOrder(root) {
    let orderedArray = [];
    traverse(root);
    function traverse(root) {
      let currentNode = root;
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode) {
        orderedArray.push(currentNode.value);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      return orderedArray;
    }
    return orderedArray;
  }
  findMaximumValue() {
    let maxNum = this.root.value;
    traverse(this.root);
    function traverse(root) {
      let currentNode = root;
      if (currentNode.value > maxNum) {
        maxNum = currentNode.value;
      }
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      return;
    }
    return maxNum;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }
  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
     
    } else {
  
      traverseBST(this.root, newNode);
    }
    function traverseBST(root, newNode) {
      let currentNode = root;
      
      if (newNode.value < currentNode.value) {
        
        if (currentNode.left === null) {
   
          currentNode.left = newNode;
          console.log(currentNode.left.value);
        } else {
        
          traverseBST(currentNode.left, newNode);
        }
      }
      if (newNode.value > currentNode.value) {
      
        if (currentNode.right === null) {
         
          currentNode.right = newNode;
          console.log(currentNode.right.value);
        } else {
        
          traverseBST(currentNode.right, newNode);
        }
      }
      console.log('Finished adding node');
      return;
    }
  }
  contains(root, value) {
    function traverseBST(root, value) {
      let currentNode = root;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          return false;
        } else {
          this.traverseBST(currentNode.left, value);
        }
      }
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          return false;
        } else {
          this.traverseBST(currentNode.right, value);
        }
      }
      if (value === currentNode.value) {
        return true;
      }
      return;
    }
    traverseBST(root, value);
  }
}
module.exports = {BinarySearchTree, BinaryTree, Node};