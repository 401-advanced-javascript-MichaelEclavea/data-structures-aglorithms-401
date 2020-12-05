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
    addEdge(node1, node2) { 
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    } 

    getNodes(){
        const allNodes = Object.keys(this.adjacentList);
        return allNodes;
    }

    getNeighbors() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        return ( node + "-->" + connections); 
      } 
  } 

    size(){
        return this.numberOfNodes;
    }

  } 


  module.exports = Graph;