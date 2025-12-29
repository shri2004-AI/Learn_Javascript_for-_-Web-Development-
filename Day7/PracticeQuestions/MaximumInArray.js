let arr=[1,2,4,5,6,7,8];

let result=arr.reduce((res,el)=>{
    if(el>res){
        return el;
    }
    else{
        return res;
    }
});

console.log(result);