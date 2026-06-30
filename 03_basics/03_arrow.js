/**
 * this Keyword in JavaScript
this refers to the object that is currently executing the code. Its value changes depending on how and where a function is called.

refer tu current code
 */
/**
// 1. Global Context
console.log(this); // Window object (browser) / global (Node)  */

/**
// 2. Inside an Object Method → points to the object
const user = {
  name: "Kiran",
  greet() {
    console.log(this.name); // "Kiran"
  }
};
user.greet(); // this = user */

// 3. Regular Function (standalone call) → undefined (strict mode) or Window

/**
function show() {
  console.log(this); // Window or undefined
}
show();*/
// 4. Arrow Function → inherits this from parent scope (no own this)
/** 
const user = {
  name: "Kiran",
  greet: () => {
    console.log(this.name); // ❌ undefined (this = Window)
  }
};*/


// Arrow functions DON'T get their own this

//  Event Listener → points to the element that fired the event

// button.addEventListener("click", function() {
//   console.log(this); // the button element
// });
//////
 const user = {
username:"kiran",
price:99,
welcomeMessage: function(){
    console.log(`${this.username}, welcome to my website`);
    console.log(this)
}


 }
//  user.welcomeMessage()
// user.username = "majeed" //override
// user.welcomeMessage()

// console.log(this);
/** */
// function chai(){
//     let username = "kiran"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
/**Arrow Function:Arrow Functions (ES6)
A shorter way to write functions, introduced in ES6.
 */
const chai = () =>{
let userName = "kiran"
console.log(this)
}
/**explicity return */

// chai()
// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }

/**implicity return */
// const addTwo = (num1,num2)=> num1 +num2
const addTwo = (num1,num2)=> (num1 +num2)
console.log(addTwo(3,4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
