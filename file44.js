//  lexcial scope 

const myVar = "value1";

function myApp(){
    
    function myFunc(){
       
        const myFunc2 = ()=> {
            console.log("inside myFunc", myVar)
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}

myApp();

// lexical scope main function sabse pehle apni body ke ander check krega uske baad agar mil gya to use krega nhi to apne parent ki body main dekhega or usi ko lexical environment khte hai , or wha bhi nhi mila to global scope main dekhega or usko lexial chaining khte hai