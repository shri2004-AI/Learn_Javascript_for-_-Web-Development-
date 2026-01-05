let h1 = document.querySelector("h1");


// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color="green";
// },2000);




// function changeColor(color){
//     h1.style.color=color;
// }

// setTimeout(changeColor("red"),1000);
// setTimeout(changeColor("orange"),1000);
// setTimeout(changeColor("green"),1000);




// function changeColor(color,delay){
//     setTimeout(()=>{
//        h1.style.color=color;
//     },delay);
// }
// changeColor("red",1000);
// changeColor("orange",1000);
// changeColor("green",1000);




// callbacks nesting => callBack hell
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
       h1.style.color=color;
       nextColorChange();
    },delay);
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000);
        });
    });
});




//using promises

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed !")
//         }, delay);
//     });
// }

// changeColor("red", 1000)
//     .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//     })
//     .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green", 1000);
//     })
//     .then(()=>{
//     console.log("green color was completed");
//     return changeColor("blue", 1000);
//     })