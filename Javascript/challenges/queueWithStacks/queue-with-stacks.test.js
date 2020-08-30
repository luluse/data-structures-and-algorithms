'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class PseudoQueue {

  constructor(){
    this.top = null;
  }

  enqueue(value){
    const oldTop = this.top;
    this.top = new Node(value);
    this.top.next = oldTop;
  }

  dequeue(){
    let stackOne = {};
    let stackTwo = {};
    while (this.next !== null){
      let current = this.top;
      this.top = this.top.next;
      current.next = null;

      const oldTop = this.top;
      this.top = current.value
      this.top.next = oldTop;

      return top.value;
    }
  }

  peek(){
    return this.top.value;
  }
}



//----------- TEST ------------


it('should be a class', ()=>{
  expect(PseudoQueue).toBeDefined();
});

it('should instantiate an empty queue', () =>{
  const newQueue = new PseudoQueue();
  expect(newQueue).toBeDefined();
});

it('can successfully enqueue onto a Queue', () =>{
  const newQueue = new PseudoQueue();
  newQueue.enqueue('apples');
  expect(newQueue.peek()).toBe('apples');
});




