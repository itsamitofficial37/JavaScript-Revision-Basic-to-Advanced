// Sets (it is iterables )

// store data in the form of array or string 

// order is not gauranted 
// unique items only (no duplicate item);

// declaration of set

const numbers = new Set("Amit");

console.log(numbers);

// no index-based access
console.log(numbers[0]);

// sets have own its method
// add method
numbers.add(1);




// has method
if(numbers.has(1)){
    console.log("1 is present");
}else {
    console.log("1 is not present ");
}


// for loop working so that's why it is iterable 

for(let char of numbers){
    console.log(char)
}