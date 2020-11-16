'use strict';

const sort = require('./sort.js');


describe('This will take in any array with integers and output the array sorted', () =>{
    it('will send an array and send back new array with pseudoCode methodology', () =>{
        let array = [8,4,23,42,16,15];
        expect(sort.pseudoCode(array)).toStrictEqual( [ 4, 8, 15, 16, 23, 42 ] );
     })

    it('will send an array and send back new array', () =>{
       let array = [8,4,23,42,16,15];
       expect(sort.insertionSort(array)).toStrictEqual( [ 4, 8, 15, 16, 23, 42 ] );
    })
    it('will return a array sorted from the original input array', () =>{
        let array = [2,3,5,7,13,11];
        expect(sort.insertionSort(array)).toStrictEqual( [2, 3, 5, 7, 11, 13] )
    })
    it('will take in an array and return a reversed order', ()=>{
        let array = [8,4,23,42,16,15];
        expect(sort.reverseSort(array)).toStrictEqual( [ 42, 23, 16, 15, 8, 4 ] );
    })
    it('will take in an array and return a reversed order', ()=>{
        let array = [2,3,5,7,13,11];
        expect(sort.reverseSort(array)).toStrictEqual( [ 13, 11, 7, 5, 3, 2 ] );
    })
})