'use strict';

let array = [];
let temp = 0; 


function story(str){
    let words = [""];
 for(var i = 0; i < str.length; i++){
   if(str[i] !== " ")
     words[words.length - 1] += str[i];
   else if(words[words.length - 1])
     words.push("");
 }
 return words;
 }

 
function sort(words) {
   for(let i = 0; i < words.length - 1; i++){
     let temp = i + 1; 
     while(temp !== words.length){
       if(words[i] === words[temp]){
         array.push(words[temp]);
         temp++;
       }
       temp++;
     }

   }
   console.log(array);
   return array;
}


module.exports = {story: story, sort: sort};