// let btn=document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button double clicked");
// })



let input=document.querySelector("input");

input.addEventListener("keydown",function(event){
    // console.log(event.key); // arrowup , arrowdown , arrowleft , arrowright
    console.log("code = ",event.code);
    console.log("key = ",event.key);

    if(event.code =="ArrowUp"){
        console.log("charecter moves forward ");
    }else if(event.code =="ArrowDown"){
        console.log("charecter moves down ");
    }else if(event.code =="ArrowLeft"){
        console.log("charecter moves left ");
    }else if(event.code =="ArrowRight"){
        console.log("charecter moves right ");
    }
})
