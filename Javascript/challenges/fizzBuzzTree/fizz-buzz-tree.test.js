'use strict';

const {BinarySearchTree, Node} = require('../../data-structures/tree/tree');


const fizzBuzz = (tree) => {
  if(!tree){
    throw new Error('cannot FizzBuzz on empty tree');
  }

  function recursivefizzBuzz(root){
    if(root === null){
      return;
    }
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
  expect(tree).toBeDefined();
  console.log('this is my tree', tree);
  expect(fizzBuzz(tree)).toBe('FizzBuzz', 'Fizz', 'Buzz', '8', 'Fizz');

});
