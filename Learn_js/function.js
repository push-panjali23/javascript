
// function is a block of code that perform a specific task ,can be invoked whenever needed

function add(x, y) {   // creating a function
  return a + b;
}

let a = 5;
let b = 2;

console.log("addtion of a and b is : " + add(a, b)); // function calling or invoke

// arrow function
// compact way to writing  a function 

// create a variable and store function in a variable other wise we use 
//(a, b) => {} here sum is a variable not a function name

const sum = (i, j) => {
  return i + j / 2;
}

const helloprint = () => {
  console.log("hello world");
}

//for each loop  ---------> use for arrays----> also called a higher order function or methods
// it is a function to execute for each element in the arrays
//forEach(callbackfn: (value: string, index: number,

let arr = ["mumbai", "delhi", "bangluru", " pune", " indore"];

// arr.forEach(function printVal(val) {
//   console.log(val.toUpperCase(arr));
// });

// arr.forEach((val, idx, arr) => {
//   console.log(val.toUppercase, idx, arr);
// });

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

//         --------------REDUcE (ARRAY METHOD)-------------
// PERFORMS SOME OPERATIONS & REDUCES THE ARRAY  to a single value it returns that single value
let output = array.reduce((previous, current) => {
  return previous + current;
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
