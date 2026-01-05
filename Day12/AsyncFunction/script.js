async function greet(){
    return "hello";
}
greet()
.then((res)=>{
    console.log("promise was resolved : ",res);
})
.catch((err)=>{
    console.log("promise was rejected with err : ",err);
})

// let demoFunc= async ()=>{
//     return 5;
// }
// demoFunc()