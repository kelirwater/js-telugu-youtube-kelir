class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    return `USERNAME is ${this.username}`;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    // User.call(this, username);//this cannot be used in class, works only in functional inheritance
    //Super should be used in class to call the parent
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    return `A new course was added by ${this.username}`;
  }
}

const chai = new Teacher("chai", "google.com", "123");
console.log(chai);
console.log(chai.logMe());
console.log(chai.addCourse());

const masalaChai = new User("masalaChai");
console.log(masalaChai.logMe());

console.log(chai instanceof User);
