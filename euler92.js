const _ = require('lodash')

// numbers :: Int -> [Int]
// 85 -> [8, 5]
const numbers = a =>
  a.toString().split('').map(Number)

const square = a => a * a
const add = (a, b) => a + b

// AKA next in chain
// chain:: Int -> Int
// 42 -> 20
// 85 -> 89
const chain = a => numbers(a).map(square).reduce(add)

// stop :: Int -> Int
// warning 0 -> Exception
// when to stop (on 1 or 89)
const stop = a => {
  if (a === 89) return 89
  if (a === 1) {
    return 1
  } else {
    return stop(chain(a))
  }
}

const fastStop = _.memoize(a => {
  if (a === 89) return 89
  if (a === 1) {
    return 1
  } else {
    return fastStop(chain(a))
  }
})

const tenMln = 10000000
const mln = 1000000
const hundred = 100

// calc :: Int -> Int -> 8581146
// calc :: Void -> 8581146
const calc = (bound = tenMln) => Array
  .from({ length: bound }, (x, i) => i + 1)
  .map(fastStop)
  .filter(a => a === 89)
  .length

module.exports = {
  stop,
  numbers,
  fastStop,
  calc,
  chain
}
