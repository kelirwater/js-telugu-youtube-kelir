const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

//consumption
//then iself is resolve
promiseOne.then(function () {
  console.log("Promise consumed");
});

//second method

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task two resolved");
});

//third promise

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//fourth promise

const promiseFourth = new Promise((res, rej) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      res({ username: "kelir", password: "123" });
    } else {
      rej("ERROR: Something went wrong");
    }
  }, 1000);
});
//this is called promise chaining
promiseFourth
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolve or rejected"));

//promise five

const promiseFive = new Promise((res, rej) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      res({ username: "javascript", password: "123" });
    } else {
      // rej("ERROR: JS went wrong");
      rej(new Error("ERROR: JS went wrong"));
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

consumePromiseFive();

//api call for promise

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     // console.log(response);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();

new Promise((res, rej) => {
  console.log("res is running");
  res();
})
  .then(() => {
    return `1 is created`;
  })
  .then((e) => {
    console.log(e);
  });

async function whorunfirst() {
  try {
    console.log("Starting async task...");

    const successResult = await Promise.resolve("Task completed successfully");
    console.log(successResult);

    const failureResult = await Promise.reject("Something went wrong");
    console.log(failureResult);
  } catch (error) {
    console.error("Caught error:", error);
  }
}

whorunfirst();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res, rej) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
