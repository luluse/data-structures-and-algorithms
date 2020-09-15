'use strict';

const {BinarySearchTree, Node} = require('../tree.js');
const {Queue} = require('../../stacksAndQueues/stacks-and-queues');

it('Should return an array in traversal order', ()=>{

  const fifteen = new Node(15);
  const six = new Node(6);
  const five = new Node(5);
  const eight = new Node(8);
  const twelve = new Node(12);

  fifteen.left = six;
  fifteen.right = five;
  six.left = eight;
  six.right = twelve;

  const tree = new BinarySearchTree(fifteen);
  // expect(breadthFirst()).toBeDefined();
  console.log('this is my tree', tree);
  expect(tree.breadthFirst()).toBe([15, 6, 5, 8, 12]);

});
