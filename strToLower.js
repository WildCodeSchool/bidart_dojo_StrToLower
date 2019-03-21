
// Method with terminal dial
//___________________________

// process.stdin.resume()
// process.stdin.setEncoding('utf8')

// console.log('Enter your text')
// process.stdin.on('data', (string) => {
//     console.log(string.toLowerCase())
//     process.exit()
// })

// Basic method
//_______________

let string = "";
let stringLower = string => string.toLowerCase()


console.log (stringLower("HELLO Yo'uGè!J"))

// Begin tests

const assert = require('assert')

assert.strictEqual(typeof stringLower, 'function')
assert.strictEqual(stringLower.length, 1)
assert.strictEqual(stringLower('HELLO WORLD'), 'hello world')

