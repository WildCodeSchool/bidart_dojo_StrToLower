function strToLower(pram){
    return pram.toLowerCase();
};

function test(){
    if (strToLower("HELLO WORLD") === "hello world" ){
        console.log("TEST OK");   
    } else {
        console.log("test failed");
        
    }
}
test()