//  find method 

const myArr = ["Hello", "Cat", "Dog","Lion"];

const ans = myArr.find((str)=> {
    
        return  str==="Dog"
    
});
console.log(ans);

const ans2 = myArr.find((str)=>{
    return str.length===3;
});

console.log(ans2);

// Another example

const users = [
    {userId : 1, userName :"Amit"},
    {userId : 2, userName :"Akshay"},
    {userId : 3, userName :"Upender"},
    {userId : 4, userName :"Vipin "},
    {userId : 5, userName :"Anita"},
];

const answer = users.slice(0).find((a)=>{
    if(a.userName=="Amit"){
        return a.userName
    }
})

console.log(answer)