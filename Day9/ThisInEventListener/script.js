 
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor="blue";
})

let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor="blue";
}
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
