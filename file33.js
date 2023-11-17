//  how to itrate on objects

const person = {
    name : "Amit",
    age : 22,
    hobbies : ["Guitar","Sleeping","Listening Music","Eating"]
}


for(let key in person){
    console.log(key ,":",person[key]);
}