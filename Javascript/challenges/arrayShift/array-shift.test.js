const insertShiftArray = (arr, val) =>{
  const middle = Math.ceil(arr.length / 2);
  arr.splice(middle, 0, val);
  return arr;
}


// TEST

test('insertShiftArray exists', ()=>{
  expect(insertShiftArray).toBeDefined();
});

test('Expected cases: item is added in correct spot', ()=>{
  const startArray = [1,2,3,4,5];
  const resultArray = insertShiftArray(startArray,6);
  expect(resultArray[3]).toBe(6);
})

test('array length shoud increase by 1',() =>{
  const startArray = [1,2,3,4,5,7,8];
  const resultArray = insertShiftArray(startArray,6);
  expect(resultArray).toHaveLength(startArray.length + 1);
})

test('should not modify the original array', () =>{
  const startArray = [1,2,3,4,5];
  insertShiftArray(startArray,6);
  expect(startArray).toHaveLength(5);
})