function lowerCase(sentence) {
    console.log(sentence.toLowerCase());
}

let testT = "Hasta Luego";

function myTest(lowerCase) {
    if (lowerCase(testT) === testT.lowerCase) {
        console.log("Test it's OK");
    } else {
        console.log("Test fail");
    }
}

//console.log(myTest(lowerCase));

myTest(lowerCase);
