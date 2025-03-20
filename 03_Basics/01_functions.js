
//function definiton 

function sayMyName(){
    console.log("K");
    console.log("I");
    console.log("L");
    console.log("E");
    console.log("R");
   
}


// sayMyName // sayMyName is a reference to the function (without calling it). /nothing happens

// sayMyName() //executes the function 
// console.log(sayMyName()) //executes the function and logs the value returned by the function,
//                         //  which is undefined since the function doesn't explicitly return anything.
// console.log(sayMyName) //logs the function itself, showing you the function reference.
//funciton definition is paarameters
// function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2);
    
// }

// addTwoNumbers()//arguments are not defined, paramters takes nothing , print Not an Number
// addTwoNumbers(3, null)//3, null is 0


function addTwoNumbers(number1, number2) {
    // let result = number1+number2;
    // return result
     return number1+number2 //only if you return you can store in variable, 
 }
const result = addTwoNumbers(2,6)

// 

function loginUserMessage(username = "sam"){
    return !username ?  `please entre the username` : `${username} just logged in `
    
}
// console.log(loginUserMessage("kelir"));


//  console.log(loginUserMessage());
 
function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(200, 400)); //all the values go to num1
//return an array //the  values will be return in array

//passing objects as arguments

const user = {
    username :"kelir",
    price : 299,
    
}


function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// //if you change something inside the user as username to usernames , it will say undefined
// handleObject(user);//username is undefined and price is 299
handleObject(user);//username is kelir and price is 299

//you can pass objects while executing as well below

handleObject({
    username : "sam",
    price: 222,
    age: 34
})


//array

const myNewArray = [200,300,300,500];

function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,333]));

