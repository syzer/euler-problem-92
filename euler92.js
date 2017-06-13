const _ = require('lodash')

const numbers = a =>
  a.toString().split('').map(Number)

// console.log(numbers(85))
// [8, 5]

const square = a => a * a
const add = (a, b) => a + b

const chain = a => numbers(a).map(square).reduce(add)

// console.log(chain(42))
// 20

// console.log(chain(85))
// 89

const stop = a => {
  if (a === 89) return 89
  if (a === 1) {
    return 1
  } else {
    return stop(chain(a))
  }
}

// console.log(stop(10))
// 1

const fastStop = _.memoize(a => {
  if (a === 89) return 89
  if (a === 1) {
    return 1
  } else {
    return fastStop(chain(a))
  }
}, a => {
  // console.log(a)
  return a
})

const tenMln = 10000000
const mln = 1000000
const hundred = 100

const calc = Array
  .from({ length: tenMln }, (x, i) => i + 1)
  .map(fastStop)
  .filter(a => a === 89)
  .length

console.log(calc)
// 23 sec
// 8581146
// 856929

