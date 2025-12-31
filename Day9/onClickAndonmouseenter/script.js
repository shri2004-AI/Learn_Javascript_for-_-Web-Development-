//onclick
// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     alert("button was clicked");
// };


// function sayHello(){
//     alert("hello");
// }
// btn.onclick=sayHello;


// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayHello;
// }


//onmouseenter 
let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.onmouseenter=function(){
        console.log("you are entered a button");
    }
}
