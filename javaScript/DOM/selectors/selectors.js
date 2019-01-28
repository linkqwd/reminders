// === getElementBy___ ===
// returns null if element wasn't found
console.log(document.getElementById('task-title')); // returns single node
console.log(document.getElementsByClassName('card-action')) // returns HTMLCollection
console.log(document.getElementsByTagName('div')) // returns HTMLCollection

// === querySelector ===
console.log(document.querySelector('.card-content')) // returns a single node element
console.log(document.querySelectorAll('ul li')) // returns a node list of elements

// WEB/API/INTERFACE 
// Nodes: https://developer.mozilla.org/en-US/docs/Web/API/Node
// Elements: https://developer.mozilla.org/en-US/docs/Web/API/Element (also inherits from parent interface Node)
// focus DOM node in console and type $0. for debugging

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').style);

const taskTitle = document.getElementById('task-title');