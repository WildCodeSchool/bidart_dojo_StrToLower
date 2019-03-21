//text= ("HELLO WORD");
  //  console.log(text.toLowerCase())


let hello = "HELLO WORLD"

const lower = a => a.toLowerCase()

function test(){
return lower(hello) === 'hello world' ? 'test ok' : 'test failed'
}
console.log(test())