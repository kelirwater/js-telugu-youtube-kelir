//to create there are two types, literal and constructor

//singleton
//Object.create


//object literal


const mySym = Symbol("key1")



const JsUser = {
    "name": "Hitesh",
    age :23,
    [mySym]:"mykey1",
    "email":"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.name); //one of method to access the values
// console.log(JsUser["name"]);//keys are stored as strings in backgorund ,that/s why we are giving "name"

// console.log(typeof JsUser[mySym]);
// JsUser["email"] = 'hitesh@chatgtp.com'
// console.log(JsUser);

//freeze the object
// Object.freeze(JsUser)//freeze the objects, cannot change
// JsUser["email"] = 'hitesh@veer.com'
// console.log(JsUser);

 JsUser["greetings"] = function(){
    console.log("Hello JS user");
    
 }


 JsUser["greetingsTwo"] = function(){
    console.log(`Hello JS user, ${this.name}`);
    
 }


//  console.log(JsUser.greetings);
 console.log(JsUser.greetings());
 console.log(JsUser);
 
 
 