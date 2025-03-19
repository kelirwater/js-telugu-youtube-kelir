//Dates

// //Date constructor
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2025,0,23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("04-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// let seconds = Math.floor(Date.now()/1000);
// console.log(`seconds: ${seconds}`);

// let minutes = Math.floor(seconds/60);
// console.log(`minutes: ${minutes}`);

// let hours = Math.floor(seconds/60);
// console.log(`hours: ${hours}`);

// let days = Math.floor(hours / 24);
// console.log("Days:", days);           // Total days since Unix Epoch





// //Date.now()
// let timeStamp = Date.now()
// console.log(timeStamp);



// let newDate = new Date();
// console.log(newDate.getHours());



// console.log(newDate.toLocaleString('default', {
//    weekday: "long" ,
// }));


// let currentDate = new Date();

// let dayOfWeek = currentDate.getDay();

// console.log(dayOfWeek);


let today = new Date()
console.log(today);


let pastDate = new Date("1997-05-25")
console.log(pastDate);


let differenceInMilliseconds = today - pastDate;

let differenceInDays = Math.floor(differenceInMilliseconds/ (1000*60*60*24))

console.log("The difference in days from today is: " + differenceInDays);
