'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(){
    this.size = 0;
    this.top = null;
  }

  isEmpty(){
    // return this.top === 0;

    if(this.top === null){
      return true;
    } else {
      return false;
    }
  }

  peek(){
    if (this.top === null){
      throw new RangeError('Cannot peek off empty Stack');
    }
    return this.top.value;
  }

  push(value){
    const oldTop = this.top;
    this.top = new Node(value);
    this.top.next = oldTop;
  }

  pop(){
    if (this.top === null){
      throw new RangeError('Cannot pop off empty Stack');
    }
    let current = this.top;
    this.top = this.top.next;
    current.next = null;
    return current.value;
  }

}


class Queue{

  constructor(){
    this.front = null;
    this.rear = null;
  }

  isEmpty(){
    return this.front === null;
  }

  enqueue(value){
    //adds value to back of queue
    // const node = new Node(value, this.rear);
    // rear.next = node
    // rear = node;

    const oldRear = this.rear;
    this.rear = new Node(value);
    this.rear.next = oldRear;
  }

  dequeue(){
    if(this.front === null){
      throw new RangeError('Cannot dequeue off empty Queue');
    }
    let current = this.front;
    this.front = this.front.next;
    current.next = null;
    return current.value;
  }

  peek(){
    if(this.front === null){
      throw new RangeError('Cannot peek off empty Queue');
    }
    return this.front.value;
  }

}


module.exports = {Stack, Queue, Node};

