// const categories = document.querySelector("#category");

// categories.addEventListener("click", (e) => {
//     if( e.target.tagName ==="LI")
//   window.location.href = "/" + e.target.id;
// });

const form = document.querySelector("#form"); 

form.addEventListener("keyup" , (event)=> {
   
    if(event.target.dataset.uppercase != undefined){
        event.target.value = event.target.value.toUpperCase();
    }
})
