// function inside object is called method 

const person = {
    firstName :"Amit",
    age : 18,
    about : function(){
        console.log(this);
        console.log(this.firstName,);

    }
}

person.about();


// another example of function inside an object 

function personInfo (){
    console.log(`person name is ${this.firstName} and his age is ${this.age}`);
};

const person1 ={
    firstName :"Amit",
    age : 18,
    about: personInfo
};
const person2 ={
    firstName :"Upender",
    age : 21,
    about: personInfo
};
const person3 ={
    firstName :"vipin",
    age : 25,
    about: personInfo
};
const person4 ={
    firstName :"Nitish",
    age : 23,
    about: personInfo
};

person1.about();
person2.about();
person3.about();
person4.about();



