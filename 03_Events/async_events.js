// console.log("hello");
const stopbtn = document.querySelector('.stop')


// this is an async func which execute once after the timeout
// setTimeout(()=>{
//     console.log("hello babes");
// }, 2000)

// another way of writing

const printHello = (str)=>{
    console.log(`hello ${str}`);
}

// setTimeout(printHello, 2000, "Ankit Chitrakar")

// if we want stop the event before execution then we need to clear thetimeout

// const greetings = setTimeout(printHello, 2000, "Ankit Chitrakar")

// stopbtn.addEventListener('click', ()=>{
//     clearTimeout(greetings)
//     console.log("Stopped");
// }, false)

// setInterval

const intervalStart = setInterval(()=>{
    console.log("hello ", Date.now());
}, 1000)

stopbtn.addEventListener('click', ()=>{
    clearInterval(intervalStart)
    console.log("stopped");
}, false)


