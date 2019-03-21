// const assert = require('assert')

const tolower = require('./strtolower');

function test() {

    if (tolower('FUCK') === "fuck") {
        console.log("Test OK");

    } else {
        console.log("Test KO");

    }
}

test();




// 'use strict'


// assert.strictEqual(typeof tolower, 'function')
// assert.strictEqual(tolower('FUCK'), 'fuck')
// assert.strictEqual(tolower('FUCK'), 'fuck')
// assert.strictEqual(tolower('FUCK'), 'fuck')
// assert.strictEqual(tolower('FUCK'), 'fuck')
// assert.strictEqual(tolower('FUCK'), 'fuck')