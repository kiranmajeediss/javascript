/**Object: In JavaScript, an object is a collection of key-value pairs. Think of it like a container that holds related data and functionality together.
 * syntax: const my object = {}
 * 
 * Object.create
 * 1-object literals
 * 2-singleton/ construct
 * 
 */




//1-object literals
 
const mySym = Symbol("key1");

const JsUser = {
name: "kiran",
"full name": "kiran majeed",
[mySym]: "mykey1",
age:18,
location: "ahmadpur east",
email: "kiran@gmail.com",
isLoggedIn: false,
lastLoginDays: ["Monday","saturday"]

}

// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "kiran@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "kiran@microsoft.com"
// console.log(JsUser); 

/**function declear in object */

JsUser.greeting = function(){
    console.log("Hello Js User");
}
// console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());