// loop is automate the repeated task by using loop

// for loop
let a=1;
for (let i = 0; i <100 ;i++) {
      console.log(a+i)
}

// for in loop
const obj={
    name:"harsh",
    role:"programmer",
    company:"microsoft"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
}


// for of loop

for (const element of "harsh") {
    console.log(element);
    
}

// while loop
let i=1;
while(i<11){
    console.log(i*2);
    i++;
}

// do While loop
let x=1
do {
    console.log(x);
    i++;
} while (x>2);