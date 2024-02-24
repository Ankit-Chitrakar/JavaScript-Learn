// console.log("hello");

const ul = document.querySelector('#images')

const owl = document.querySelector('#owl')

const google = document.querySelector('#google')

// owl.addEventListener('click', (e)=>{
//     console.log(e);
//     console.log("owl clicked");
// }, false)   // this false/true is event propagation which has two context 
                //  --> 1. Bubbling propagation => down to top
 //             // 2. Capturing Propagation ==> top to down
//             // By default the value is False


// Event propagation   ==> below is called Bubbeling propagation
// when we click on owl in below case inner listener will get first priority and print owl clicked
// then print ul clicked for, down to top approach this is called bubbeling propagation

// -------------Bubbling Propagation (false) --------------
// ul.addEventListener('click', ()=>{
//     console.log("UL clicked");
// }, false)
// owl.addEventListener('click', ()=>{
//     console.log("OWL clicked");
// }, false)

// ==> below is called Capturing propagation
// when we click on owl in below case outer listener will get first priority and print Ul clicked
// then print owl clicked for, top to down approach this is called capturing propagation

// --------------Capturing Propagation (true) ------------
// ul.addEventListener('click', ()=>{
//     console.log("UL clicked");
// }, true)
// owl.addEventListener('click', ()=>{
//     console.log("OWL clicked");
// }, true)



// Event objects

google.addEventListener('click', (e)=>{
    e.preventDefault()  // prevent default behavior of any tag/element
    console.log(e.target);
    console.log("google clicked");
})



// task ==> delete the particular li which i click
ul.addEventListener('click', (e)=>{
    console.log(e.target.tagName);

    const clickele = e.target.parentNode;  
    // if i click on ul not and image then it delete the whole ul so prevent this we need some checks

    if(e.target.tagName === 'IMG'){
        clickele.remove()
    }
    


})