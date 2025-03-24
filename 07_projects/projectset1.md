# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

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