'use strict'

const Graph = require('./edges.js')

describe('This tests will determine that the graphing code implements, adds and shows the graph and its neighbors', () => {
  it('test will add edges between two nodes in the graph', () => {
    const myGraph = new Graph()
    myGraph.addNode('Pandora')
    myGraph.addNode('Narnia')
    myGraph.addNode('Columbia')
    myGraph.addNode('Matrix')
    myGraph.addEdge('Pandora', 'Narnia', 600)
    myGraph.addEdge('Narnia', 'Columbia', 300)
    myGraph.addEdge('Columbia', 'Matrix', 50)
    expect(myGraph.getEdge()).toStrictEqual(['Pandora ---> Narnia,600, cost = $600', 'Narnia ---> Columbia,300, cost = $300', 'Columbia ---> Matrix,50, cost = $50', 'The final trip cost = $950'])
  })
})
