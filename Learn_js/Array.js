// here array is collection of diffrent types of Datatype like string, var, boolean, char etc

let nam = ["ram", "rita", "geeta", "sita", "rama"];

// for (let i = 0; i < nam.length; i++) {
//     console.log(nam[i]);
// }

for (let name of nam) {
    console.log(name.toUpperCase());
}

let x = [16, 2, 6, 5, 9, 10, 8, 15];
console.log(x);
console.log(x.__proto__);

let y = x.toString();
// this function converts arrays into a string return new array
console.log(x, y);

let y1 = x.join('=');
// arrays number jon with "=" if you want to use any other symbol you can use ..like "@","-","*" etc
console.log(x, y1);

let y2 = x.pop()
console.log(x, y2); // return the poped element at the end original // 15


let y3 = x.push(20, 56); // push item in the end 
console.log(x, y3);

let y4 = x.shift(); // remove 1st element and return it like pop
console.log(x, y4);  // print 16

let y5 = x.unshift(23); // add 1st element and return it like push 
console.log(x, y5);    // 

delete x[0];
console.log(x);
//delete element from array... but length is... as it is
// only element is deleted  ... 1st index still there

let z = [30, 70, 35, 19, 40, 14, 45, 50]
let newarr = x.concat(z); // return a new array marge 2 or more arrays
console.log(newarr);

let compare = (a, b) => {
    return a - b;  // use for increasing 
    // use for decreasing (b - a)
}
let arr = [2, 6, 8, 3, 1, 4, 56, 40, 35, 48, 29, 59, 22, 201]
arr.sort(compare); //arrange element in alphabetical order siquence
console.log(arr);

//*******************************************slice() & splice()******************************************* */

// slice() creates a new array containning selected elements from the original array
//splice() modifies the original array by adding removing or replacing elements
const arr1 = [3, 5, 1, 67, 90, 45];
// arr1.splice(2, 1, 4, 5, 6, 7);     //(strtIdx, delCount , newElements)
// console.log(arr1);                 // add element--- position, index, value---
                                    // here 4,5,6,7 is new element will be included placae of 1(index 2(3))
console.log(arr1); //orignal arr
 arr1.splice(1 ,4); //( strtIdx endIdx)  output : 3, 45
 console.log(arr1);

let newar = arr1.slice(1, 4); //pice of array (strtIdx, endIdx); i want 4 numbers (0 , 5) 
console.log(arr,newar);
// it returns section of array (starting index to ending index)
//  let newar=arr1.slice(0,4);
// console.log(newar);


let ARR = [1, 'ram', true, 'A', 56];
console.log(ARR);
console.log(typeof (ARR)); // object 

let conversionOfObjToArr = Array(ARR); // creating array 
console.log(conversionOfObjToArr); // objet convert into array 

// asking some question using some operetions to given array 

//1. includes
//2. indexof
//3. isArray
//4. from
//5. of

console.log(arr);
console.log(arr.includes(15)); // false 
 // if number is present in working array it will show true
 //if not present in array then it will show falase
console.log(arr.includes(22)); // true

console.log(arr.indexOf(23)); // because 23 is not present in array so it will show us -1 
console.log(arr.indexOf(22)); // 22 is present then it show us index of given number & here index of 22 is 6

// Array is not created in entire js file
console.log(Array.isArray("pushpanjali")); // if string is present returns true if not returs false
console.log(Array.from("pushpanjali")); // convert string into an array

// isArray is not created string into array it will show empty array[] like:
console.log(Array.from({name : "pushpanjali"})); 

// here all dataType convert into array using Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;
console.log(Array.of(score1, score2, score3, score4, score5)); 


//************************************join both array***************************** */

const marvel_heros = ['thor', 'Ironman', 'spiderman'];
const dc_heros = ['superman', 'flash' , 'batman'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //it will create 2D array... array inside array

//  const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);
// console.log(all_heros.length); // 6

// we use spread operator to join both array 

const All_New_Arr = [...marvel_heros, ...dc_heros];
console.log(All_New_Arr);
console.log(All_New_Arr[4]);
console.log(All_New_Arr[2]);
console.log(All_New_Arr[5]);
console.log(All_New_Arr.length);

//*********************************flat ********************************* */

// flat is used to convert arr insideArr is simpal array like [2, 3, 4, 4, 2, 5, 1]
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const arr_insideArr = [2, 3, 4, 2 , [1, 0, 3,] ,6 , 8, [2, 9 ,[5, 7 ,9, [7, 9, 4, [11, 17, 19], 7, 4], 1, 4], 12, 15, 2, ],5, 0];
const flatArr = arr_insideArr.flat(4); // here complete depth of this array is 4 flat(depth)
// if depth number is wrong our array will not be flat like 1D array
// const flatArr = arr_insideArr.flat(Infinity); // whenever we can not count the depth of array... so we use Infinity
console.log(flatArr);
