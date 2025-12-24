// const student={
//     name:"harsh",
//     age:22,
//     marks:80,
//     city:"jhansi"
// };
// console.log(student);

// const item={
//     price :100.9,
//     discount:50,
//     colors:["pink","babypink"]
// };
// console.log(item);

// get the value of the object 
// console.log(student["name"]);
// console.log(student.name);



//conversion in get values
// const obj={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };

// console.log(obj["1"]);
// console.log(obj[2]);


//add/update value
// const student={
//     name:"harsh",
//     age:22,
//     marks:94,
//     city:"jhansi"
// };

// console.log(student.city);
// student.city="chirgaon";
// console.log(student.city);

// student.gender="male";
// console.log(student);

// delete student.marks;
// console.log(student);




//nested objects
const classInfo={
    harsh:{
        grade:"A+",
        city:"chirgaon"
    },
    aman:{
        grade:"A",
        city:"jhansi"
    },
    shubh:{
        grade:"B",
        city:"lucknow"
    }
};

console.log(classInfo);
console.log(classInfo.harsh);
console.log(classInfo.harsh.city);

