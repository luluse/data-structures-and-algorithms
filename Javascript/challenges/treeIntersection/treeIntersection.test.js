'use Strict';

const {Queue} = require('../../data-structures/stacksAndQueues/stacks-and-queues');

function tree_intersection(tree1, tree2){
  const outputTree = [];
  const obj = {};

  const outputTree1 = breadthFirst(tree1);

  for(let i = 0; i < outputTree1.length; i++){
    if(!obj[outputTree1[i]]){
      obj[i] = 1
    } else {
      obj[outputTree1[i]] ++ ;
    }
  }

  const outputTree2 = breadthFirst(tree2);

  for (let j = 0; j< outputTree2.length; j++){
    if(obj[outputTree2[j]]){
      outputTree.push(outputTree2[j]);
    }
  }

  return outputTree;
}



function breadthFirst(){
  const output = [];
  let breadth = new Queue;

  while (!breadth){
    let node = breadth.dequeue();
    if(node.left){
      breadth.enqueue(node.left)
    }
    if(node.right){
      breadth.enqueue(node.right)
    }
    output.push(node.value);
  }
  return output;
}

// -------------- TEST -------------

it('tree_intersection function should exist', ()=>{
  expect(tree_intersection()).toBeDefined;
});
