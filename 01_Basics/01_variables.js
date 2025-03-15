const accountId = 1445523
let accountEmail = "kelir@goggle.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState 
// accountId = 2 // not allowed

accountEmail = "he@hc.com"
accountPassword = "2121212"
accountCity = "bangalore"

console.log(typeof accountCity);
console.log(typeof accountState);


 console.log(accountId);

/*
Prefered not to use var
because of issue in block scope and functional scope

*/


 console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
 
 