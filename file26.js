// how to clone array

// ist method we are using slice method on array

/*let array1 = ["item1","item2"];

let array2 = array1.slice(0)

array2.push("item3");

console.log(array1);
console.log(array2);
*/

// 2nd method i am using concat method

/*let array1 = ["item1","item2"];
let array2 = [].concat(array1);

array2.push("item3");

console.log(array1);
console.log(array2);*/


//  3rd way to by spread operator 

let array1 = ["item1","item2"];

let array2 = [...array1];

array2.push("item3");

console.log(array1);
console.log(array2);