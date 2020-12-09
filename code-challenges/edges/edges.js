'use strict';

class Graph { 
    constructor() { 
      this.numberOfNodes = 0;
      this.adjacentList = {
      }; 
    } 
    addNode(node)  { 
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        return node;
    } 
    addEdge(node1, node2, cost) { 
      this.adjacentList[node1].push(node2, cost);
    } 

    getNodes(){
        const allNodes = Object.keys(this.adjacentList);
        return allNodes;
    }

    getEdge() { 
      const allNodes = Object.keys(this.adjacentList); 
      let cost = 0;
      const array = [];
      for (const node of allNodes){
          if(this.adjacentList[node][1] !== undefined){
              cost = cost + this.adjacentList[node][1];
              let location = `${node} ---> ${this.adjacentList[node]}, cost = $${this.adjacentList[node][1]}`;
              array.push(location);
          }
      }
      let finalCost = `The final trip cost = $${cost}`;
      array.push(finalCost);
     console.log(array);
     return array;
  } 
  

    size(){
        return this.numberOfNodes;
    }

  } 


  module.exports = Graph;