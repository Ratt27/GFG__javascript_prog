let form=document.querySelector("#form");
let div=document.querySelector("#div");
let para=document.querySelector("#p");
//when I click on para it will trigger the event of div nd form also, it starts bubbling up
para.addEventListener("click",()=>{
    alert("para tag");
}, true);
div.addEventListener("click",()=>{
    alert("div tag");
}),true;
form.addEventListener("click",()=>{
    alert("form tag");
},true);
// capturing is coming from top to bottom and it happens when we true