// this is print current context 
const user = {
    userName : "pushpanjali",
    idNo : "001",
    welcomeMsg : function(){
console.log(`${this.userName} welcome to my page`);
console.log(`${user.userName} welcome to my page`);

    }
}
// console.log(`${user.userName} welcome to my page`);
// console.log(`${this.userName} welcome to my page`); // not working because here this is referes to the 
// //current context and we are access function outside of object soo .. here this is not refers to the userName

console.log(user.welcomeMsg);
