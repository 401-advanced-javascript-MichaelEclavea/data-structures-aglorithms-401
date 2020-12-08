'use strict';

const Graph = require('./graph.js');

describe('This tests will determine that the graphing code implements, adds and shows the graph and its neighbors', () =>{
    it('will determine if adding a new node works', () =>{
    const myGraph = new Graph();
    expect(myGraph.addNode('two')).toStrictEqual('two');
    })
    it('test will add edges between two nodes in the graph', () =>{
        const myGraph = new Graph();
        myGraph.addNode('3');
        myGraph.addNode('6');
        myGraph.addEdge('3', '6'); 
        expect(myGraph.getNeighbors()).toBe('3-->6 ');
    })
    it('test will determine if addEdge function connects node to edge nodes', () =>{
        const myGraph = new Graph();
        myGraph.addNode('1');
        myGraph.addNode('3');
        myGraph.addNode('5');
        expect(myGraph.getNodes()).toStrictEqual(['1','3','5'])
    })
    it('test will output the total size of nodes the graph contains', () =>{
        const myGraph = new Graph();
        myGraph.addNode('0');
        myGraph.addNode('1');
        myGraph.addNode('2');
        myGraph.addNode('3');
        myGraph.addNode('4');
        myGraph.addNode('5');
        myGraph.addNode('6');
        expect(myGraph.breadthFirst()).toStrictEqual('0-->')
    })

})