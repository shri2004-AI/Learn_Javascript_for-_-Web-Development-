let arr=[1,2,4,5,6,7,8];

let print=function(el){
    console.log(el);
};

// arr.forEach(print);


//  or
// arr.forEach(function(el){
//     console.log(el);
// });

// with arrow function
// arr.forEach((el) => {
//     console.log(el);
// });

// forEach for object
let arr1=[{
    name:"aman",
    marks:95
},{
    name:"harsh",
    marks:99
},{
    name:"ram",
    marks:98
}];

arr1.forEach((student)=>{
    console.log(student.marks);
})