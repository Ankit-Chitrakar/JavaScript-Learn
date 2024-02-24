// IIFE --> Immediately Invoked Function Expression 

// To remove global variables polutions in out function
// and to immediate calling out function we used iife

// syntax

(function chai(){
    // name iife
    console.log('DB CONNECTED');
})();

// when we declare two of more iife then end first we used ;

// by arrow function

( (name)=> {
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})("ankit")