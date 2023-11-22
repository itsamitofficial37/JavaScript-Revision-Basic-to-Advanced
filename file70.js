// factory function which is return an object
function createUser (firstName , lastName, email, age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    }

    user.is18 = function(){
        return this.age >= 18;
    }
    return user;

}

const user1 = createUser('Amit', 'Singh','amitsingh@gmail.com','23',"Neta Ji nagar, Bahadurgarh");
console.log(user1);

const func2  = user1.is18();
console.log(func2);