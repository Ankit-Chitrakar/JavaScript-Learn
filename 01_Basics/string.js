// console.log("hello world");


// string declaration

let name = "Ankit"
let age = 21

// string interpolation mordern declaration
let fullString = `My name is ${name}. I am ${age} years old.`
// console.log(fullString)



// another way of declaring string

let newString = new String('Ankit-Chitrakar-is-my-name');

// console.log(newString);

// string methods

// console.log(newString[0]);
// console.log(newString.__proto__);

// console.log(newString.length);

// console.log(newString.toLocaleLowerCase());

// console.log(newString.charAt(6));
// console.log(newString.indexOf('t'));


// console.log(newString.substring(1, 5));

// console.log(newString.slice(0, 15));


let str = "Ankit Chitrakar"
// console.log(str);
// console.log(str.trim());


// console.log(str.endsWith('r')); // true
// console.log(str.endsWith("kar"));  // true

// replace existing with new

let url = "https://ankit.com/ankit%20chitrakar"

// let newUrl = url.replace("%20", "-");
// console.log(newUrl);

// console.log(url.includes("chitrakar"));

let demoString = "I am a good boy. I have a good attitude";

let demostrSplit = demoString.split(' ');
// console.log(demostrSplit);

let finalString = "";
for(let i = 0; i < demostrSplit.length; i++){
    // console.log(demostrSplit[i]);
    if(demostrSplit[i].includes("good")){
        demostrSplit[i] = "bad"
    }
    // console.log(demostrSplit[i]);
    finalString += demostrSplit[i]+ " ";
}

console.log(finalString);

