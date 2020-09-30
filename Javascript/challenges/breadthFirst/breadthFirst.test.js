'use strict';

const { Graph } = require('../../data-structures/graph/graph');
const { Queue } = require('../../data-structures/stacksAndQueues/stacks-and-queues');


class BreadthFirstGraph extends Graph{
  constructor(){
    super()
  }

  breadthFirst(startNode){
    const nodes = new Set();
    const breadth = new Queue();
    const visitedArr = [];

    breadth.enqueue(startNode);
    console.log(breadth, 'this is my breadth')
    while (breadth.length){

      const front = breadth.dequeue();
      nodes.add(front);
      visitedArr.push(front.value);
      console.log('visited Arr', visitedArr)
      const children = this.getNeighbors(front);

      for (let child of children){

        const childNode = child.startNode;

        if(!visitedArr.has(childNode)){
          breadth.enqueue(childNode)
        }
      }
    }
    
    return visitedArr;
  }
}

module.exports = BreadthFirstGraph;

//-------- TESTS --------

it('BreadthFirstGraph Should be defined', ()=>{
  expect(BreadthFirstGraph).toBeDefined();
});

it('Should return the list of nodes visited in the right order', ()=>{
  const graph = new BreadthFirstGraph()

  const a = graph.addNode('A');
  const b = graph.addNode('B');
  const c = graph.addNode('C');
  const d = graph.addNode('D');
  const e = graph.addNode('E');
  const f = graph.addNode('f');

  graph.addEdge(a,b);
  graph.addEdge(b,c);
  graph.addEdge(b,d);
  graph.addEdge(c,e);
  graph.addEdge(c,f);
  graph.addEdge(d,f);

  expect(graph.breadthFirst(a)).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])
});
