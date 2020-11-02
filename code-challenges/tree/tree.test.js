'use strict';


const treeObject = require('./tree.js');



describe('Testing to see if the preOrder, postOrder and inOder, will successfully return the values of a tree depending on its call statement', () =>{
    test('Can successfully instantiate an empty tree', () =>{
        let testTree = new treeObject.BinarySearchTree();
        expect(testTree.contains()).toStrictEqual(false);
    })
    test('Can successfully instantiate a tree with a single root node', () =>{
        let testTree = new treeObject.BinarySearchTree();
        expect(testTree.add(2)).toStrictEqual(2);
    })
    test('Can successfully add a left child and right child to a single root node', ()=>{
        let testTree = new treeObject.Node(4, new treeObject.Node(2), new treeObject.Node(7));
        expect(testTree.right.value).toStrictEqual(7);
        expect(testTree.left.value).toStrictEqual(2);
    })
    test('Can successfully return a collection from a preorder traversal', () =>{
        let testNode = new treeObject.Node(4, new treeObject.Node(2), new treeObject.Node(7));
        let testTree = new treeObject.BinaryTree(testNode);
        expect(testTree.preOrder(testTree.root)).toStrictEqual([2, 4, 7]);
    })
    test('Can successfully return a collection from an inorder traversal', ()=>{
        expect().toStrictEqual();
    })
    test('Can successfully return a collection from a postorder traversal', () =>{
        expect().toStrictEqual();
    })
})