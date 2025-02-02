//javascript execcution context (mainly 2 types but actually it's 3 typess)

 // 1. global execution context (firstly allocate inside this)
 //    in global exxecution context has two phases
 //            . memory phase (in memory phase all variables are undifined & functions have defination like  a = undifined , and functionName = defination), 
 //            . execution phase (in execution phase executes the value of variable like a = 10 or returns values like addtion of a and b = 15)
                  //( if we have function in execution phase then both memory phase and exection phase will we repeate)

 // 2. function execution context 
 // 3. eval execution context 

 // -------------------------CallStack------------------------------

 function html(){
console.log("this is html for layouts");
css();
 }
 function css(){
    console.log("this is css for styling");
    js();
 }
 function js(){
    console.log("this is javaScript for logic");
 }

html();
// when we call html() then output:
//this is html for layouts
//this is css for styling
//this is javaScript for logic

css();
//when we call css then output:
//this is css for styling
//this is javaScript for logic

js();
//when we call js then output:
//this is javaScript for logic

