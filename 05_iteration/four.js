/**
* for in loop: Iterates over keys (property names) of an object.
*/
const myObject = {
    js: "javascript",
    cpp: "c++",
    rub: "rubby"
    
}
for (const key in myObject) {
    
//    console.log(`${key} is shortcut of ${myObject[key]}`)
    
    
}
const myArr = [ "c++","js","laravel"]
for (const key in myArr) {
    console.log(`the programming language is: ${myArr[key]} and index is ${key}`) 
}
//and for in loop not used in the map because it not iterable in for in loop