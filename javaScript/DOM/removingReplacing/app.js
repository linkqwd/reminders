const h1 = document.querySelector('.card-title');
const ul = document.querySelector('.collection');

// === remove() ===
h1.remove();

console.log(ul.firstChild) // might return only inner text of element, insted of node
console.log(ul.firstElementChild) // returns DOM node (not text)
console.log(ul.parentElement) // return parent of node