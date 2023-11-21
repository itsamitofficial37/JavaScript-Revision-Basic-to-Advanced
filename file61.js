// iterables 

// iterables wo hote hai jin pr for of loop lgta hai 
//  string and array are iterables 

// string

const firstName = "Amit";
for ( let name of firstName){
    console.log(name);

}


// array
const array = ["item1", "item2", "item3"];

for(let item of array){
    console.log(item);
}

//  objects are not iterables 

let users = {
    firstName :"Amit",
    gender : "Male"
}

for(let key in users){
    console.log(key, )
}

