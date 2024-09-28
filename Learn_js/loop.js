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