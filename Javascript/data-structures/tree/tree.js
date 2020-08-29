'useStrict';

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
}


class BinarySearchTree extends BinaryTree {


  //can use recursive
// add value into node, add node to right spot
// put a function inside of method
  add(value){

  }

  contains(value){
    
  }
}



// // construct an array- add the root-value to an array
// function preOrder(root){
//   // check for null
//   if(!root){
//     return;
//   }

//   output.push(root.value);

//   // if (root.left){
//   //   preOrder(root.left);
//   // }

//   // if (root.right){
//   //   preOrder(root.right);
//   // }

//   preOrder(root.left);
//   preOrder(root.right);

// }



module.exports = {BinarySearchTree, Node};
