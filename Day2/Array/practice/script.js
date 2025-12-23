// practice-1
let start=["jan","jul","mar","aug"];
let final=["jul","jun","mar","aug"];

// console.log(start.shift());
// console.log(start.shift());
// console.log(start);
// start.unshift("jun");
// start.unshift("jul");
// console.log(start);

start.splice(0,2,"jul","jun");  //in single statement
console.log(start);


// practice-2
let language=["c","c++","html","javascript","python","java","c#","sql"];
console.log(language.reverse());
console.log(language.indexOf("javascript"));
console.log(language.sort());

// practice-3
let arr=[['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(arr);
arr[0][1]='O'
console.log(arr);

