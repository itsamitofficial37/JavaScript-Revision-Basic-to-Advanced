// using function prototype


function createUser (firstName , lastName, email, age,address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
   
    return user;

}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

createUser.prototype.is18 = function(){
    return this.age >= 18;
}

createUser.prototype.sing = function(){
    return "Jaane woh kaise "
}

const user1 = createUser('Amit', 'Singh','amitsingh@gmail.com','23',"Neta Ji nagar, Bahadurgarh");
const user2 = createUser('Upender', 'Yadav','upenderydv8821@gmail.com','24',"Neta Ji nagar, Bahadurgarh");
const user3 = createUser('Prince', 'Singh','princesingh@gmail.com','21',"Neta Ji nagar, Bahadurgarh");
console.log(user1);
console.log(user1.sing())