const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI); we cannot change

// console.log(descriptor);

const myneObject = Object.create({ name: "chainameginger", age: 25 });
// myneObject.name = "newobjectname";
// myneObject.age = 25;
// console.log(Object.getPrototypeOf(myneObject));

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "hun";

console.log(chai.name);
