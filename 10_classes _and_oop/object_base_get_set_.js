const User = {
  _email: "h@hich.com",
  _password: "abc",

  get email() {
    return this._email ? this._email.toUpperCase() : "No email set";
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
