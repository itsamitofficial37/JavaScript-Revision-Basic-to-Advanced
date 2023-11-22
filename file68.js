//  aPPLY method 

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

about.apply(user, ["guitar", "Arijit singh"])