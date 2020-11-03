'use strict';


const treeObject = require('./binary-tree.js');



describe('Testing to see if findMaxValue function can return the max value in entire tree', () =>{
    test('Can successfully return the max value of 25', () =>{
        let testTree = new treeObject.BinarySearchTree();
        testTree.add(5);
        testTree.add(7);
        testTree.add(16);
        testTree.add(25);
        expect(testTree.findMaximumValue()).toStrictEqual(25);
    })
    test('Can successfully give back the single node, which is still the highest value', () =>{
        let testTree = new treeObject.BinarySearchTree();
        testTree.add(2);
        expect(testTree.findMaximumValue(2)).toStrictEqual(2);
    })
    test('Can successfully add a left child and right child to a single root node', ()=>{
        let testTree = new treeObject.BinarySearchTree();
        testTree.add(5);
        testTree.add(2);
        testTree.add(9);
        expect(testTree.findMaximumValue()).toStrictEqual(9);
       
    })

})