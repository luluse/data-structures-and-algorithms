'use Strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');


class AnimalShelter {

  constructor(){
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }

  enqueue(animal){
    let regex = /{cat} | {dog}/i;
    if( regex.test(animal)){
      throw new Error('this is not your home')}

    this.stack1.push(animal);
    return;
  }

  dequeue(pref){
    let regex = /{cat} | {dog}/i;
    if( regex.test(pref)){
      return null
    }

    while(this.stack1.top){
      this.stack2.push(this.stack1.pop())}

    let counter = true;
    let temp = 'foo';

    while(counter){
      if (this.stack2.top.value === pref){
        temp = this.stack2.pop();
        counter = false;
      }
      if (!this.stack2.top){
        counter = false;
      }
    }

    while(this.stack2.top){
      this.stack1.push(this.stack2.pop())
    }
    return temp;
  }
}


// ------------------ TESTS --------------------


it('Should be a class', () => {
  expect(AnimalShelter).toBeDefined();
});


it('can successfully enqueue onto a Queue', () =>{
  const newAnimal = new AnimalShelter();
  newAnimal.enqueue('dog');
  expect(newAnimal.peek()).toBe('dog');
});
