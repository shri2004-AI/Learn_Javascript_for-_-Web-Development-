console.log("harsh");

let age=45;

if(age>18){
    console.log("you can drive");
}
else{
    console.log("you can not drive");
}


// if else ladder 

if(age>18){
    console.log("you can drive");
}else if(age==0){
    console.log("are you kidding ? ");
}
else{
    console.log("you can not drive");
}



// operators

// arithmetic operator 
let a=10;
let b=3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);
console.log(a++);
console.log(a);
console.log(b);
console.log( --b);

// comparison operator 

console.log(3=="3") // only check value
console.log(3==="3")// check type and value
console.log(3===3)


// ternary operator

let x=8
let y=6

c=(x>y)?(x-y):(y-x)
console.log(c);
