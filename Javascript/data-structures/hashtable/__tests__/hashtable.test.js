const Hashtable = require('../hashtable');

it ('should get correct value when no collisions', ()=>{

  const table = new Hashtable();

  table .add('apple', 'pippin');
  const value = table.get('apple');
  expect(value).toBe('pippin');
});

it ('should get correct value when collisions', ()=>{

  const table = new Hashtable();

  const hash1 = table.hash('apple');
  const hash2 = table.hash('papel');

  expect(hash1).toBe(hash2);

  table.add('apple','pippin');
  table.add('papel','means paper');

  const appleVal = table.get('apple');
  const papelVal = table.get('papel');

  expect(appleVal).toBe('pippin');
  expect(papelVal).toBe('means paper');
});

it ('should return null for a key that does not exist', ()=>{

  const table = new Hashtable();

  const value = table.get('banana');
  expect(value).toBe(null);
});

// const table = new Hashtable(256);
// const index = table.hash('foobar');
// // assert (index < 256 && index >= 0)
// const indexAgain = table.hash('foobar');
// // assert( index === indexAgain)
