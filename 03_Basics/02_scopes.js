//var c = 300
let a = 300
//{}//scope

if(true){
    let a = 10
    const b = 20
    // console.log(a);
    
}


// console.log(a);
// //console.log(b);



function one(){
    const username = "kelir"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);

   two()
    
}

// one()




// +++++++++++++++++++++++intresting+++++++++++++++++++
console.log(addOne(2));

function addOne(num){
return num+1
}

// addTwo(5)-error before intialization
const addTwo = function(num){
    return num+2
}


