'use strict';

const {BinarySearchTree, Node} = require('../../data-structures/tree/tree');


const fizzBuzz = (tree) => {
  if(!tree){
    throw new Error('cannot FizzBuzz on empty tree');
  }

  function recursivefizzBuzz(root){
    // if(root === null){
    //   return;
    // }
    if(root.value % 15 === 0 ) {
      root.value = 'FizzBuzz';
    }
    if(root.value % 3 === 0) {
      root.value = 'Fizz';
    }
    if(root.value % 5 === 0) {
      root.value = 'Buzz';
    } else {
      root.value = root.value.toString();
    }
    recursivefizzBuzz(root.left);
    recursivefizzBuzz(root.right);
  }
  recursivefizzBuzz(tree.root);
}



// ------------- TEST -------------

it('fizzBuzz to be defined', ()=>{
  expect(fizzBuzz).toBeDefined();
});

it('Should throw error if tree is empty', ()=>{
  const tree = new BinarySearchTree();
  expect(fizzBuzz()).toTrowError('cannot FizzBuzz on empty tree');
});

it('Should replace by fizz, Buzz, fizzbuzz or string', ()=>{
  // const tree = new BinarySearchTree();
  // tree.root = new BinarySearchTree('5');
  // tree.root.left = new BinarySearchTree('3');
  // tree.root.right = new BinarySearchTree('15');
  // tree.root.left.left = new BinarySearchTree('7');
  const fifteen = new Node(15);
  const six = new Node(6);
  const five = new Node(5, fifteen, six);
  const tree = new BinarySearchTree(five);
  expect(tree).toBeDefined();
  console.log('this is my tree', tree);
  expect(fizzBuzz(five)).toEqual('Buzz');
  console.log('this should be buzz', five)
  expect(fizzBuzz(six)).toEqual('Fizz');
  expect(fizzBuzz(fifteen)).toEqual('FizzBuzz');
});
