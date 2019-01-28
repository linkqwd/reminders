const taskTitle = document.getElementById('task-title');
const blackBTN = document.querySelector('.black');

// === .style ===
// Good for styling one prop at a time 
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
document.querySelector('li:nth-child(3)').style.color = 'yellow';

// === .style.cssText ===
taskTitle.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

// === .setAttribute() ===
// Can set any attribute for an element
taskTitle.nextElementSibling.setAttribute('id', 'heading-sibling');

// === .className .classList ===
// .add() - to add a class to the list
// .remove() - to remove a class from the list
// .toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
// .contains() - returns returns a boolean based on if the class exists in the list or not
console.log(blackBTN.className); // returns a space-separated string of the classes
console.log(blackBTN.classList); // returns a live DOMTokenList collection of the class attributes of the element
blackBTN.classList.add('CHECK');