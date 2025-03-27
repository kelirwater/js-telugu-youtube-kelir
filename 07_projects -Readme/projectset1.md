# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

## color-change

```javascript
const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log("e", e);
    console.log("e.target", e.target);
    // body.style.backgroundColor = e.target.id; optimize way
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project two

## BMI-Calculator

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please give an valid height";
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please give an valid weight";
    return;
  }
  const bmi = (weight / (height / 100) ** 2).toFixed(2);
  let classification = "";

  if (bmi < 18.6) {
    classification = "UnderWeight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    classification = "Nomral Weight";
  } else if (bmi > 24.9) {
    classification = "Overweight";
  }
  results.innerHTML = `Your BMI is: ${bmi}, You are ${classification}`;
});
```

## project 3

## Digital Clock

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock")

setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerText = date.toLocaleTimeString();
}, 1000);
```

## project 4

## Number guessing game

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(`randomNumber: ${randomNumber}`);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (playGame) {
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  } else {
    newGame();
  }
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
    userInput.value = "";
  } else if (guess < 1) {
    alert("please enter a number greater than 1");
    userInput.value = "";
  } else if (guess > 100) {
    alert("please enter a number less than 100");
    userInput.value = "";
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOOOO low");
  } else if (guess > randomNumber) {
    displayMessage("Number is TOOOO High");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += [`${guess}  `];
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  // p.classList.add('button')
  // p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  // startOver.appendChild(p)
  submit.value = "Start Game";
  playGame = false;
}

console.log(submit);

function newGame() {
  // const newGameButton = document.querySelector('#subt')
  // submit.addEventListener('click', (e) => {
  //     submit.value = "Submit guess"
  randomNumber = parseInt(Math.random() * 100 + 1);
  console.log(randomNumber);

  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = "";
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute("disabled");
  // startOver.removeChild(p)
  submit.value = "Submit guess";
  displayMessage(``);
  playGame = true;
  // }
  // )
}
```

## project 4

## unlimited colors

```javascript
//generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangeColor);

document.querySelector("#stop").addEventListener("click", stopChangeColor);
```

## project 5

## keyboard -check

```javascript
const insert = document.querySelector("#insert");

window.addEventListener(
  "keydown",
  (e) => {
    insert.innerHTML = `
      <div class="color">
        <table>
          <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
          </tr>
          <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
          </tr>
        </table>
      </div>
    `;
  },
  false
);
```
