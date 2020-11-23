'use strict';

const testObject = require('./repeat-word.js');

describe('this will test to see if the input strings will be sent out in a single repeat str', () =>{
    test('test to receive input and using the story function return a array of each str', () =>{
        let str = "hello from the new terminal";
        let final = testObject.story(str);
    expect(final).toStrictEqual(["hello", "from", "the", "new", "terminal"]);
    })
    test('test to receive input and using the story function return a array of each str', () =>{
        let array = ["hello","the","new","present","is","the","best"];
        let answer = testObject.sort(array);
        expect(answer).toStrictEqual(['the']);
    })
})