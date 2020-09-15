'useStrict';

const {Queue} = require('../stacksAndQueues/stacks-and-queues');

class Node {

  constructor(value, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }

}

class BinaryTree {

  constructor(root=null){
    this.root = root;
  }

  preOrder(){
    const arr = [];
    function _preOrder(root){

      if(!root){
        return;
      }

      arr.push(root.value);

      _preOrder(root.left);
      _preOrder(root.right);
    }
    _preOrder(this.root);
    return arr;
  }


  inOrder(){
    const arr = [];
    function _inOrder(root){

      if(!root){
        return;
      }
      _inOrder(root.left);
      arr.push(root.value);

      _inOrder(root.right);
    }
    _inOrder(this.root);
    return arr;
  }

  postOrder(){
    const arr = [];
    function _postOrder(root){

      if(!root){
        return;
      }


      _postOrder(root.left);
      _postOrder(root.right);
      arr.push(root.value);
    }
    _postOrder(this.root);
    return arr;
  }

  findMaximumValue(){

    let array = [];
    let max = 0;

    function _preOrder(root){

      if(!root){
        return;
      }
      console.log(root.value);
      if(root.left){
        _preOrder(root.left);
      }
      array.push(root.value);
      console.log(array);
      if(root.right){
        _preOrder(root.right);
      }
    }
    _preOrder(this.root);

    for (let i = 0; i < array.length; i++){
      if (array[i] >= max){
        max = array[i];
        return max;
      }
    }

  }

  breadthFirst(){
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

  }

}


class BinarySearchTree extends BinaryTree {

  add(value){

    const newVal = new Node(value);
    if (this.root === null){
      this.root = newVal;
    }else {
      let current = this.root;
      while(current){

        if (value < current.value){
          if (current.left === null){
            current.left = newVal;
            break;
          } else {
            current = current.left;
          }
        } if (value > current.value){
          if (current.right === null){
            current.right = newVal;
            break;
          } else current = current.right;
        }
      }
    }

  }



  contains(value){
    if(this.root === null){
      return null;
    }
    let current = this.root;
    let containsVal = false;

    while (current && !containsVal){
      if (value < current.value){
        current = current.left;
      } else if (value > current.value){
        current = current.right;
      } else {
        containsVal = true;
      }
    }
    if (!containsVal){
      return false;
    }
    return current;
  }
}


module.exports = {BinarySearchTree, Node};
