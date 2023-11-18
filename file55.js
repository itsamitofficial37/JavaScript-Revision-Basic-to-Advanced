// sort method 

const numbers = [12, 347,868,223, 199, 1000];

// console.log(numbers.sort());
const sortedArr = numbers.sort((a,b)=> {
    return a-b;
})

console.log(sortedArr);

const sortedArr2 = numbers.sort((a,b)=> {
    return b-a;
});
console.log(sortedArr2);

// sort method numbers array assume as a string 
// so that's why it print unexpected way


// realstic example 

const products = [
    {productId : 1, productName : "p1", price: 300},
    {productId : 2, productName : "p2", price: 3000},
    {productId : 3, productName : "p3", price: 2000},
    {productId : 4, productName : "p4", price: 8000},
    {productId : 5, productName : "p5", price: 500},
];

//  low to high sort 

const lowToHigh = products.slice(0).sort((a,b)=> {
    return a.price-b.price;
})

console.log(lowToHigh);


// high to low 

const highToLow = products.slice(0).sort((a,b)=> {
    return b.price-a.price;
})
console.log(highToLow);