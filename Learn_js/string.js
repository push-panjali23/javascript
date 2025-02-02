//there are two ways to creat string like
// 1. "" ;
// 2. '' ;

const name = "PAYAL";
const score = 75;
// console.log(name + score + "gain") ; // concat
console.log(`my name is ${name} my score is${score}`);// use back tics
console.log(`my name is ${name.toLowerCase(name)} my score is${score}`);// use any methods like this and your name convert into lowerCase

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

//--------------------------------------------STRINGS--------------------------------------------------------

const myName = new String('pushpanjali');
console.log(myName[0]);
console.log(myName.__proto__); // if you want to see all methods go to inspect and check it
// and apply like this
console.log(myName.toUpperCase());

const NewString = myName.substring(0, 4);
console.log(NewString);

//  < ---------------------------------------------string methode---------------------------------------->

let string1 = "pushpanjali";
let string2 = "PUSHPANJALI";
let string3 = "    learnning  js   ";
console.log(string1.toUpperCase());
console.log(string2.toLowerCase());
console.log(string3.trim()); // only remove sstrting and ending spaces
console.log(string1.slice(0, 6)); //pushpa
// console.log(string1.slice(-13, 5)); //if you give -value then it print reverse string start with last char 
console.log(string1.concat(string1, string3));
console.log(string1.replace("pushpa", "A"));// 1st value give any char or string which is searched and replaced it our 2nd value
console.log(string1.charAt(4)); //p
console.log(string1.includes('pan')); // if you want to know any char like('pan') exist or not if exist it returns true 
console.log(string3.split(' '));// it shows array of spaces and string

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
