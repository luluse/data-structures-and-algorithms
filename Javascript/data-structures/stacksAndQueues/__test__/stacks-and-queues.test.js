const Stack = require('../stacks-and-queues.js');

it('should be a class', ()=>{
  expect(Stack).toBeDefined();
});

it('should instantiate an empty stack', () =>{
  const stack = new Stack();
  expect(stack).toBeDefined();
  //check if empty
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
});

it('can successfully pop off a stack', () =>{
  const stack = new Stack();
  stack.push('apples');
  stack.push('bananas');
  const popped = stack.pop();
  expect(popped).toBe('bananas');
  expect(stack.isEmpty()).toBeTruthy();
});

it('should check if is empty', () =>{
  const stack = new Stack();

  expect(stack.isEmpty()).toBeTruthy();
})

it('should check if not is empty', () =>{
  const stack = new Stack();

  stack.push('apples');

  expect(stack.isEmpty()).toBeFalsy();
})

it('should not allow pop from emty list', ()=>{
  const stack = new Stack();

  expect(()=> stack.pop()).toThrow(RangeError)
})

it('should not allow peek from emty list', ()=>{
  const stack = new Stack();

  expect(()=> stack.peek()).toThrow(RangeError);
})