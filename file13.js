//  falsy value 

/* false 
   null
   ""
   undefined
   0*/

//    truthy value 

/* "abc"
    1
    */

    let firstName = undefined;

    if(firstName){
        console.log(firstName);
    }else {
        console.log(`${firstName} is kind a empty`)
    }