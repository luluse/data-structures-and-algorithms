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

it('should return true if value exist in the list', () =>{
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.insert('cucumbers');
  expect('apples').toBe(true);
})

it('should return false if value does not exist in the list', () =>{
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.insert('cucumbers');
  expect('blueberries').toBe(false);
})

it.skip('should return a collection of all values that exist in the list', ()=>{
  const ll = new LinkedList();
  ll.insert('a');
  ll.insert('b');
  ll.insert('c');
  expect(ll.toString()).toHaveReturned('{ a } -> { b } -> { c } -> NULL');
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

it.skip('Should insert a new Node before a given value node', ()=>{
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.insertBefore('apples', 'cherries');
  expect(ll.head.next.value).toBe('cherries');

})

it.skip('Should insert a new Node after a given value node', ()=>{
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.insertAfter('bananas', 'cherries');
  expect(ll.head.next.value).toBe('cherries');
})

it('Should insert before', ()=>{
  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');
  list.insertBefore('apples', 'cucumbers');
  expect(list.toString()).toBe('{ bananas } --> { dates } --> { cucumbers } --> { apples } --> NULL');
});

it.skip('should insert after', () => {
  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');
  list.insertAfter('dates', 'cucumbers');
  expect(list.toString()).toBe('{ bananas } --> { dates } --> { cucumbers } --> { apples } --> NULL');
});

it('Should return K value where k is somewhere in the middle of the linked list', ()=>{
  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');
  list.insert('oranges');
  list.kthFromEnd(2);
  expect(list.current.value).toBe('bananas')
})

it('Should throw an error if k is greater than the length of the linked list', () =>{
  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');
  list.insert('oranges');
  list.kthFromEnd(7);
  expect(list.current).toThrowError('Error')
})

it('Should throw an error if k is a negative value', () =>{
  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');
  list.insert('oranges');
  list.kthFromEnd(-3);
  expect(list.current).toThrowError('Error')
})


