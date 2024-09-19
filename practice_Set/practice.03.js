// let num = 100;
// // if (num % 2 == 0) {
// //     console.log("even")
// // } else
// //     console.log("odd");

// for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log("even", i)
//     }
//     //  else
//     //     console.log("odd");

// }

let gNum = 28;
let userNum = prompt("guess the game number : ");

if (userNum != gNum) {
    userNum = prompt(" you entered the wrong number guess again : ");
} else {
    console.log(" you guess the right number ");
}