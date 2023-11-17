// function returning function 

function myFunc(){
    return function hello(){
    return "hello world";
    }
    return hello;
}
const ans = myFunc();
console.log(ans());


function greet(){
    return function happyDay(){
        console.log("happy day")
    }
    return happyDay;
    
}

const answer = greet();
answer();