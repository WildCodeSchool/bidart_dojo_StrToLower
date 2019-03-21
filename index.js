process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('Type a sentence :');

process.stdin.on('data', (string) => {
    console.log(string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
    console.log("✔");
    process.exit()
});

