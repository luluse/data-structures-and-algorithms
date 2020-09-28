'use strict';

const Graph = require('../../data-structures/graph/graph');
const Queue = require('../../data-structures/stacksAndQueues/stacks-and-queues')


class BreadthFirstGraph extends Graph{
  constructor(){
    super()
  }

  breadthFirst(startNode){
    const nodes = new Map()
    const breadth = new Queue()
    const visitedArr = [];

    breadth.enqueue(startNode)

    while (breadth){

      const front = breadth.dequeue();
      nodes.add(front);
      visitedArr.push(front);

      const children = this.getNeighbors(front);

      for (let child of children){

        const childNode = child.startNode;

        if(!visitedArr.has(childNode)){
          breadth.enqueue(childNode)
        }
      }
    }
    return nodes;
  }
}

//-------- TESTS --------

it('BreadthFirstGraph Should be defined', ()=>{
  expect(BreadthFirstGraph).toBeDefined();
});

it('Should return the list of nodes visited in the right order', ()=>{
  const graph = new Graph()

  graph.addNode('A');
  graph.addNode('B');
  graph.addNode('C');
  graph.addNode('D');
  graph.addNode('E');
  graph.addNode('f');

  graph.addEdge('A','B');
  graph.addEdge('B','C');
  graph.addEdge('B','D');
  graph.addEdge('C','E');
  graph.addEdge('C','F');
  graph.addEdge('D','F');

  expect(new Map()).toBe('A', 'B', 'C', 'D', 'E', 'F')
});
