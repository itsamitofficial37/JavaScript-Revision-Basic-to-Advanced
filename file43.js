//  function inside functions
//  we can put many function iside the functions which can be function declaration, arrow function or function expression

app();

function app (){
    function greet(){
        console.log("Good Morning");
    }
    const addTwoNumber = function(num1,num2){ 
        return num1+num2;
    }
    const multiply = (num1,num2)=> {
        return num1*num2;
    }
    console.log("App is Working");
    greet();
    console.log(addTwoNumber(2,3));
    console.log(multiply(2,3));
};


