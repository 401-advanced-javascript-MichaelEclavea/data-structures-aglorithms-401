'use strict';

// const testArray = [1,2,3,4,5,6,7,8,9,10];



function binarySearch(array, key) {
  let low = 0;
  let high = array.length - 1;
  let mid = Math.floor((low + high) / 2);

  while (array[mid] !== key && low < high) {
    if (key < array[mid]) {
      high = array[mid] - 1;
    }
    else if (key > array[mid]) {
      low = mid + 1;
    }
    mid = Math.floor((low + high) / 2);
  }
  return array[mid] !== key ? -1 : mid;
}
 


describe('Testing the binary search function', () => {
  test('It should return -1 if the value does not exist in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 10)).toStrictEqual(-1);
  });
  test('It should return the index number of the value that matches the search value', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toStrictEqual(1);
  });
});