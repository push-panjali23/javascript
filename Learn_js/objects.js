//object literals

const sym = Symbol("@key1"); // we want to use  this sym datatype as a symbol inside this object 
// then we decleare like this : [sym] : "@key1"

const info = {
    name: "pushpanjali",
    age: 21,
    email: "pushpanjali764@gmail.com",
    isLoggedIn: false,
    [sym]: "@key1",  // output is : Symbol(@key1):"@key1"
    "full Name": "pushpanjali soni",   // decleare two ways 
    frequentScores: ["78", "80", "90", "95"],
    learn: "javascript"

};

console.log(info.name); // first way
console.log(info["name"]); // second way 
console.log(info["full Name"]);
console.log(info.frequentScores);
console.log(typeof (sym));  // symbol
console.log(info[sym]);
console.log(typeof info[sym]);  // string

info.email = "Payalsoni232@gmail.com"; // change the value of email
// Object.freeze(info); // the object ...now if you want to change any value it will not be changed
console.log(info);

info.age = "20";
//  console.log(info.age); // age will not changed because object info is freeze

console.log(info.email); // 2 ways to accese key value pairs 
console.log(info["email"]);

//creating a info function for info object

info.greetings = function () {
    console.log(`Hello  info viewer's i'm ${this["full Name"]} , i'm  ${this.age} years old , we are learnning ${this.learn} here please join us`);
}
console.log(info.greetings()); // use this () because this is a function we can not acces without ()

//****************************************singleton objects*********************************
// it is a way of defining a class 
const instaUser = {};// non-singleton object
// const instagram = new Object(); // singleton object

instaUser.id = "001Psoni";
instaUser.name = "pushpanjali";
instaUser.graduation = "BCA";
instaUser.isLoggedIn = false;

console.log(instaUser);

const regularUser = {
    comEmail: "www.user034@gmail.com",
    comIdNo_: "0940001",
    userInfo: {
        email: "pushpanjali342@gmail.com",
        userId: 24001,
        address: "bansagar colony rewa(M.P)",

        fullName: {
            firstName: "pushpanjali",
            lastName: "soni"
        },

        contactInfo: {
            persnalNo_: "7225854767",
            WpNo_: "7325854767"
        }
    }
}
console.log(regularUser.userInfo);
console.log(regularUser.userInfo.fullName);
console.log(regularUser.userInfo.contactInfo);

const obj01 = { 1: "a", 2: "b" };
const obj02 = { 3: "c", 4: "d" };
const obj03 = { 5: "e", 6: "f" };

// const obj04 = Object.assign(obj01,obj02,obj03);
// const obj04 = Object.assign({},obj01,obj02,obj03);// both are same 
const obj04 = { ...obj01, ...obj02, ...obj03 }; // spread operator

console.log(obj04);

// here we want to access info object 
console.log(info);
console.log(Object.keys(info)); // it shows output in the form of array( we use this inside data base and loop it) 
console.log(Object.values(info)); // we get info valuse 
console.log(Object.entries(info)); // all key value pairs are convert into array format
console.log(Object.keys(instaUser));

// asking question 

console.log(info.hasOwnProperty('frequentScores')); // we are asking inside info object any frequentScores exist or not 
//if exist returns true if not returns false

//****************************************object de-structure*************************************  */

const course = {

    cousreName: "javascript",
    courseIsPaid: true,
    coursePrice: "9999",
    courseInstructor: "chai aur code (Hitesh choudhary)"

}

// console.log(course.courseInstructor);

// const {courseInstructor} = course;
// console.log(courseInstructor);

// it's called de-structering

const {courseInstructor: instructor} = course; 
// here we can say courseInstructor is only instructor
console.log(instructor);  // all ways are right 

//****************************************json************************************* */
// json is javascript object notation

// {
//     "name" : "pushpanjali" ,
//     "course" : "js",
//     "isPaid" : false,

// }

//json in array fromat 

// [
//     {},
//     {},
//     {}
// ];