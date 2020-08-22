'use strict';

class Node {
  constructor(value, next= null){
    this.value = value;
    this.next = next;
  }
}

class Stack {

  constructor(){
    this.top = null;
    // this.storage = [];
  }

  peek(){
    if(this.isEmpty()){
      throw new RangeError('Cannot peek off empty Stack');
    }
    return this.storage[this.storage.length - 1];
  }

  push(value){
    const node = new Node(value, this.top);
    this.head = node;
  }

  pop(){
    if(this.isEmpty()){
      throw new RangeError('Cannot pop off empty Stack');
    }
    return this.storage.pop();
  }

  isEmpty(){
    return this.storage.length === 0;

    //if(this.stoage.length === 0){
    //  retunr true;
    //} else {
    //  return false;
    //}
  }
}

module.exports = Stack;

