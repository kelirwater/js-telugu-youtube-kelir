//singleton

const tinderUser = new Object()

const mySymbol = Symbol("key1");
// console.log(mySymbol);


 tinderUser["id"] = 1234
 tinderUser["username"] = "sammy"
 tinderUser["isLoggedIn"] = false
 tinderUser[mySymbol] = "someValue"

// console.log(typeof  tinderUser[mySymbol]);


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullName:{
            firstName:"kelir",
            lastName:"water"
            
        }
    }
}

// console.log(regularUser["fullname"]["userfullName"]["firstName"]);
// console.log(regularUser.fullname.userfullName.middleName ?? "property is not ther");

const obj1 = {1 :"a", 2:"b"}
const obj2 = {3 :"c", 4:"d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2) //combine into single array


const obj3 = {...obj1, ...obj2}//mostly used is this
// console.log(obj3);


const users = [
    {
        id:1,
        name:"kelir"
    }
]

// console.log( users[0].id
// );

console.log(tinderUser);

//object.keys,values,entries will be returned as an array, so that 
//we can use for loop, moslty use for databases


const objectKeys = Object.keys(tinderUser);
console.log(objectKeys);


const objectValues = Object.values(tinderUser);
console.log(objectValues);

const objectEntries = Object.entries(tinderUser);
console.log(objectEntries);//return in array, key and value in array, nested array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));











