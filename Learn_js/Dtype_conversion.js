let score = "33"; // true
console.log(typeof(score));
// Output <-------- string 
// if value is true then it's print 1
let ValueInNumber = Number(score);
console.log(typeof(ValueInNumber));
// Output <-------- number

// IF  ---------------------------------------------------------------------------------
let score1 = "33abc";
let ValueInNumber1 = Number(score1); 
console.log(typeof(ValueInNumber1));
// Output <-------- number 

// IF  ----------------------------------------------------------------------------------
let score2 = null;  // if value is undefined then we will get NaN (NOT A number)
console.log(typeof(score2));  // object 
// Output 0  <-------- type of null is object 
// if we are convert into number and check type of null then we get number
let ValueInNumber2 = Number(score2); 
console.log(ValueInNumber2)  // 0
console.log(typeof(ValueInNumber2)); // number

// if score value is string like ("pushpanjali") which is not converted into number 
// then it prints NaN
let score3 = "pushpanjali";
let ValueInNumber3 = Number(score3);
console.log(ValueInNumber3);  //NaN

 //--------------------------------- for boolean values -----------------------------------

 let isLoggedIn = 1; // but we want to convert into boolean 
 let booleanIsLoggedIn = Boolean(isLoggedIn);
 console.log(booleanIsLoggedIn);  // true
  // now its convert into boolean value then we check 
 consolg.log(typeof(booleanIsLoggedIn)); // typeof = boolean

 //when we put  " " (empty string) ---------> false ,
 // when we put  pushpanjali ----------------> true

// for all type of conversion we use 
// dataType_Name( variable name we want to convert ) ;
// like ------
//   let num = 24;
//   let stringNum = string(num); it print 24 but it's typeof is string
//   console.log(stringNum);
//   console.log(typeof(stringNum));
//   ------------type of = string