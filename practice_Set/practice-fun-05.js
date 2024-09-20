
// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         // console.log(char);
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log("vowel: ", count);

// }
// countVowels("pushpanjali");

const vowelscount = (str) => {
    let count = 0;
    for (let ch of str) {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            count++;
        }
    }
    console.log("vowels : ", count);

}
vowelscount("pushpanjali");
