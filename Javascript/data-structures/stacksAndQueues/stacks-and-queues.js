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
  }

  peek(){
    if(this.top.isEmpty()){
      throw new RangeError('Cannot peek off empty Stack');
    }
    return this.top.value;
  }

  push(value){
    const node = new Node(value, this.top);
    node.next = this.top
    this.top = node;
  }

  pop(){
    if(this.isEmpty()){
      throw new RangeError('Cannot pop off empty Stack');
    }
    let current = this.top;
    this.top = this.top.next;
    current.next = null;
    return current.value;
    // return this.top.pop();
  }

  isEmpty(){
    return this.top === 0;

    // if(this.top === 0){
    //  return true;
    // } else {
    //  return false;
    // }
  }
}


class Queue{

  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    //adds value to back of queue
    const node = new Node(value, this.rear);
    rear.next = node
    rear = node;
  }

  dequeue(){
    if(this.isEmpty()){
      throw new RangeError('Cannot dequeue off empty Queue');
    }
    let current = this.front;
    this.front = this.front.next;
    current.next = null;
    return current.value;
  }

  peek(){
    if(this.front.isEmpty()){
      throw new RangeError('Cannot peek off empty Queue');
    }
    return this.front.value;
  }

  isEmpty(){
    return this.front === 0;
  }

}


module.exports = Stack;
module.exports = Queue;

