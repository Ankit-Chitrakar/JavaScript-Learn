// for-of loop --> mainly used for iterating in array
// for-in loop --> mainly used for iterating in object
// forEach loop --> used for all (Best)

// for-of loop

let myCodingArr = ["js", "cpp", "py", "java"]
let myCodingObj = {
    lang: "javascript",
    extention: "js"
}

for (const item of myCodingArr) {
    // console.log(item);
}

// for (const val of myCodingObj) {  // for of loop cant iterayte in object directly
//     console.log(val);
// }

// for (const val of Object.keys(myCodingObj)) {  // by that for of loop iterate keys/values of object
//     console.log(`${val} : ${myCodingObj[val]}`);
// }

// for in loop

for (const val in myCodingObj) {
    // console.log(`${val} : ${myCodingObj[val]}`);
}

for (const key in myCodingArr) {
//    console.log(key);   // for array for-in loop iterates and return indexes

//    console.log(myCodingArr[key]);
}

// Map data structure --> uniqly stores key value pair

const mpp = new Map();  // Map is not iterable by for in loop because it returns an array

mpp.set("js", "javascript");
mpp.set("py", "python");
mpp.set("java", "java");

for (const [key, value] of mpp) {  // destructuring the array 
    // console.log(`${key} : ${value}`);   // it returns the full array
}


// Foreach loop 

// it mainly used for array of object, array all type of iteration

// myCodingArr.forEach( (item)=> {
//     console.log(item);
// })


myCodingArr.forEach( (item, index, arr)=> {  // it also returs value, index, and total array
    // console.log(item, index, arr);
})

// most useful in array of object

let coding = [
    {
        langName: "javascript",
        extention: "js"
    },
    {
        langName: "python",
        extention: "py"
    },
    {
        langName: "c++",
        extention: "cpp"
    },
]

coding.forEach((item)=>{
    console.log(item.langName);
})