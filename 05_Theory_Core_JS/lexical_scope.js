// lexical environment 

// lexical environment is created when the execution context is created

// lexical environmernt = Local memory of that scope + refernce of lexical environment of parent node

// code

function a(){
    let b = 10;

    c();

    function c(){
        console.log(b);   // this b gives the output of 10 because 
                        // b is in the lexical environment of c()'s parent execution context
                        // thats why it has the access to print b
    } 
}

a();   

console.log(b);   // this gives a error because b is not in the scope of global context 
                // because b is declared into the lexical scope of a()
                // but when we access this into global space then it has not any access 
                // then it gives sope is not define error