'use Strict';

function repeatedWords(str){

  let wordsArray = str.toLowerCase().split(/\W+/g);

  let hashtable = new Array(1024);

  for(let i of wordsArray){
    let index = hash(i);
    if(hashtable[index]){
      for(let k in hashtable[index]){
        if(hashtable[index][k] === i){
          return i;
        }
      }
      hashtable[index].push(i);
    } else {
      hashtable[index] = [i];
    }
  }
}

function hash(key){

  let num = 0;

  for (let char of key){
    num += char.charCodeAt(0);
  }

  const primed = num * 599;
  const index = primed % 1024;

  return index;
}


// ------------- TESTS ---------------

it('repeatedWords function should exist', ()=>{
  expect(repeatedWords).toBeDefined;
})

it('should return the first word to occur more than once in that provided string', ()=>{
  const string = repeatedWords('Once upon a time, there was a brave princess who');

  expect(string).toBe('a');
})

it('should return the first word to occur more than once in that provided string when that repeated words occus many more times', ()=>{
  const string = repeatedWords('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');

  expect(string).toBe('it');
})

it('should return undefined when there is no repeated word in the string', ()=>{
  const string = repeatedWords('we had everything before us');

  expect(string).toBe(undefined);
})

it('should return the correct word when other words in the string have the same hash and are stored in same index', ()=>{
  const string = repeatedWords('one apple and the papel, apple');

  expect(string).toBe('apple');
})
