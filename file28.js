// for of loop 

const fruits = ["Apple","Mango","Orange", "PineApple,","Kiwi","Pomegrenate"];

const fruits2 =[];

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}

console.log(fruits2);