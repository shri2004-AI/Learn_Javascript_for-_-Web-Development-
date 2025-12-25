// block scope
{
    var a=25;
}
console.log(a);

let age=18;
if(age>=18){
    let str="adult";
    console.log(str);
} 

// lexical scope
function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){ // function scope
        console.log(x);
        console.log(y);
    }
    innerFunc();
}
outerFunc();