'use strict'

const array = []

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BinaryTree {
    constructor(root=null){
        this.root = root;
    }
    preOrder(root) {
       
        traverse(root);
    
        function traverse(root) {
          let currentNode = root;
    
          if (currentNode) {
            array.push(currentNode.value);
          }
    
          if (currentNode.left) {
            traverse(currentNode.left);
          }
    
          if (currentNode.right) {
            traverse(currentNode.right);
          }
    
          return array;
    
        }
        return array;
      }
    
  postOrder(root) {
    let currentNode = root; // our beginning node
    // process left first, than the right, than the current
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.postOrder(currentNode.left)
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.postOrder(currentNode.right)
    }
    // processing of the node
    if (currentNode) {
    //   console.log(currentNode.value)
    }
    return
  }
  inOrder(root) {
    let currentNode = root; // our beginning node
    // process left First than the currentNod, than the right
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.inOrder(currentNode.left)
    }
    // processing of the node
    if (currentNode) {
    //   console.log(currentNode.value)
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.inOrder(currentNode.right)
    }
    return 
  }
}

class BinarySearchTree extends BinaryTree {

  add(value) {
      if (!this.root) {
        let newNode = new Node(value)
      this.root = newNode
      console.log('new root value is', this.root.value);
      return this.root.value;
    } else {

          let newNode = new Node(value);
          console.log('expect 7 since there is a root', newNode);
          if (newNode.value > this.root.value) {
            // console.log('this is newNode.value', newNode);
            // console.log('this.root.value is ', this.root.value);
            this.root = this.root.right;
            console.log('this.root.right', this.root.right);
          }
          if (
            this.root < newNode.value
          ) {
              console.log('inside if statement of larger right', this.root);
            this.root.right = newNode;
            console.log('this.root.right of new', this.root.right);
          }
          if (newNode.value < this.root.value) {
            while (this.root.value < newNode.value) {
              this.root = this.root.left
            }
            if (
              this.root.value > newNode.value ||
              this.root.left === null
            ) {
              this.root.left = newNode
              
            }
          }
        
      }

      console.log('finished adding new node')
    }
  
  contains(value) {
    if (!this.root) {
      return false;
    } else {
      if(this.root){
          if(this.root > value){
              this.postOrder(value);
          }
          return console.log('found', value);
      }
        else if(this.root < value){
            this.preOrder(value);
            
        }
        return console.log('found', value);
    }
  }
}

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree
}
