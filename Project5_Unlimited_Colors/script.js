// console.log("hello");

// genearte random color

const generateRandomColor = ()=>{
    const hexColorRange = "0123456789ABCDEF"
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexColorRange[Math.floor(Math.random() * 16)]
    }

    return color
}

// console.log(generateRandomColor())

const body = document.querySelector('body')

const startbtn = document.querySelector('#start')
const stopbtn = document.querySelector('#stop')

let startInterval;

startbtn.addEventListener('click', (e)=>{
    e.preventDefault();

    startInterval = setInterval(()=>{
        body.style.backgroundColor = generateRandomColor();
        console.log(generateRandomColor());
    }, 1000)

}, false)

stopbtn.addEventListener('click', (e)=>{
    e.preventDefault()

    clearInterval(startInterval);
    startInterval = null; 
}, false)