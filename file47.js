//  Rest Parameter

function addAll(...numbers){
    let total =0;
    for(let i=0; i<numbers.length ; i++){
        total = total + numbers[i];
    }
    return total;
}

const ans = addAll(4,5,6)
console.log(ans);