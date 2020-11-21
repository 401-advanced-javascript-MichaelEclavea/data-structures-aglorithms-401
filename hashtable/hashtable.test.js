'use strict';

const HashTable = require('./hashtable.js');




describe('Testing Hash Table', () => {
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const hashTable = new HashTable();
    hashTable.insert('michael', 'moon');
    hashTable.insert('Aidan', 'sun');  
    expect(hashTable.search('michael')).toStrictEqual('moon');
  })
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
  const hashTable = new HashTable();
  hashTable.insert('michael', 'moon');
  hashTable.insert('Aidan', 'sun');
  hashTable.insert('bella', 'meteor');
  expect(hashTable.search('bella')).toStrictEqual('meteor');
  })
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
  const hashTable = new HashTable();
  hashTable.insert('levi', 'gravity');
  expect(hashTable.search('levi')).toStrictEqual('gravity');
  })
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const hashTable = new HashTable();
    hashTable.insert('levi', 'gravity');
    expect(hashTable.remove('levi')).toStrictEqual('gravity');
    })
});