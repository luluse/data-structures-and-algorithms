'use Strict';

class Hashtable{

  constructor(size=1024){
    this.buckets = new Array(size);
  }

  add(key, value){

    const index = this.hash(key);

    const contentOfBuket = this.buckets[index];

    if(contentOfBuket === undefined){
      this.buckets[index] = [ [key, value] ];
    } else{
      this.buckets[index].push([key, value]);
    }

  }

  get(key){
    const index = this.hash(key);

    const itemsInBuket = this.buckets[index];

    if(itemsInBuket){
      for (let item of itemsInBuket){
        if(item[0] === key){
          return item[1];
        }
      }
    }
    return null;
  }

  contains(key){
    const index = this.hash(key);

    if(this.buckets[index] = undefined){
      return false;
    }

    return true; 
  }

  hash(key){
    //return 0; integer(index)

    let num = 0;

    for (let char of key){
      num += char.charCodeAt(0);
    }

    const primed = num * 599;
    const index = primed % this.buckets.length;

    return index;
  }


}


module.exports = Hashtable;
