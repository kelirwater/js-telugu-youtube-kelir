let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(`randomNumber: ${randomNumber}`);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

// const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;


submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (playGame) {
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    } else {
        newGame()
    }
})





function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number")
        userInput.value = ""
    } else if (guess < 1) {
        alert("please enter a number greater than 1")
        userInput.value = ""
    } else if (guess > 100) {
        alert("please enter a number less than 100")
        userInput.value = ""

    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over, Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }




}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Your guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage("Number is TOOOO low")
    } else if (guess > randomNumber) {
        displayMessage("Number is TOOOO High")
    }
}

function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += [`${guess}  `]
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    // p.classList.add('button')
    // p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    // startOver.appendChild(p)
    submit.value = "Start Game"
    playGame = false
}

console.log(submit);


function newGame() {
    // const newGameButton = document.querySelector('#subt')
    // submit.addEventListener('click', (e) => {
    //     submit.value = "Submit guess"
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);

    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute("disabled")
    // startOver.removeChild(p)
    submit.value = "Submit guess";
    displayMessage(``)
    playGame = true
    // }
    // )
}



