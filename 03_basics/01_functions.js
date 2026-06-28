/**Functions: A function is a reusable block of code that performs a task. You define it once, call it whenever you need it.
 */
/** function scope or function defination
 * function sayMyName(){}
*/

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// function ka reference: sayMyName
// function ka execution: sayMyName()

// sayMyName()

// function addTwoNumber(num1,num2) //parameter: pass in functions
// { 
//     console.log(num1+num2)
// }
// addTwoNumber(3,4) //arguments:when function execute/call

function addTwoNumbers(num1,num2){

    let result = num1 + num2
    return result
}
const result = addTwoNumbers(1,2)
// console.log("Result:",result)

/** */
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// loginUserMessage("kiran")
// console.log(loginUserMessage("kiran"))
// // console.log(loginUserMessage(""))
// // console.log(loginUserMessage())

/** */
// function loginUserMessage(username){
function loginUserMessage(username= "majeed"){
    // if(username== undefined)
    if(!username){
        console.log("please enter the username")
        return

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("kiran"))

/** */

// function calculateCartPrice( ...num1){ //rest operator ...
//     return num1
// }
// console.log(calculateCartPrice(11,22,33))

/** */

function calculateCartPrice(val1,val2, ...num1){ //rest operator ...
    return num1
}
// console.log(calculateCartPrice(11,22,33))

/**object */

const user = {
    username: "kiran",
    password: 123
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.password}`);
}
// handleObject(user)

// handleObject({
//     username:"erum",
//     password: 322
// })

/** */

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));