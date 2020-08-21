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

  insertBefore(value, newVal){
    const newNode = new Node(newVal);

    let currentNode = this.head;

    while (currentNode.next !== null){
      if (currentNode.next.value === value){
        newNode.next = currentNode.next;
        currentNode = newNode;
      }
    }
    currentNode = currentNode.next;
  }

  insertAfter(value, newVal){
    let newNode = new Node(newVal);

    let currentNode = this.head;

    while(currentNode.next !== null){
      if(currentNode.value === value){
        newNode = currentNode.next;
        currentNode = newNode.next;
      }
    }
    currentNode = currentNode.next;
  }


}


module.exports = LinkedList;
