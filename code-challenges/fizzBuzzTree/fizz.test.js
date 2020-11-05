'use strict';


let object = require('./fizz-buzz-tree.js');

describe('Tree testing', () => {
  it('fizz buzz challenge', () => {
    let tree = new object.Tree();

    const Node1 = new object.Node(1);
    const Node2 = new object.Node(20);
    const Node3 = new object.Node(30);
    const Node4 = new object.Node(25);

    tree.root = Node1;
    tree.root.left = Node2;
    tree.root.right = Node3;
    tree.root.right.left = Node4;

    expect(tree.fizzBuzzTree()).toStrictEqual([ 'Buzz', '1', 'Buzz', 'FizzBuzz' ]);
  });
});