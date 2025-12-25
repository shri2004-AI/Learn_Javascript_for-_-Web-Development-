// practice question-1
// function printPoem(){
//     console.log("Twinkele Twinkle,");
//     console.log("little star,");
// }
// printPoem();

// practice question-2
// function randomNumber(){
//     let num=Math.floor(Math.random()*6) +1;
//     console.log(num);
// }
// randomNumber();

// practice question-3
// function averageOfThreeNumber(a,b,c){
//     let avg=(a+b+c)/3;
//     console.log(avg);
// }
// averageOfThreeNumber(9,9,9);

// practice question-4
// function printTable(num){
//     for(let i=1;i<=10;i++){
//         console.log(i*num);
//     }
// }
// printTable(5);


// practice question-5
// function Sum1Ton(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//         sum+=i;
//     }
//     return sum;
// }
// let sum=Sum1Ton(5);
// console.log(sum);


//  practice question-6
// let str=["hii","hello","bye","!"];
// function conCate(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         result+=str[i];
//     }
//     return result;
// }
// let arr=conCate(str);
// console.log(arr);

// practice question-7
let greet="hello"; //global scope

function changeGreet(){
    let greet="namaste"; //function scope
    console.log(greet);
    function innerGreet(){ // lexical scope
        console.log(greet);
    }
    innerGreet();
}

console.log(greet);
changeGreet();
