//  Functions 

// If we do the same thing again and again the code will be so bulky thats why we use function whenever we want to do same thing we just call that function .

const happyBrithday = ()=> {
    console.log("Happy birthday to you .....")
};

happyBrithday();
happyBrithday();

function sum(num1 , num2){
    let total = num1 + num2 
    return total;
   
}

console.log(sum(50,10));

//  check the number is even or odd 

/* const isEven = () => {
    const input = Number(prompt("Enter your Number"));
    if(input%2===0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven());
*/


//  function 
//  input : string 
// output : first character of the string

const firstChar = function(string){
    console.log(string[0]);
}

firstChar("Amit");



// function 
// input : Array [10,20,30,40,50] , target 10 
//  output : target index number 

const x = [10,20,30,40,50];

function indexTarget(params, target){
   for(let i = 0 ; i<params.length ; i++){
    if(params[i]===target){
        return i;
       }
   };
   
}

console.log(indexTarget(x,40));