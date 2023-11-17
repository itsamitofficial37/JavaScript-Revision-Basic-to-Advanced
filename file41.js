//  Arror function

const isEven = (num) => {
    if(num%2===0){
        return true;
    }
    else{
        return false
    }
}

console.log(isEven(12));


// another example

const firstChar = string => console.log(string[0]);

firstChar("Amit");