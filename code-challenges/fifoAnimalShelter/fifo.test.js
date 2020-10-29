'use strict';

// const { AnimalShelter } = require('./fifo-animal-shelter.js');
const testObject = require('./fifo-animal-shelter.js');

describe('Testing to add dogs and cats to animal shelter', () => {
  test('Can successfully ad a dog', () => {

    let animal = new testObject.AnimalShelter();
    animal.enqueue('dog');
    expect(animal.front.top.value).toStrictEqual('dog');
  });
  test('Can successfully ad a cat', () => {
    let animal = new testObject.AnimalShelter();
    animal.enqueue('cat');
    expect(animal.front.top.value).toStrictEqual('cat');
  });
  test('Can successfully return null', () => {

    let animal = new testObject.AnimalShelter();
    animal.enqueue('zebra');
    expect(animal.front.top).toStrictEqual(null);
  });
});