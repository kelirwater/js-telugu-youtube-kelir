//destructing the objects

const course = {
    coursename: "js in telugu",
    price: "999",
    courseInstrutor: "kelir"
}


//below we are repeating the course multiple times, 
// //we have to destructuring to not to call course multiple times
//console.log(course.coursename,course.price,course.courseInstrutor);

//Destructing the objects

//const {} = object name this is syntax, inthe brackets, have to put
//whatever you want to access


//you can even change the name of the property while destructuring like below
const {courseInstrutor: teacher} = course



// console.log(courseInstrutor);//error , beacuse in thsi scope, it is has differnet name teacher
console.log(course.courseInstrutor);//kelir

console.log(teacher);//kelir


//JSON IS Object

//perfect syntax
// {
//     "name":"kelir",
//     "coursename": "js in telugu",
//     "price": "999"
// }

[
    {},{},{}
]

