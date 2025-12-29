let arr=[2,4,5,1,6,7,8];

// let result=arr.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });

// console.log(result);



function getMin(nums){
    let result=nums.reduce((min,el)=>{
    if(el<min){
        return el;
    }
    else{
        return min;
    }
    });
 
    return result;
}

console.log(getMin(arr));
// let min=getMin(arr);
// console.log(min);

