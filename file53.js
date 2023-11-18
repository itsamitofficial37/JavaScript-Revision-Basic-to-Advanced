// filter method 

const numbers = [1,2,4,6,3,7,9];

// check even number function 

function isEven(number){
    if(number%2===0){
        return true;
    }
}

// check odd numbers function 
function isOdd(number){
    if(number%2!==0){
        return true;
    }
}

//  for even 

const evenNumber = numbers.filter(isEven);
console.log(evenNumber);

// for odd 

const oddNumber = numbers.filter(isOdd);
console.log(oddNumber);