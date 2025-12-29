// let arr=[1,2,4,5,6,7,8];

// let double=arr.map((el)=>{
//     return el*el;
// });
// console.log(double);


let student=[{
    name:"aman",
    marks:95
},{
    name:"harsh",
    marks:99
},{
    name:"ram",
    marks:98
}];

let gpa=student.map((el)=>{
    return el.marks/10;
});
console.log(gpa);
