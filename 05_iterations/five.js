// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(element => {
//     console.log(element);

// });



// function greet(item) {
//     console.log(item);
// }

// coding.forEach(greet
// );

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(item => console.log(item));


// function printMe(item) {
//     console.log(item);

// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);

// })

//output: 

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "pyhton",
        languageFile: "py"
    },
]


myCoding.forEach((item, index, arr) => {
    console.log(item.languageName, index, arr);

})