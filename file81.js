// //  normal function

// const add = (a,b,c)=> {
//     return a+b+c;
// };

// // curried function

// const name = "Amit";

// const curriedAdd = (a)=> {
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }

// console.log(curriedAdd(4)(4)(4))

// // currying through bind function

const add2 = (x,y)=> {
    return x+y;

}

const answer = add2.bind(this, 2 );

console.log(answer(3));

// const details = {
//   firstName: "Amit ",
//   lastName: "Kumar",
// };

// const fullName = function (hometown, city) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       " " +
//       "from" +
//       " " +
//       hometown +
//       " " +
//       city
//   );
// };
// const details2 = {
//   firstName: "vinit ",
//   lastName: "Kumar",
// };
// fullName.apply(details, ["Haryana", "Bahadurgarh"]);
// fullName.call(details2, "Bahadurgarh");

// // bind function

// const printFullName = fullName.bind(details2, "New Delhi", "Nangloi");

// printFullName();


// bind function ke through

const add = (x,y)=> {
    const firstName = "Amit"
    return firstName+  x+y;
}

const result = add.bind(this, 2)
const obj = result(2)
console.log(obj)


// pollyfil

