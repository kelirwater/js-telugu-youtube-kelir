// //all strings are immutable
// //below are primitive strings, don't have any properties

// const name = "kelir"
// // name.customProperty = "cusotmValie";
// // console.log(name.customProperty);

// console.log(typeof name);

// const repoCount = 50

// // console.log(name+repoCount+"value"+8);

// //string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// //below are string objects, they are wrapped object around the string
// //generally, it comes with additonal properties and methods(like .length, .toUpperCase())
// const gameName = new String('hiteshc');
// console.log(gameName);
// console.log(typeof gameName);

// console.log(gameName[0]); //h


// console.log(gameName.length);

// console.log(name.toUpperCase());
// console.log(name.charAt(1));
// console.log(name.indexOf("e"));


const blogName = "hitesh-hc"
console.log(blogName.substring(0,4));

//substring 0,4 include form 0,1,2,3 , start from 0 index, stop at count 4
//substring takesno negtive values, if it's sees negetive, it convers to 0
console.log(blogName.slice(0,4));//it can take negetive value, -1 counts from last.

const anotherString = blogName.slice(-8,-1)//first index should be less than second index, it returns emty srting
console.log(anotherString);

// const anotherString = blogName.slice(-8,4)// output is ite


const newStringOne = "   hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim remove all the spaces


const url = "https://hitesh.com/hitesh%20choudhary"

 console.log(url.replace( /i/g, 900));

 
  let count = 0;

  const updateUrl = url.replace(/i/g, (match)=>{
    count++;
    return count == 2? "lick" : match
  })

  console.log(updateUrl);


  console.log(url.includes("hitesh"));


  const newMethod1 = "hitesh-hc-com"
  console.log(newMethod1.split("-"));
  
   

  

