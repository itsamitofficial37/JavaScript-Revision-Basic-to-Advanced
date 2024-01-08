// Event Bubbling and capturing 

const grandParent = document.querySelector("#grandparent");

grandParent.addEventListener("click", ()=> {
    console.log("GrandParent is clicked");
},true);

const parent = document.querySelector("#parent"); 

parent.addEventListener("click", ()=> {
    console.log("Parent is clicked");
},true);

const child = document.querySelector("#child");
child.addEventListener("click", (e)=> {
    console.log("Child is clicked");
    console.log(e);
},true);