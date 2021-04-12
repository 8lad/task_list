'use strict';



// Create new element for the task list

function createTheElement(taskText, element, elementClass) {
    let newListElement = document.createElement(element);
    newListElement.classList.add(elementClass);
    newListElement.innerHTML = `
    <div class="main__item-done">
        <div class="main__item-ico">
            <img src="assets/images/ok-img.svg" alt="trash icon">
        </div>
        <span>This task is done</span>
    </div>
    <span class="main__item-span">${taskText}</span>
    <button class="main__item-btn">Done</button>
    <div class="main__item-del">
        <img src="assets/images/iwwa_trash.svg" alt="trash icon">
    </div>
`;
    return newListElement;
}

// functions for shifting classes

function removingClass(item, elementClass) {
    item.classList.remove(elementClass);
}

function addingClass(item, elementClass) {
    item.classList.add(elementClass);
}

function shiftingClass(item, elementClass) {
    if (item.classList.contains(elementClass)) {
        removingClass(item, elementClass);
    } else {
        addingClass(item, elementClass);
    }
}

// function to adde an element into the task list

function addElementToList(parent, element) {
    let mainParent = document.querySelector(parent),
        newElement = element;
    if (newElement.classList.contains('done')) {
        mainParent.append(newElement);
    } else {
        mainParent.prepend(newElement);
    }

}
// function for deleting an element

function deleteListItem(element) {
    element.parentElement.remove();
}

// function for working with listener

document.addEventListener('click', (event) => {
    event.preventDefault();
    let clickedElement = event.target;
    if (clickedElement && clickedElement.parentElement.classList.contains('main__item-del')) {
        deleteListItem(clickedElement.parentElement);
    }

    if (clickedElement && clickedElement.classList.contains('main__item-btn')) {
        shiftingClass(clickedElement.parentElement, 'done');
        addElementToList('.main__list', clickedElement.parentElement);
    }
    if (clickedElement && clickedElement.classList.contains('main__create-task')) {
        let taskValue = document.querySelector('.main__task-input'),
            form = document.querySelector('.main__form form');
        if (taskValue.value && taskValue.value.length >= 5) {
            addElementToList('.main__list', createTheElement(taskValue.value, 'li', 'main__item'));
        }
        form.reset();
    }
});

// creating preloader

let preloader = document.querySelector('.preloader');
addingClass(preloader, 'active');

// geting all tasks from the server and putting it into to do list

let tasksData = fetch('https://jsonplaceholder.typicode.com/todos');
tasksData.then(resolve => resolve.json())
    .then(resolve => {
        removingClass(preloader, 'active');
        let newDb = resolve.filter(item => { return item.userId === 1; });
        newDb.forEach((el) => {
            let newListItem = createTheElement(el.title, 'li', 'main__item');
            if (el.completed === true) {
                addingClass(newListItem, 'done');
            }
            addElementToList('.main__list', newListItem);
        });
    }).catch(error => console.log(error));