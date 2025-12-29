// function sum(...args){  
//     //arguments
//     for(let i=0;args.length>i;i++){
//         console.log("you give us :", args[i]);
//     }
// }


// function min(a,b,c,d){
//     console.log(arguments);
//     console.log(arguments.length);
// }
// min(7,2,9,3);


function sum1(...args){
    return args.reduce((sum,el) => sum + el);
}
console.log(sum1(45,64,3456,234));

function Min(msg,...args){
   console.log("hello");
   
    return args.reduce((min,el) =>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    }
)};
console.log(Min(45,64,34,234));