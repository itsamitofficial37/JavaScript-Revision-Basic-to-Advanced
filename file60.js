// splice method 
// start , delete , insert 

const myArray = ["item1", "item2", "item3"];

// delete 

myArray.splice(1, 1);
console.log(myArray);


// insert 
myArray.splice(1,0,"inserted Item");
console.log(myArray);


// delete + insert 

myArray.splice(0,1,"Insterd item 1");

console.log(myArray);
