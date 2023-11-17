// block scope vs function scope

// in javascript this is block {} , whole file scope is known as functional scope


// let and const and block scope
{
    const firstName = "Amit";
    console.log(firstName);
}
{
    const  firstName ="Vipin";
    console.log(firstName);

}
const firstName = "Akshay";
{
    console.log(firstName);
}
// var is function scope 



{
    var name = "Amit";
}

console.log(name);