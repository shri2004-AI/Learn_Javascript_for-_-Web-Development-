// // setTimeout function
// console.log("hii there");

// setTimeout( ()=>{
//     console.log("apna college");
// },5000);

// console.log("welcome to..");


// setInterval function
console.log("hii there");

let id1=setInterval(() => {
    console.log("apna college");
}, 2000);

setTimeout(()=>{
    clearInterval(id1)
},10000)

console.log("welcome to..");
console.log(id1);


// let id2=setInterval(() => {
//     console.log("apni duniya");
// }, 2000);

// console.log("welcome to..");
// console.log(id2);