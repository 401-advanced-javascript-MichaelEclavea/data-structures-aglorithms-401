'use strict';

const leftJoin = require('./left-join.js');


describe('Testing Hash Table', () => {
    test('Adding a key/value to your leftJoin results in the value being in the data structure', () => {
      const leftTable = new Map();
      const rightTable = new Map();
      leftTable.set('1', 'michael');
      leftTable.set('2', 'Johnny');
      rightTable.set('0', 'crystal');
      rightTable.set('2', 'Jimmy');  
      expect(leftJoin(leftTable, rightTable)).toStrictEqual([ '2', 'Johnny', 'Jimmy' ]);
    })
    test('Adding a key/value to your leftJoin results in the value being in the data structure', () => {
    const leftTable = new Map();
    const rightTable = new Map();
    leftTable.set('animal', 'Dog');
    leftTable.set('help', 'Johnny');
    leftTable.set('one', 'michael');
    leftTable.set('soap', 'Johnny');
    rightTable.set('common', 'crystal');
    rightTable.set('keys', 'Jimmy');  
    rightTable.set('animal', 'Zebra');
    rightTable.set('chris', 'Jimmy');  
    expect(leftJoin(leftTable, rightTable)).toStrictEqual([ 'animal', 'Dog', 'Zebra' ]);
  });
});