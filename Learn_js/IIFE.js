//-------------------------------------------Immediatly Invoked Function Expresion (IIFE)--------------------------------------------------

// Explanation: The function is wrapped in parentheses (function() { ... }), followed by () to immediately invoke it.

// IIFE allows you to create closures, which help maintain data privacy.
//  You can hide variables and functions inside an IIFE, exposing only what's necessary.
//  This concept is fundamental to the Module Pattern, a widely-used design pattern in JavaScript.27 Sept 2023

function conne(){
    console.log("DB connected");
}
conne();


(function conne(){
    console.log("DB connected 2");
})
(); // function call 



// in arrow function
( () => {
    console.log("DB connected 3");
})
();

// arrow function with parameter 
( (name) => {
    console.log(`DB connected ${name}`);
})
('pushpanjali');


// arrow function with parameter 
( (name) => {
    console.log(`DB connected2 ${name}`);
})
('pushpanjali');

// Use Cases Of IIFE
// Avoid polluting the global namespace.
// To create closures in JavaScript.
// IIFE is used to create private and  public variables and methods.
// It is used to execute the async and await function.
// It is used to work with require function.