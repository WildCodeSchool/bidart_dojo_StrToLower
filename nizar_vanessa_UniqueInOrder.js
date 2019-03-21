function uniqueInOrder(sequence) {
    let array = [];
    for (let i = 0; i < sequence.length; i++){
        let current = sequence[i];
        let next = sequence[i+1];
        if (current !== next){
            array.push(current);
        }
    }
    console.log(array);
       
}
uniqueInOrder ("AAABBbCCaaaaaaGGGH");