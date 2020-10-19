'use Strict';

class Node{
  constructor(value){
    this.value = value;
    this.adj = [];
  }
}

class Edge{
  constructor(source, destination, weight){
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph{

  constructor(){
    this.adjList = [];
    this.edges = [];
  }

  addNode(value){
    // Adds a new node to the graph
    // Takes in the value of that node
    // Returns the added node

    const newNode = new Node(value);
    this.adjList.push(newNode);
    return newNode;
  }

  addEdge(node1, node2, weight=null){
    // Adds a new edge between two nodes in the graph
    // Include the ability to have a “weight”
    // Takes in the two nodes to be connected by the edge
    // Both nodes should already be in the Graph
    node1.adj.push(node2.value);
    node2.adj.push(node1.value);

    const edge = new Edge(node1, node2, weight);
    this.edges.push(edge);
  }

  getNodes(){
    // Returns all of the nodes in the graph as a collection (set, list, or similar)
    return this.adjList;
  }

  getNeighbors(node){
    // Returns a collection of edges connected to the given node
    // Takes in a given node
    // Include the weight of the connection in the returned collection
    const edgeCollection = [];

    this.edges.forEach((edge) =>{
      if(edge.source === node.value){
        edgeCollection.push(edge);
      }
    });
    return edgeCollection;
  }

  size(){
  // Returns the total number of nodes in the graph
    return this.adjList.length;
  }

}

module.exports = { Node, Edge, Graph };
