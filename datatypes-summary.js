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

console.log( heros);
console.log( myObj);
 myFunction();
console.log( anotherId);

