'use strict';

const {BinarySearchTree, Node} = require('../../data-structures/tree/tree');


const fizzBuzz = (root) => {
  
  if(!root){
    throw new Error('cannot FizzBuzz on empty tree');
  }

  function recursivefizzBuzz(root){
    if(root === null){
      return;
    }  
    else if(root.value % 15 === 0 ) {
      root.value = 'Fizzbuzz';
    }
    else if (root.value % 3 === 0) {
      root.value = 'Fizz';
    }
    else if (root.value % 5 === 0) {
      root.value = 'buzz';
    } else {
      root.value = root.value.stringify();
    } 
    recursivefizzBuzz(root.left);
    recursivefizzBuzz(root.right);
  }
  recursivefizzBuzz(root);
}



// ------------- TEST ---------- 

it('fizzBuzz to be defined', ()=>{
  expect(fizzBuzz).toBeDefined();
});

it('Should throw error if tree is empty', ()=>{
  const tree = new BinarySearchTree();
  expect(fizzBuzz()).toTrowError('cannot FizzBuzz on empty tree');
});

// function fizzBuzz() {

//   var tree = new BinaryTree();

//   tree.root = new BinaryTree.node('5');
//   tree.root.left = new BinaryTree.node('10');
//   tree.root.right = new BinaryTree.node('12');
//   tree.root.left.left = new BinaryTree.node('3');
//   tree.root.left.right = new BinaryTree.node('donkey');
//   tree.root.right.left = new BinaryTree.node('15');

//   return tree;