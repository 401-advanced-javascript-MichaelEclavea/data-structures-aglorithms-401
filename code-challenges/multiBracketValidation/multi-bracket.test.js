'use strict';

const checker = require("./multi-bracket-validation.js");




describe('this test will check for {}, [] and ().', () =>{
  test('this will test a single bracket string', () =>{
      expect(checker(`{hello}`)).toStrictEqual(true);
  })
  test('this test will take in another true statement with more chars and brackets', () =>{
      expect(checker('()[[Extra Characters]]')).toStrictEqual(true);
  })
  test('this test will take in false statement with one extra bracket', () =>{
    expect(checker('[({}]')).toStrictEqual(false);
})
});