// let Fname = prompt("Enter your full name : ");
// let len = Fname.length;

// // console.log("full name is : ", Fname);
// // console.log("full name  length is : ", len);
// // let UserName = "@"+Fname+Fname.length;
// // let UserName = "@"+Fname+len;

// let obj = {
//     userN: Fname,
//     nameLength: len,
// }

// let userName = `@${obj.userN}${obj.nameLength}`;
// console.log("UserName is : ", userName);

// // averge of all class mark
// let marks = [78, 89, 90, 65, 70, 98];
// let sum = 0;
// for (let val of marks) {
//     sum = sum + val;
// }
// console.log(sum);

// let avg = sum / marks.length;
// console.log("Average of all marks :", avg);

// // apply 10% discount and update the value of array

// let price = [250, 645, 300, 900, 50];
// let discount = 10;
// let indx = 0;
// for (let val of price) {
//     console.log(`the vale of indx${indx} f= ${val}`);
//     let offer = val / 10;
//     price[indx] = price[indx] - offer;
//     console.log(`value after apply offer : ${price[indx]}`);
//     indx++;
// }

// for (let i = 0; i < price.length; i++) {
//     let offer = price[i] / 10;
//     price[i] = price[i] - offer;

// }
// console.log(price);

let arr = ["blomberg", "microsoft", "Uber", "google", "IBM", "Netflix"];

// let newarr = arr.shift();
// console.log(newarr, arr);

// let newarr1 = arr.splice(2, 1, "Ola");
// console.log(newarr1, arr);

let newarr2 = arr.push("Amazon");
console.log(newarr2, arr);
