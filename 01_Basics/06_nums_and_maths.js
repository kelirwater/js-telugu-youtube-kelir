// const score = 400 //automatically detect score is a number
// console.log(score);
// console.log(`${typeof score === "number" ? "This is a number" : "This is not a number"}`);

// //you can explicitly define number

// const balance = new Number(100);
// console.log(balance.valueOf()); //100

// console.log(balance);//[Number:100]


// console.log(score.toString()); //"400" - 400

// console.log(score.toFixed(1).toString().replace(/0/g , '2'))

// const otherNumer = 1123.8966

// console.log(otherNumer.toPrecision(3));

// const hundreds = 100000;
// console.log(hundreds.toLocaleString()); //converts by default with comma as per US counting
// console.log(hundreds.toLocaleString('en-IN')); //changes the default US count and replace with en-IN

// console.log(Number.MAX_VALUE);

//++++++++++++++++++++++Maths ++++by default ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //-values to positive values
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.2)); //celing always take upper value as 5
// console.log(Math.floor(4.9));//floor always below lower value as 4 

// console.log(Math.sqrt(16));
// console.log(Math.max(3,4,5,5));


console.log((Math.random()*10)+1);

const min = 10
const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
  





