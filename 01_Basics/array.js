// decalare array

let myArr = [1, 2, 3, 4, 5, true, "Ankit"]

// console.log(myArr[0]);

// shalow copy & deep copy

let myEmp = [101, "Ankit", "Full Stack Web Developer", "Amazon"]

let newEmp = myEmp

// console.log(myEmp);
// console.log(newEmp);

// console.log("After shalow copy");

newEmp[1] = "Tiasa"

// console.log(myEmp);
// console.log(newEmp);

// shalow copy refernces from same source (Heap memory) 
// thats why it will change both the objects


// Deep copy
let myEmp1 = [101, "Ankit", "Full Stack Web Developer", "Amazon"]

let newEmp1 = JSON.parse(JSON.stringify(myEmp1))

// console.log(myEmp1);
// console.log(newEmp1);

newEmp1[1] = "Tiasa";

// console.log("After deep copy");

// console.log(myEmp1);
// console.log(newEmp1);

// deep copy could not referces from same heap memory 
// thats why this value will change for only newEmp1


let numbers = [1, 2, 3, 4, 5]

numbers.push(10);
numbers.push(15);  // push at the end

numbers.pop();  // pop from the end

// console.log(numbers);  

numbers.unshift(6); // push at the start
// console.log(numbers)

numbers.shift(); // pop at the start

// console.log(numbers)

let strNumbr = numbers.join() // make it string and join al the index together

// console.log(strNumbr);
// console.log(typeof strNumbr);

// console.log(numbers.includes(15)); // return boolean


// console.log(numbers.indexOf(15)); // if not in array return -1 or if present then show the index

// Slice and Splice

let num = [0, 1, 2, 3, 4, 5]

// console.log("A ", num);

let num1 = num.slice(0, 3);
// console.log(num1);
// console.log("B ", num);

let num2 = num.splice(0, 3);
// console.log(num2);
// console.log("C ", num);

// Differnce of Splice and slice is 
// 1. slice excludes the outer range but spilce includes the outer range
// 2. slice can't manulpulate the original array but splice manupulate the original array 


// concat two array 

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

// with push method 
// arr1.push(arr2);
// console.log(arr1);  // this is not a right method to concat two arrays 


// concat array with concat methos
let arr3 = arr1.concat(arr2);

// console.log(arr3);

// Most modern or optimal way --> spread operator [...]

let newArr = [...arr1, ...arr2];

// console.log(newArr);   // best way

let another_arr = [1, 2, 3, 4, [5, 6, 7], [8, 9, [10, 11, 12]]];

// console.log(another_arr);  // giving array of array of array 

// console.log(another_arr.flat(Infinity));

// console.log(Array.isArray("Ankit"))  // false
// console.log(Array.isArray(another_arr))  // true

let strToArr = Array.from("Ankit Chitrakar");
// console.log(strToArr);

let val1 = 20
let val2 = 40
let val3 = 100


let varToArr = Array.of(val1, val2, val3)
console.log(varToArr);