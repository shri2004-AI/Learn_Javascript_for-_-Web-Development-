// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) => {
//         console.log(res);
//         res.json().then((data => {
//             console.log(data);
//         }))       // convert in readable format
//     })
//     .catch((err) => {
//         console.log("error : ", err);
//     })

let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();      // convert in readable format
    })
    .then((data1)=>{
        console.log("data 1 = ",data1.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data2)=>{
        console.log("data 2 = ",data2.fact);
    })
    .catch((err) => {
        console.log("error : ", err);
    })


    console.log("i am happy");
    