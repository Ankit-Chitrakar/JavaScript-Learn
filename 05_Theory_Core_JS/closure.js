// Closure

// when we return a function then not only the function will return 
// but also the lexical scope of this function will return 

function myName(){
    let name = "Ankit";

    function printName(){
        console.log(name);
    }

    return printName;
}

const nameFromMyName = myName();

nameFromMyName()

