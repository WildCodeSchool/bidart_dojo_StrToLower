function strToLower(str) {
  if (typeof str === 'string') {
    return str.toLowerCase();
  } else {
    return "It's not a string";
  }
}

// Begin Test
// using assert passed to the test function that just logs failures
exports['test that logs all failures'] = function(assert) {
  assert.equal(strToLower(123), "It's not a string", 'Test Pass');
  assert.equal(typeof strToLower, 'function', 'Test Pass');
  assert.equal(strToLower('HeLlO'), 'hello', 'Test Pass');
  assert.equal(strToLower('HELLO WORLD'), 'hello world', 'Test Pass');
};
if (module == require.main) require('test').run(exports);
// End Test

if (strToLower('HeLlO') === 'hello') {
  console.log('Test OK');
} else {
  console.log('Test fail');
}
