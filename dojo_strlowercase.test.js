const fct = e => e.toLowerCase();

exports.testing = function myTest(arg1) {
    if (fct(arg1) === arg1.toLowerCase()) {
        console.log("Test Ok");
    } else {
        console.log('Test KO');
    }
}
