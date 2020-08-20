'use strict';

const LinkedList = require('../../data-structures/linkedList/linked-list');


function zipHelper(node1, node2){
  if(!node1 || !node2){
    return;
  }

  let temp = node1.next;
  node1.next = node2;
  node2.next = zipHelper(temp, node2.next);
  return node1;
}

function zipLists(list1, list2){
  return zipHelper(list1.head, list2.head);
}

// TESTS

it('Should zip list', ()=>{
  const list1 = new LinkedList();
  list1.insert(2);
  list1.insert(3);
  list1.insert(1);

  const list2 = new LinkedList();
  list2.insert(4);
  list2.insert(9);
  list2.insert(5);

  const zipped = zipLists(list1,list2);

  expect(zipped.head.value).toBe(1);
});

it('Should zip same length list', ()=>{
  const list1 = new LinkedList();
  list1.insert(2);
  list1.insert(3);
  list1.insert(1);

  const list2 = new LinkedList();
  list2.insert(4);
  list2.insert(9);
  list2.insert(5);

  const zipped = zipLists(list1,list2);

  expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');
});
