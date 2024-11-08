let a =8;
for(let i=0;i<a;i++){
console.log(i);
}
// install node open terminal
// for run in node js 
// node 
// creating a file touch script.js
// node script.js 

let args = process.argv;

for(let i=2; i<args.length;i++){
    console.log("hello to " , args[i]);
}

// run --------   
//node script.js priti riya jiya siya miya 
 // output   hello to priti
 //hello to riya , jiya ,siya ,miya etc

 // ********************MODule.export*******************

// module.exports ---- exports other files here (math.js)  property

const someValue = require("./math"); // output 123