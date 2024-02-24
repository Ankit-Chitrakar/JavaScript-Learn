// what is this keyword --> it refers the current state of a object

let course = {
    username: "ankit",
    password: "12345",
    price: 999,

    greetings: function(){
        // console.log(`${this.username}, wlcome to the course`);
        // here this usage is mandetory to refer what username 
        // console.log(this);  // this print whole the object instance
    }
}

course.greetings();

course.username = "tiasa"

course.greetings();

// when we globally called this function on node js 
// this returns an empty object

// but when we called this function globally on browser then 
// this returns window object's instance

// console.log(this);


// when we calls this keyword within a function body then it 
// does return global object of node

function testThis(){
    // console.log(this);   
}

testThis()

// but when we calls this keyword within a arrow function then 
// it return empty object

// const addTwo = ()=> {
//     console.log(this);   // this return an empty object
// }

// const addTwo = ()=> {
//     username = "ankit"
//     console.log(this.username);   // this return undefined because this is not working inside a function
// }

// example of explicit return in arrow function

// const addTwo = (num1, num2)=> {
//     return num1 + num2;
// }

// another syntax of implicit retirn in arrow function

const addTwo = (num1, num2) => (num1 + num2) // () refers return 

console.log(addTwo(5, 10))