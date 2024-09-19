
// // use logical operators to find weather the age of a person lies between 10 and 20
// let age = prompt("what is your age...?")
// age = parseInt(age)
// if(age>10 && age<20){
//     document.write("your age lies between 10 and 20")
//     console.log("your age lies between 10 and 20")
// }else{
//     document.write("your age doesn't lies between 10 and 20") // print in chorome
//     console.log("your age doesn't lies between 10 and 20") // print in console
// }

// // demonstrate the use of swith case statments in javascript
// let age1 = prompt("what is your age...?");
// age1 = parseInt(age1);
// switch (age1) {
//   case 12:
//     console.log(" your age is 12");
//     break;
//   case 13:
//     console.log(" your age is 13");
//     break;
//   case 14:
//     console.log(" your age is 14");
//     break;
//   case 15:
//     console.log(" your age is 15");
//     break;
//   case 16:
//     console.log(" your age is 16");
//     break;
//   case 17:
//     console.log(" your age is 17");
//     break;
//   default:
//     console.log(" your age is not special");
//     break;
// }

// // question no 3.. write a javascript program to find wheather a numbers is divisible by 2 and 3
// let num = prompt("what is your number ?");
// num = Number.parseInt(num);
// // if (num % 2 == 0 && num % 3 == 0) {
// //   console.log(" your number is devisible by 2 and 3");
// // } else {
// //   console.log(" your number is not devisible by 2 and 3");
// // }

// // question no 4.. write a javascript program to find wheather a numbers is divisible by either 2 and 3
// if (num % 2 == 0 || num % 3 == 0) {

//   console.log(" your number is devisible by 2 or 3 ");
// }
// else {
//   console.log(" your number is not devisible by 2 or 3");
// }

// // qusetion no. 5 print you can driveor you can not drive based on age beeing greater than 18 usimg ternary operator
// let agee = 20;
// // prompt("whats your age ")
// // agee= Number.parseInt(agee);
// let a = agee > 18 ? "you can drive" : " you can not drive"
// console.log(a);



let score = prompt("Enter your marks = ");
score = Number.parseInt(score);

if (score >= 80 && score <= 100) {
  console.log("Grade ", "A", " you are passed in first division");
}
else if (score >= 70 && score <= 79) {
  console.log("Grade ", "B", " you are passed in second division");

}

else if (score >= 60 && score <= 69) {
  console.log("Grade ", "c", " you are passed in third division");

}

else if (score >= 50 && score <= 59) {
  console.log("Grade ", "D", " you are passed in fourth division");

}

else if (score >= 0 && score <= 49) {
  console.log("Grade ", "F", " you are fail ! ");

}


