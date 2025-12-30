let newPera=document.createElement("p");
console.dir(newPera);
newPera.innerText="hii i am a new paragraph."
let body=document.querySelector("body");
body.appendChild(newPera);

newPera.append("this is new text.")
newPera.prepend("this is new text.")



let H2=document.createElement("h2");
console.dir(H2);
H2.innerText="hello bhai";
let section=document.querySelector("section");
section.appendChild(H2);

let btn=document.createElement("button");
console.dir(btn);
btn.innerHTML="newButton!!"

let main=document.querySelector("main");
main.insertAdjacentElement("beforeend",btn)



//removing
// main.removeChild(btn);
btn.remove();

// newPera.remove();
