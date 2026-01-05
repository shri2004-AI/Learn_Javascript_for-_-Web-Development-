let btn=document.querySelector("button");
let p=document.querySelector("p");

btn.addEventListener("click",async ()=>{
    let fact=await getFacts();
    console.log(fact);
    p.innerText=fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch (err) {
        console.log("errors : ",err);
        return "no fact found"
    }   
}