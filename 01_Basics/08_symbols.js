const sym1 = Symbol() //this have a different value like : 12132131234
const sym2 = Symbol()  //this have a different value like : 7474891234
console.log(sym1 == sym2);


//never same

const idSym = Symbol("id");
let user = {
    id: "68", 
    name: "kelir",
    city : "siena",
    age : "45",
    [idSym] : 918283773
}


console.log(user["id"]);
console.log(typeof user[idSym]);

const sym3 = Symbol.for("cat") //.for() global symbol for highframes , same
const sym4 = Symbol.for("cat")
    console.log(sym3==sym4);
        
