// callback functions

function myFunc2(name){
    console.log("Inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(){
    console.log("Hello there i am a function I can ..");
    myFunc2("AMit")
}

myFunc(myFunc2);