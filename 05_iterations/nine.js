//reduce


const myNums = [1, 2, 3]

const sumWithNumbers = myNums.reduce((acc, curr, index) => {
    console.log(`index : ${index} for each time acc : ${acc}, curr : ${curr}, `);
    return acc + curr
}, 0)

// console.log(sumWithNumbers);


const shoppingCart = [
    {
        itemName: "jscourse",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(priceToPay);


const usingMap = shoppingCart.map((item) => (item.itemName))
console.log(usingMap);
