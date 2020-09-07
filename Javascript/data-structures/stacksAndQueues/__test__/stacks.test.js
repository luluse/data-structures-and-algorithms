const {Stack, Node} = require('../stacks-and-queues.js');


it('should be a class', ()=>{
  expect(Stack).toBeDefined();
});

it('should instantiate an empty stack', () =>{
  const stack = new Stack();
  expect(stack).toBeDefined();
});

it('can successfully push onto a stack', () =>{
  const stack = new Stack();
  stack.push('apples');
  expect(stack.peek()).toBe('apples');
});

it('can successfully pop off a stack', () =>{
  const stack = new Stack();
  stack.push('apples');
  stack.push('bananas');
  const popped = stack.pop();
  expect(popped).toBe('bananas');

  stack.pop();
  expect(stack.isEmpty()).toBeTruthy();
});


it('should check if is empty', () =>{
  const stack = new Stack();
  console.log('console log stack', stack);
  expect(stack.isEmpty()).toBeTruthy();
})

it('should check if not is empty', () =>{
  const stack = new Stack();

  stack.push('apples');

  expect(stack.isEmpty()).toBeFalsy();
})

it('should not allow pop from empty list', ()=>{
  const stack = new Stack();

  expect(()=> stack.pop()).toThrow(RangeError)
  // expect(() => stack.pop()).toThrow('Cannot pop off empty stack');
})

it('should not allow peek from empty list', ()=>{
  const stack = new Stack();

  expect(()=> stack.peek()).toThrow(RangeError);
  // expect(() => stack.peek()).toThrow('Cannot peek off empty stack');
})


