//text= ("HELLO WORD");
  //  console.log(text.toLowerCase())


const lower = a => a.toLowerCase()

let hello = lower("HELLO WORLD")
console.log(hello)


 function test(){
     if(hello === "hello world"){
         console.log( "test ok");
     }else{
       console.log ("test filed");
     }
 }
 test()

//function test(){
//return hello === 'hello world' ? 'test ok ' : 'test failed '
//}
//test()