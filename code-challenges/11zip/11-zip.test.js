"use strict";

const testObject = require("./11-zip.js");

describe("Test should instantiate an empty linked list", () => {
  test("Should successfully add an item to list", () => {
    let list1 = new testObject.LinkedList();
    list1.insert("E");
    list1.insert("C");
    list1.insert("A");
    let list2 = new testObject.LinkedList();
    list2.insert("I");
    list2.insert("H");
    list2.insert("G");
    list2.insert("F");
    list2.insert("D");
    list2.insert("B");
    expect(testObject.zipList(list1, list2)).toStrictEqual(
      "A, B, C, D, E, F, G, H, I"
    );
  });
});
