'use strict';

const mergeSort = require('./merge-sort.js');


describe('This will take in any array with integers, split them and then output the array sorted', () =>{
    it('will send an array and send back the array sorted', () =>{
        let array = [8, 4, 23, 42, 16, 15];
        expect(mergeSort(array)).toStrictEqual( [ 4, 8, 15, 16, 23, 42 ] );
     })

    it('will send an array and send back new array', () =>{
        let array = [2,3,5,7,13,11];
       expect(mergeSort(array)).toStrictEqual( [2, 3, 5, 7, 11, 13] );
    })
    it('will return a array sorted from the original input array', () =>{
        let array = [10, 12, 2, 3, 5, 7, 13, 11];
        expect(mergeSort(array)).toStrictEqual( [2, 3, 5, 7, 10, 11, 12, 13] )
    })
})