// create a function using function keyword
function nice(name) {
    console.log("hey "+name+" you are nice!");
    console.log("hey "+name+" you are good!");
    console.log("hey "+name+" your are t-Shirt is nice!");
    console.log("hey "+name+" your couse is good too!");
}
let name ="harsh"
nice(name)
nice("shubh") //function value or invocation


function sum(a,b) {
    console.log(a+b);
}

sum(3,5);

// return keyword 

function multiply(a,b) {
    return a*b;
}

console.log(multiply(3,5))

// default parameter



function sum2(a,b,c=7) {
    console.log(a+b+c);
}

sum2(3,5);
sum2(3,5,1);



const func1= (x)=>{
      console.log("I am an arrow function ",x);
}
func1(34);
func1(46);