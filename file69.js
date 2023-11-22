// Bind method 

function about (hobby, artist){
    console.log(this.firstName, this.age, hobby , artist);
}

const user = {
    firstName :"Amit",
    age : 8,
   
}
const user2 = {
    firstName :"Upender",
    age : 18
}   

const func = about.bind(user, ["guitar", "Arijit singh"])

func();