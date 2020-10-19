'use Strict';

const { Graph } = require('../../data-structures/graph/graph');
const { Stack } = require('../../data-structures/stacksAndQueues/stacks-and-queues');

function depthFirst(graph, startNode){

  const stack = [];
  const visitedNodes = [];

  const root = startNode;

  stack.push(root);
  visitedNodes.push(root);

  while(stack.length){
    const currentNode = stack.pop();
    const neighbors= Graph.getNeighbors(currentNode);

    for(let neighbor of neighbors){
      const neighborNode = neighbor.node;

      if (visitedNodes.includes(neighborNode)){
        continue;
      } else{
        visitedNodes.push(neighborNode)
      }
      stack.push(neighborNode)
    }
  }
  return visitedNodes

}

//-------- TESTS --------

it('depthFirst Should be defined', ()=>{
  expect(depthFirst).toBeDefined();
});

it('Should return the list of nodes visited in the right order', ()=>{
  const graph = new Graph()

  const a = graph.addNode('A');
  const b = graph.addNode('B');
  const c = graph.addNode('C');
  const d = graph.addNode('D');
  const e = graph.addNode('E');
  const f = graph.addNode('F');
  const g = graph.addNode('G');
  const h = graph.addNode('H');

  graph.addEdge(a,b);
  graph.addEdge(a,d);
  graph.addEdge(b,c);
  graph.addEdge(b,d);
  graph.addEdge(c,g);
  graph.addEdge(d,e);
  graph.addEdge(d,h);
  graph.addEdge(d,f);
  graph.addEdge(h,f);

  expect(depthFirst(graph, a)).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F'])
});
