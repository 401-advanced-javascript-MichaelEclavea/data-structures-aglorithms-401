'use strict';

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right)
    return arr;
  let i = partition(arr, left, right);
 
  quickSort(arr, left, i - 1);
  
  return quickSort(arr, i + 1, right);
}
function partition(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return left;
    }
    let pivot = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < arr[right]) {
        let temp = arr[i];
        arr[i] = arr[pivot];
        arr[pivot] = temp;
        pivot++;
      }
    }
    let temp = arr[pivot];
    arr[pivot] = arr[right];
    arr[right] = temp;
    return pivot;
  }
 
  module.exports = quickSort;