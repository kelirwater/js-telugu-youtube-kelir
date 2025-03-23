const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}


//for in for object
for (const key in myObject) {
    console.log(`${key} shorcut is for ${myObject[key]}`);

}


const myArray = ["js", "java", "cpp", "swift", "py"]

for (const key in myArray) {
    console.log(myArray[key]);

}



const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('UK', 'United Kingdom')
map.set('IN', 'India')

for (const key in map) {
    console.log(key);

}