let cars=["xuv","bmw","audi","maruti"];
let name=["harsh","shubh"];

//push method
cars.push("nexon");
console.log(cars);

//pop method
console.log(cars.pop());
console.log(cars);

//unshit method
console.log(cars.unshift("nexon"));
console.log(cars);

//shift method
console.log(cars.shift ());
console.log(cars);

//indexOf
console.log(cars.indexOf("audi"));
console.log(cars);

//includes
console.log(cars.includes("bmw"));

//concat 
let newArr=cars.concat(name);
console.log(newArr);

//reverse
console.log(cars.reverse());
console.log(cars);

//slice
let colors=["red","yellow","green","pink","white","black"]
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-1));
console.log(colors);

//splice
console.log(colors.splice(3));
console.log(colors);
console.log(colors.splice(0,0,"babyPink","lightgreen"));
console.log(colors);


//sort
let char=['a','e','z','b','d','c'];
console.log(char.sort()); 


