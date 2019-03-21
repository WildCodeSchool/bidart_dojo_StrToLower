process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('Enter a string with Uppercase characters:')
process.stdin.on('data', (str) => {
    console.log(str.toLowerCase());
    process.exit()
})