let input=document.createElement("input");
document.querySelector('body').append(input);
input.setAttribute("placeholder","username")

let button=document.createElement("button");
button.innerText="Click me"
document.querySelector('body').append(button);
button.setAttribute("id","btn");

button.classList.add("color");

let h1=document.createElement("h1");
h1.innerText="Dom Practice";
document.querySelector("body").append(h1);
h1.classList.add("deco");

let p=document.createElement("p");
p.innerHTML="Apna college <b>Delta</b> Practice";
document.querySelector("body").append(p);