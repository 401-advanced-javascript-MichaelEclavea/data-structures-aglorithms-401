'use strict';

// const { AnimalShelter } = require('./fifo-animal-shelter.js');
const testObject = require('./fifo-animal-shelter.js');


describe('Testing to make the queue has stacks', () => {
  test('Can successfully push a node to the stack  and then add the stack into the queue', () => {
    // let testNode = new ll.Stack;
    // testNode.push(5)
    let animal = new testObject.AnimalShelter();
    animal.enqueue('kitty', 'cat');
    expect(animal.front.top).toStrictEqual('cat');
  });
});