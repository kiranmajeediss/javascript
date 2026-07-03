/**Control flow determines which code runs and in what order. By default, code runs top to bottom. Control statements let you branch, loop, or jump. */

/**
 * 1. Conditional Statements (Branching)
if / else if / else
 */

// if
const isUserLoggedIn = true
const temperature = 40 
// if(temperature===40){
//     console.log("it's summer")
// }
// else{
//     console.log("the weather is winter")
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==
// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
/**Nullish Coalescing Operator (??)
 * Returns the right side only when the left side is null or undefined. Nothing else.   
 */
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// console.log(val1);
/**Ternary Operator (? :)
 * A one-line shortcut for if/else. The only JS operator that takes 3 operands.
 */
const score = 40;
score >50 ? console.log("pass exam") : console.log("fail exam");