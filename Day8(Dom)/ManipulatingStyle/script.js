// let img=document.querySelector('img');
// console.dir(img);
// console.dir(img.style);

// let heading=document.querySelector('h2');
// console.dir(heading);
// console.dir(heading.style);
// heading.style.color="white";


// let links=document.querySelectorAll('li a');
// for(let i=0;i<links.length;i++){
//     links[i].style.color="yellow";
// }

// for(link of links){
//    link.style.color="white"
// }




// using classList
let img=document.querySelector('img');
console.log(img.classList);


let heading=document.querySelector('h2');
console.log(heading.classList);
heading.classList.add("green");
console.log(heading.classList);
heading.classList.contains("green");
console.log(heading.classList);
heading.classList.remove("green");
console.log(heading.classList);
heading.classList.toggle("red");
console.log(heading.classList);
