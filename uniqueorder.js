function uniqueInOrder(it) {
    let result = [];
    let last = '';


    for (let i = 0; i < it.length; i++) {
        if (it[i] !== last) {
            last = it[i];
            result.push(last);
        }
    }

    return result;
}

console.log(uniqueInOrder("AAABBbCCaaaaaaGGGH"));



