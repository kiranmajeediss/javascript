/**
 * Both control loop flow, but do opposite things.
 * break — Exit the loop entirely
 * continue — Skip this iteration, keep looping
 */
// +++++++++continue+++++++++

for(let i =1; i<10; i ++){
    if(i==5){
        // console.log(`${5} Best number`);
        continue;
    }
    // console.log(`value of ${i}`);
}
// ++++++++Break++++++++
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}
