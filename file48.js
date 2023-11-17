//  param destructuring 

// object 
// react 


const person = {
    firstName : "Amit",
    gender : "Male",
    age : 35
}

// function printDetails(obj){
//     console.log(obj.firstName)
//     console.log(obj.gender)
    

// }

// printDetails(person)


function printDetails( {firstName : name , gender, age}){
    console.log(name);
    console.log(gender);
    console.log(age);

}

printDetails(person);