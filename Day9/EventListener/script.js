let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
};

function sayHello(){
    console.log(("hello"));
};
function sayName(){
    console.log("Apna College");
};



let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("pera was clicked.");
})

let box=document.querySelector("div");
box.addEventListener("mouseenter",function(){
    console.log("div was clicked.");
})