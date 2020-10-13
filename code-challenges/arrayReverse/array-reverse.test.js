'use strict';

describe('Testing to see if array will reverse', () =>{
    test('will reverse the array that was passed through the function', () =>{
    let testArray = [1,2,3,4,5,6,7,8,9,10];
    expect(reverseArray(testArray)).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
    })
})



function reverseArray(array){
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}


