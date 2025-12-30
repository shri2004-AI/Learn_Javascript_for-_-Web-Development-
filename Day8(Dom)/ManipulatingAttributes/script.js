let img=document.querySelector('#mainImg');
console.dir(img);
console.log(img.src);

console.log(img.getAttribute('id'));
console.log(img.setAttribute('id',"harshImg"));
console.log(img.getAttribute('id'));


img.setAttribute('src',"bg.png");


console.log(img.getAttribute('class'));
console.log(img.setAttribute('class','harshImg'));
console.log(img.getAttribute('class'));