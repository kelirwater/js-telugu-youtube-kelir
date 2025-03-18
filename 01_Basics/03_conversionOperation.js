let score = "23abc";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score) ///conversion to Number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// console.log(typeof NaN);


//"33" =>33
//"33abc" => Nan is Not an Number
//Nan => still an number

//true =>1 or false =>0


let isLoggedIn = 55;
let isLoggedOff = 0;
let isString = "hitesh"
let isEmpty = ""


let booleanIsLoggedIn  = Boolean(isLoggedIn)
let bangaloreIsLoggedOFF = Boolean(isLoggedOff)
let stringToBoolean = Boolean(isString)
let emptyToBoolean = Boolean(isEmpty)



// console.log(booleanIsLoggedIn);
// console.log(bangaloreIsLoggedOFF);
// console.log(stringToBoolean);
// console.log(emptyToBoolean);



//1 =>true 0 =>false
//"" =>false
//"hitesh" =>true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);
//33 =>33 converted to an string


let value = 3
let negValue = -value;
//console.log(negValue);


// console.log(2**3); //-> 2 power 3
// console.log(2/3);

let str1 = "hello"
let str2 = "kelir"
let str3 = str1+str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1 +"2");
// console.log("1" +"2");
// console.log("1+2");
// console.log("1"+2+2);
// console.log(1+2+"2");


console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2;
console.log(num1,num2,num3);


let gameCounter = 100;
let prefix = ++gameCounter

let postfix = gameCounter++;
console.log(gameCounter);

console.log(`postfix: ${postfix}, prefix: ${prefix}`);



