//        =====================DOCUMENT OBJECT MODEL==================

// WINDOW OBJECT 
// the window object represents an open window in a browser . it is browser's object 
//(not javaScript's) & is automatically created by browser
// it is global object with lots of properties & methods


//   -----------------> DOM <----------------
//when a web page is loaded , the browser creates a document object model of the page
console.log(window);
console.log(window.document);
window.alert("hello");
// if you want to print object we use console.dir()
console.dir(document.body);
console.dir(document.head);
//           ,-------------------DOM MANIPULATION-------------
let button = document.getElementById("btn");
console.dir(button);
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);
let tag = document.getElementsByTagName("h1");
console.dir(tag);

// we use ( query selector) place of id tagname and class
let element = document.querySelector("p");
// let element = document.querySelector("div").style.border;
// let element = document.querySelector("div").style.backgroundColor ="pink";
// let element = document.querySelector("div").className ="cls";
// let element = document.querySelector("div").classList =" cls xyz";
// let element = document.querySelector("div").classList; // rturn array


let elements = document.querySelectorAll("p");
let element1 = document.querySelectorAll(".heading-class");
let element2 = document.querySelectorAll("#btn");
console.dir(element);
console.dir(elements);
console.dir(element1);
console.log(element2);
//---------------------> properties <----------------------
// 1. tagName : returns tag for element nodes
// 2. innerHTML : returns the plain text or HTML content in the elements
// 3. innerText : returns the text content of the element and all its childern
// 4. textContent : returns textual content even for hidden element

//            TARGETING METHODS 
let elem = document;
console.log(elem);

let elem2 = document.all;
console.log(elem2);

// we use all, head, documentElement, head, title, body, images, anchors, links
// forms, doctype, URL, baseURI, domain

//             GET AND SET VALUE METHODS
// we can get 
//1.HTML  -------> innerHTML
//2.text  -------> innerText
//3.Attribute  ------> getAttribute , getAttributeNode , Attributes

// let elem3 = document.getElementById("para").innerText;
// let elem3 = document.getElementById("content").innerHTML;
// let elem3 = document.getElementById("content").innerHTML = "hello";
// let elem3 = document.getElementById("para").innerText = "this is a paragraph";
// let elem3 = document.getElementById("div").getAttribute("style");
// let elem3 = document.getElementById("div").getAttributeNode("style").value;
// let elem3 = document.getElementById("div").attributes;
// let elem3 = document.getElementById("div").attributes[2].value;
let elem3 = document.getElementById("div").attributes[2].name;
console.log(elem3);

//    set methods
//1.innerText
//2. innerHTML
//3.setAttribute
//4. Attribute
//5. removeAttribute

let elem4 = document.getElementById("div").innerHTML = "<h1>welcom to my web page</h1> ";
let elem5 = document.getElementById("div").setAttribute("style", "border: 10px dotted black; background-Color: yellow");
// let elem5 = document.getElementById("div").getAttribute("class");
// let elem6 = document.getElementById("div").removeAttribute("style");
console.log(elem4);
console.log(elem5);

//  DOM CSS STYLING METHODE
// . style
// . className
// . classList

// EVENT LISTENOR
//   addEventListener(event, function, useCapture);
// useCapture hase two valuse

// let elem6 = document.getElementById("btn").onclick = clrchang;
let elem6 = document.getElementById("btn").addEventListener("click", bgclrchang);
let elem7 = document.getElementById("btn").addEventListener("mouseenter", clrchang);
// let elem6 = document.getElementById("btn").addEventListener("mouseenter", function () {
//     // document.getElementById("btn").style.padding = "10px";
//     this.style.padding = "10px";

// });
function bgclrchang() {
    document.getElementById("btn").style.backgroundColor = "blue";
}
function clrchang() {
    document.getElementById("btn").style.color = "red";
}


console.log(elem6);
console.log(elem7);


// //  remove event listenor
// function clrchang() {
//        document.getElementById("btn").removeEventListener("click", bgclrchang);
// }