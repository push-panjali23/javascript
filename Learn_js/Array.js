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
console.log(x, y2); // return the poped element at the end original

let y3 = x.push(20, 56); // push item in the end 
console.log(x, y3);

let y4 = x.shift(); // remove 1st element and return it like pop
console.log(x, y4);

let y5 = x.unshift(1); // add 1st element and return it like push 
console.log(y5, x);

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
let arr = [56, 40, 35, 48, 29, 59]
arr.sort(compare); //arrange element in alphabetical order
console.log(arr);

const arr1 = [3, 5, 1, 67, 90, 45];
// add element--- position, index, value---
//(strtIdx, delCount , newElements)
arr1.splice(2, 1, 4, 5, 6, 7);
console.log(arr1);

//pice of array (strtIdx, endIdx); i want 4 numbers (0 , 5)
let newar = arr1.slice(1);
console.log(newar);
// arr1.slice(3,90);

let ARR = [1, 'ram', true, 'A', 56];
console.log(ARR);
console.log(typeof (ARR)); // object 

let conversionOfObjToArr = Array(ARR); // creating array 
console.log(conversionOfObjToArr); // objet is convert into array 
