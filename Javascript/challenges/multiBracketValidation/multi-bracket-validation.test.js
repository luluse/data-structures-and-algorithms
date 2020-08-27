'useStrict';

const Stack = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

function isProperPair(opener, closer){

  switch(opener){
  case '[':
    return closer === ']';
  case '{':
    return closer === '}';
  case '(':
    return closer === ')';
  }
  return false;
}

function multiBracketValidator(input){

  if(!input){
    return false;
  }

  const openers = '[{(';
  const closers = ']})';
  const stack = [];

  for(let i =0; i<input.length; i++){
    let currentChar = input[i];
    if(openers.includes(currentChar)) {
      stack.push(currentChar);
    } else if (closers.includes(currentChar)) {
      const poppedChar = stack.pop();
      if(!isProperPair(poppedChar, currentChar)){
        return false;
      }
    }
  }
  return stack.length === 0;
}


// ---------------- TESTS ------------------

it('should validate a balanced bracket input', ()=>{
  expect(multiBracketValidator('[{()}]')).toBe(true);
});

it('should not validate a not balanced bracket input', ()=>{
  expect(multiBracketValidator('[{}(]')).toBe(false);
});

it('should not validate a not balanced bracket input', ()=>{
  expect(multiBracketValidator('[')).toBe(false);
});

it('should not validate an empty input', ()=>{
  expect(multiBracketValidator('')).toBe(false);
});

it('should validate a balanced bracket input with other characters', ()=>{
  expect(multiBracketValidator('[{lulu}()]')).toBe(true);
});
