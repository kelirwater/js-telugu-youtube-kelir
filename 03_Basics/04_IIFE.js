// function abc(){
//     console.log("abc");
    
// }

// abc()

// const addTwo = (num1,num2)=>(num1+num2)
// console.log(addTwo(2,3));

(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})();
console.log("+++++++++++++++++");
 
(function chai1(){
    console.log("DB CONNECTED");
})();

((name)=>{console.log(`DB CONNECTED TWO ${name}`);
})("KELIR")//anonsynpus iife
