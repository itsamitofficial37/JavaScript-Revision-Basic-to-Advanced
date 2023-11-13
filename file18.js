// switch statement 

const num1 = Number(prompt("Enter the number 1"));
const num2 = Number(prompt("Enter the number 2"));

const operator = prompt("Enter the operator");

switch(operator) {
    case "+": 
    console.log(num1+ num2);
    break;
    case "-" :
    console.log(num1-num2);
    break;
    case "*":
    console.log(num1*num2);
    break;
    case "/" : 
    console.log(num1/num2);
    break;
    default :
    console.log("Invalid operator");
    break;
}
