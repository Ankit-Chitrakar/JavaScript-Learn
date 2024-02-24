// console.log("hello");

const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children); // return HTML collection

// traverse
for(let i = 0; i < parent.children.length; i++){
    // console.log(parent.children[i].innerHTML);
}

parent.children[1].style.backgroundColor = "red"
// parent.children[1].style.color = "blue"

// find first Element child

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const childNode = document.querySelector('.days')

// console.log(childNode);

// console.log(childNode.parentElement);

// console.log(childNode.nextElementSibling);



// Create Element

const div = document.createElement('div')

// console.log(div);

div.className = "main";
div.id = "unique"
div.style.backgroundColor = "grey"
div.style.color = "black"
div.style.padding = "15px"
div.style.borderRadius = "15px"

div.setAttribute("title", "good quality div")

//this is not a best way to add text
// div.innerText = "Hey Babes, Welcome to my world";

// best way to set innerText

const addText = document.createTextNode("Hey Baby, Welcome to my duniya")

div.appendChild(addText);

document.body.appendChild(div)

console.log(div)