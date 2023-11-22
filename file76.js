//  New keyword 

function CreateUser (firstName , lastName, email, age,address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}

CreateUser.prototype.sing = function(){
    return "Jaane woh kaise "
}

const user1 = new CreateUser('Amit', 'Singh','amitsingh@gmail.com','23',"Neta Ji nagar, Bahadurgarh");
const user2 = new CreateUser('Upender', 'Yadav','upenderydv8821@gmail.com','24',"Neta Ji nagar, Bahadurgarh");
const user3 = new  CreateUser('Prince', 'Singh','princesingh@gmail.com','21',"Neta Ji nagar, Bahadurgarh");

console.log(user1);