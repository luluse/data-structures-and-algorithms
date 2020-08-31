'use strict';

const {BinarySearchTree, Node} = require('../tree.js');

it('should add to root of empty tree', () =>{

  const bst = new BinarySearchTree();
  bst.add(5);
  expect(bst.root.value).toBe(5);
 
});


it('should add to 1 item tree - go left', () =>{
  const bst = new BinarySearchTree(new Node(10));
  bst.add(5);
  expect(bst.root.value).toBe(10);
  expect(bst.root.left.value).toBe(5);
  expect(bst.root.right).toBeNull;
});

it('should add to 1 item tree - go right', () =>{
  const bst = new BinarySearchTree(new Node(10));
  bst.add(15);
  expect(bst.root.value).toBe(10);
  expect(bst.root.right.value).toBe(15);
  expect(bst.root.left).toBeNull;
});

it.skip('should build from array', () =>{
  const arr = [10, 5,15,3,7,12,17]
  const bst = new BinarySearchTree();
  bst.fromArray(arr);
  expect(bst.inOrder()).toBe([3,5,7,10,12,15,17]);

});
