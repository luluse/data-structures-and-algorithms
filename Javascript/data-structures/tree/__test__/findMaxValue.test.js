'use strict';

const {BinarySearchTree, Node} = require('../tree.js');

it('Can successfully find the largest value in a tree', ()=>{
  const eight = new Node(8);
  const six = new Node(6);
  const five = new Node(5, eight, six);
  const tree = new BinarySearchTree(five);
  expect(tree.findMaximumValue()).toEqual(8);
});

it('Should return 0 if tree is empty', ()=>{
  const tree = new BinarySearchTree();
  expect(tree.findMaximumValue()).toEqual(0);
});

