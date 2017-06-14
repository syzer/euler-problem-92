const test = require('ava').test
const lib = require('./euler92')

test('Numbers', t => {
  t.deepEqual(lib.numbers(85), [8, 5])
})

test('get next of chain()', t => {
  t.deepEqual(lib.chain(42), 20)
  t.deepEqual(lib.chain(85), 89)
})

// AKA constant problem in CS :)
test('will it ever stop()', t => {
  t.deepEqual(lib.stop(10), 1)
})

test('calc() on 100', t => {
  t.deepEqual(lib.calc(100), 80)
})
