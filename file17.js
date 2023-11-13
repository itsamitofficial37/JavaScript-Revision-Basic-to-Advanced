//  nested if else 

// wining number = 19;
// 19 -> you guess  right 
// 17 -> to low
// 20 -> too high 

let winningNumber = 19;

let userGuess = Number(prompt("Guess the number"));

if(userGuess>winningNumber){
    alert("You guess too high");
}
else if (userGuess < winningNumber){
    alert("You guess too low");
}
else if(userGuess===winningNumber){
    alert("You Guess right number");
}
else{
    userGuess=== Symbol
    console.log("Invalid output");
}