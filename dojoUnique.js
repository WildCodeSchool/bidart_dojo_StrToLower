function unique(string) {
    let finalS = [];
    let finalT = [];
    if (Array.isArray(string) === false) {
        finalT = string.split("");
    } else {
        finalT = string;
    }
    for (i = 0; i < finalT.length; i++) {
        if (finalT[i] != finalT[i - 1]) {
            finalS.push(finalT[i]);
        }
    }
    return finalS;
}

console.log(unique("AAAbbbDDDaaA"));
