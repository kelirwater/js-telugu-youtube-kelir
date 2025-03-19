//array

const myArr = [0,1,2,3,4,5]
// const myHeroes = ["spiderman", "naggaraj"]


// const myArr2 = new Array(1,2,3,4);
// console.log(myArr2);

// console.log(myArr[0]);

//Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(-1);//insert at start of the array
// myArr.shift();//first element is modified
// console.log(myArr.includes(9));//check the vlaue exist or not as boolean
// console.log(myArr.indexOf(3));//if includes it says value of particular index, 

// const newArr = myArr.join()//join just add array of all elements
// console.log(newArr);
// console.log(typeof newArr); //converts to string



// console.log(myArr); //push and pop change the original array

//slice, splice

// // const myArr = [0,1,2,3,4,5]
// //SLICE
// console.log("A", myArr);
// const myn1 = myArr.slice(1,3);///strart from first mentioned index, count from there three spaces and doesn't print the last one
// console.log(myn1);//slice dont change the original array, a new array is returned
// console.log("A", myArr);//slice works same as for the primitve types but for 
//                     //obejcts which saved by refernece, copy and irignal one point to reference
//                     //the both original and copy are changed.
// //below is the example for slice with objects

// let arr = [{id:1}, {id:2}, {id:3}];
// let copiedArray = arr.slice(1,3)//slicing from index 1 to 3 // [ { id: 2 }, { id: 3 } ]
// console.log("copiedArray :", copiedArray);
// console.log(arr);

// copiedArray[1].id = 100;//modify an object in copied array aslo changes the original array for non-primitive data types

// console.log(arr); //[ { id: 1 }, { id: 100 }, { id: 3 } ]
// console.log(copiedArray);[ { id: 100 }, { id: 3 } ] //both the arrays are pointing to same refernce, 
// //orinigl array and copied aray ar eboth cganed copiedArray[1].id = 100;



// //array of arrays

// let arrOfArrAYS = [[1,2], [3,4], [5,6]];
// let sliceArray = arrOfArrAYS.slice(1,3);
// console.log(sliceArray) //[ [ 3, 4 ], [ 5, 6 ] ] sliced array
// console.log(arrOfArrAYS); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] array not changes 
// //both the avlues are referencing to same value, pointer

// sliceArray[0][0] = 100; 

// console.log(sliceArray) // [ 100, 4 ], [ 5, 6 ] ]
// console.log(arrOfArrAYS); //[ [ 1, 2 ], [ 100, 4 ], [ 5, 6 ] ]

// //sliced array of sliceArray[0][0] is [3,4], 3 is changed to 100, then whatever value the
// //main array is poining will be [[1,2], [100,4]].






//SPLCE
// array.splice(start indexed, deletecount, item1, item 2..)

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("B",myArr); //splice starting from index given it removes as per count
                            //it chnages the original array regardless of primitive and non-primitive.

  




