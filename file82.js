
const getData = async ()=> {
    const data= await fetch(" https://api.github.com/users/itsamitofficial37");
    const json = await data.json();

    console.log(json)
}


const debounce = function(fn , delay){
    let timer;
    return function (){
        let context = this;
        arg = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=> {
            
            fn.apply(context, arg)
        },delay)
    }
}
const betterFunction = debounce(getData,2000);

