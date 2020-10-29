"use strict";

function checker(string) {
  let openArray = [];
  let closeArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "[" || string[i] === "(" || string[i] === "{") {
      openArray.push(string[i]);
    }
    else if (string[i] === "]" || string[i] === ")" || string[i] === "}") {
      closeArray.push(string[i]);
    };
 }
    if (openArray.length === closeArray.length) {
      for (let i = 0; i < openArray.length; i++) {
        let a = openArray[i];
        let b = closeArray[i];
       
        if (a + b === "[]" || a + b === "()" || a + b === "{}") {
          return true;
        } else {
          return false;
        }
      }
    } else{
        return false;
    }
    
  }


module.exports = checker;
