// console.log("hello");


// console.log(time.toLocaleTimeString());

const clock = document.querySelector('.clock')

setInterval(() => {
    let time = new Date();
    // console.log(time.toLocaleTimeString());
    clock.innerHTML = time.toLocaleTimeString();

}, 1000);