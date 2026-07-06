/**Iteration = repeating code over a set of values (arrays, objects, strings, etc.).
 */

// for lop condition check one by one iteration jum outof block then again untill the condition is false
for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);

    
}
for(let num= 0; num<10; num++){
    const element = num;
    if(element==5){
        // console.log(`condition true ${element}`);
        }
        // console.log(element);
}
// ++++++++++++++
for(let i = 1; i<10; i++)
{
    // console.log(`outer loop is ${i}`);
    for (let j = 1; j<10; j++){
        // console.log(`inner loop ${j}`)
        // console.log(`${i} * ${j} = ${i*j}`)

    }
}
// +++++++++++++++++Loop in Array +++++++++++++++++
let myArray = ["kiran","Erum","sumera"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

