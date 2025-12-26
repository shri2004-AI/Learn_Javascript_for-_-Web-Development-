const student={
    name:"harsh",
    marks:98,
    prop:this,  // global scope
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=> {
        console.log(this);//parent object -> window
        return this.marks;
    },
    getInfo1:function (){
        setTimeout(()=>{
            console.log(this);           //student
        },2000)
    },
    getInfo2:function (){
        setTimeout(function (){
            console.log(this);      //window
        },2000)
    }
};

const a=5; //global scope

// console.log(student.getName());
// console.log(student.getMarks());

console.log(student.getInfo1());
console.log(student.getInfo2());

