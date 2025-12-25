// takes one or multiple functions as arguments
// function multipleGreet(func,n){
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }

// multipleGreet(greet,2);


// Returns a function

function oddEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("wrong request");
    }
}

let request="even";
let func=oddEvenFactory(request);

console.log(func(3));
