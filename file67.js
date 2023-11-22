const user = {
    firstName :"Amit",
    age : 8,
    about : function(hobby){
        console.log(this.firstName, this.age);
    }
}
const user2 = {
    firstName :"Upender",
    age : 18
}   

user.about.call(user2, "guitar");