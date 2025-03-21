const user = {
    username : "kelir",
    price: 999,

    welcomeMessage: function(){
        //we use this for refering the value on this object, this scope
        console.log(`${this.username}, welcome to website`);
        console.log(this);//current variabled or current context
        
        
    }

}

// user.welcomeMessage() //kelir is username, this context 
// user.username = "hitesh"//changed the username
// user.welcomeMessage()//hitesh is username, this context


// console.log(this); //node environment , this context here is {} empty object
//if oyu run this in browser, it will show window


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//undefineds
    
// }
// chai()//


// const chai = function chai(){// named function expression
//     let username = "hitesh"
//     console.log(username);//undefined
    
// }

// chai()


// const chai1 = function (){// without name dfunction expression, anonymous function exprssion
//     let username = "hitesh"
//     console.log(this.username);//undefined
    
// }

// chai1()

//arrow function 

// const chai =  chai()=>{ //arrows shoudln't have named functions expression
// const chai = () =>{
// let username = "hitesh"
//     console.log(this.username);
// }


// chai()


// //this understanding 
// function greet(){
//     //console.log(`this: ${this}`); //referering to coercing , print differnt
//     console.log(this);//this will print actual object
    
    
// }
// //storing the reference of greet() in obj, that's why for storing you just need greet
// const obj = {greet: greet} //{greet} it key and value is same you can wrtie onlyone as {greet}
// obj.greet();

// const greet1 = ()=>{
//     console.log(this); //here this froms the sorrounding context, certain scenarios
    
// }

// const obj1 = {greet1}
// obj.greet()



// greet();
// function greet(){
//     console.log("hello");
    
// }

// // Immediately Invoked Function Expression

// (()=>{
//     console.log("This is called \"Immediately Invoked Function Expression\"");
    
// })
// //();




// const addThree = (num1,num2, ...num3) =>{
//     return num3
// }

// console.log(addThree(200,340, 223, 23,32));




 
// const myObjectCheck = {
//     username : "kelir",
//     age:27,
//     price:199
// }

// const checkForObject = (anyobject) =>{
//         return `username is ${anyobject.username} and price is ${anyobject.price}`
// }

// console.log(checkForObject(myObjectCheck));


// const myArray = [200,300,400,500]
// const checkforMyarRAY = (anyArray)=>{
//     return anyArray[0]
// }

// console.log(checkforMyarRAY(myArray));

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }


// console.log(addTwo(2,3));//5


//write paranthesis, you have to write keyword like above


//implicit return for lesser code

//same as above
//don't have to write paranthesis and return, it will understand
//for one line of code
// const addTwo = (num1, num2) => num1+num2
// console.log(addTwo(2,3));

//you can also write
// const addFour = (num1, num2, num3, num4) => (num1+num2)//brackets won't need return keyword
// console.log(addFour(2,3,4));//much used in react


 //in object
//better to store everything in () if not for {}
//  const addTwo = (num1,num2) =>({username : "kelir"})//wrapped in brackets, if not it will show undefined
//  console.log(addTwo());



