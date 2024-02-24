// console.log("hello");

// select all items

const grey = document.querySelector('#grey')
const white = document.querySelector('#white')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')

const heading = document.querySelector('.heading')
const subHeading = document.querySelector('.subHeading')

const body = document.querySelector('body')
const colorBox = document.querySelector('.colorBox')

grey.addEventListener('click', ()=>{
    body.style.backgroundColor = "grey";
    heading.style.color = "black"
    subHeading.style.color = "black"
    colorBox.style.border = "2px solid grey"
})

white.addEventListener('click', ()=>{
    body.style.backgroundColor = "#fff";
    heading.style.color = "black"
    subHeading.style.color = "black"
    colorBox.style.border = "2px solid white"
})

blue.addEventListener('click', ()=>{
    body.style.backgroundColor = "#0023e5";
    heading.style.color = "#fff"
    subHeading.style.color = "#fff"
    colorBox.style.border = "2px solid #0023e5"
})
yellow.addEventListener('click', ()=>{
    body.style.backgroundColor = "yellow";
    heading.style.color = "#000"
    subHeading.style.color = "#000"
    colorBox.style.border = "2px solid yellow"
})


// Hitesh Sir Code 

// const colorBoxes = document.querySelectorAll('.color')
// const body = document.querySelector('body')
// // console.log(colorBoxes);

// colorBoxes.forEach((color)=> {
//     color.addEventListener('click', (e)=>{
//         // console.log(e);
//         // console.log(e.target);

//         if(e.target.id === "grey"){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id === "white"){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id === "blue"){
//             body.style.backgroundColor = "#0023e5"
//         }
//         if(e.target.id === "yellow"){
//             body.style.backgroundColor = e.target.id
//         }

//     })
// })
