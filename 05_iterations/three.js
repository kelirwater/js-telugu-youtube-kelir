//for of 

//array's specific loops

// ["","",""]
// [{},{},{}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world~"
// for (const greet of greetings) {
//     console.log(greet);

// }

//Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('UK', 'United Kingdom')
map.set('IN', 'India')
//unique values, no duplicate


console.log(map);

for (const [key, value] of map) { //destructuring of object
    console.log(key, " := ", value);

}


//objects

// const myObject = {
//     'game1': "NFS",
//     'game2': 'spiderman'
// }

//objects are not iterable for for of 


// for (const [key, value] of myObject) {
//     console.log(key, value);

// }


