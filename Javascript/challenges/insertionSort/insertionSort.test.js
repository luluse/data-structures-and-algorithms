'use strict';

function insertionSort (arr){
  for (let i = 1; i < arr.length;i++){
    let temp = arr[i];
    let j = i-1;

    while(j >=0){
      if (arr[j] > temp){
        arr[j+1] = arr[j];
        j = j-1
      } else {
        break;
      }
    }
    arr[j+1] = temp;
  }
  return arr;
}





// ------------- TEST -------------

it('should return a sorted array', ()=>{
  expect(insertionSort([8,4,23,42,16,15])).toEqual([ 4, 8, 15, 16, 23, 42 ]);
});

it('should return a sorted array with few uniques', ()=>{
  expect(insertionSort([5,12,7,5,5,7])).toEqual([ 5, 5, 5, 7, 7, 12 ]);
});

it('should return a sorted array with negative numbers', ()=>{
  expect(insertionSort([20,18,12,8,5,-2])).toEqual([ -2, 5, 8, 12, 18, 20 ]);
});
