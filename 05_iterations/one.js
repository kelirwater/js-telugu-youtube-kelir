//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element== 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
    
// }

// for (let i = 1; i <=10; i++) {
//   //  console.log(`outer loop value : ${i}`);
    
//     for (let j = 1; j <=10; j++) {
//       //  console.log(`Inner loop value:${j}`);     
//         //console.log(i + '*' + j + " = " + i*j);

//     }
    
// }

let myArray = ["flash", "batman" ,"superman"]

for(let index = 0;index < myArray.length;index++){
    const element =[ myArray[index]];
    // console.log(element);
    
}

//array to object

let myObject= {}
for(let index = 0;index < myArray.length;index++){
    myObject[index] = myArray[index]
}

// console.log(myObject);

//break and continue

// for (let index = 0; index <=20; index++) {
//     if(index==5){
//         console.log("detected 5 ");
//         break;//stop the execution 
//     }
//     console.log(`value of i is ${index}`);
    
    
// }


for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log("detected 5 ");
        continue;//skip the condition 
    }
    console.log(`value of i is ${index}`);
    
    
}

