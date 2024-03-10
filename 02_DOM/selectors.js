// console.log("Hello JS");

// selectors 
// there are many sekectors present in js 

// querySelector
// querySelectorAll
// getElementById
// getElementByClassName
// getElementByTagName

const list1 = document.querySelectorAll('li')
// console.log(list1);

// querySelector()  --> returns first instance

let h1Selector = document.querySelector('#title')

// console.log(h1Selector);

let h1S = document.getElementById('title');
// console.log(h1S);

let h1s2 = document.getElementsByClassName('heading')
// console.log(h1s2);

// There are some value in it ==> innerHTML, textContent, innerText
// the diff btwn innerText and textContent is textContent show all the 
// content in the particular tag including hiding content

// but in innerText only show this tag insider text

let innerTextVal = h1Selector.innerText
// console.log("innerText ==> ", innerTextVal);


let textContentVal = h1Selector.textContent
// console.log("TextContent ==> ", textContentVal);

let innerHTMLVal = h1Selector.innerHTML
// console.log("innerHTML ==> ", innerHTMLVal);


let h1Selector1 = document.getElementById('title')

console.log(h1Selector1);

let h1Selector2 = document.getElementsByClassName('heading')  
// returns a HTML collection 

console.log(h1Selector2);

// add style

const head2 = document.querySelector('.miniHeading')
head2.style.backgroundColor = 'red';
head2.style.color = 'white'
head2.style.padding = '15px'
head2.style.borderRadius = '15px'


// QuerySelectorAll()

const list = document.querySelectorAll('.list_item')

// console.log(list);

list.forEach((element)=>{
    if(element.innerText == "HTML"){
        element.innerText = "Django"
    }
    // console.log(element.innerText);

})




// returns a NodeList which is not an array but the function forEach to iterate

// list.forEach((li)=> console.log(li.innerText))
// list.forEach((li)=> {
//     li.style.backgroundColor = 'green'
//     li.style.color = 'red'
// })

