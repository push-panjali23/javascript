
  // variables in javascript.. variables are container to store data values
  // let num = 5;
  // let num1 = 6;
  // console.log(num + num1);

  // var ,const, let

  // var (  before Ecma script we use var but after ecma script we use let ...var is not block scoped so we use let if you wants blocked scope)
  // const( const are unchangeable if you define const you can't change & modify it)
  // let (let are blocked scope)

  // let a = 10;
  // let b = "hello";
  // let authore= "pushpanjali";

  // console.log(a,b);

  // datatypes in javascript
  //numbers

  // let number = 5;
  // let number1 = 6;

  /*
  primitive datatype in javascript we have 7 datatypes
   primitive datatypes are fundamental datatypes that are built-in Inside js
   primiitive datatypes are NNSSBBU N:NuLL, N:Number ,
                     S:Symbol, S: String, B:Boolean, B:Bigint, U: Undifined
             */

  // let c = null;
  // let d = 5; //number
  // // let e = symbol("i'm symbol"); //symbol
  // let f = "hello"; //string
  // let g = true; //boolean
  // let h = BigInt("564"); //BigInt
  // let k = BigInt("564") + BigInt("6");

  // let i = undefined;

  // console.log(c);
  // console.log(d);
  // // console.log(e);
  // console.log(f);
  // console.log(g);
  // console.log(h);
  // console.log(i);
  // console.log(k);


  //strings we can write single and double qoutes
  // let str = "this is string";
  // let str1 = "this is string22";


  // //  OBJECT are non primitive datatype
  // let marks = {
  //   sam: 45,
  //   ravi: 69,
  //   shyam: 87,
  //   ram: 90,
  // };
  // console.log(marks);


  // //booleans returns true false
  // let a1 = true;
  // let b1 = false;
  // console.log(a1);
  // console.log(a1 - b1);
  // // it returns 1 beacuse true = 1 and false= 0 then 1-0 =1


  // //undefined
  // //   var und = undefined;
  // let und;
  // //by default undifined
  // console.log(und);
  // let n = null;
  // console.log(null);

  /* at a hight level thier two types of datatype
   in javascript 
     1. primitive dtattype undifined nul number, string ,boolean , symbol
      2. reference datatype  
      */


  //functions in javascript

  // function avg(a, b) {
  //   return (c = (a + b) / 2);
  // }
  // c1 = avg(5, 10);
  // console.log(c1);

  //conditional statement
  // let age = 20;
  // if (age > 18) {
  //   document.write("you are adult now !");
  // } else {
  //   document.write("you not are adult now !");
  // }

  //loops in javascript 

  // let arr = [1, 2, 3, 4, 5, 6];
  //  console.log(arr);
  //  for(var i=0; i<arr.length;i++ );
  //  console.log(arr[i]);

  // arr.forEach(function (element) {
  //   console.log(element);
  // });

  // while loop
  // let j = 0;

  //  Arithmatic operators

  let a2 = 10;
  let b2 = 4;
  console.log("a+b = ", a2 + b2);
  console.log(a2 - b2);
  console.log(a2 / b2);
  console.log(a2 * b2);
  console.log(a2++);
  console.log(++a2);
  console.log(--a2);
  console.log(a2--);
  console.log("value of a2 : ", a2); // value of a2 

  console.log(a2 % b2);
  console.log(a2 ** b2); //like x to the power y means xki power 4
  console.log("value of a2 :", a2); // value of a2 



  // Assignment operators

  let a11 = 4;
  let b11 = 2;
  console.log((a11 += b11));
  console.log((a11 -= b11));
  console.log("value of a11 :", a11); // value of a11 

  console.log((a11 %= b11));
  console.log((a11 /= b11));
  console.log("value of a11 :", a11); // value of a11 
  console.log((a11 **= b11));
