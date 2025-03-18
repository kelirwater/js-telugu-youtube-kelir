// Primitve or value type

//7 types : String , Number , Boolean , null , undefined , symbol - unique, BigInt - scientific values 


const outsidEtEMP = null;
console.log(outsidEtEMP);  //null
let user;
console.log(user); //undefined


const id = Symbol('123');
const anotherId = Symbol("123");

console.log(id);
console.log(anotherId);
console.log(id == anotherId); //false

const bigNumber = 345667765756576578785n;
console.log(typeof bigNumber);







//non-primitive or reference  type

//Array , Objects, Functions

const heroes = ["shakiman", "naagaraj", "doga"];
let myObj = {
    name: "kelir",
    age: 22,
    isLoggedin : true,
    numbers : undefined

}

console.log(myObj);


const myFunction = function(){
    console.log("hello world ");
}

console.log(typeof);
