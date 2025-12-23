let arr=[1,2,3,4,5,6];
let arrCopy=arr;

console.log(arr==arrCopy);
arr.push(7);
console.log(arr);
console.log(arrCopy);

arrCopy.pop();
console.log(arr);
console.log(arrCopy);
