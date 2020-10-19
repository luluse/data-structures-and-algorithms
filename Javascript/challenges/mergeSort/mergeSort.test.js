'use strict';


function mergeSort (arr) {

  if(arr.length <= 1){
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

  return merge(
    mergeSort(left),mergeSort(right)
  );

}


function merge(left,right){
  let resultArr = [];
  let i = 0;
  let j = 0;


  while(i < left.length && j< right.length){
    if(left[i]<right[j]){
      resultArr.push(left[i]);
      i++;
    } else{
      resultArr.push(right[j]);
      j++;
    }
  }
  return resultArr
    .concat(left.slice(i))
    .concat(right.slice(j));
}



// ------------- TEST -------------

it('should return a sorted array', ()=>{
  expect(mergeSort([8,4,23,42,16,15])).toEqual([ 4, 8, 15, 16, 23, 42 ]);
});

it('should return a sorted array with few uniques', ()=>{
  expect(mergeSort([5,12,7,5,5,7])).toEqual([ 5, 5, 5, 7, 7, 12 ]);
});

it('should return a sorted array with nearly sorted', ()=>{
  expect(mergeSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
});
