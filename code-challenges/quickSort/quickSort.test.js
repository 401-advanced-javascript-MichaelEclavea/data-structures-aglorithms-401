const quickSort = require('./quickSort');


describe('Testing to see if quickSort function works ', () => {
  test('To see if array returns sorted', () => {
    let arr = [12, 13, 8, 10, 15, 20];
    expect(quickSort(arr)).toStrictEqual([8, 10, 12, 13, 15, 20]);
  });
  test('To see if array returns sorted', () => {
    let arr = [21, 23, 12, 13, 8, 10, 15, 20];
    expect(quickSort(arr)).toStrictEqual([8, 10, 12, 13, 15, 20, 21, 23]);
  });
});