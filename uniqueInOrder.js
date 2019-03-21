'use strict';

const str = "AAABBbCCaaaaaaGGGH";
 

function uniqueInOrder(array) {
    let newArray = [];
    for (let i = 0; i < array.length ; i++) {
        if (array[i] !== array[i+1]) {
        newArray.push(array[i]);
        }
    }
    return newArray
}

console.log(uniqueInOrder(str));
console.log(uniqueInOrder("ABBBDGDHKEPOHE%"));


