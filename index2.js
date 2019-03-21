process.stdin.resume()
process.stdin.setEncoding('utf8')


console.log('Type a chain of characters :');

process.stdin.on('data', (string) => {
  console.log(String.prototype.concat(...new Set(string)));
  console.log("✔");
  process.exit()
})


