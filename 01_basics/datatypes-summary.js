/** 
 * Primitive dataType: PreDefined By Language
 * 7 types(string,number,boolean,null,undefined,symbol,bigInt)
 */
const score =100
const scoreValue = 100.8

const IsLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)
// const bigNumber = 3456543576654356754n

/** 
 * Non-Primitive/reference dataType: Need to defined by the User 
 * Array,objects,functions
 */

const heros = ["shaktiman", "naagraj", "doga"];
 
let myObj = {
    name: "kiran",
    age: 25,
}

const myFunction = function(){
    console.log("Hello world")
}
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);
// console.log(typeof anotherId);

// console.log( heros);
// console.log( myObj);
//  myFunction();
// console.log( anotherId);

/**
 * Memory in the javascript
 * stack(primitive)=>get copy
 *  heap(non-prmitive)=>get refernce value/original value
 * 
 */

//stack=> Stack Memory is used for storing primitive types and function calls. Each time you assign a value, a new copy is created in the Stack,stores local variables

let username = "kiranmajeed"
let anothername = username
anothername = "erumMajeed"

console.log(username)
console.log(anothername)

//heap=>Heap Memory is used for storing objects and arrays,dynamic memory for programmer to allocate
let userOne = {
name:"kiranmajeed",
email:"kiran@gmail.com"
}
let userTwo = userOne;
userTwo.email ="erum@gamilcom"
console.log(userOne.email)
console.log(userTwo.email)
