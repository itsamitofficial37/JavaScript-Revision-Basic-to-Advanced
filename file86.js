// const sum = (a)=> {
//     return (b)=> {
//         return(c)=> {
//             return (d)=> {
//                 return a+b+c+d;
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4));

// by recursive approach 

const sum = function (a){
    return function (b){
        if(b){
           return sum(a+b);
    }
    return a;
}

}
console.log(sum)

console.log(sum(1)(2)());