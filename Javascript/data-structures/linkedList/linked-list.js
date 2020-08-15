'use strict';

class Node {

  constructor(value, next= null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList{

  constructor(){
    this.head = null;
  }

  insert(value){
    const node = new Node(value, this.head);
    // node.next = this.head;
    this.head = node;
  }

  append(value){
    const newNode = new Node(value);

    if (!this.head){
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next){
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;

  }

  includes(value){
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value){
        return true;
      }
    }
    return false;
  }

  toString(){

    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(`{ ${currentNode.value} } --> `);
      currentNode = currentNode.next;
    }

    console.log(`{ ${currentNode.value} } --> NULL`);
  }
}


module.exports = LinkedList;
