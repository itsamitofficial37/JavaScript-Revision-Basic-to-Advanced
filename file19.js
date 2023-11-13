// while loop 

// 1 to 10 counting print krani hai  in normal way 

/* let i = 1;

console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;

*/

// but this code is DRY (Don't Repeat yourself)

// by helping of while loop code 

// example 1

// let num = 1;
// while(num<=10){
//     console.log(num);
//     num++;
// }


// example 2
let number = 1;
let sum = 0;

while(number<=10){
    sum = sum + number
    number++;
  
}

console.log(sum);
