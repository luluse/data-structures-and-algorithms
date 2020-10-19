'use Strict';

const { Graph } = require('../../data-structures/graph/graph');
const BreadthFirstGraph= require('../breadthFirst/breadthFirst.test');


function getEdge( graph, cities){

  let newGraph = new Graph(graph);
  let cost = 0;
  let trip = true;

  const currentCity = BreadthFirstGraph.breadthFirst(cities[0]);

  for ( let i = 0; i < cities.length; i++){
    let neighbors = Graph.getNeighbor(currentCity);

    if(currentCity.value ){
      neighbors.map( city => city.value)

      if(city.value === cities [i + 1]){
        return cost += city.weight;
      }
    } else {
      return trip = false;
    }

  }
}

// --------- TESTS ------------
it('getEdge Should be defined', ()=>{
  expect(getEdge).toBeDefined();
});

