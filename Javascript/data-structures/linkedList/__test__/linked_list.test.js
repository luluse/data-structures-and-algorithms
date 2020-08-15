'use strict';

const LinkedList = require('../linked-list.js');

it('should instanciate', () =>{
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

it('shoud add to empty list', ()=>{
  const ll = new LinkedList();
  ll.insert('apples');
  expect(ll.head.value).toBe('apples');
});

it('should add to not empty list', ()=>{
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
})

it('should append to an empty list', () =>{
  const ll = new LinkedList();
  ll.append('apples');
  expect(ll.head.value).toBe('apples');
})

it('should append to not an empty list', () =>{
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next).toBe(null);
})

it('should return true if value exist in the list', () =>{
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect('bananas').toBe(true);
})
