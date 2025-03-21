//if
// const score = 200

// if(score < 400){
//     const amulet = 2345;
//     console.log(amulet);
    
// }

// console.log(amulet);


const balance = 1000;

// if(balance > 500) console.log("execute"); //implicit scope, only one line

// if(balance < 500){
//     console.log("less than ");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance <900){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
    
// }

const userLogginIn = true;
const debitCard = true
const loggedInFromGooLGE = false
const loggedInFromEmail = true

if(userLogginIn && debitCard){ //&& ampercent
    console.log("allow to buy  ");
    
}

if(loggedInFromGooLGE || loggedInFromEmail ||2===3){
    console.log("user has logged in ");
    
}


