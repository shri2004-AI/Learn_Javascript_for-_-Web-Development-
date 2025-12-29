const student={
    name:"harsh",
    age:22,
    subjects:["math","hindi","computer"],
    username:"karan@123",
    password:"abcd"
};

// let username=student.username;
// let password=student.password;

let {username:user,password:pass,city="jhansi"}=student;

console.log(user);
console.log(pass);
console.log(city);
