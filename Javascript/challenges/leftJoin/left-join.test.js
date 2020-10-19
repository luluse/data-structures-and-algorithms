'use Strict';

const {Hashtable} = require('../../data-structures/hashtable/hashtable');


function leftJoin(hashTable1, hashTable2){

  let outputArray = [];

  for (let i=0; i<hashTable1.buckets.length; i++) {
    let temp = []
    temp.push(hashTable1.buckets[i][0])
    temp.push(hashTable1.buckets[i][1])

    if(hashTable2.contains(hashTable1.buckets[i][0])){
      let valueToReturn = hashTable2.get(hashTable1.buckets[i][0]);
      temp.push(valueToReturn);
    } else {
      return null
    }
    outputArray.push(temp)
  }
  return outputArray
}



// -------------- TEST -------------

it('tree_intersection function should exist', ()=>{
  expect(leftJoin()).toBeDefined;
});


