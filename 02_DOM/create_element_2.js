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

// const secondItem = document.querySelector('li:nth-child(2)')
// console.log(secondItem);


const li2 = document.querySelector('.course')

// one way --> innerHTML
// secondItem.innerHTML = "Golang"

// another way
// secondItem.outerHTML = "<li>Golang</li>"

// best way --> textNode
// const li = document.createElement('li');
// const addCourseName = document.createTextNode("Golang")
// li.appendChild(addCourseName)
// secondItem.replaceWith(li)


const course = document.querySelector('.course:nth-child(2)')
// console.log(course);

const newCourse = document.createElement('li')
newCourse.setAttribute('class', 'course')

const txt = document.createTextNode("Node js");
newCourse.appendChild(txt);

course.replaceWith(newCourse);

// remove an element

const lastElement = document.querySelectorAll('li')
// lastElement[0].remove();
// lastElement[1].remove();
// lastElement[2].remove();
console.log(lastElement);

for(let i = lastElement.length-1; i > 3; i--){
    lastElement[i].remove();
}



