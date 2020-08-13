const binarySearch = (arr, val) =>{
  let min = 0;
  let max = arr.length -1;

  while (min < max) {
    let mid = Math.floor((max + min) /2);

    if (arr[mid] === val) {
      return mid;
    }
    if (arr[mid] < val) {
      min = mid + 1;
    }
    else {
      max = mid -1;
    }
  }
  return -1
}


// TEST ----------------------------------------

test('binarySearch exists', ()=>{
  expect(binarySearch).toBeDefined();
});

test('Expected cases: return -1 if value is not in the array', ()=>{
  const startArray = [1,2,3,4,5];
  const value = binarySearch(startArray,9);
  expect(value).toBe(-1);
})

test('return index value',() =>{
  const startArray = [1,2,3,4,5,7,8];
  const value = binarySearch(startArray,7);
  expect(value).toBe(5);
})
