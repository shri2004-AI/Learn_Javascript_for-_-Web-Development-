let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");


btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par =this.parentElement;
//         par.remove();
//     })
// }
