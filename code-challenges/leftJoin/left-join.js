'use strict';

function leftJoin(table1, table2){
  let leftArray = [];
  let rightArray = [];
  let answers = [];
  for(const [key, value] of table1){
    leftArray.push([`${key}`, `${value}`]);
  }
  for(const [key, value] of table2){
    rightArray.push([`${key}`, `${value}`]);
  }
  for(let i = 0; i < leftArray.length; i++){
    let j= 0;
    let leftKey = leftArray[i][0];
    while(j<leftArray.length){
      let rightKey = rightArray[j][0];
      if(leftKey === rightKey){
        answers.push(leftKey, leftArray[i][1], rightArray[j][1]);
        j++;
      } else{
        j++;
      }
      
    }
  }
  return (answers);
}




module.exports = leftJoin; 
