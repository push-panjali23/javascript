



//Operators

let x = 15;
let y = 5;
let z = "15"; //as astring data type and then convert  into a number 


console.log("x+y =", x + y);  // x+=y
//  console.log(x+=y); 

console.log(x - y);       //x-=y or x-=1
//  console.log(x-=y); 

console.log(x * y);      //x*=y  or x*=2
//  console.log(x*=y); 

console.log(x / y);    //x/=y  or x/=3
//  console.log(x/=y); 

console.log(x % y);     //x%=y  0r x%=10
//  console.log(x%=y); 

console.log(x ** y); // x power y like 15^5
// x**=2


//          <--------- unary operators ---------->

console.log(x--); // print then decrease ...x = 15 print and new value of x is 14
// output is 15

console.log(x++); // print then increase
// x is 14 now then is prints and increase by one  so ... now new value of x is 15
//output is 14

console.log(--x);// decrease then print
// x is 15  now  then decrease and print 14
// new value of x is 14

console.log(++x);// increase then print
// x is 14 now ... increase and print 15

//       <-----comparision operators---------->      


console.log("x == y = ", x == y);
console.log("x == z = ", x == z); // output is true 
// x is a number and z is a string but this(==) comparison operatos check only values
// and value of both is 15

// we use (===) to check value and datatype both 

console.log("x === z = ", x === z); // output is flase

console.log("x != y = ", x != y); // output is true
console.log("x !== y = ", x !== y); // output is true

console.log("x !== z = ", x !== z); // output is true

console.log("x > y = ", x > y); // greater than false
console.log("x >= y = ", x >= y); // greater than equal to ..... false
console.log("x < y = ", x < y); // less than true
console.log("x <= y = ", x <= y); // less than equal to //// true


//       <-----logical operators---------->      
let val1 = x > y; // true 
let val2 = x === z // false
let val3 = x == z // true 
let val4 = x == y; // false 
let val5 = x < y // false
console.log(val1, val2, val3, val4);

//if both conditions is true then prints true 
console.log("val1 && val3 = ", val1 && val3); //true 
//if one condition is true then prints false
console.log("val1 && val2 = ", val1 && val2); //false
//if both conditions is false then prints false
console.log("val2 || val4 = ", val2 || val4); //false

//if one condition is true then prints true
console.log("val1 || val2 = ", val1 || val2); //true
//if both conditions is true then prints true 
console.log("val1 || val3 = ", val1 || val3); //true 
//if both conditions is false then prints true 
console.log("val2 || val4 = ", val2 || val4); //true s

console.log("!(val5) = ", !(val5)); // true

//       <-----conditional statements---------->      





// let a = prompt("what's your age ??");
// a = Number.parseInt(a) // because in js all datatypes are consider as a string 
// //that's by we are converting (a ) in a number as a integer

// if (a < 0 || a == 0) {
//     alert("you are not aligible ");
// }

// else if (a < 12) {
//     alert("you are not aligible you are a kidd");

// }
// else if (a < 18) {
//     alert("you are not aligible but you are not kidd....");

// }
// else if (a == 18 || a < 60) {
//     alert("you are aligible for vote");

// }

// else if (a > 60) {
//     alert("you are old now.... but aligible for vote ");

// }
// else {
//     alert("undifined this is unvailid");

// }


let mode = prompt("what mode you want??"); //because we want string typr value
// so we didn't convert into a number  other wise we use <---- mode = Number.parseInt(mode) 
let color;



if (mode === "dark") {
    color = " black";
}
if (mode === "light") {
    color = " white";
}
else {
    color = "default";
}
console.log(color);

//           <-----------ternary operators-----------> 
// condition? "true" : "false" ;

let age = 25;
let res = age >= 18 ? "adult" : "not adult";

console.log(res)

//Operators

let x = 15;
let y = 5;
let z = "15"; //as astring data type and then convert  into a number 

console.log("x+y =", x + y);  // x+=y
//  console.log(x+=y); 

console.log(x - y);       //x-=y or x-=1
//  console.log(x-=y); 

console.log(x * y);      //x*=y  or x*=2
//  console.log(x*=y); 

console.log(x / y);    //x/=y  or x/=3
//  console.log(x/=y); 

console.log(x % y);     //x%=y  0r x%=10
//  console.log(x%=y); 

console.log(x ** y); // x power y like 15^5
// x**=2


//          <--------- unary operators ---------->

console.log(x--); // print then decrease ...x = 15 print and new value of x is 14
// output is 15

console.log(x++); // print then increase
// x is 14 now then is prints and increase by one  so ... now new value of x is 15
//output is 14

console.log(--x);// decrease then print
// x is 15  now  then decrease and print 14
// new value of x is 14

console.log(++x);// increase then print
// x is 14 now ... increase and print 15

//       <-----comparision operators---------->      

console.log("x == y = ", x == y);
console.log("x == z = ", x == z); // output is true 
// x is a number and z is a string but this(==) comparison operatos check only values
// and value of both is 15

// we use (===) to check value and datatype both 

console.log("x === z = ", x === z); // output is flase

console.log("x != y = ", x != y); // output is true
console.log("x !== y = ", x !== y); // output is true

console.log("x !== z = ", x !== z); // output is true

console.log("x > y = ", x > y); // greater than false
console.log("x >= y = ", x >= y); // greater than equal to ..... false
console.log("x < y = ", x < y); // less than true
console.log("x <= y = ", x <= y); // less than equal to //// true

//       <-----logical operators---------->    

let val1 = x > y; // true 
let val2 = x === z // false
let val3 = x == z // true 
let val4 = x == y; // false 
let val5 = x < y // false
console.log(val1, val2, val3, val4);

//if both conditions is true then prints true 
console.log("val1 && val3 = ", val1 && val3); //true 
//if one condition is true then prints false
console.log("val1 && val2 = ", val1 && val2); //false
//if both conditions is false then prints false
console.log("val2 || val4 = ", val2 || val4); //false

//if one condition is true then prints true
console.log("val1 || val2 = ", val1 || val2); //true
//if both conditions is true then prints true 
console.log("val1 || val3 = ", val1 || val3); //true 
//if both conditions is false then prints true 
console.log("val2 || val4 = ", val2 || val4); //true s

console.log("!(val5) = ", !(val5)); // true

//       <-----conditional statements---------->      

// let a = prompt("what's your age ??");
// a = Number.parseInt(a) // because in js all datatypes are consider as a string 
// //that's by we are converting (a ) in a number as a integer

// if (a < 0 || a == 0) {
//     alert("you are not aligible ");
// }

// else if (a < 12) {
//     alert("you are not aligible you are a kidd");

// }
// else if (a < 18) {
//     alert("you are not aligible but you are not kidd....");

// }
// else if (a == 18 || a < 60) {
//     alert("you are aligible for vote");

// }

// else if (a > 60) {
//     alert("you are old now.... but aligible for vote ");

// }
// else {
//     alert("undifined this is unvailid");

// }


let mode = prompt("what mode you want??"); //because we want string typr value
// so we didn't convert into a number  other wise we use <---- mode = Number.parseInt(mode) 
let color;

if (mode === "dark") {
    color = " black";
}
if (mode === "light") {
    color = " white";
}
else {
    color = "default";
}
console.log(color);

//           <-----------ternary operators-----------> 
// condition? "true" : "false" ;

let age = 25;
let res = age >= 18 ? "adult" : "not adult";

console.log(res)