// Question-1
let arr=[7,9,0,-2];
let n=3
console.log(arr.slice(0,n));

// Question-2
console.log(arr.slice(arr.length-n));

// Question-3
let str="";
if(str.length>0){
    console.log("not blank");
}else{
     console.log("is blank");
}

//Question-4
let name="harsh";
let idx=2;
if(name[idx]==name[idx].toLowerCase()){
    console.log("the charecter is in lowercase.");
}else{
    console.log("the charecter is not in lowercase.");
}

//Question-5
let str2="  harsh  ";
console.log(str2.trim());

//Question-6
let arr1=[7,9,11,13];
console.log(arr1.includes(7));

if(arr1.indexOf(8)!=-1){
    console.log("exist");
}else{
    console.log("not exist");
}