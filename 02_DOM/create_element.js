// console.log("hello");

const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children); // return HTML collection

let li = document.querySelectorAll('.days')

// li.forEach((child)=>{
//     console.log("Baap ==> ", child.parentElement);
//     if(child.nextElementSibling){
//         console.log("Step Sister/Brother ==> ",child.nextElementSibling);
//     }
//     if(child.children){
//         console.log("Paka Bacha ==> ",child.children);
//     }
// })

// console.log(li.parentElement);

// traverse
for(let i = 0; i < parent.children.length; i++){
    // console.log(parent.children[i].innerHTML);
}

// parent.children[3].style.backgroundColor = "orange"
// parent.children[3].style.padding = "20px"

// li.forEach((child)=>{
//     child.style.backgroundColor = "pink"
// })



// parent.style.border = "2px solid yellow";
// parent.style.padding = "20px"


// parent.children[1].style.backgroundColor = "red"
// parent.children[1].style.color = "blue"

// find first Element child

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const childNode = document.querySelector('.days:nth-child(7)')

// console.log(childNode);

// console.log(childNode.parentElement);

// console.log(childNode.nextElementSibling);




// const list = document.createElement('li');
// // list.className = "days"
// // list.id = "friday"

// list.setAttribute('class', 'days')
// list.setAttribute('id', 'friday')

// list.innerText = "Friday"

// const txt = document.createTextNode("Friday");
// list.appendChild(txt);

// console.log(list);

// parent.appendChild(list)

// const list2 = document.createElement('li');
// list2.classList = "days friday tiasa"
// list2.innerText = "Saturday"

// console.log(list2);

// parent.appendChild(list2)

const createElement = function (text, id, parent){
    let li = document.createElement('li');
    li.setAttribute('class', 'days');
    li.setAttribute('id', `${id}`)
    li.innerText = `${text}`

    parent.appendChild(li);
}

createElement("Friday", "friday", parent)
createElement("Saturday", "Saturday", parent)
createElement("Sunday", "Sunday", parent)

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

// console.log(div)