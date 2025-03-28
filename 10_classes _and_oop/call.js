function SetUserName(username) {
  this.username = username;
  console.log("Called");
}

function CreateUser(username, email, password) {
  // SetUserName(username);//it is not calling the SetUsername
  SetUserName.call(this, username);
  // this.username = username , we have outsourced in SetUserName

  this.email = email;
  this.password = password;
}

const chai = new CreateUser("chai", ":Chai@gogolecom", "123");
console.log(chai);
