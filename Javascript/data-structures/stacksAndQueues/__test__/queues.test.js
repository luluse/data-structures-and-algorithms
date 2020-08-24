const Queue = require('../stacks-and-queues.js');


it('should be a class', () => {
  expect(Queue).toBeDefined();
})

it('should instantiate an empty queue', () =>{
  const queue = new Queue();
  expect(queue).toBeDefined();
});

it('can successfully enqueue onto a queue', () =>{
  const queue = new Queue();
  queue.enqueue('apples');
  expect(queue.peek()).toBe('apples');
});

it('can successfully dequeue a queue', () =>{
  const queue = new Queue();
  queue.enqueue('apples');
  queue.enqueue('bananas');
  const popped = queue.dequeue()
  expect(popped).toBe('apples');

  queue.dequeue();
  expect(queue.isEmpty()).toBeTruthy();
});


it('should check if is empty', () =>{
  const queue = new Queue();

  expect(queue.isEmpty()).toBeTruthy();
})

it('should check if not is empty', () =>{
  const queue = new Queue();

  queue.enqueue('apples');

  expect(queue.isEmpty()).toBeFalsy();
})

it('should not allow pop from emty list', ()=>{
  const queue = new Queue();

  expect(()=> queue.dequeue()).toThrow(RangeError)
  expect(() => queue.dequeue()).toThrow('Cannot pop off empty queue');
})

it('should not allow peek from emty list', ()=>{
  const queue = new Queue();

  expect(()=> queue.peek()).toThrow(RangeError);
  expect(() => queue.peek()).toThrow('Cannot peek empty queue');
})


