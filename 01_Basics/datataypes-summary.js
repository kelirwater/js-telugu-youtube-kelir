// // Primitve or value type

// //7 types : String , Number , Boolean , null , undefined , symbol - unique, BigInt - scientific values 


// const outsidEtEMP = null;
// console.log(outsidEtEMP);  //null
// let user;
// console.log(user); //undefined


// const id = Symbol('123');
// const anotherId = Symbol("123");

// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId); //false

// const bigNumber = 345667765756576578785n;
// console.log(typeof bigNumber);







// //non-primitive or reference  type

// //Array , Objects, Functions

// const heroes = ["shakiman", "naagaraj", "doga"];
// let myObj = {
//     name: "kelir",
//     age: 22,
//     isLoggedin : true,
//     numbers : undefined

// }

// console.log(myObj);


// const myFunction = function(){
//     console.log("hello world ");
// }

// console.log(typeof myFunction);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack ( Primitive), Heap (Non-Primitive)

let myYoutubeName = "kelir"  //given value = kelir for my YoutubeName

let anotherName =  myYoutubeName;  // myYoutube varilable value is stored in anotherName
                                   //myYoutubeName copy is stored in anotherName, not the original value                 

anotherName = "chaiourocode" //when we change the anothername, we have chganed it's copy, not the original one


console.log(myYoutubeName ); //kelir
console.log(anotherName); //chaiaurcode


let userOne = {
    email : "usergoogle.com",
    upi: "ip@ybl"
}          //userone variable will be on stack but value will be stored as reference in heap
                //the original value,. it does,n make a copy

let userTwo = userOne;  //create an new variable, stores in userTwo, both are referencing to 
                        //same value, the original value


userTwo.email = "kelir@google.com"//change the email on userTwo

console.log(userOne.email);  //even this email has been changed //"kelir@google.com"
console.log(userTwo.email); //this one you changed just now //"kelir@google.com"

