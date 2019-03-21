'use strict';

 

function uniqueInOrder(array) {
    let newArray = [];
    for (let i = 0; i < array.length ; i++) {
        if (array[i] !== array[i+1]) {
        newArray.push(array[i]);
        }
    }
    newArray = newArray.join('');
    return newArray;
}


function test(){
    if (uniqueInOrder("AAABBbCCaaaaaaGGGH") === "ABbCaGH" ){
        console.log(uniqueInOrder("AAABBbCCaaaaaaGGGH"));
        console.log("TEST OK");   
    } else {
        console.log("test failed");
    }
}
test()
