function hello (){
    console.log("hello world");
};

// const hello = {
//     key1 : " value1"
// }

//  javascript function ===> function + object 

// proof

console.log(hello.name) // this gives function name and behave as a object because we used dot operator to access object property

//  we can add our own properties

hello.myOwnProperty = "Namaste India";
console.log(hello.myOwnProperty );

//  function provides more useful properties which is prototype this is object where we can store many key value pair 


console.log(hello.prototype);

//  only function have only prototype 

// proof

if(hello.prototype){
    console.log("prototyype is present ");
}else {
    console.log("Prototype is not present")
}