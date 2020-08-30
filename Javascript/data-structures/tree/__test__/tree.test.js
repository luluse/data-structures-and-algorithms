'use strict';

const {BinarySearchTree, Node} = require('../tree.js');

it('should instanciate', () =>{
  expect(BinarySearchTree).toBeDefined();
});

it('Can successfully instantiate a tree with a single root node', () =>{
  const tree = new BinarySearchTree('hey');
  expect(tree.root).toBe('hey');
});



it('Can successfully add a left child and right child to a single root node', ()=>{
  // const bananas = new Node('bananas');
  // const cherries = new Node('cherries');
  const apple = new Node('apple', 'bananas', 'cherries');
  expect(apple.value).toBe('apple');
  expect(apple.left).toBe('bananas');
  expect(apple.right).toBe('cherries');

});

it('Can successfully return a collection from a preorder traversal', ()=>{
  const bananas = new Node('bananas');
  const cherries = new Node('cherries');
  const apple = new Node('apple', bananas, cherries);
  const tree = new BinarySearchTree(apple);
  expect(tree.preOrder()).toEqual([ 'apple','bananas', 'cherries']);
});


it('Can successfully return a collection from an inorder traversal', ()=>{
  const bananas = new Node('bananas');
  const cherries = new Node('cherries');
  const apple = new Node('apple', bananas, cherries);
  const tree = new BinarySearchTree(apple);
  expect(tree.inOrder()).toEqual([ 'bananas', 'apple', 'cherries']);
});

it('Can successfully return a collection from a postorder traversal', ()=>{
  const bananas = new Node('bananas');
  const cherries = new Node('cherries');
  const apple = new Node('apple', bananas, cherries);
  const tree = new BinarySearchTree(apple);
  expect(tree.postOrder()).toEqual([ 'bananas', 'cherries', 'apple']);
});


// const bananas = new Node('bananas');
// const cherries = new Node('cherries');
// const apple = new Node('apple', bananas, cherries);

// const tree = new BinaryTree(apples);

// const results = tree.preOrder();
