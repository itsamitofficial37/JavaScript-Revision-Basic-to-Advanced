//  New keyword 

function createUser (firstName , age){
    this.firstName = firstName;
    this.age = age;}

const user = new createUser("Amit" , 23)
console.log(user);
