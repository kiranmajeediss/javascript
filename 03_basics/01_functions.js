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
console.log(loginUserMessage("kiran"))