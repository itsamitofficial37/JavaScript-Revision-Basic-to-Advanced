// every method 

const numbers = [2, 4, 6, 8, 10];

const ans = numbers.every((number)=> number%2===0);

// callback function returns boolean value 
// every function also return booleans value 

console.log(ans)

// another example

const products = [
    {productId : 1, productName : "p1", price: 300},
    {productId : 2, productName : "p2", price: 3000},
    {productId : 3, productName : "p3", price: 2000},
    {productId : 4, productName : "p4", price: 8000},
    {productId : 5, productName : "p5", price: 500},
];

const answer = products.every(cartItem=> cartItem.price < 15000);

console.log(answer)