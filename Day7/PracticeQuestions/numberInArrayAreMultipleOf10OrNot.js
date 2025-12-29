let arr=[1,2,4,5,6,7,8];
let arr1=[10,20,30,40,50]

let result=arr.every((el)=>{
    return el%10==0;
});
let result1=arr1.every((el) => el%2==0 );

console.log(result);
console.log(result1);
