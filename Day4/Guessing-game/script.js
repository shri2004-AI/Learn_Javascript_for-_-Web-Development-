let max=prompt("enter the max number ");
let rdm=Math.floor(Math.random()*max)+1

while(true){
    let guess=prompt("enter the guessing number!");
    if(rdm==guess){
           console.log("congrats you gusessing the right number"); 
           console.log(rdm);
           break;         
    }
}