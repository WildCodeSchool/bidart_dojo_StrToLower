const strToLower = require('./strToLower');

// test
const assert = require('assert');

assert.strictEqual(typeof strToLower, 'function');
assert.strictEqual(strToLower.length, 1);
assert.strictEqual(strToLower.toString().includes('toLowerCase'), true);
assert.strictEqual(strToLower('COUcOU@'),'coucou@');
console.log('test ok');

