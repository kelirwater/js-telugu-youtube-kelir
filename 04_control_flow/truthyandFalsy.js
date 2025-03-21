const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


//falsy values

//false, 0, -0 -> also negetive value, BigInt 0n->negetive value, "", null, undefined, Nan 


//truthy values

// "0" 0 is in string it is truthy value, 'false'," " => if space is there in between "", it true
//true values => [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObejct = {}
if(Object.keys(emptyObejct).length === 0
){
console.log("Object is empty");
}


//nullish Coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //if null came, it safety check , assing the value next to it
// val1 = undefined ?? 15 //only for null and undefined
val1 = null ?? 10>30 ? "true of my freriend" : "false of my dferern" 
console.log(val1);

//terniary operator
//condition ? "true" : "false"
