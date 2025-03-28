// let myName = "hitesh     ";
// let myChannel = "chai    ";
// // console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPowers = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Object.prototype.kelir = function () {
  console.log(`kelir is present in all objects`);
};

//
// myHeros.kelir();

Array.prototype.heyKelir = function () {
  console.log(`kelir says hello`);
};

/// heroPowers.heyKelir();  it dont have power to call from object

// inheritance
const User = {
  name: "chai",
  email: "chai@ggogol.eocm",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssigment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, //with the help of proto , the TASupport is inheriting properties from TeachingSupport
  //we can access TeachingSupport propertis from TASupport
};

Teacher.__proto__ = User; // with the help of proto , the teacher is inheriting properties from User
//we can access user propertis from User

// TeachingSupport.__proto__ = TASupport;//infinte loop

// console.log(Teacher.name); //chai
// console.log(TASupport.isAvailable); //false
// console.log(TeachingSupport.makeAssigment); //Avoid infinite loop

//modern syntax

// Object.setPrototypeOf(TeachingSupport, TASupport);

// Teacher.__proto__ = User;               //both are same
// Object.setPrototypeOf(Teacher, User);  //both are same

let anotherUsername = "ChaiAurCode        ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
