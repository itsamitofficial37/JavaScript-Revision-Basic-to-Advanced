// trim()   :- basically removes spaces from string

// toUpperCase() :- is basically use for change the case of string in upperCase.

// toLowerCase() :- is basically use for change the case of string in LowerCase


// slice() :- 


// 1) trim()

// let firstName = "     AMIT     ";

// console.log(firstName.length)

// let newString = firstName.trim();

// console.log(newString.length);


// 2) toUpperCase();

// let firstName = "amit";

// firstName = firstName.toUpperCase();
// console.log(firstName);


// 3) toLowerCase()

// let firstName = "AMIT";

// firstName = firstName.toLowerCase();

// console.log(firstName);

// 4) slice()


// start index
// end index

let firstName = "harshit";

let newString = firstName.slice(0,5);

console.log(newString);

// note 
//  slice method does not include last index no     0 to 4 index harsh should be printed but it gives us hars , so it does not include last index.

