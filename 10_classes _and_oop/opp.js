// object literal

const user = {
  username: "kelir",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user deatils from database");
    // console.log(`USERNAME:, ${this.username}`);
    console.log(this);
  },
};

// console.log(this); //always an {}

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    return `welcome ${this.username}`;
  };
  return this;
}

const userOne = new User("kelri", 12, true);
const userTwo = new User("chai", 11, false);
console.log(userOne.constructor);

console.log(userOne instanceof User);
console.log(userOne instanceof Object);

// console.log(userTwo);
