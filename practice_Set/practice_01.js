

// Question no. 1st
//create a variable of type string and try to add a number to ti
let str = "pushpanjali";
let a = 10;
console.log("we are adding a string and a number which is : " + str + a);

// question no 2nd
//using type of operator and find the datatype of variable in last question
console.log("type of datatype str is : " + typeof (str));
console.log("type of datatype a is : " + typeof (a));

// question no 3rd
//create a const object in javascript can you change it to hold a number later
const stu = {
  name: " Pushpanjali",
  section: "A",
  rollNo: 101,
  year: 3

};

//  stu = radha;
//  stu = 45;  // this is wrong it's not hold a number

// question no 3rd
// try to add a new key to the const object to the problem 3 ? were you able to do it

stu['friend'] = "shubhman";
stu['name'] = "payal";
console.log(stu);

// question no. 5
// write a js program to create a word meanning dictionary of 5 words

const dict = {
  learn: "to get knowledge, a skill, etc. (from somebody/something)",
  decision: "choice or judgement that you make after thinking about various possibilities",
  sky: "the space that you can see when you look up from the earth, and where you can see the sun, moon and stars",
  learn1: "to get knowledge, a skill, etc. (from somebody/something)",
  decision1: "choice or judgement that you make after thinking about various possibilities",
  sky1: "the space that you can see when you look up from the earth, and where you can see the sun, moon and stars"


}

console.log(dict);
console.log(dict.sky);

console.log('learn');


const profile = {
  userName: "@pushpanjali-soni",
  isFollow: true,
  followers: 15000,
  following: 150,
  post: 100,
  bio: " hiii i'm pushpanjali soni , i'm learnning javascript from sharaddha dd"
}
console.log(profile);
