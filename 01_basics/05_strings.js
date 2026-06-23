const userName = "kiranmajeed";
const repoCount = 50;

// console.log(userName + repoCount + "value")

/** string  interpolation with backets and inject with variables */
// console.log(`Hello my name ${userName} and my repoCount is ${repoCount}`);


const gameName = new String('kiranmajeed'); //string object, key pair values
// console.log(gameName);
// console.log(typeof(gameName));

const learningJs = new String('javascript-js-com')
// console.log (learningJs[0]);
/**string proto type show the object prototype which show all method of string */
// console.log(learningJs.__proto__);
// console.log(learningJs.length);
// console.log(learningJs.toUpperCase());
// console.log(learningJs.charAt(2));
// console.log(learningJs.indexOf('v'));

// const string = learningJs.substring(0,4)
// console.log(string);

const anotherString = learningJs.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   kiranmajeed    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kiran.com/kiran%20choudhary"

console.log(url.replace('%20', '-'))

// console.log(url.includes('majeed'))

// console.log(learningJs.split('-'));



