'use strict';

let array = [10, 15, 22, 5, 11, 6, 8];
   
function mergeSort (unsortedArray) {
 if (unsortedArray.length <= 1) {
   return unsortedArray;
 }
 const mid = Math.floor(unsortedArray.length / 2);
 const left = unsortedArray.slice(0, mid);
 const right = unsortedArray.slice(mid);
 return merge(
   mergeSort(left), mergeSort(right)
 );
 function merge (left, right) {
     let finalArray = [];
     let leftIndex = 0;
     let rightIndex = 0;

     while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
         finalArray.push(left[leftIndex]);
         leftIndex++;
       } else {
         finalArray.push(right[rightIndex]);
         rightIndex++; 
       }
     }

     return finalArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
   }
  }
module.exports = mergeSort;