/**Object Declear
 *  2-singleton/ construct
 */
// const tinderUser = new Object() //singleteron object
// const myObj ={}  //non singleteron object
// console.log(tinderUser)


const tinderUser ={}
tinderUser.id ="123"
tinderUser.name = "kiran"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "kiran@gmail.com",
    fullname: {
        userfullName:{
            firstName: "kiran",
            lastName:"majeed"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname.userfullName.firstName);

// combine object/concate the object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const obj4 ={obj1,obj2,obj3}
const obj4 =Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

/**Spread operator */
const obj5 ={...obj1,...obj2,...obj3}
// console.log(obj5)

/**databse se vlaue ati h,, wo array of objects hoti h */
const users = [
    {
        id: 1,
        email: "kiran@gmail.com"
    },
    {
        id: 2,
        email: "kk@gmail.com"
    },
    {
        id: 3,
        email: "erum@gmail.com"
    },

]
users[1].email
// console.log(users);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
/**hasOwnProperty ,method */
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


/**destructuring of object and take the value */



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kiran"
}
/**destructing of object */
// course.courseInstructor

const {courseInstructor: instructor} = course  //construct

// console.log(courseInstructor);
console.log(instructor);

/** destucting in react/ */

// const navbar = (props.company)=>{} //by default
// const navbar = ({company})=>{}
// navbar(company ="abc")





//**API in JSON */
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
