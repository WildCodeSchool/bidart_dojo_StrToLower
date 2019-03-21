let mystr = "AAAabbbBBBBbbbCCCcEEErT"
let myarr = [];

for (let i = 0; i < mystr.length; i++) {
    if (mystr[i] != mystr[i-1]) {
        myarr.push(mystr[i]);
    }
}

console.log(myarr);