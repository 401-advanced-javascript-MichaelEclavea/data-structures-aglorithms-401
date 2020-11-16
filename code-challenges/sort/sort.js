'use strict';

// let array = [8,4,23,42,16,15];

function insertionSort(arr){
    let newArray = [];
    newArray = arr.sort(function(a, b){
        return a - b; 
    });
    return newArray;

}

function reverseSort(arr){
    let newArray = [];
    newArray = arr.sort(function(a, b){
        return b - a; 
    })
    return newArray; 
}

function pseudoCode(arr){
 
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = i + 1; j < n; j ++){
            if(arr[j] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
               
            }
        }
      
    }
    return arr; 
}


module.exports = { insertionSort: insertionSort, reverseSort: reverseSort, pseudoCode: pseudoCode }; 