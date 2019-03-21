

const uniqueInOrder = (str) => {
    let returnArray = [str[0]];
    
    for (let i = 1; i < str.length ; i++) {
        if ( str[i] != str[i-1]) {
            returnArray.push(str[i]);
        }
    }

    return returnArray;
}

console.log(uniqueInOrder("AAABBbCCaaaaaaGGGH"));
