//  default parameter 

function addTwo(a, b = 1){
    return a+b;
}

// const ans = addTwo(4, 5);
const ans = addTwo(4);

console.log(ans);