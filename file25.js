// primitive or reference type 

let num1 = 7;
let num2 = num1;

console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);
num1++;

console.log("After increment i num 1");
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);


let fruits = ["Apple","Banana", "PineApple"];

let fruitstwo = fruits;

console.log(fruits);
console.log(fruitstwo);

fruits.push("Kiwi");

console.log("After push in Array1");

console.log(fruits);
console.log(fruitstwo);

