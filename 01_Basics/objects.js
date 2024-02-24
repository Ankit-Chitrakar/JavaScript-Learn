// declaration

let mySymbol = Symbol("key1");

let jsUser = {
    name: "Ankit Chitrakar",
    age: 20, 
    emailId: "chitrakarankit2003@gmail.com",
    isLoggedIn: false,
    [mySymbol] : "Id-01",
}

// console.log(jsUser);
// console.log(jsUser.emailId);
// console.log(jsUser["name"]);

jsUser.age = 21

// console.log(jsUser);

// Object.freeze(jsUser);  // freeze the object cant be manupulated further

jsUser.age = 38

// console.log(jsUser);

    
jsUser.greetings = function(){
    console.log(`hi I am a JS user my name is ${this.name}`);
}

// console.log(jsUser.greetings());

// object merge

let obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

let obj2 = {
    4: "d",
    5: "e"
}

let obj3 = {
    6: "f",
    7: "g"
}


let resObj = Object.assign({}, obj1, obj2, obj3);  // assign(target, source, source)
                                                // sorce object will be concate in target
// console.log(resObj);

// best way of merge obj is spread operator

let finalObj = {...obj1, ...obj2, ...obj3}
// console.log(finalObj);

// to strore all keys in array

// console.log(Object.keys(jsUser));  //  store all keys in array
// console.log(Object.values(jsUser));  // store all values in array

// console.log(Object.entries(jsUser))  // store all key value pairs in array

// whether a key is present or not

// console.log(jsUser.hasOwnProperty("emailId"))  // if present return true


// Object Destructure

let myObj = {
    name: "Ankit",
    courseName: "JS in Hindi",
    price: "free",
    rating: 5
}

// console.log(myObj.courseName);  // one way

const {courseName} = myObj;  // best way of destructuring a object

console.log(courseName);