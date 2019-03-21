strToLower = (string) => {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

test = () => {
    if (strToLower('HELLO World') === 'Hello World'){
        console.log("Test ok");
        
    }else{
        console.log('Nul');
        
    }
}

test()