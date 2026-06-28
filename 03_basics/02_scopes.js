/**
 * Scope = where a variable is visible/accessible.
 */

/**Global Scope — declared outside any {} or function, accessible everywhere. */
const name = "Kiran"; // visible to all code

/**
 * Function Scope — declared inside a function, trapped there.
 */
function run() {
  const x = 5; // only exists inside run()
}
// console.log(x); // ❌ error

/**
 * Block Scope — declared with let/const inside any {} (if, for, while, etc.), trapped there.

 */
if (true) {
  let a = 1;   // ❌ can't access outside
  var b = 2;   // ✅ leaks out (var ignores blocks)
}
/** */

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

/**inpect k through,,,or node k through jb run krty h in dono ka scope different hota h */

/**
 * Closures:A closure is when a function "remembers" variables from its outer scope even after that outer function has finished executing.
 */
function one(){

    const username ="kiran";
    function two(){
        const website = "portfolio"
        console.log (username);
    }
    // console.log(website)
    two()
}
// one()
/** */
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++
/**Hoisting = JavaScript moves declarations to the top of their scope before code runs. But it doesn't move the values. */

console.log(addOne(1));
function addOne(num){
    return num + 1;


}
/**Named Function Expression*/
//     const addTwo = function(num) {
//   return num + 2;
// };

console.log(addTwo(5)); //give error
const addTwo = function(num){
return num + 2
}
