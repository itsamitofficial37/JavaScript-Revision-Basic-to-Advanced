//  important array method 

const numbers = [4,2,5,8];
function myFunc(numbers , index){
    console.log(`index is ${index} number is ${numbers*2
}`)
    // console.log(`${numbers} * 2 = ${numbers*2}`)
    return [numbers]
}

// for(let i = 0 ; i< numbers.length; i++){
//     myFunc(numbers[i], i)
// }

// for each ki help se bhi ho jayega

numbers.forEach(myFunc);

// another example of forEach  method 

let users = [
    {name :"Amit", age:22},
    {name :"Upender", age:24},
    {name :"Vipin", age:26},
    {name :"Prince", age:20},
];



users.forEach(function details(user){
    console.log(user.name)
})


