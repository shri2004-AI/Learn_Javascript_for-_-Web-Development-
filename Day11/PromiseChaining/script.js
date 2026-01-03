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


// saveTodb("hello harsh")
//     .then(() => {
//         console.log("data one saved ");
//         return saveTodb("hello World");
//     })
//     .then(() => {
//         console.log("data two saved ");
//         return saveTodb("hello shubh");
//     })
//     .then(() => {
//         console.log("data three saved");
//     })
//     .catch(() => {
//         console.log("promise was rejected...");
//     });

saveTodb("hello harsh")
    .then((result) => {
        console.log("data one saved ");
        console.log("result of promise : ",result);
        return saveTodb("hello World");
    })
    .then((result) => {
        console.log("data two saved ");
        console.log("result of promise : ",result);
        return saveTodb("hello shubh");
    })
    .then((result) => {
        console.log("data three saved");
        console.log("result of promise : ",result);
    })
    .catch((error) => {
        console.log("promise was rejected...");
        console.log("error of promise : ",error);
    });
