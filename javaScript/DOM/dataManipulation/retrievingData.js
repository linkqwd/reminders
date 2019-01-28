const nanodegreeCard = document.querySelector('.card__content');

// Getting HTML content
// Makes from node element, just a text string.
console.log(nanodegreeCard.innerHTML) // Shows ALL html content of an element
console.log(nanodegreeCard.textContent) // Shows text content of an element
console.log(nanodegreeCard.innerText) // Shows only visible text of an element (text can be hidden from user)

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';