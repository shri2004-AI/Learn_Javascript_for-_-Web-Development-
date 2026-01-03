function saveTodb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("sucess : data was saved");
        } else {
            reject("failure : data was not saved");
        }
    })
}

// let request=saveTodb("hello harsh"); // req = promise object

// request.then(()=>{
//     console.log("promise was resolved...");
// })
// .catch(()=>{
//     console.log("promise was rejected...");
// })


saveTodb("hello harsh")
    .then(() => {
    console.log("promise was resolved...");
    })
    .catch(() => {
        console.log("promise was rejected...");
    })