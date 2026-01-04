let jsonRes='{"fact":"The Pilgrims were the first to introduce cats to North America.","length":63}'
console.log(jsonRes);

// conversion of json data to js Object

let validRes=JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);


// conversion of js Object to json data 
let student={
    name:"harsh",
    age:22,
    marks:99
};
let validJson =JSON.stringify(student);
console.log(validJson);
