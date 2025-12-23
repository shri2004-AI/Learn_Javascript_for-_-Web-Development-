let students=["harsh","shubh","jay","ram"];
console.log(students);
console.log(students[0][1]);   // harsh => a 


let nums=[2,4,6,8];
console.log(nums.length);
console.log(typeof nums);

let marks=[];
console.log(marks.length);

// arrays are mutable
let fruit=["mango","apple","banana"]
fruit[0]="watermelon";
console.log(fruit);

console.log(fruit[0][0]);


// constant Array
const arr=[1,2,3,4,5];
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);

// nested Array
let arr1=[[1,2],[3,4],[5,6]];
console.log(arr1);
console.log(arr1.length);
console.log(arr1[0].length);
console.log(arr1[0][0]);
