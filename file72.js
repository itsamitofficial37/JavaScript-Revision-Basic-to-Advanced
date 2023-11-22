//  there is another way to create empty object 
//  ist way 
const user = {
};
console.log(user);
 
// 2nd way 

const obj1 = {
    key1 : "Value1",
    key2 : "Value2"
}
console.log(obj1);

const obj2 = Object.create(obj1);
obj2.key3 = "value3";

console.log(obj2.key2)