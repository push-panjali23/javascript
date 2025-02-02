// there are 2 types of gor loop 1st for in and 2nd for of

//for loop
//let sum = 0;
let n = prompt("enter the value of n :");
n = Number.parseInt(n)
console.log("print 1 to 5 number : ");
for (let i = 1; i < n; i++) {
  //sum+=(i+1);
  console.log(i);
}

// for in
let obj = {
  ram: 78,
  shyam: 76,
  kishn: 79,
}
for (let a in obj) {
  // console.log(a)  //print keys like name
  console.log("marks of " + a + " are " + obj[a])  //print keys & value both like name & number

}

//for of loop 
let string = "pushpanjali";
let size = 0;
for (let b of string) {
  console.log(b);  //print all single character
  size++;
}
console.log("size =", size); // 11



// while loop 
let i = 0;
while (i < 5) {
  console.log("hello pushpanjali (while)");
  i++;
}


// do while
do {
  console.log("hello pushpanjali ( do while)");
  i++;
}
while (i < 10);

//            <--------------   strings     ------------>

//there are two ways to creat string like
// 1. "" ;
// 2. '' ;

//<----------template literal (expression like ${1+2}) or strimg interplation ${object.item}----------->

let specialStr = `this is a template literal`;
let object = {
  item: "schoolBag",
  price: 500,
};
let output = `the cost of ${object.item} is ${object.price} rupees`;
console.log(output);

// escape characters 
//  \n ---> next line
//  \t ---> tab space
//    \ and n count is 1 not 2 like pushpa\nanjai 13 words
// but length is 12 because \n is count as 1 word

//              < ------string methode--------->

let string1 = "pushpanjali";
let string2 = "PUSHPANJALI";
let string3 = "    learnning  js   ";
console.log(string1.toUpperCase());
console.log(string2.toLowerCase());
console.log(string3.trim()); // only remove sstrting and ending spaces
console.log(string1.slice(0, 6)); //pushpa
console.log(string1.concat(string1, string3));
console.log(string1.replace("pushpa", "A"));
console.log(string1.charAt(4)); //p

// How to Get Character of Specific Position using JavaScript?


let p = 0;
let str = "Hello";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  console.log(i);
  if (i == p) {
    console.log(str[i]);
  }
}

// How to replace multiple spaces with single space in JavaScript ?

let str1 = " hiii    i'm     pushpanjali       soni";
let newstr = str1.trim().split(/[\s,\t,\n]+/).join(' ');

console.log(newstr);

// How to replace all occurrences of a string in JavaScript?

let str2 = "hiii hiii i'm pushpanjali soni soni";
let newstr2;
