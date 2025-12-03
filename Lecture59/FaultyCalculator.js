/*    create a faulty calculator using javascript
        
This faulty calculator does following :
1. it takes two numbers as input from the user 
2. it performs wrong operations as follows:
     +  ----> -
     *  ----> +
     -  ----> /
     /  ----> **

     it performs wrong operation 10% of the times

*/


let random=Math.random();
let first=18;
let secound=10;

let operator=prompt("enter the operator ");

if(random>0.1){
     if(operator==="+"){
          result=first+secound
     }
     else if(operator==="-"){
          result=first-secound
     }
     else if(operator==="*"){
          result=first*secound
     }else if(operator==="/"){
          result=first-secound
     }
}
else{
    if(operator==="+"){
          result=first-secound
     }
     else if(operator==="-"){
          result=first/secound
     }
     else if(operator==="*"){
          result=first+secound
     }else if(operator==="/"){
          result=first**secound
     } 
}

console.log("result : "+result);
