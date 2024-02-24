// forEach loop does not resturn anaything 
// for that reason we cant store anything 
// from forEach loop in that cause we introduce 
// 3 method which returns value from array after 
// iterating all the element and doing many operation on this..

// 1 -> filter()  => filtering out array elements and returns new array
// 2 -> map()  => map function is used for iterating through the array 
               // and doing various arithmatical operaions on the array 
              // and returns new array  

// 3 -> reduce()  => reduce function takes two argument 
                // (Accumulator, currentValue), initialValue 
                // and accumulator initialize first with the 
                // initialValue then doing arithmetical operation 
                // with currentValue (Array element)
                // Example ==> Cart price addition using reduce method


// forEach doesnot returns

let myObj = [1, 2, 3, 4, 5]
let sum = 0
const total = myObj.forEach((num)=> {
    sum += num;
    return sum
})

console.log(total);  // it gives undefined bcz of forEach doesnot return anything

// for that we use filter, map, reduce

// filter

// let newArr = myObj.filter((val) => {
//     return val >= 4  
// })  /// it returns [4, 5]

// another syntax (implicit return)
let newArr = myObj.filter((val)=> val >= 4) /// it returns [4, 5]



// console.log(newArr);  


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// this filter mehod is used various times when we fetched data from DB 
// and filtered some val like an Ecommerce app

// let scncBook = books.filter((book)=> book.genre === "Science")
let scncBook = books.filter((book)=> book.genre === "History" && book.publish >= 1990)

// console.log(scncBook);


// map 

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArr1 = myArr.map((val)=> val + 10)
// console.log(newArr1);

// cahining .map().map().map().filter().reduc() ==> like that

let newArrChain = myArr
                .map((val)=> val * 10)
                .map((val)=> val + 1)
                .filter((val)=> {
                    return val >= 50
                })

// console.log(newArrChain);

// reduce()

let myCart = [
    {
        courseName: "Full-stack web course",
        price: 2999
    },
    {
        courseName: "Node-js with Express js",
        price: 1999
    },
    {
        courseName: "Mobile Dev course",
        price: 3999
    },
    {
        courseName: "DSA course",
        price: 4999
    },
    {
        courseName: "Data Science course",
        price: 12999
    },
]

// how much price total i pay

let myTotal = myCart.reduce((acc, currCourse) => acc + currCourse.price, 0)

console.log(`Total Pay = ${myTotal} Rs`);