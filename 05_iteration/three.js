// High order Array loops

/**++++++++ For of Loop++++++++++++
 * Iterates over values of any iterable (arrays, strings, Maps, Sets, NodeLists).
syntax: 
    for (const value of iterable) {
    // do something with value
    }
*/
////////////////
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}  
//
const greeting = "hello world!"
for (const value of greeting) {
    // console.log(value)
    
}
// Maps:The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()
map.set('IN',"india")
map.set('PK',"Pakistan")
map.set('Fr',"France")
    // console.log(map) //unique identifier
    //
    for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

/**for of not work for object  */

// const myObject = {
//     'game':"nfs",
//     'game':"ABC"
// }
// for (const [key,value] of myObject) {
//     console.log(key)
    
// }