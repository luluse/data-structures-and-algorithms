'use strict';

function quickSort(arr, left, right){

  if (left >= right){
    return;
  }

  let position = partition(arr, left, right);
  quickSort(arr, left, position-1);
  quickSort(arr, position+1, right);
  return arr;
}

function partition(arr, left, right){
  let pivotIndex = left;
  let pivotValue = arr[right];

  for(let i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, right);
  return pivotIndex;
}

function swap(arr, a ,b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

}


// ------------- TEST -------------

it('should return a sorted array', ()=>{
  const arr = [8,4,23,42,16,15];
  expect(quickSort(arr, 0, arr.length-1)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
});

it('should return a sorted array with negative numbers', ()=>{
  const arr = [ -2, 5, 8, 12, 18, 20 ]
  expect(quickSort(arr, 0, arr.length-1)).toEqual([ -2, 5, 8, 12, 18, 20 ]);
});

it('should return a sorted array with few uniques', ()=>{
  const arr = [ 5, 5, 5, 7, 7, 12 ];
  expect(quickSort(arr, 0, arr.length-1)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
});

it('should return a sorted array with negative numbers', ()=>{
  const arr = [20,18,12,8,5,-2];
  expect(quickSort(arr, 0, arr.length-1)).toEqual([ -2, 5, 8, 12, 18, 20 ]);
});
