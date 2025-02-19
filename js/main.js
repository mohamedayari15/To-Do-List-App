


let inputField = document.getElementById('inputField');
let addToDoBtn = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');


addToDoBtn.addEventListener('click', function () {

    if (inputField.value === "") {
        alert('Please Enter a Task');
    }

    else {
        let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";

        paragraph.addEventListener('click', function () {
            paragraph.classList.add('clicked');
        });

        paragraph.addEventListener('dblclick', function () {
            toDoContainer.removeChild(paragraph);
        });
    }
});



