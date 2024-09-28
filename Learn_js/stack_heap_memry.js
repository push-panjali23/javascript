// stack (primitive) undifined , null , number, string ,boolean , symbol , BigInt
// stack means copy of a variable

// heap (Non-primitive)
// reference of an  object  , Array, RegularExpression(original value)

// stack (primitive)
//original value does not changed because anotherName changes a copy value
let myName = "pushpanjali";
let anotherName = myName;
anotherName = "payal"

console.log( anotherName); // payal 
console.log( myName);  // pushpajali 

// heap (Non-primitive) 
//original value has been changed because userTwo changes a reference value and stroe original(changed value) in heap memory
let userOne = {
    email: "pushpanjali12@gmail.com",
    upi : "pushpa@ybl"
}

let userTwo = userOne;
 
    userTwo.email = "payal12@gmail.com"

console.log(userOne.email);  // payal12@gmail.com
console.log(userTwo.email);  // payal12@gmail.com
    

