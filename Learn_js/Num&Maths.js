const score = 100;
console.log(score);

// const balance = new Number(200);
const balance = new Number(200.00459);

console.log(balance);
console.log(balance.__proto__); // if you want to see all methods go to inspect and check it

// -----------------------------------------maths functions---------------------------------------
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
console.log(typeof(balance));// here balance is object

console.log(typeof(balance.toString())); // here balance is converted into string
console.log(balance.toString().length); // length is 3 because 3 char os 3 num is present in balance
console.log(balance.toFixed(2)); // toFixed value is 2 prints 200.01 
console.log(balance.toFixed(1)); // if value is 1 then prints 200.0

const otherNum = 23.489;
console.log(otherNum.toPrecision(1)); // 2e+1
console.log(otherNum.toPrecision(6)); // toPrecision value can be 1,2, 3, 4, 5
//according to your given value ... give toPrecision values

const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-IN'));// convert readable format like 10,000

// ------------------------------------------Maths---------------------------------------

console.log(Math);
console.log(Math.abs(-4)); // it convert only negative values into positive values
console.log(Math.floor(4.2)); // return lowest value only shows right side values

console.log(Math.round(4.4)); 
// it remove point values .45 and if value is 4.56, 3.66 ,1.7, then it add one like 4.5=5

console.log(Math.random()); //between 0 to 1 value it returns and value is always random
console.log((Math.random() * 10 ) + 1 );
console.log(Math.floor((Math.random() * 10) + 1 ));
 // remove all left sides point values using floor and shows onli digit like 4, 56, 23

const min= 20;
const max = 50;
console.log( Math.random()*(max - min + 1)); // multipies with random value then we use floor 
console.log(Math.floor (Math.random()*(max - min + 1)) + min); 
                                // math.floor shows only digit and here we + min value (which is 20)