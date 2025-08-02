var aplePrice = 200;
var serviceCost = "1000";
console.log(aplePrice + serviceCost);
console.log(typeof aplePrice, typeof serviceCost);
serviceCost = parseInt("1000");
console.log(aplePrice + serviceCost);
console.log(typeof aplePrice + typeof serviceCost);
var carPrice = parseFloat("12.5");
var carServiceCost = parseFloat("12");
var totalCost = (carPrice + carServiceCost);
console.log(totalCost);
console.log(carServiceCost + aplePrice);



var first = 0.1;
var secend = 0.2;
var total = (first + secend);
console.log(total);
var totalCount = parseFloat (total.toFixed(1));
console.log(totalCount);
var onionPrice = 40;
onionPrice += 10;
console.log(onionPrice);
const firstName = "Mahedi ";
const secendName = "Hasan";
const fullName = firstName + secendName;
console.log(fullName);

// Module Summary & Practice Task:

// 😊 You have successfully finished the first Module of JavaScript. 🎉
/*
---------------- JavaScript ----------

* Is high-level and interpreted 
* Dynamically update content
* Control Multimedia
* Animate images


----- What is a variable? ----
📘 What is a JavaScript Variable?
A variable in JavaScript is a named container that stores data you can use and modify later in your program. Think of it as a labeled box where you can keep a value—like a number, a word, or even a list—and refer to it whenever needed.

🧠 Why Use Variables? 
✔️ To store data (like numbers, strings, objects,etc.)
✔️ To reuse values instead of hardcoding
✔️ To make code more readable and flexible

🛠️ How to Declare Variables in JavaScript

** JavaScript provides three keywords to declare variables:

Keyword                      Use Case                      Reassignable              Scope

Var                          Legacy (avoid in modern Js)   Yes                       Function
let                          Modern, block-scoped          Yes                       Block
const                        Constant, block-scoped        No                        Block

Variable is used to store Data

*/

// 📝 Example Using Syntax:

let name = "John"; // Using let
const age = 25; // Using const
var country = "Bangladesh"; // Using var (older Js)

// 💡 Example: Using Variables

let first_name = "Kazi Shihab";
const birthYear = 2004;
var isStudent = true;

console.log(first_name); // Output: Kazi Shihab
console.log(birthYear);  // Output: 2004
console.log(isStudent);  // Output: true

// 📦 Types of Values You Can Store
let personName = "Kazi Shihab";               // String
let personAge = 21;                           // Number
let isActive = true;                          // Boolean
// let nothing = null;                           // Null
let notAssigned;                              // Undefined
let hobbies = ["Reading", "Coding"];          // Array
let personDetails = {name:"SHIHAB", age: 22}; // Object

console.log(typeof personName);        // String
console.log(typeof personAge);         // Number
console.log(typeof isActive);           // Boolean
// console.log(typeof nothing);
console.log(typeof notAssigned);
console.log(typeof hobbies);
console.log(typeof personDetails);

// 🧠 Why Does typeof null Return "object"?
let nothing = null;                           // Null
console.log(typeof nothing);


/*When JavaScript was first created (in 1995), values in memory were represented with type tags. These type tags helped identify what kind of data a value was. Here's what happened:

All primitive types (like undefined, boolean, number, etc.) had unique type tags.

All objects had a type tag of 0.

null was given the type tag 0—the same as objects—by mistake. */


/* 📝 Summary
Concept                                       	Explanation
null	                                        A primitive value meaning "nothing"
typeof null	                                    Returns "object" (bug)
Why?	                                        Historical mistake in JS's design😅
Fix planned?	                                No — fixing it would break old code
*/