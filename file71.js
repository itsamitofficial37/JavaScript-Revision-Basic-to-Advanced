
// factory function which is return an object

const userMethod = {
    about :function(){
        return `${this.firstName} is ${this.age} years old`;
    },

    is18 :function(){
        return this.age >= 18;
    }
}

function createUser (firstName , lastName, email, age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
   
    return user;

}

const user1 = createUser('Amit', 'Singh','amitsingh@gmail.com','23',"Neta Ji nagar, Bahadurgarh");
const user2 = createUser('Upender', 'Yadav','upenderydv8821@gmail.com','24',"Neta Ji nagar, Bahadurgarh");
const user3 = createUser('Prince', 'Singh','princesingh@gmail.com','21',"Neta Ji nagar, Bahadurgarh");
console.log(user1);
console.log(user2);
console.log(user3);

