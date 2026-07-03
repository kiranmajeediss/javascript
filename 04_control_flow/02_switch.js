    /**Switch Statement
     * A cleaner way to handle multiple conditions on the same value (instead of long if/else chains).
     * Syntax:  switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code (if nothing matches)
}
     */
//     const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

const number = 80;
switch(number){
    case 58:
    console.log("you passed exam")
    break;
    case 30:
        console.log("fail exam");
    break;
    case 80:
        console.log("congrats you got 80%")
        break;
        default:
            console.log("default case match")
            break;
}