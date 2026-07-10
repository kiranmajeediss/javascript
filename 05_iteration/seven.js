/**
 * map:map(): Transform every item
Returns a new array of same length with transformed values.
 */

const myNumber = [1,2,3,4,5,6,7,8,9,10,11]
const newNum= myNumber.map( (num)=>{return num+10;})
// console.log(newNum);

// chaining in js 
const arrNum = [1,2,3,4,5,6,7,8,9,10,11]

const chaining =  arrNum
                   .map((num)=>num * 10)
                   .map((num)=>num - 10)
                   .map((num)=>num + 10)
                   .map((num)=>num + 10)
                   .map((num)=> num >=40)
                   console.log(chaining)