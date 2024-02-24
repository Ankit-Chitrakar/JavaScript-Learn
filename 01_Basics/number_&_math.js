// declare number --> primitive datatype in js

let num = 1200;
// console.log(num);

let newNum = new Number(100);
// console.log(newNum);

// console.log(newNum.toFixed(2));  // 100.00

// console.log(newNum.toString().length)

let balance = 10000000

// console.log(balance.toLocaleString('en-IN'));


// ************************** Math ********************

// console.log(Math.abs(-14));  // change to its absolute value 14


// console.log(Math.round(4.5));   // avobe or equal .5 -> ciel below .5 floor


// console.log(Math.ceil(4.2));  // cieling value that is 5

// console.log(Math.floor(4.8));   // floring the value that is 4

// Random value generate

// console.log(Math.random());   // generate new number between 0 to 1

// console.log((Math.floor(Math.random() * 10)));

// generate random of a ludo game

let maxChal = 6
let minChal = 1

let ludoChal = Math.floor((Math.random() * (maxChal - minChal + 1)) + minChal)

console.log(ludoChal);

