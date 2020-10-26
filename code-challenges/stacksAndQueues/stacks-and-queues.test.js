'use strict';

const obj = require('./stacks_and_queues.js');

let testStack = new obj.Stack();
let testQueue = new obj.Queue();

describe('can push a single item onto stack', () =>{
    test('will receive a single item as a head', ()=>{
        testStack.push('a');
        expect(testStack.top.value).toStrictEqual('a');
    });
    test('will receive multiple values on stack', ()=>{
        testStack.push('a');
        testStack.push('b');
        testStack.push('c');
        testStack.push('d');
        testStack.push('e');
        expect(testStack.peek(testStack)).toStrictEqual('e');
    });
    test('will pop off item on the top of the stack stack', ()=>{
        testStack.push('a');
        testStack.push('b');
        testStack.push('c');
        testStack.push('d');
        testStack.push('e');
        expect(testStack.pop(testStack)).toStrictEqual('e');
    });
    test('can successfully empty a stack after multiple pops', ()=>{
        testStack.push('a');
        testStack.push('b');
        testStack.push('c');
        expect(testStack.isEmpty()).toStrictEqual();
    });
    test('will peek top item of stack', ()=>{
        testStack.push('a');
        testStack.push('b');
        testStack.push('c');
        testStack.push('d');
        testStack.push('e');
        expect(testStack.peek(testStack)).toStrictEqual('e');
    });
    test('Can successfully instantiate an empty stack', ()=>{ 
        expect(testStack.isEmpty()).toStrictEqual();
    });
    test('Calling pop or peek on empty stack raises exception', ()=>{
        let testStack = new obj.Stack();
        expect(testStack.pop()).toStrictEqual(undefined);
        expect(testStack.isEmpty()).toStrictEqual(true);
    })
    test('Can successfully enqueue into a queue', ()=>{
        testQueue.enqueue(5);
        expect(testQueue.front.value).toStrictEqual(5);
    })
    test('Can successfully enqueue multiple values into a queue', ()=>{
        testQueue.enqueue(5);
        testQueue.enqueue(6);
        testQueue.enqueue(7);
        expect(testQueue.rear.value).toStrictEqual(7);
    })
    test('Can successfully dequeue out of a queue the expected value', ()=>{
        testQueue.enqueue(5);
        testQueue.enqueue(6);
        testQueue.enqueue(7);
        testQueue.dequeue();
        expect(testQueue.front.value).toStrictEqual(5);
    });
    test('Can successfully peek into a queue, seeing the expected value', ()=>{
        let testQueue = new obj.Queue();
        testQueue.enqueue(8);
        testQueue.enqueue(9);
        testQueue.enqueue(10);
        expect(testQueue.peek(testQueue)).toStrictEqual(8);
    })
    test('Can successfully empty a queue after multiple dequeues', ()=>{
        let testQueue = new obj.Queue();
        testQueue.enqueue(8);
        testQueue.enqueue(9);
        testQueue.enqueue(10);
        testQueue.dequeue();
        testQueue.dequeue();
        testQueue.dequeue();
        expect(testQueue.isEmpty(testQueue)).toStrictEqual(true);
    })
    test('Can successfully instantiate an empty queue', ()=>{
        let testQueue = new obj.Queue();
        expect(testQueue.isEmpty(testQueue)).toStrictEqual(true);
    })
    test('Calling dequeue or peek on empty queue raises exception', ()=>{
        let testQueue = new obj.Queue();
        expect(testQueue.peek(testQueue)).toStrictEqual(undefined);
    })
})