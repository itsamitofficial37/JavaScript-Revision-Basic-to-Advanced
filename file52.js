// map method 

const numbers =[3,8,5,7,5];

function square (number){
    return (number*number)
}

const squareNumber = numbers.map(square)
console.log(squareNumber)


// another example of map method 

let users = [
    {name :"Amit", age:22},
    {name :"Upender", age:24},
    {name :"Vipin", age:26},
    {name :"Prince", age:20},
];

const userNames = users.map((user)=> {
    return user.name;
})

console.log(userNames);