const uniqueInOrder = require('./uniqueorder');

function testorder() {

    if (uniqueInOrder('AAAAbbCC') == ['A', 'b', 'C']) {
        console.log("Test OK");

    } else {
        console.log("Test KO");

    }
}

testorder();