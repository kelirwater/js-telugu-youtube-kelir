const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", 'flash', "batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]); //mutate the original array 

// const Allheroes = marvel_heroes.concat(dc_heroes) //does not mutate

// console.log(Allheroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //spread operator dont have a limit like concat
console.log(all_new_heroes);//new array will be created 

const another_array= [1,2,3, [4,5,6],7,[6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity) //flat one level deep by default
console.log("another_array.flat(2)", another_array.flat(1));

// console.log(real_another_array);


const arr1 = [1,2,3]
const arr2 = [...arr1];
const arr3 = [4,5,6]
console.log(arr1);
arr2.push(4)
console.log(arr2);
console.log(arr1);



// console.log(arr2.push(...arr3));//6 , return value of push is length of arr2
const hitesh = "devloeper"


console.log(Array.isArray("hitesh")); //check if it's array or not
console.log(Array.from("hitesh")); //createan array
const names = ["hitesh", "nabeen", "hahsjha"];
console.log(Array.from(names, (name)=>{return name.toUpperCase()}));//block body , must write the return statment

console.log(Array.from({name: "kelir"}));//empty array, intresting


let score1 = 100;
let score2 = 200;
let score3 = 300;
let newArr5 = Array.of("lusd losud", {dsfSD:"Fsd"}); //passed multiple elements, creates an array with empty slots
console.log(newArr5);
// const checkingForNewArr5 = [...newArr5, 5]
// console.log(checkingForNewArr5);
// console.log(newArr5);





const newArray1 = new Array(3)//creates an array with single numbers
console.log(newArray1);
newArray1.unshift(1);
newArray1[1] = 4;
console.log(newArray1);











 
