/**
 * foreach loop: An array method that runs a function once for each element. Doesn't return anything.
 */
/**
 * A function that either takes a function as an argument or returns a function (or both).
 * // map, filter, forEach are all higher-order functions
 */

const coding = ["js", "ruby", "java", "python", "cpp"]
// callback function use

// coding.forEach(function(val){
//     // console.log(val)
// })

// arrow function
coding.forEach( (item) => {
    // console.log(item);
} )

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe) //give the reference of funciton  
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})   

//array of objects 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    // console.log(item.languageName)
})

