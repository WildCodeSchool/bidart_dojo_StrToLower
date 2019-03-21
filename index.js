strToLower = (string) => {
    console.log(string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())
}
strToLower('Hello WoRlD É Ò')