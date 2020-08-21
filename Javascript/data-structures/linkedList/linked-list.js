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
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  toString(){

    if(this.head === null){
      throw new Error('Linked list empty');
    }
    let st = [];
    let node = this.head;
    while (node){
      st.push('{ ' + node.value + ' }');
      node = node.next;
    }
    st.push('NULL');
    return st.join(' -> ');
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

  insertBefore(targetValue, newValue) {

    if (!this.head) {
      return;
    }

    if(this.head.value === targetValue) {
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while(current.next) {

      if(current.next.value !== targetValue) {
        current = current.next;
      } else {
        current.next = new Node(newValue, current.next);
        break;
      }
    }
  }

  insertAfter(value, key) {

    if (!this.head) {
      return;
    }

    let current = this.head;

    while(current.next) {
      if (current.value === key) {
        current.next = new Node(value, current.next);
        break;
      }
      current = current.next;
    }
  }

  kthFromEnd(k){
    let current = this.head;
    let lengthCurrent = this.head;

    let length = 0;

    while(lengthCurrent !== null){
      lengthCurrent = lengthCurrent.next;
      length++;
    }

    let targetK = length - k;

    for(let i = 1; i <= targetK; i++){
      current = current.next;
      if( i===targetK){
        return current.value;
      }
    }
  }


}


module.exports = LinkedList;
