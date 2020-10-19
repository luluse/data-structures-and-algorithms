'use strict';


const { Graph } = require('../graph');
const { Node } = require('../graph');
const { Edge } = require('../graph');


it.skip('sound return null when graph is empty', () =>{
  const graph = new Graph();
  expect(graph).toBe(null);
});


it.skip('add nodes and edges', () =>{
  const graph = new Graph()

  graph.addNode('A');
  graph.addNode('B');
  graph.addNode('C');
  graph.addNode('D');
  graph.addNode('E');

  graph.addEdge('A','B');
  graph.addEdge('D','E');
  graph.addEdge('C','E');
  graph.addEdge('A','D');
  graph.addEdge('A','C');

  // expect().toBe
});
