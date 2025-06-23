let startButton=document.querySelector(".start");
let countButton= document.querySelector(".count");
let stopButton=document.querySelector(".stop");
let input=document.querySelector(".input");
let value=0;
function showMessage()
{
    console.log("Button clicked");
}
//startButton.addEventListener("click",showMessage);
//now if I want to change the text when click-->
startButton.addEventListener("click",()=>{

   // startButton.innerText="Begin"
   //we can also toggle it-->
   if(startButton.innerText==="Start")
   {
    startButton.innerText="Begin";
   }
   else{
    startButton.innerText="Start";
   }
});
countButton.addEventListener("click",()=>{
    value++;
    console.log(value);
});
stopButton.addEventListener("click",()=>{
    //stopButton.classList.add("btn-red");
    //when we wnt to toggle-->
    stopButton.classList.toggle("btn-red");
});

//input.addEventListener("change",()=>{
  //  console.log(input.value);
//})
// whenever it loses its focus we can see the console part but when we are writing something it is not shwn -->inspect
// but if we want to see the change immediately we can use "input"
//MOUSE BUTTON-->
input.addEventListener("mousedown",(event)=>{
    console.log(event.button);
});
