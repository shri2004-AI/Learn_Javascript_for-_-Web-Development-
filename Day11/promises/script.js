// function saveTodb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// saveTodb(
//     "harsh", 
//     () => {
//     console.log("sucess : your data was saved");
//     saveTodb(
//         "hello World",
//         () => {
//         console.log("sucess2 : data2 saved");
//         saveTodb(
//             "shubh",
//             ()=>{
//                 console.log("sucess3 : data3 saved");
//             },
//             () => {
//         console.log("failure3 : data3 not saved");
//         }
//         );
//         }, 
//         () => {
//         console.log("failure2 : data2 not saved");
//         }
//     );
// },
//     () => {
//         console.log("failure : weak connection, data was not saved");
//     }
// );



// saveTodb("apnaCollege");

function saveTodb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed>4){
            resolve("sucess : data was saved");
        }else{
            reject("failure : data was not saved");
        }
    })
}