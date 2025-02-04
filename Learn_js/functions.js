// function is a block of code that perform a specific task ,can be invoked whenever needed

function add(x, y) {   // creating a function here x, y are parameters
  console.log("hello addition");// if you write any statments before return statement it will execute
  return x + y;
  console.log("hello mmee") // if you write any code if lines after return statement it will not execute 

}

let a = 5;
let b = 2;

// calling function by function name 
add(); // reference of function here ( ) is called execution 
console.log("addtion of a and b is : " + add(a, b)); // function calling or invoke here a, b are arguments 

//*****************************************substract*************************************** */

function subtract(num1, num2) {
  console.log(num1 - num2);
}
const num3 = subtract(10, 5); // print 5 
// if we store function in datatype it shows us undifined if you want  to print
// but u calling a function inside a variable then that' s why it prints substract value 5 
//if you check num3 and print it then it shows undifined 
// subtract(10,5);
console.log(num3); // print undifined

//**************************login massage function************************/
// *******************************with userName***************************

function loginUsermMsg(userName) {
  // if you given username a a parameter like userName = "pushpanjali" then if condition will be false 
  // so if block will be not executable
  if (userName === undefined) {
    console.log("please enter username");  // if username is not given 
    return;
  }
  else {
    console.log(`User ${userName} is just loggedIn`);
  }
}
loginUsermMsg("pushpanjali");

// ******************************withOut userName *************************

function loginUsermMsg1(userName) {

  if (userName === undefined) {
    console.log("please enter username");  // if username is not given 
    return;
  }
  else{
  return `User ${userName} is just loggedIn`;
  }
}
console.log(loginUsermMsg());

// ***********************************REST OPERATOR********************************

// REST OPERATOR is also called a spread operartor 
//**************************with rest opetator****************** */

function addToCartItems (...val1){
// function addToCartItems (val, val0 ,...val1){ // print all items prize

//function addToCartItems (...val1){
  // here ... is rest(spread) operator 
return val1;
}
console.log(addToCartItems(659, 890, 673, 789));

//**************************without rest opetator****************** */

// function addToCartItems (val1){ 
// //function addToCartItems (val,val0,val1){ //print only 3 items prize
// return val1;
// }
// console.log(addToCartItems(659, 890, 673, 789));


// **********************************Arrow-function*********************************

// compact way to writing  a function 
// create a variable and store function in a variable other wise we use 
//(a, b) => {} here sum is a variable not a function name

const sum = (i, j) => {
  return i + j / 2;
}

const helloprint = () => {
  console.log("hello world");
}

//***********for each loop---> use for arrays---> also called a higher order function or methods***************

// it is a function to execute for each element in the arrays
//forEach(callbackfn: (value: string, index: number,

let arr = ["mumbai", "delhi", "bangluru", " pune", " indore"];

arr.forEach(function printVal(val) {
  console.log(val.toUpperCase(arr));
});

arr.forEach((val, idx, arr) => {
  console.log(val.toUppercase, idx, arr);
});

let array = [2, 4, 8, 6, 5, 9];
let squre;
let printVal = (val, idx) => {
  squre = console.log(`squre value of : ${array[idx]} is : ${val * val} \n Array : ${array}`);

};
array.forEach(printVal);

// array.forEach((val, idx) => {
//   squre = console.log(`squre value of : ${array[idx]} is : ${val * val} \n Array : ${array}`);

// });

///     <--------------Array method------------>

//               MAP JUST LIKE FOREACH LOOP 
// BUT MAP IS USED TO CREATE NEW ARRAY AND FOR EACH IS USED TO CALCULATE OR PRINT EACH VLUES AND ELEMENTS
// map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]

let newAr = array.map((val) => {
  return val * 2;
});
console.log(`using map this is new array multiplied by 2 :${newAr}`);

//         -----------FILTER (ARRAY METHOD)-------------

// JUST LIKE MAP BUT CONDITION IS TRUE VALUE IS STORED IN A NEW ARRAY 

let evenArray = array.filter((val) => {
  return val % 2 === 0;

});
console.log(`this is new filterd Evenarray using filter method : ${evenArray}`);

//         --------------REDUCE (ARRAY METHOD)-------------

// PERFORMS SOME OPERATIONS & REDUCES THE ARRAY  to a single value it returns that single value

let output = array.reduce((previous, current) => {
  return previous + current;
  // all values are taken by let array = [2, 4, 8, 6, 5, 9];
  // previous is 2 and current is 4 return 6 
  //and 6 is store now previous and current value is 8 return 14 
  //and store previous and current valur is 6 return 20 
  //and store privious and current value is 5 return 25
  //and store previous current value is 9 and return 34
});

console.log(`this is reduse array using reduse method it returns a single value : ${output}`);

// find largest number in a array
let output2 = array.reduce((first, second) => {
  return first > second ? first : second;
});
console.log(`find largest number in a array using reduce : ${output2}`);
