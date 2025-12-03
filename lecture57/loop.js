console.log("I am a tutorial on loop");

// for loop
let a=1;

for (let i=0; i <100; i++) {
    console.log(a+i);
}

// for in loop

let obj={
    name: "harsh",
    role: "programmer",
    company: "wipro"
}

for(const key in obj){
    const element=obj[key];
    console.log(element,key);
}


// for of loop

for (const element of "harsh") {
    console.log(element)
}

// while loop
let i=5;
while(i<6){
    console.log(i);
    i++
}

// do while
let x=20;
do {
    console.log(x);
    x++;
} while (x<8);