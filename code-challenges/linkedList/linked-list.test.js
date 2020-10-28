'use strict';


const testObject = require('./linked-list.js');

describe('Test should instantiate an empty linked list', () =>{
    test('Should successfully add an item to list', () =>{
        let list = new testObject.LinkedList();
        list.insert('a');
        list.insert('b');
        list.insert('c');
        expect(list.head.value).toStrictEqual('c');
    })
    test('test will point to the first node in linked list', () =>{
        let list = new testObject.LinkedList();
        list.insert('a');
        list.insert('b');
        expect(list.includes('b')).toStrictEqual(true);
        expect(list.includes('x')).toStrictEqual(false);
    })
    test('test will return a collection of all the values that exist', () =>{
        let list = new testObject.LinkedList();
        list.insert('a');
        list.insert('b');
        list.insert('c');
        expect(list.toString()).toStrictEqual(`{c} -> {b} -> {a} -> NULL`);
    })
    test('test will show if value was added at the end', () =>{
        let list = new testObject.LinkedList();
        list.insert('a');
        list.insert('b');
        list.append('value');
        expect(list.append('value')).toStrictEqual()
    })
    test('this will show the index value of nodes, which the index will be the input (k)', () =>{
        let list = new testObject.LinkedList();
        list.insert('a');
        list.insert('b');
        list.insert('c');
        list.insert('d');
        list.insert('e');
        list.insert('f');
        expect(list.kToEnd(4)).toStrictEqual('e');
    })

    test('this will show the index value of nodes, which the index will be the input (k)', () =>{
        let list = new testObject.LinkedList();
        list.insert('a');
        list.insert('b');
        list.insert('a');
        list.insert('b');
        list.insert('a');
        expect(list.palindrome()).toStrictEqual(true);
})
});

