class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    return ` username is : ${this.username}`;
  }

  static createId() {
    return `123`;
  }
}

const kelir = new User("kelir");
// console.log(kelir.createId());//you can call it on instance
console.log(User.createId()); //directly call on the class, not instance

class Teacher extends User {
  constructor(username, email) {
    // super(this.username);
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.logMe());
// console.log(iphone.createId());
