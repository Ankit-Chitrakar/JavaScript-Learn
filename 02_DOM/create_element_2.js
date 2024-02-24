// lets create a function where we create list item in a unordered list

const addListItem = (courseName)=>{
    const li = document.createElement('li');
    li.className = "course";
    li.appendChild(document.createTextNode(courseName))

    // add this to ul
    document.querySelector('.courses').appendChild(li)
}

addListItem("Python")
addListItem("React JS")
addListItem("CPP")
addListItem("java")


// edit existing list item / any element

const secondItem = document.querySelector('li:nth-child(2)')
// console.log(secondItem);

// one way --> innerHTML
// secondItem.innerHTML = "Golang"

// another way
// secondItem.outerHTML = "<li>Golang</li>"

// best way --> textNode
const li = document.createElement('li');
const addCourseName = document.createTextNode("Golang")
li.appendChild(addCourseName)
secondItem.replaceWith(li)

// remove an element

const lastElement = document.querySelector('li:last-child')
lastElement.remove();

