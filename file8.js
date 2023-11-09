//  typeof() operator

// data types

// primitive data types 

// 1.  String
// 2. Number
// 3. boolean (0,1)
// 4. undefined 
// 5. null
// 6. BigInt
// 7. Symbol


let firstName  = "Amit";
console.log(typeof(firstName));   // string

let num = 44;
console.log(typeof(num));        // number

let bool = false;
console.log(typeof(bool));   // boolean

let val = undefined;
console.log(typeof val)           // undefined

let val1 = null;
console.log(typeof val1)       // object 



// convert number to string 

// 1)   add empty string in number 
let str = num + "";
console.log(typeof str);

// 2) toString()
let newString = num.toString();
console.log(typeof newString);


// convert string to number 

let myStr = +"34";

console.log(typeof myStr);

let age = "18"
age = Number(18);
