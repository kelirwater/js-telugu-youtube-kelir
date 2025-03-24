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