# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

## color-change

```javascript

const buttons = document.querySelectorAll(".button")
console.log(buttons);

const body = document.querySelector('body');




buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log('e', e);
        console.log('e.target', e.target);
        // body.style.backgroundColor = e.target.id; optimize way
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
        } if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
        } if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
        }

    })
})


```


## project two

## BMI-Calculator

```
javascript 

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()


    const height = parseInt(document.querySelector('#height').value)


    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector("#results")

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please give an valid height"
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please give an valid weight"
        return;

    }
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let classification = ""

    if (bmi < 18.6) {
        classification = "UnderWeight"
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        classification = "Nomral Weight"
    } else if (bmi > 24.9) {
        classification = "Overweight"
    }
    results.innerHTML = `Your BMI is: ${bmi}, You are ${classification}`;




})
```