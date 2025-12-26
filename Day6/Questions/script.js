// Question-1
// let printSquare=(n)=>{
//     return n*n;
// }
// console.log(printSquare(5));

// Question-2

let id=setInterval(() => {
    console.log("apna college");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("run clear interval !");
},10000);