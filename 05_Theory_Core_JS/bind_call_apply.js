// let name = {
//     firstName: "Ankit",
//     lastName: "Chitrakar",

    // getFullName: function (){
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }
// }

// // name.getFullName()  // Ankit Chitrakar

// // if we have another object

// let name2 = {
//     firstName: "Tiasa",
//     lastName: "Ash"
// }

// // if we print full name from name2

// // name2.getFullName()  // err(or because name2 has no getFullname func

// // name.getFullName.call(name2)    // "Tiasa Ash " passes this of name2 to the getFullName func


// // if we declare getFullName fubnc outside the name Object
// this is called function borrowing

let name3 = {
    firstName: "Ankit",
    lastName: "Chitrakar"
}

let name4 = {
    firstName: "Tiasa",
    lastName: "Ash"
}

function getFullName(city, age){
    console.log(`${this.firstName} ${this.lastName} from ${city}, age of ${age}`);
}

// getFullName.call(name3);   // used core function

// if we pass more arguments on the func
getFullName.call(name3, "Kolkata", 21);


// ----------------------------------- Apply Method ---------------------------

// apply method is same as call method 
// the only difference is to pass arguments here it is in a form of array list
// getFullName.apply(name3, ["kolkata", 21])

getFullName.apply(name4, ["Delhi", 21])



// ------------------------------Bind method --------------------------------

// call method instantly invoked and executed
// but if we have to invoked the function later on then we called bind method
// bind method just create a copy/refernce of this getFullName method bind with name3 object
// and later on by our usercase we use to invoke this 

let printFullName = getFullName.bind(name3, "Bangalore", 22);

printFullName();