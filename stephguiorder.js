let uniqueInOrder = str => {

    let tab = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            tab.push(str[i]);
        }
    };
    return(tab);
}

console.log(uniqueInOrder('AAAaBBbCDd'));