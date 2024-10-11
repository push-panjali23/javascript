//object literals

const sym = Symbol("@key1"); // we want to use  this sym datatype as a symbol inside this object 
                            // then we decleare like this : [sym] : "@key1"

const info =  {
    name:"pushpanjali",
    age : 21,
    email : "pushpanjali764@gmail.com",
    isLoggedIn : false,
        [sym] : "@key1",  // output is : Symbol(@key1):"@key1"
    "full Name"  :  "pushpanjali soni",   // decleare two ways 
    frequentScores : ["78", "80", "90","95"],
learn: "javascript"

};

console.log(info.name); // first way
console.log(info["name"]); // second way 
console.log(info["full Name"]);
console.log(info.frequentScores);
console.log(typeof(sym));  // symbol
console.log(info[sym]);
console.log(typeof info[sym]);  // string

info.email = "Payalsoni232@gmail.com"; // change the value of email
// Object.freeze(info); // the object ...now if you want to change any value it will not be changed
console.log(info);

 info.age ="20";
//  console.log(info.age); // age will not changed because object info is freeze

console.log(info.email); // 2 ways to accese key value pairs 
console.log(info["email"]);

//creating a info function for info object

info.greetings = function(){
    console.log(`Hello  info viewer's i'm ${this["full Name"]} , i'm  ${this.age} years old , we are learnning ${this.learn} here please join us` );
}
console.log(info.greetings()); // use this () because this is a function we can not acces without ()

// singleton objects
// it is a way of defining a class 
const insta ={};// non-singleton object
const instagram = new Object(); // singleton object