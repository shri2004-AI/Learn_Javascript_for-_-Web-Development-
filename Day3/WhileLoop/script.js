// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i=2;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }

// Favorite Movie
// const Favorite="avatar";
// let guess=prompt("enter the movie name !")
// while((guess != Favorite)&&(guess !="quit")){
//     guess=prompt("wrong guess ,try again");
// }

// if(guess == Favorite){
//     console.log("congrates!");
// }


//break keyword
// let i=1;
// while(i<=5){
//     if(i==3){
//          break;
//     }
//     console.log(i);
//     i++;  
// }


//Favorite Movie
const Favorite="avatar";
let guess=prompt("enter the movie name !")
while(guess != Favorite){
    if(guess=="quit"){
        console.log("you quit");
        break;
    }
    guess=prompt("wrong guess ,try again");
}

if(guess == Favorite){
    console.log("congrates!");
}