process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log('Entrez une phrase en majuscules');
process.stdin.on('data', (sentence) => {
    let min = sentence;
    console.log(min.toLowerCase());
    process.exit();
})

